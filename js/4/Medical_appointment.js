// 로그인/비로그인 로그인 버튼 클릭 시 진료예약 조회 탭 이동
$(document).ready(function(){
    $("button.join__bt").click(function(){
        $("div.section__tap ul.control li:nth-of-type(1)").css("border-bottom-style","solid");
        $("div.section__tap ul.control li:nth-of-type(1)").removeClass("show");
        $("div.section__tap ul.control li:nth-of-type(2)").addClass("show");
        $("div.section__tap ul.control li:nth-of-type(2)").css("border-bottom-style","none");
        $("div.section__tap ul.contents li:nth-of-type(1)").removeClass("show");
        $("div.section__tap ul.contents li:nth-of-type(2)").eq($(this).index()).addClass("show");
    })
})

// window.sessionStorage 예약 받는 Page에서 form이나 input으로 값 받아서 세션 스토리지 선언
// sessionStorage.setItem("super", JSON.stringify(payload)); 예약 Page에서 data type을 JSON 문자형으로 파싱
let appoint_patient = [1,'김범주','이빈후과','김범주','1 진료실', '2020. 11. 07', '14:30', '예약 완료'];
sessionStorage.setItem("appoint", JSON.stringify(appoint_patient));

function getStorage(){
    if(!sessionStorage.getItem("appoint",appoint_patient) === false){
        let geust = JSON.parse(sessionStorage.getItem("appoint",appoint_patient))
        return geust;
    }
}

class Patient{    //환자 객체로 진료예약 조회 리스트 출력 value 용
    constructor(partient){
        this.num = partient[0]; //번호
        this.name = partient[1]; //이름
        this.department = partient[2]; //진료과
        this.docter = partient[3]; //담당의
        this.office = partient[4]; //진료실
        this.reservation_date = partient[5];  // 예약일
        this.reservation_time = partient[6]; // 예약시간
        this.oder_status = partient[7]; // 예약 진행 상황
        this.reg_num = partient[8];    //등록번호(난수 생성으로 저장)
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

let join_id__bt = document.querySelector(".login__id .join__bt")
join_id__bt.addEventListener("click",function(){
    let row = document.querySelector(".appoint-delete__body")
    // let patient = new Patient(1,'김범주','이빈후과','김범주','1 진료실', '2020. 11. 07', '14:30', '예약 완료');
    
    let patient = new Patient(getStorage());
    let temp = 
    `
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
    </tr>
    `;
    $(row).append(temp);
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


let join_name__bt = document.querySelector(".login__name .join__bt")
join_name__bt.addEventListener("click",function(){
    let row = document.querySelector(".appoint-delete__body")
    let patient = new Patient(getStorage());
    let temp = 
    `
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
    </tr>
    `;
    $(row).append(temp);
})

const delete_bt = document.querySelector("#delete-bt")
delete_bt.addEventListener("click",function(){
    let row = document.querySelector(".appoint-delete__body")
    let checkbox = document.querySelector(".check")
    if($(checkbox).prop("checked")){
       $('.oder:contains("예약 완료")').text("예약 취소");
    }
})




