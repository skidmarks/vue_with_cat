

// DOM 초기화
document.addEventListener('DOMContentLoaded', init);
function init() {

    var app1 = new Vue({
        el: '#app1',
        data: {
            message: "Vue.js",
        },
    });

    var app2 = new Vue({
        el: '#app2',
        data: {
            message: {
                value: 'Hello Vue.js',
            },
            // 배열 데이터
            list: ['사과', '바나나', '딸기'],
            num: 1,
        }
    });

    var app3 = new Vue({
        el:"#app3",
        data: {
            message: 'Hello Vue.js',
            scroll: 0,
        },
        mounted: function() {
            this.scroll = 100 // 요소의 스크롤 양 조작하기
            console.log('TEST');
        }
    });


    var app4 = new Vue({
        el: "#app4",
        data: {
            count: 0,
        },
        methods: {

            // 버튼을 클릭했을 때의 핸들러
            increment: function() {
                this.count = this.count + 1; // 다시 할당하는 처리만 함
                /*
                    템플릿 내부에서는 count 라는 속성 이름만 입력하면 사용할 수 있었지만, 메서드 내부에서는 
                    this를 붙여야 한다. 이 this는 인스턴스를 나타내며 여기에서는 new Vue()로 생성된 인스턴스, 따라서
                    .new Vue() 인스턴스의 리턴 값을 나타낸다. 만약 이때 인스턴스가 컴포넌트라면, this는 컴포넌트 인스턴스 자체를 나타낸다.
                */
            },

            decrement: function() {
                this.count -= 1;
            },
        }
    });

    var app5 = new Vue({
        el: "#app5",
        data: {
            isChild: true, 
            isActive: true,
            textColor: 'red',
            bgColor: 'lightgray'
        },
    });

    var app6 = new Vue({
        el: "#app6",
        data: {
            item: {
                id: 1, 
                src: '../images/tit_txt.jpg',
                alt: '상품1의 섬네일', 
                width: 200,
                height: 200,
            },
        },
    });

    var app7 = new Vue({
        el: "#app7",
        data: {
            radius: 20,
        }
    });

} // END init()