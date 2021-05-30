# 리액트 외부 API 연동 뉴스 뷰어 진행..

##  연습 문법
### Promise 연습
~~~
function increase(number) {
    const promise = new Promise((resolve, reject) => {
        // resolve는 성공, reject는 실패
        setTimeout(() => {
           const result = number + 10;
           
           // 50보다 높으면 에러 발생
           if(result > 50) {
                const e = new Error('NumberTooBig');
                return reject(e);
           }
            
            resolve(result); 
        }, 1000);
    });
    return promise;
}


increase(0).then(number => {
    console.log(number);
    return increase(number);  // Promise 리턴
})
.then(number => {
    // 또 .then으로 처리 가능
    console.log(number);
    return increase(number);
})
.then(number => {
    console.log(number);

})
.catch(e => {
    // 도중에 에러가 발생한다면 .catch를 통해 알 수 있음
    console.log(e);
});

~~~

### async/await 연습
#### async/await는 Promise를 더욱 쉽게 사용할 수 있도록 해주는 ES2017(ES8) 문법이다.

~~~
// 위 then사용 과 똑같은 과정
// then을 사용하지 않고 await을 함수앞에 선언하고 그걸 변수에 담아서 사용가능
async function runTasks() {
    try {
        let result = await increase(0);
        console.log(result);
        
        result = await increase(result);
        console.log(result);
        
        result = await increase(result);
        console.log(result);
        
    } catch(e) {
        console.log(e);
    }
}
~~~

### axios로 API 호출해서 데이터 받아 오기
~~~
노드모듈 추가
yarn add axios 
~~~

