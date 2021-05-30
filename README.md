# 리액트 외부 API 연동 뉴스 뷰어..



#### Promise 연습
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