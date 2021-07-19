let img1 = document.createElement('img');
function year_select(obj){
		let values = document.querySelector('#year_month');
        img1.remove();
        let refElement = document.querySelector("#check_time");
        let parent = refElement.parentNode;
        img1=document.createElement('img')
        parent.insertBefore(img1, refElement)
        let value = obj.value;
        switch (value) {
              case '2017년':
                img1.src = "{% static '2017년 월별 이용건수.png' %}"
                break;
              case '2018년':
                img1.src = "{% static '2018년 월별 이용건수.png' %}"
                break;
              case '2019년':
                img1.src = "{% static '2019년 월별 이용건수.png' %}"
                break;
              case '2020년':
                img1.src = "{% static '2020년 월별 이용건수.png' %}"
                break;
              default:
                img1.remove();
                //pass
        }
		img1.height="300";
		img1.width="400";

}

//2번째 함수
let img2 = document.createElement('img');
function year_time_select(obj){
		let values = document.querySelector('#year_time');
        img2.remove();
        let refElement = document.querySelector("#check_age_percent");
        let parent = refElement.parentNode;
        img2=document.createElement('img')
        parent.insertBefore(img2, refElement)
        let value = obj.value;
        switch (value) {
              case '2017년':
                img2.src = "{% static '2017년 시간대별 이용건수.png' %}"
                break;
              case '2018년':
                img2.src = "{% static '2018년 시간대별 이용건수.png' %}"
                break;
              case '2019년':
                img2.src = "{% static '2019년 시간대별 이용건수.png' %}"
                break;
              case '2020년':
                img2.src = "{% static '2020년 시간대별 이용건수.png' %}"
                break;
              default:
                img2.remove();
                //pass
        }
		img1.height="300";
		img1.width="400";


}
// 3번째 함수 적용
let img3 = document.createElement('img');
function year_age_percent_select(obj){
        // 전체 년도를 한번에 처리
		let values = document.querySelector('#year_age_percent');
        img3.remove();
        let refElement = document.querySelector("#check_age_sum");
        let parent = refElement.parentNode;
        img3=document.createElement('img')
        parent.insertBefore(img3, refElement)
        let value = obj.value
		switch (value) {
              case '2017년':
                img3.src = "{% static './연도별 연령대 비율/2017년 연령대별 비율.png' %}"
                break;
              case '2018년':
                img3.src = "{% static './연도별 연령대 비율/2018년 연령대별 비율.png' %}"
                break;
              case '2019년':
                img3.src = "{% static './연도별 연령대 비율/2019년 연령대별 비율.png' %}"
                break;
              case '2020년':
                img3.src = "{% static './연도별 연령대 비율/2020년 연령대별 비율.png' %}"
                break;
              default:
                img3.remove();
                //pass
            }
		img3.height="300";
		img3.width="400";
        }

// 4번째 함수 적용
let img4 = document.createElement('img');
function year_age_sum_func(obj){
        // 전체 년도를 한번에 처리
		let values = document.querySelector('#year_age_sum');
        img4.remove();
        let refElement = document.querySelector("#check_age_mean");
        let parent = refElement.parentNode;
        img4=document.createElement('img')
        parent.insertBefore(img4, refElement)
		document.body.appendChild(img4);
		let value = obj.value;
		switch (value) {
              case '2017년':
                img4.src = "{% static './연도별 연령대 이용건수/2017년 연령대별 이용건수.png' %}"
                break;
              case '2018년':
                img4.src = "{% static './연도별 연령대 이용건수/2018년 연령대별 이용건수.png' %}"
                break;
              case '2019년':
                img4.src = "{% static './연도별 연령대 이용건수/2019년 연령대별 이용건수.png' %}"
                break;
              case '2020년':
                img4.src = "{% static './연도별 연령대 이용건수/2020년 연령대별 이용건수.png' %}"
                break;
              default:
                img4.remove();
                //pass
            }
		img4.height="300";
		img4.width="400";
        }

// 5번째 함수 적용
let img5 = document.createElement('img');
function year_age_mean_func(obj){
        // 전체 년도를 한번에 처리
		let values = document.querySelector('#year_age_mean');
        img5.remove();
        img5=document.createElement('img')
        let value = obj.value
		document.body.appendChild(img5);
		switch (value) {
              case '2017년':
                img5.src = "{% static './연도별 연령대 사용시간(평균)/2017년 연령대별 사용시간(평균).png' %}"
                break;
              case '2018년':
                img5.src = "{% static './연도별 연령대 사용시간(평균)/2018년 연령대별 사용시간(평균).png' %}"
                break;
              case '2019년':
                img5.src = "{% static './연도별 연령대 사용시간(평균)/2019년 연령대별 사용시간(평균).png' %}"
                break;
              case '2020년':
                img5.src = "{% static './연도별 연령대 사용시간(평균)/2020년 연령대별 사용시간(평균).png' %}"
                break;
              default:
                img5.remove();
                //pass
            }
		img5.height="300";
		img5.width="400";
        }