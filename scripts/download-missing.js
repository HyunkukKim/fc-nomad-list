const https = require('https');
const fs = require('fs');
const path = require('path');

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      // 리다이렉트 처리
      if (response.statusCode === 302 || response.statusCode === 301) {
        const redirectUrl = response.headers.location;
        console.log(`🔄 Redirecting to: ${redirectUrl}`);
        file.close();
        fs.unlink(filepath, () => {});
        downloadImage(redirectUrl, filepath).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function downloadMissing() {
  const cityDir = path.join(__dirname, '..', 'public', 'city');
  
  const missing = [
    { name: 'berlin.jpg', url: 'https://picsum.photos/800/600?random=14' },
    { name: 'mexico-city.jpg', url: 'https://picsum.photos/800/600?random=13' }
  ];
  
  for (const item of missing) {
    try {
      const filepath = path.join(cityDir, item.name);
      console.log(`📥 Downloading ${item.name}...`);
      await downloadImage(item.url, filepath);
    } catch (error) {
      console.error(`❌ Failed to download ${item.name}:`, error.message);
    }
  }
}

downloadMissing().catch(console.error);
