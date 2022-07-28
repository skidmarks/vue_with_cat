

// DOM 초기화
document.addEventListener('DOMContentLoaded', init);
function init() {

    // vue application
    // Vue 인스턴스 생성하기
    // 주로 app , or vm(viewmodel)이라는 변수명을 사용한다.
    var app  = new Vue({
        el: '#app',

        // 속성 이름을 작성하면, 해당 위치에 값이 랜더링된다.
        data: {
            message: 'Hello Vue.js!',
        },
    });
    

    console.log(app.message);

    // app.data.message가 아니다!!
    // console.log(app.data.message) // Uncaught TypeError: Cannnot read properties of undedinted


    // 반복렌더링
    var app2 = new Vue({
        el: '#app2',
        data: {
            list: ['사과', '바나나', '딸기']
        },
    });


    // 배열의 값을 하나 추가해 보면 반복 렌더링이 변경된다.
    app2.list.push('오렌지');
    app2.list.push('망고');


    var app3 = new Vue({
        el:'#app3',
        data:{},
        methods: {
            handleClick: function(event) {
                console.log(event.target);
                event.target.textContent ="clicked";
                event.target.classList.add('clicked');
            }, 
        },
    });

    var app4 = new Vue({
        el: '#app4',
        data: {
            message: '초기 메시지',
        }
    });

    var app5 = new Vue({
        el: '#app5',
        data: {
            show: true,
        }
    });

    // app5.show = false;

    var app6 = new Vue({
        el: '#app6',
        data: {
            show:true,
        }
    });

} // END init()