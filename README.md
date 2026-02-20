# A3-ADE Project Homepage

**A3-ADE (Advanced Autonomous Agentic Development Environment)** 프로젝트 소개용 정적 웹페이지입니다.

> 최종 업데이트: 2026-02-20
> A3-ADE 프로젝트 데이터 기준: 2026-02-19

---

## 개요

A3-ADE는 소프트웨어 개발 생명주기 전체를 관리하는 **차세대 자율 멀티 에이전트 개발 환경(Agentic Development Environment)** 플랫폼입니다. 이 웹페이지는 A3-ADE 프로젝트의 주요 기능, 아키텍처, 기술 스택, API 상태 등을 소개합니다.

---

## 프로젝트 구조

```
webpage_A3DE/
├── index.html          # 메인 HTML (982 lines)
├── styles.css          # CSS 스타일시트 (1,424 lines)
├── script.js           # JavaScript 인터랙션 (223 lines)
├── assets/
│   └── favicon.svg     # 파비콘 (SVG)
└── README.md           # 프로젝트 문서
```

| 파일 | 크기 | 설명 |
|------|------|------|
| `index.html` | 64 KB | 전체 페이지 구조, 콘텐츠, SVG 아이콘 |
| `styles.css` | 28 KB | 다크 테마, 반응형, 애니메이션 |
| `script.js` | 8 KB | 네비게이션, 카운터, 파티클, 스크롤 효과 |
| `assets/favicon.svg` | 1 KB | A3-ADE 로고 파비콘 |

---

## 웹페이지 섹션

| # | 섹션 | ID | 설명 |
|---|------|----|------|
| 1 | **Navigation** | `navbar` | 고정 헤더, 스크롤 시 배경 변화, 모바일 햄버거 메뉴 |
| 2 | **Hero** | - | 프로젝트 소개, 핵심 수치 카운터 애니메이션, 대시보드 모형 |
| 3 | **Core Features** | `features` | 8개 핵심 기능 카드 |
| 4 | **AI Agents** | `agents` | 6개 AI 에이전트 소개 |
| 5 | **Architecture** | `architecture` | 3계층 시스템 아키텍처 다이어그램 |
| 6 | **API Status** | `api-status` | 18개 카테고리별 API 테스트 현황 |
| 7 | **Tech Stack** | `tech-stack` | Frontend / Backend / Infrastructure 기술 스택 |
| 8 | **Pages & Components** | `pages` | 14 Pages & 18 Components 목록 |
| 9 | **Latest Updates** | `updates` | 최신 업데이트 타임라인 |
| 10 | **Service Endpoints** | `links` | 서비스 접속 포트 및 링크 |
| 11 | **Footer** | - | 프로젝트 정보, 사이트맵, 서비스 링크 |

---

## 소개하는 A3-ADE 핵심 정보

### 핵심 수치

| 항목 | 값 |
|------|------|
| API Endpoints | 188개 (100% Operational) |
| AI Agents | 6개 |
| Frontend Components | 18개 |
| Frontend Pages | 14개 |
| Fixed Items | 37개 (전부 수정 완료) |
| Local LLM Providers | 7개 |

### 8대 핵심 기능

| 기능 | Endpoints | 설명 |
|------|-----------|------|
| Multi-Agentic AI Framework | - | AgentManager, MessageBroker, CollaborationManager, AgentOrchestrator, AgentRegistry, TaskManager |
| AI Coding Agent | 12 | 코드 생성, 최적화, 분석, 리팩토링, 테스트 생성 |
| MCP Protocol | 8 | Full JSON-RPC 2.0 구현, 서버 관리 |
| RAG Pipeline | 14 | 문서 업로드, 인덱스 관리, 시맨틱 검색 |
| Neuro-Symbolic AI | 16 | 신경망 + 기호 추론 하이브리드, 지식 그래프 |
| Ambient Computing | 13 | 음성, 제스처, 센서, 컨텍스트 인식 |
| Real-time Monitoring | 10 | 시스템 리소스 및 에이전트 성능 추적 |
| Local LLM Providers | 5 | Ollama, llama.cpp, LocalAI, GPT4All, vLLM 등 |

### 6 AI Agent System

| Agent | 역할 |
|-------|------|
| Architect Agent | 시스템 설계 및 아키텍처 분석 |
| Coder Agent | 코드 생성, 최적화, 리팩토링 |
| Tester Agent | 테스트 자동화, 품질 보증 |
| Security Agent | 보안 분석, 취약점 스캐닝, 감사 |
| Documentation Agent | 문서 자동 생성, 템플릿 관리 |
| DevOps Agent | CI/CD, 배포 자동화, 인프라 관리 |

### API 테스트 현황 (188/188 PASS)

| 카테고리 | 테스트 수 | 상태 |
|----------|-----------|------|
| Infrastructure | 14 | PASS |
| Frontend Routing | 14 | PASS |
| Authentication | 5 | PASS |
| Projects | 11 | PASS |
| AI Coding | 12 | PASS |
| AI Agents | 7 | PASS |
| Providers | 10 | PASS |
| Configuration | 9 | PASS |
| Monitoring | 10 | PASS |
| Security | 12 | PASS |
| Documentation | 7 | PASS |
| Files | 5 | PASS |
| MCP Pipeline | 8 | PASS |
| RAG Pipeline | 14 | PASS |
| Neuro-Symbolic | 16 | PASS |
| Ambient Computing | 13 | PASS |
| Local LLM | 5 | PASS |
| Multi-Agent Framework | 16 | PASS |

### 기술 스택

**Frontend**
- React 18.2.0 + TypeScript 5.3.3
- Vite 5.4.21 (빌드 도구)
- Tailwind CSS 3.3.6
- Three.js 0.159.0 / React Three Fiber (3D 시각화)
- Framer Motion 10.16.12 (애니메이션)
- Zustand 4.4.7 (상태 관리)
- TanStack Query 5.8.4 (데이터 패칭)
- Monaco Editor 0.44.0 (코드 에디터)
- Recharts 2.10.3 (차트)
- Radix UI (접근성 UI 컴포넌트)

**Backend**
- Python 3.12+ / FastAPI 0.104.1
- Uvicorn (ASGI 서버)
- LangChain 0.0.340
- Transformers 4.35.2 / PyTorch 2.1.1
- Celery (작업 큐)
- JWT / OAuth2 (인증)

**Infrastructure**
- PostgreSQL (:5432)
- Redis (:6379)
- Neo4j (:7474)
- RabbitMQ (:5672)
- Grafana (:3030)
- Docker, Prometheus

---

## 디자인 & 스타일

### 참조 디자인

| 참조 사이트 | URL |
|-------------|-----|
| AIALBM | https://wdlab1958.github.io/Webpage_AIALBM/ |
| AiNex Home | https://wdlab1958.github.io/AiNex_Home/ainex |

### 적용된 디자인 요소

- **색상 테마**: 다크 네이비 배경 (`#0a0e1a`), Indigo/Cyan 액센트 그라디언트
- **타이포그래피**: Inter (본문), JetBrains Mono (코드/수치)
- **카드 스타일**: Glassmorphism (반투명 배경, 블러 효과, 보더 글로우)
- **버튼**: Glow 효과 (Primary), Outline (Secondary)
- **애니메이션**:
  - 파티클 배경 (Hero 섹션)
  - 카운터 숫자 증가 애니메이션
  - 스크롤 기반 Fade-in 효과 (IntersectionObserver)
  - API 바 프로그레스 애니메이션
  - 대시보드 모형 float 애니메이션
  - 그라디언트 텍스트 시프트 효과
- **반응형**: 데스크톱 / 태블릿 (1024px) / 모바일 (768px) / 소형 (480px) 대응
- **네비게이션**: 고정 헤더, 스크롤 시 배경 변화, 활성 섹션 하이라이트, 모바일 메뉴

---

## 실행 방법

### Python HTTP 서버

```bash
cd ~/ai_project/webpage_A3DE
python3 -m http.server 8082 --bind 0.0.0.0
```

접속: http://localhost:8082

### 사용 포트

| 포트 | 서비스 |
|------|--------|
| 8082 | A3-ADE 소개 웹페이지 (이 프로젝트) |

### 관련 A3-ADE 서비스 포트

| 포트 | 서비스 |
|------|--------|
| 5173 | A3-ADE Frontend (React) |
| 5174 | A3-ADE Frontend (Fallback) |
| 8500 | A3-ADE Backend API (FastAPI) |
| 8500/docs | Swagger API 문서 |
| 3030 | Grafana Dashboard |
| 5432 | PostgreSQL |
| 6379 | Redis |
| 7474 | Neo4j Browser |
| 5672 | RabbitMQ |
| 15672 | RabbitMQ Management |

---

## 관련 프로젝트

| 프로젝트 | 경로 | 설명 |
|----------|------|------|
| A3-ADE (본 프로젝트) | `~/ai_project/A3DE/` | 메인 프로젝트 (Frontend + Backend) |
| A3-ADE Homepage | `~/ai_project/webpage_A3DE/` | 이 프로젝트 소개 웹페이지 |

---

## 브라우저 호환성

- Chrome 90+ (권장)
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 라이선스

A3-ADE 프로젝트 소개 웹페이지
