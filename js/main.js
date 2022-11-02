// main

// intro

$('ul.tabs li').click(function () {
   var tab_id = $(this).attr('data-tab')

   $('ul.tabs li').removeClass('current')
   $('.tab-content').removeClass('current')

   $(this).addClass('current')
   $('#' + tab_id).addClass('current')
})

// resev
let $appointDate, $appointName, $appointTel, $appointVisit
let $appointDocu = 0
let $appoint_patient = []

// 셀렉트박스 생성
for (var i = 1; i < 13; i++) {
   $('#select-month').append('<option value=' + i + '>' + i + '</option>')
}
let $monthVal = 1
let $lastDate = new Date(2022, $monthVal, 0)
for (var j = 1; j < $lastDate.getDate() + 1; j++) {
   $('#select-day').append('<option value=' + j + '>' + j + '</option>')
}
$('#select-month').change(function () {
   $monthVal = $('#select-month option:selected').val()
   $lastDate = new Date(2022, $monthVal, 0)
   $('#select-day').empty()
   for (var j = 1; j < $lastDate.getDate() + 1; j++) {
      $('#select-day').append('<option value=' + j + '>' + j + '</option>')
   }
})

// 돌아가기버튼으로 속성 초기화
$('.btn-01').click(function () {
   $('input[type=text]').siblings('span').css({ display: 'none' })
   $('input[type=text]').css({ border: '1px solid #000' })
})

// 완료버튼 누르면서 변수저장
$('.btn-02').click(function (e) {
   e.preventDefault()
   nameCheck()
   telCheck()
   if (nameCheck() && telCheck()) {
      $('main div.reserv-complete').css({ display: 'block' })
      documentCheck()
      $appointDate = '2022. ' + $monthVal + '. ' + $('#select-day option:selected').val()
      $appointName = $('#user-name').val()
      $appointTel = $('#user-tel').val()
      $appoint_patient = [
         1,
         $appointName,
         '이비인후과',
         '김범주',
         '1 진료실',
         $appointDate,
         '14:30',
         '예약 완료',
         $appointDocu,
      ]
      sessionStorage.setItem('appoint', JSON.stringify($appoint_patient))
      reservCompCount()
   }
})

// 펑션구역
function nameCheck() {
   if (!$('#user-name').val().replace(/\s/g, '')) {
      $('#user-name').siblings('span').css({ display: 'none' })
      $('#user-name').siblings('.input-required').css({ display: 'block' })
      $('#user-name').css({ border: '2px solid red' })
      return false
   } else {
      if (!nameVailCheck($('#user-name').val())) {
         $('#user-name').siblings('span').css({ display: 'none' })
         $('#user-name').siblings('.input-vail-check').css({ display: 'block' })
         $('#user-name').css({ border: '2px solid red' })
         $('#user-name').css({ border: '2px solid red' })
         return false
      }
   }
   return true
}

function telCheck() {
   if (!$('#user-tel').val().replace(/\s/g, '')) {
      $('#user-tel').siblings('span').css({ display: 'none' })
      $('#user-tel').siblings('.input-required').css({ display: 'block' })
      $('#user-tel').css({ border: '2px solid red' })
      return false
   } else {
      if (!telVailCheck($('#user-tel').val())) {
         $('#user-tel').siblings('span').css({ display: 'none' })
         $('#user-tel').siblings('.input-vail-check').css({ display: 'block' })
         $('#user-tel').css({ border: '2px solid red' })
         $('#user-tel').css({ border: '2px solid red' })
         return false
      }
   }
   return true
}

// 입력형식체크
function nameVailCheck(name) {
   var reg = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/
   return reg.test(name)
}
function telVailCheck(tel) {
   var reg = /^\d{2,3}-\d{3,4}-\d{4}$/
   return reg.test(tel)
}

// 방문경험 체크
function visitCheck() {
   switch ($('input[name=visit]:checked').val()) {
      case 'yes':
         $appointVisit = 'yes'
         break
      case 'no':
         $appointVisit = 'no'
         break
      default:
         $appointVisit = 'none'
         break
   }
}

// 발급서류 가격계산
function documentCheck() {
   for (var i = 0; i < $('input[name=buy-doc]').length; i++) {
      if ($('input#buy-doc-' + (i + 1)).is(':checked')) {
         $appointDocu += Number($('input#buy-doc-' + (i + 1)).val())
      }
   }
   return $appointDocu
}

// 예약확인으로부터 카운트
function reservCompCount() {
   let count = 5
   setInterval(() => {
      count--
      $('main div.reserv-complete div span').replaceWith(`<span>${count} 초 후에 화면이 새로고침 됩니다.</span>`)
      if (count == 0) {
         location.reload()
      }
   }, 1000)
}

// conf_reserv
// 로그인/비로그인 로그인 버튼 클릭 시 진료예약 조회 탭 이동
$(document).ready(function () {
   $('button.join__bt').click(function () {
      $('div.section__tap ul.control li:nth-of-type(1)').css('border-bottom-style', 'solid')
      $('div.section__tap ul.control li:nth-of-type(1)').removeClass('show')
      $('div.section__tap ul.control li:nth-of-type(2)').addClass('show')
      $('div.section__tap ul.control li:nth-of-type(2)').css('border-bottom-style', 'none')
      $('div.section__tap ul.contents li:nth-of-type(1)').removeClass('show')
      $('div.section__tap ul.contents li:nth-of-type(2)').eq($(this).index()).addClass('show')
   })
})

// window.sessionStorage 예약 받는 Page에서 form이나 input으로 값 받아서 세션 스토리지 선언
// sessionStorage.setItem("super", JSON.stringify(payload)); 예약 Page에서 data type을 JSON 문자형으로 파싱
// let appoint_patient = [1,'김범주','이빈후과','김범주','1 진료실', '2020. 11. 07', '14:30', '예약 완료'];
// sessionStorage.setItem("appoint", JSON.stringify(appoint_patient));

function getStorage() {
   if (!sessionStorage.getItem('appoint', $appoint_patient) === false) {
      let geust = JSON.parse(sessionStorage.getItem('appoint', $appoint_patient))
      return geust
   }
}

class Patient {
   //환자 객체로 진료예약 조회 리스트 출력 value 용
   constructor(partient) {
      this.num = partient[0] //번호
      this.name = partient[1] //이름
      this.department = partient[2] //진료과
      this.docter = partient[3] //담당의
      this.office = partient[4] //진료실
      this.reservation_date = partient[5] // 예약일
      this.reservation_time = partient[6] // 예약시간
      this.oder_status = partient[7] // 예약 진행 상황
      // this.reg_num = partient[8];    //등록번호(난수 생성으로 저장)
      this.docuSum = partient[8] // 신청한 서류 값
   }
}

// class Patient{    //환자 객체로 진료예약 조회 리스트 출력 value 용
//     constructor(num, name, dep, docter, office, date, time, oder_status, reg_num){
//         this.num = num; //번호
//         this.name = name; //이름
//         this.department = dep; //진료과
//         this.docter = docter; //담당의
//         this.office = office; //진료실
//         this.reservation_date = date;  // 예약일
//         this.reservation_time = time; // 예약시간
//         this.oder_status = oder_status; // 예약 진행 상황
//         this.reg_num = reg_num;    //등록번호(난수 생성으로 저장)
//     }
// }

let join_id__bt = document.querySelector('.login__id .join__bt')
join_id__bt.addEventListener('click', function () {
   let row = document.querySelector('.appoint-delete__body')
   // let patient = new Patient(1,'김범주','이빈후과','김범주','1 진료실', '2020. 11. 07', '14:30', '예약 완료');

   let patient = new Patient(getStorage())
   console.log(patient)
   let temp = `
    <tr>
    <th>
    <input type="checkbox" name="appoint-delete-checkbox" class="check">
    </th>
    <td>${patient.num}</td>
    <td>${patient.name}</td>
    <td>${patient.department}</td>
    <td>${patient.docter}</td>
    <td>${patient.office}</td>
    <td>${patient.reservation_date}</td>
    <td>${patient.reservation_time}</td>
    <td class="oder">${patient.oder_status}</td>
    <td>${patient.docuSum}원</td>
    </tr>
    `
   $(row).append(temp)
})

// let join_id__bt = document.querySelector(".login__id .join__bt")
// join_id__bt.addEventListener("click",function(){
//     let row = document.querySelector(".appoint-delete__body")
//     // let patient = new Patient(1,'김범주','이빈후과','김범주','1 진료실', '2020. 11. 07', '14:30', '예약 완료');
//     let patient = new Patient()
//     let temp =
//     `
//     <tr>
//     <th>
//     <input type="checkbox" name="appoint-delete-checkbox" class="check">
//     </th>
//     <td>${patient.num}</td>
//     <td>${patient.name}</td>
//     <td>${patient.department}</td>
//     <td>${patient.docter}</td>
//     <td>${patient.office}</td>
//     <td>${patient.reservation_date}</td>
//     <td>${patient.reservation_time}</td>
//     <td class="oder">${patient.oder_status}</td>
//     </tr>
//     `;
//     $(row).append(temp);
// })

let join_name__bt = document.querySelector('.login__name .join__bt')
join_name__bt.addEventListener('click', function () {
   let row = document.querySelector('.appoint-delete__body')
   let patient = new Patient(getStorage())
   let temp = `
    <tr>
    <th>
    <input type="checkbox" name="appoint-delete-checkbox" class="check">
    </th>
    <td>${patient.num}</td>
    <td>${patient.name}</td>
    <td>${patient.department}</td>
    <td>${patient.docter}</td>
    <td>${patient.office}</td>
    <td>${patient.reservation_date}</td>
    <td>${patient.reservation_time}</td>
    <td class="oder">${patient.oder_status}</td>
    <td>${patient.docuSum}원</td>
    </tr>
    `
   $(row).append(temp)
})

const delete_bt = document.querySelector('#delete-bt')
delete_bt.addEventListener('click', function () {
   let row = document.querySelector('.appoint-delete__body')
   let checkbox = document.querySelector('.check')
   if ($(checkbox).prop('checked')) {
      $('.oder:contains("예약 완료")').text('예약 취소')
   }
})
