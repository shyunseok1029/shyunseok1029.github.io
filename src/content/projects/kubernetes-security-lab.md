---
title: "Kubernetes Security Lab"
description: "Kubernetes와 웹 애플리케이션 보안을 학습하고 실습을 정리한 개인 프로젝트."
kind: "개인"
focus: ["Kubernetes 보안", "최소 권한"]
technologies: ["Kubernetes", "Minikube", "Python", "Argo CD"]
highlights: ["Minikube와 VMware 기반 Kubernetes 인프라 실습", "Flask 입력 검증 및 ServiceAccount·RBAC 예제 작성", "Helm과 Argo CD 동작 학습"]
security: "RBAC와 토큰 마운트 설정은 정적으로 확인했으며, 저장소의 설정을 클러스터에 적용한 검증은 아닙니다."
status: "학습 기록"
order: 2
github: "https://github.com/shyunseok1029/kubernetes-security-lab"
---

## 프로젝트 소개

Kubernetes와 웹 보안을 학습하며 작성한 개인 실습 기록입니다. 보안 예제는 팀 프로젝트 이후 별도로 작성한 코드와 설정입니다.

## 주요 구현 내용

- **인프라 실습:** Minikube의 기본 리소스·권한과 VMware 멀티노드 환경의 `kubeadm`, `containerd`, Calico 동작을 살펴봤습니다.
- **안전한 파일 압축:** Flask에서 허용 목록으로 파일을 선택하고 셸 대신 Python `zipfile`로 압축하는 예제를 작성했습니다.
- **ServiceAccount와 RBAC:** 토큰 자동 마운트를 끄는 예제와 지정 ConfigMap 하나에 `get`만 허용하는 최소 권한 예제를 각각 작성했습니다.
- **배포 실습:** Helm의 설치·업그레이드·롤백과 Argo CD의 수동 동기화·재동기화를 기록했습니다.

## 결과 및 검증

Flask 테스트 클라이언트로 ZIP 생성과 잘못된 입력·경로 조작 거부, 누락 파일 응답을 확인했습니다. ServiceAccount와 RBAC 예제는 정적으로 확인했으며 클러스터에 적용하지 않았습니다. Pod 생성 거부와 Argo CD Drift의 중간 상태는 증빙이 부분적입니다.

## 관련 링크

- [Kubernetes Security Lab 저장소](https://github.com/shyunseok1029/kubernetes-security-lab)
- [Minikube 및 RBAC 실습](https://github.com/shyunseok1029/kubernetes-security-lab/blob/main/docs/minikube-rbac.md)
- [멀티노드 Kubernetes 실습](https://github.com/shyunseok1029/kubernetes-security-lab/blob/main/docs/vmware-multinode.md)
