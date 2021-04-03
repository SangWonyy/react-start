리액트 Doc를 기반으로한 test project
=============

### 리액트를 기반으로 한 사이드 프로젝트 진행 전 연습

## 사용 스택
> react.js, react hooks, next.js, react-bootstrap, typescript
 
## 프로젝트 컨셉
> 간단한 블로그 형식의 프로젝트
> > 1. 메인페이지 ( react-bootstrap을 통한 css 경험 )
> > 2. 일정 관리 페이지
> > 3. Open API를 통한 환율표
> > 4. git pages를 통한 hosting
 
--------
angular에서 react를 다시 배워보기 위한 첫번째 단계.

--------

###History 
1. create next framework
2. change javacript to typescript
3. apply prettier && tslint
   - create tslint.json and prettierrc
4. install styled component
   - DOC : https://styled-components.com/docs/api#typescript
   - npm i -D @types/styled-components styled-normalize ( styled-normalize : 브라우저마다 다르게 보이는 css 초기화)
     - 스타일-테마 모음 : src/styles/theme.ts 
     - 스타일-타입정의 모음 : src/styles/styled.d.ts
     - 전역-스타일 모음 : src/styles/global-style.ts
