리액트 Doc를 기반으로한 test project
=============

### 리액트를 기반으로 한 사이드 프로젝트 진행 전 연습

## 사용 스택
> react.js, react hooks, next.js, typescript, styled-component, chakra 
 
## 프로젝트 컨셉
> 아이디어스 홈페이지 클론 프로젝트
> > 1. 유튜브 강의를 통한 학습
> > 2. 전반적인 아이디어스 디자인 클론
> > 3. 반복학습
 
--------
angular에서 react를 다시 배워보기 위한 첫번째 단계.

--------

###History 
1. create next framework
2. change javacript to typescript
3. apply prettier && tslint
   >> - create tslint.json and prettierrc
4. install styled component
   >> - DOC : https://styled-components.com/docs/api#typescript
   >> - npm i -D @types/styled-components styled-normalize ( styled-normalize : 브라우저마다 다르게 보이는 css 초기화)
   >>  - 스타일-테마 모음 : src/styles/theme.ts 
   >>  - 스타일-타입정의 모음 : src/styles/styled.d.ts
   >>  - 전역-스타일 모음 : src/styles/global-style.ts
5.  babelrc 설정
    >> - npm i babel-plugin-styled-components
    >> - ( SSR, CSR에서 처음 서버에서 받은 해시+클래스명과 이후 클라이언트에서 작동하는 해시+클래스 명이 달라지면서 스타일을 불러올 수 없어, className did not matched err 발생)
    >>> - fileName: 코드가 포함된 파일명을 알려줌
    >>> - displayName: 클래스명에 해당 스타일 정보 추가
    >>> - pure: 사용하지 않는 속성 제거
    >>>   - 전 : sc-17fsht8-0 cbfSeC
    >>>   - 후: Header__Container-sc-17fsht8-0 kZvURD
