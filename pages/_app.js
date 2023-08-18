import Layout from '@/components/template/Layout/Layout';
import '@/styles/globals.scss';
import axios from 'axios';

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1';

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

/*
  Atomic Design Pattern : 
  컴포넌트를 원자처럼 최소 단위로 쪼개서 재활용 가능하게 처리
  --단점: 컴포넌트간에 의존성이 생김, 오히려 특정 원자단위의 컴포넌트에서 문제가 발생하면 상위 컴포넌트까지 다 에러가 발생 소지

  Atoms(원자)
  - 버튼, 메뉴, 제목, 글자, 폼요소, 썸네일

  Molecules(분자)
  - 검색바 (폼, 버튼), 메뉴(버튼)

  Organisms(유기체)
  - GNB (메뉴를 그룹화 시켜놓음)

  Templates(템플릿)
  - 유기체들이 모여있는 기능 덩어리

  Pages(페이지)
  - 템플릿들로 구성되어 있는 하나의 페이지


  ----------------------------------------------------

  요리명을 검색어로 입력하면 해당 요리의 정보와 레시피를 확인하는 웹 서비스
  -좋아하는 레시피를 저장해서 즐겨찾기 (localstorage)

  --1. 메인페이지 (특정 카테고리 요리들을 소개하는 intro) - ISR
  --2. 레시피 검색 페이지 (검색창으로 검색어를 입력하면 debouncing을 적용해서 레시피 목록 결과 확인 페이지) -CSR
  --2-1. 검색된 상세페이지 (검색화면에서 목록 클릭시 출력되는 상세페이지, 즐겨찾기 기능 추가) -CSR
  --3. 즐겨찾기 페이지 (즐겨찾기 등록된 목록을 한번에 확인하는 페이지) -CSR

  페이지별 렌더링 방식
  CSR: 빈 html 가져온 다음에 동적으로 리액트 컴포넌트가 hygration되면 클라이언트단에서 동적으로 데이터 생성해서 렌더링
  CSR(react-query):stale, cache타임을 지정해서, stale, cache타임이 소진되기전까지는 refetching 금지
  SSR: 서버쪽에서 데이터를 fetching후 페이지를 미리 만들어서 렌더링 (매번 컴포넌트 접속할때마다)
  SSG: 서버쪽에서 데이터를 fetching후 페이지를 미리 만들어서 렌더링 (타이밍: 프로젝트가 빌드될때 한번)
  ISR: 서버쪽에서 데이터를 fetching후 페이지를 미리 만들어서 렌더링 (일정 시간을 직접 설정해서, 설정한 시간마다 다시 데이터 refetching후 빌드)
*/

/*
  컴포넌트 렌더링 흐름
  1. _app.js에서 공통의 layout 템플릿 컴포넌트를 가져와서 전체 컴포넌트를 wrapping처리
  2. _app.js에 있는 Component는 page폴더 안쪽에 있는 각각의 페이지 컴포넌트를 의미
  3. 모든 page 컴포넌트에는 layout컴포넌트의 공통의 구조가 적용됨
  4. 각각의 page 컴포넌트에서 page별로 들어갈 컨텐츠를 추가
*/
