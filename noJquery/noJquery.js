window.onlode = (function() {

})(); 

// Left 헤더 체크박스 이벤트
document.getElementById("leftTopChk").addEventListener("click", lCheck);


// Left 헤더 체크박스 이벤트 함수
function lCheck() {
    let boxs = document.getElementsByName("leftChk");
    let toggle = document.getElementById("leftTopChk").checked;

    if(toggle) {
        for(let i in boxs) {
            boxs[i].checked = true;
        }
    } else {
        for(let i in boxs) {
            boxs[i].checked = false;
        }        
    }
}





// right 헤더 체크박스 이벤트
document.getElementById("rightTopChk").addEventListener("click", rCheck);


// right 헤더 체크박스 이벤트 함수
function rCheck() {
    let boxs = document.getElementsByName("rightChk");
    let toggle = document.getElementById("rightTopChk").checked;

    if(toggle) {
        for(let i in boxs) {
            boxs[i].checked = true;
        }
    } else {
        for(let i in boxs) {
            boxs[i].checked = false;
        }        
    }

}


// add 클릭 이벤트
document.getElementById("add").addEventListener("click", add);
function add() {
    //leftChk 체크된것
    // let elements = document.getElementsByName("leftChk");
    let lElements = document.querySelectorAll("input[name=leftChk]:checked");
    if(lElements.length <= 0) {
        alert("추가할 항목을 체크해주세요.");
    } else {

        let htmlArr = [];
        let idArr = [];

        
        let rElements = document.querySelectorAll("#rTbody tr");


        for(let i=0; i<lElements.length; i++) {
            // 순차적인 left 아이디 수집
            let left = lElements[i].getAttribute("id").split("_")[1];
            let result = 0;
            for(let k=0; k<rElements.length; k++) {
                // 중복 발견, 오른쪽 하나씩 비교, 중복이 있다면 1더함
                if(left == rElements[k].getAttribute("id").split("_")[1]) {
                    result += 1;
                // 중복 발견 x
                } else {
                    result += 0;
                }
            }
            // 중복이 하나도없는 id는 배열에 저장
            // 중복이 아닌 플래그 값0 이어야하고, 
            // push대상 배열에도 존재하면 안된다.
            if(result == 0 && idArr.indexOf(left) == -1) {
                idArr.push(left);
            }

        }


        for(let n=0; n<idArr.length; n++) {

            let num = document.querySelector('#lTbody #trNum_'+ idArr[n] +' #num_' + idArr[n]).innerText;
            let name = document.querySelector('#lTbody #trNum_'+ idArr[n] +' #name_' + idArr[n]).innerText;
            let job = document.querySelector('#lTbody #trNum_'+ idArr[n] +' #job_' + idArr[n]).innerText;


            htmlArr.push('<tr id="trNum_'+ idArr[n] +'">');
            htmlArr.push(    '<td class="chkTh"><input id="chk_'+ idArr[n] +'" name="rightChk" type="checkbox"></td>');
            htmlArr.push(    '<td id="num_'+ idArr[n] +'">'+ num +'</td>');
            htmlArr.push(    '<td id="name_'+ idArr[n] +'">'+ name +'</td>');
            htmlArr.push(    '<td id="job_'+ idArr[n] +'">'+ job +'</td>');
            htmlArr.push('</td>');
        }

        // document.getElementById("leftTopChk").checked = false;


        let rightTbody = document.getElementById("rTbody");

        // 1번째 방법(완전새로쓰기방식)
        // rightTbody.innerHTML = htmlArr.join("");

        // 2번째 방법(append 방식)
        rightTbody.insertAdjacentHTML("beforeend",htmlArr.join(""));
    }
}





// 삭제 이벤트
document.getElementById("remove").addEventListener("click", remove);

// 삭제 함수
function remove() {
    let targets = document.querySelectorAll("input[name=rightChk]:checked");

    if(targets.length <= 0) {
        alert("제거할 항목을 체크해주세요.");
    } else {
        for(let i=0; i<targets.length; i++) {
            let s_index = targets[i].getAttribute("id").split("_")[1];
            let targetTr = document.querySelector('#rTbody #trNum_'+ s_index +'');
            targetTr.remove();
        }

        document.getElementById("rightTopChk").checked = false;
    }
}


function search() {
    console.log("[bbq로 시작하는 DOM을 찾습니다]");
    console.log("[색상을 입힙니다]")
    let search = document.querySelector('input[id^=bbq]')
    search.setAttribute("style", "background-color:gold");
    console.log(search);
    
}