# Security Portfolio

박현석의 보안 프로젝트와 학습 기록을 위한 정적 사이트입니다.

## 실행

Node.js 24와 npm이 필요합니다.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

개발 서버 주소는 출력되는 로컬 URL을 확인하세요. 기본 바인딩은 `127.0.0.1`입니다.

## 콘텐츠 편집

- `src/content/projects/*.md`: 프로젝트 카드와 상세. `order`로 순서 지정, `github`, `source`, `image`는 선택 사항입니다. `image`에는 `public/`에 둔 실제 이미지의 `/파일명` 경로를 입력합니다.
- `src/content/blog/*.md`: 글 제목, 요약, 날짜, 카테고리, 태그와 본문을 작성합니다. 파일명이 URL이 됩니다. 허용 카테고리는 `src/content.config.ts`를 참고하세요.
- `src/content/writeups/*.md`: 플랫폼, 난이도, 분야, 날짜, 태그, 학습 개념과 본문을 작성합니다.
- 로컬의 `example.md`는 비공개 샘플이며 Git에서 제외합니다. `draft: true`는 목록과 상세 페이지 생성에서 제외하지만 공개 저장소에 커밋한 원본은 누구나 볼 수 있습니다. 비공개 초안은 커밋하지 말고, 공개할 글에는 `draft: false`를 사용하세요.
- 스키마가 필수 메타데이터를 검증합니다. Markdown은 신뢰할 수 있는 작성자가 관리하는 로컬 파일만 사용하고, 출처가 불명확한 HTML을 붙여 넣지 마세요. 공개 전 민감정보와 이미지 사용 권한을 검토하세요.
- 공통 디자인은 `src/styles/global.css`, 레이아웃과 카드는 `src/layouts/`, `src/components/`에 있습니다.

## SEO와 sitemap

사이트 주소는 `https://shyunseok1029.github.io`이며 빌드 시 canonical 링크와 sitemap이 생성됩니다. 사이트는 도메인 루트에 배치됩니다.

## 배포 및 업데이트

콘텐츠를 수정한 후 `npm ci`, `npm run check`, `npm run build`로 확인합니다. 공개할 파일을 검토해 커밋하고 `main` 브랜치에 push하면 GitHub Actions가 자동으로 GitHub Pages를 갱신합니다. Actions 탭에서 수동 실행과 배포 상태 확인도 가능합니다.

## 의존성 선택 (설치 시점)

정확한 설치 버전과 하위 의존성은 `package-lock.json`을 기준으로 합니다.

- Astro 7.4.13: 콘텐츠 중심 페이지의 정적 생성 및 Markdown 컬렉션.
- TypeScript 6.0.3, @astrojs/check 0.9.12: 타입 및 Astro 파일 검사.
- Tailwind CSS와 @tailwindcss/vite 4.3.5: Vite 기반 스타일 환경. 실제 디자인은 수정하기 쉬운 CSS로 분리했습니다.
- @astrojs/sitemap 3.7.6: 실제 도메인이 설정된 빌드에서 sitemap 생성.
- Astro 내장 Shiki: Markdown 코드 구문 강조. 별도 런타임이나 CMS는 없습니다.

프로젝트 설명의 출처는 [공개 프로필](https://github.com/shyunseok1029/shyunseok1029)과 각 프로젝트에 연결된 공개 자료입니다. MCP 연구의 확정 결과와 저장소는 공개 프로필에서 확인되지 않아 기재하지 않았습니다.
