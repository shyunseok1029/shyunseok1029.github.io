/** 공개 블로그의 카테고리와 표시 순서. */
export const blogCategories = [
  { name: 'Web Security', description: '웹 애플리케이션 구조와 취약점 분석 및 실습' },
  { name: 'Security Research', description: '보안 연구 주제와 분석·검증 과정' },
  { name: 'Infrastructure', description: 'Linux · Docker · Kubernetes 등 인프라 학습' },
  { name: 'Cloud Security', description: '클라우드 환경과 Kubernetes 보안' },
  { name: 'Troubleshooting', description: '실습과 개발 중 발생한 문제 및 해결 과정' },
  { name: 'Thoughts', description: '공부 방향과 기술, 개발 방식에 대한 생각' },
] as const;

export const blogCategoryNames = blogCategories.map(category => category.name);
