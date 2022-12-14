<h1>화면설계, 화면구현 프로젝트.</h1>
    
# 작업방법
  
1. (`git clone https://github.com/Inqui012/CIP_Projects01.git`) 으로 리포지토리를 받아주세요
2. (`git pull`) 로 업데이트 상태를 최신으로 만듭니다.
3. (`git branch 브랜치명`) 브랜치명은 각자의 영문이름으로 생성해주세요
4. (`git checkout 브랜치명`) 생성하신 브랜치로 체크아웃 합니다. 
5. (`git add`), (`git commit -m "코멘트"`) 수정사항을 반영하고 커밋합니다.
6. (`git push origin 브랜치명`) 작업한 브랜치명으로 푸시하세요. 
7. 리포지토리 페이지에서 풀리퀘스트를 보내주세요. 
  
## 프로젝트 분담
  
1. <h3>메인 - index.html (전민철님)</h3>
    * 메인 슬라이더  <br />
    * 빠른예약  <br />
    * 언론보도 목록 / 채용공고같은 게시판 형식?  <br />
    * 외부 의료관련 공식사이트로 이동하는 링크?  <br />
  
2. <h3>소개 /pages/intro.html (김솔님)</h3>
    * 병원소개  <br />
    * 의료진 소개 (진료과목)  <br />
    * 내부시설 소개  <br />
    * 오시는길  <br />
  
3. <h3>예약 /pages/reserv.html (정은아님)</h3>
    * 예약 날자, 의사이름, 환자이름, 환자 연락처  <br />
    * 초진/재진(라디오)  <br />
    * 서류발급(체크박스. 개별가격)  <br />
    * get으로 보냄.  <br />
  
4. <h3>예약확인 /pages/conf_reserv.html (김범주님)</h3>
    * 예약 날자, 의사이름, 환자이름, 환자 연락처  <br />
    * 초진 = 처음오십니다 / 재진 = 전에 언제오셨었네요  <br />
    * 서류발급 = 발급받는 서류에따른 가격계산 표시  <br />
  
5. <h3>게시판 /pages/board.html (김지영님)</h3> 
    * 고객의소리  <br />
    * 자주묻는질문  <br />
    * 공지사항  <br />
  <br />

## 주의사항
  
* CSS, JS, Img 는 각 폴더안에 담당하시는 페이지 번호 폴더를 이용해주세요.
* Form 태그 이외에 id 는 사용하지 않습니다.
* 태그의 클래스명은 케밥형식으로 사용합니다. 
>   예) class="menu-list-and"
* 자바스크립트의 변수/함수명은 카멜형식으로 사용합니다.
>   예) const userList / function simpleFunc
* 자바스크립트의 클래스/객체명은 파스칼형식으로 사용합니다. 
>   예) Class User / const Yong = {}
* 제이쿼리의 변수명은 헝가리안 카멜형식으로 사용합니다.
>   예) const $userList
