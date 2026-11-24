---
title: "WHS Kubernetes Security"
description: "Kubernetes 환경의 보안 시나리오를 조사하고 교육용 환경에서 검증한 팀 프로젝트."
kind: "팀"
focus: ["Kubernetes 보안", "공격 경로 분석"]
technologies: ["Kubernetes", "AWS", "RBAC", "Falco"]
highlights: ["보안 시나리오 후보 조사 및 선정 기준 정리", "Platform 1 시나리오 설계, 취약 웹 애플리케이션 개발 및 검증 참여", "팀 보고서와 발표 자료 작성 참여"]
security: "웹 입력과 Kubernetes 권한 경계를 검토하고, 팀 차원에서 탐지 및 대응을 살펴보았습니다."
status: "공개 자료 정리"
order: 1
source: "https://github.com/shyunseok1029/shyunseok1029/tree/main/projects/whs-kubernetes"
---

## 프로젝트 소개

화이트햇 스쿨 4기에서 Kubernetes 환경의 보안 시나리오를 설계하고 검증한 팀 프로젝트입니다. 웹 애플리케이션 취약점과 인프라 권한 설정이 결합할 때의 영향을 독립된 세 실습 환경에서 검토했습니다.

## 주요 구현 내용

- **시나리오 조사:** Kubernetes 공격 시나리오 후보 네 가지를 조사하고 선정 기준을 정리했습니다.
- **웹과 권한 경계:** Platform 1의 시나리오 설계, 취약 웹 애플리케이션 개발과 검증에 참여했습니다. 웹 입력에서 Pod·ServiceAccount와 RBAC로 이어지는 경계를 다뤘습니다.
- **팀 환경 및 대응:** 팀은 별도의 EKS 환경에서 모델 입력·GitOps·호스트와 Webhook·내부 API·Job의 권한 경계도 검토했습니다. 다른 시나리오의 검증·문서화와 최종 보고서 및 발표 자료 작성에 협업했습니다.

## 결과 및 검증

팀은 Platform 1에서 직접 읽기가 거부된 ServiceAccount가 워크로드 제어를 통해 다른 ServiceAccount의 지정된 정보 한 건에 접근하는 경로를 검증했습니다. 별도 방어 시험에서는 Falco와 Kubernetes Audit으로 행위를 관찰했고, Kyverno 적용 후 시험한 변경 요청은 차단되면서 정상 조회는 유지됐습니다. 이 결과는 해당 교육 환경과 시험 범위에 한정됩니다.

## 관련 링크

- [WHS Kubernetes Security 공개 프로젝트 설명](https://github.com/shyunseok1029/shyunseok1029/tree/main/projects/whs-kubernetes)
