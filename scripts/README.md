# 도시 이미지 다운로드 스크립트

이 스크립트는 Unsplash에서 모든 도시의 이미지를 자동으로 다운로드합니다.

## 사용법

### 1. 이미지 다운로드 실행
```bash
npm run download-images
```

### 2. 수동 실행
```bash
node scripts/download-city-images.js
```

## 기능

- ✅ 12개 도시의 이미지를 자동 다운로드
- ✅ `public/city/` 폴더에 저장
- ✅ 800x600 해상도로 최적화
- ✅ 다운로드 진행상황 표시
- ✅ 에러 처리 및 재시도 로직

## 다운로드되는 이미지

| 도시 | 파일명 | 키워드 |
|------|--------|--------|
| 방콕 | bangkok.jpg | bangkok+thailand+city |
| 창구 | canggu.jpg | canggu+bali+indonesia |
| 치앙마이 | chiang-mai.jpg | chiang+mai+thailand |
| 쿠알라룸푸르 | kuala-lumpur.jpg | kuala+lumpur+malaysia |
| 런던 | london.jpg | london+uk+city |
| 멕시코시티 | mexico-city.jpg | mexico+city+mexico |
| 리스본 | lisbon.jpg | lisbon+portugal |
| 서울 | seoul.jpg | seoul+south+korea |
| 도쿄 | tokyo.jpg | tokyo+japan+city |
| 베를린 | berlin.jpg | berlin+germany |
| 트빌리시 | tbilisi.jpg | tbilisi+georgia |
| 포르투 | porto.jpg | porto+portugal |

## 주의사항

- Unsplash API 제한을 고려하여 다운로드 간 1초 대기
- 네트워크 오류 시 개별 도시 다운로드 실패 가능
- 이미지가 없거나 로드 실패 시 플레이스홀더 이미지 표시

## 파일 구조

```
public/
└── city/
    ├── bangkok.jpg
    ├── canggu.jpg
    ├── chiang-mai.jpg
    ├── kuala-lumpur.jpg
    ├── london.jpg
    ├── mexico-city.jpg
    ├── lisbon.jpg
    ├── seoul.jpg
    ├── tokyo.jpg
    ├── berlin.jpg
    ├── tbilisi.jpg
    └── porto.jpg
```
