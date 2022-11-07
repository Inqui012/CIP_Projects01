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
      $('main div.reserv-complete div span').replaceWith(`<span>${count} 초 후에 메인페이지로 넘어갑니다.</span>`)
      if (count == 0) {
         location.replace('https://inqui012.github.io/CIP_Projects01/index.html')
      }
   }, 1000)
}
