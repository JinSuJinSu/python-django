let img4 = document.createElement('img');
function selector4_func(obj){
        // 전체 년도를 한번에 처리
        img4.remove();
        let refElement = document.querySelector("#checkpoint4");
        let parent = refElement.parentNode;
        img4=document.createElement('img')
        parent.insertBefore(img4, refElement);
		let year = obj.value;
        if(String(year)==="연도"){
            img4.remove();
        }
        else{
		img4.src = "/static/연도별 연령대 사용시간(평균)/"+String(year)+ " 연령대별 사용시간(평균).png"
		img4.height="600";
		img4.width="800";
        }
}

let img5 = document.createElement('img');
function selector5_func(obj){
        // 전체 년도를 한번에 처리
        img5.remove();
        let refElement = document.querySelector("#checkpoint5");
        let parent = refElement.parentNode;
        img5=document.createElement('img')
        parent.insertBefore(img5, refElement);
		let year = obj.value;
        if(String(year)==="연도"){
            img5.remove();
        }
        else{
		img5.src = "/static/연도별 연령대 이동거리(평균)/"+String(year)+ " 연령대별 이동거리(평균).png"
		img5.height="600";
		img5.width="800";
        }
}