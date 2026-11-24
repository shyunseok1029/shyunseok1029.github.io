---
title: "CTF-OS"
description: "선택한 CTF 문제의 실행과 분석을 지원하는 팀 프로젝트."
kind: "팀"
focus: ["CTF", "격리 실행"]
technologies: ["Python", "Docker", "Linux / WSL2", "CLI"]
highlights: ["사람이 선택한 문제를 대상으로 하는 실행 흐름", "Live 및 Batch 실행 방식", "Docker 기반 실행 환경"]
security: "문제 범위와 실행 환경의 경계를 다루며, 실제 대회 성능은 별도로 평가합니다."
status: "공개"
order: 4
github: "https://github.com/whatevertakes/CTF-OS"
---

## 프로젝트 소개

CTF-OS는 사람이 선택한 CTF 문제의 관리·실행과 분석을 지원하는 WT 조직의 팀 프로젝트입니다. Python CLI와 Codex, Docker 실행 환경을 사용하며, 문제 자동 선택이나 CTF 사이트 자동 제출은 제공하지 않습니다.

## 주요 구현 내용

- **문제 단위 실행:** 사용자가 준비한 문제 폴더·파일·설명을 바탕으로 선택한 문제의 실행과 분석을 지원합니다.
- **실행 방식:** Live와 Batch 흐름을 제공하고 Docker 이미지와 실행 범위, 상태와 기록을 관리합니다.
- **환경 점검:** 이미지 식별자를 고정하고 `doctor`로 실행 환경을 확인하는 절차가 문서화되어 있습니다.
- **운영자 검토:** 후보 플래그는 사람이 직접 제출하고 결과를 기록합니다. 프롬프트와 실행 기록에 자격증명을 넣지 않도록 안내합니다.

## 결과 및 검증

공개 문서는 로컬 검증과 실제 대회 성능을 구분하며, 과거 테스트 기록만으로 현재 릴리스나 대회 성능을 판정하지 않습니다. 동일 운영체제 사용자와 Docker 권한 사이의 격리 한계가 있으며, 개인별 구체적인 담당 범위는 공개 자료에서 확인되지 않았습니다.

## 관련 링크

- [CTF-OS 저장소](https://github.com/whatevertakes/CTF-OS)
- [구현 결과](https://github.com/whatevertakes/CTF-OS/blob/main/ctf-reports/10-implementation-result.md)
- [수용성 기록](https://github.com/whatevertakes/CTF-OS/blob/main/ctf-reports/12-final-acceptance.md)
