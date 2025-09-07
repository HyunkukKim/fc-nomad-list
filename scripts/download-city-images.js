const fs = require('fs');
const path = require('path');
const https = require('https');

// 도시 정보와 대체 이미지 URL들
const cities = [
  { 
    name: "bangkok", 
    urls: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
      "https://picsum.photos/800/600?random=1"
    ]
  },
  { 
    name: "canggu", 
    urls: [
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
      "https://picsum.photos/800/600?random=2"
    ]
  },
  { 
    name: "chiang-mai", 
    urls: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop",
      "https://picsum.photos/800/600?random=3"
    ]
  },
  { 
    name: "kuala-lumpur", 
    urls: [
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop",
      "https://picsum.photos/800/600?random=4"
    ]
  },
  { 
    name: "london", 
    urls: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
      "https://picsum.photos/800/600?random=5"
    ]
  },
  { 
    name: "mexico-city", 
    urls: [
      "https://images.unsplash.com/photo-1518105779142-d975f22f1d14?w=800&h=600&fit=crop",
      "https://picsum.photos/800/600?random=6"
    ]
  },
  { 
    name: "lisbon", 
    urls: [
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop",
      "https://picsum.photos/800/600?random=7"
    ]
  },
  { 
    name: "seoul", 
    urls: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://picsum.photos/800/600?random=8"
    ]
  },
  { 
    name: "tokyo", 
    urls: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
      "https://picsum.photos/800/600?random=9"
    ]
  },
  { 
    name: "berlin", 
    urls: [
      "https://images.unsplash.com/photo-1587330979470-3595ac045cb0?w=800&h=600&fit=crop",
      "https://picsum.photos/800/600?random=10"
    ]
  },
  { 
    name: "tbilisi", 
    urls: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://picsum.photos/800/600?random=11"
    ]
  },
  { 
    name: "porto", 
    urls: [
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop",
      "https://picsum.photos/800/600?random=12"
    ]
  }
];

// 이미지 다운로드 함수 (여러 URL 시도)
function downloadImage(urls, filepath) {
  return new Promise((resolve, reject) => {
    let currentUrlIndex = 0;
    
    function tryDownload() {
      if (currentUrlIndex >= urls.length) {
        reject(new Error('All URLs failed'));
        return;
      }
      
      const url = urls[currentUrlIndex];
      const file = fs.createWriteStream(filepath);
      
      console.log(`📥 Trying URL ${currentUrlIndex + 1}/${urls.length} for ${path.basename(filepath)}`);
      
      https.get(url, (response) => {
        if (response.statusCode !== 200) {
          file.close();
          fs.unlink(filepath, () => {});
          currentUrlIndex++;
          tryDownload();
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
          currentUrlIndex++;
          tryDownload();
        });
      }).on('error', (err) => {
        currentUrlIndex++;
        tryDownload();
      });
    }
    
    tryDownload();
  });
}

// 메인 실행 함수
async function downloadAllImages() {
  const cityDir = path.join(__dirname, '..', 'public', 'city');
  
  // city 디렉토리가 없으면 생성
  if (!fs.existsSync(cityDir)) {
    fs.mkdirSync(cityDir, { recursive: true });
    console.log('📁 Created city directory');
  }
  
  console.log('🚀 Starting image download...\n');
  
  for (const city of cities) {
    try {
      const filepath = path.join(cityDir, `${city.name}.jpg`);
      
      console.log(`📥 Downloading ${city.name}...`);
      await downloadImage(city.urls, filepath);
      
      // 다운로드 간격 (API 제한 고려)
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      console.error(`❌ Failed to download ${city.name}:`, error.message);
    }
  }
  
  console.log('\n🎉 Download completed!');
  console.log(`📂 Images saved to: ${cityDir}`);
}

// 스크립트 실행
if (require.main === module) {
  downloadAllImages().catch(console.error);
}

module.exports = { downloadAllImages, cities };
