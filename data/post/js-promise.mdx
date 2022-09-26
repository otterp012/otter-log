---
title: promise, async & await
publishedAt: 2022-03-02
description: 비동기 지옥
thumbnailImg: https://velog.velcdn.com/images/otterp/post/4649733f-e979-403e-aa14-88cbd903e717/image.jpeg
isFeatured: false
tags:
  - javascript
---

- 비동기 처리 할때 발생하는 콜백지옥
- 비동기 처리를 할때, _**비동기 함수 내부의 비동기로 동작하는 코드에서 처리 결과를 외부로 반환하거나 상위 스코프의 변수에 할당하면 제대로 작동하지 않는다.**_
- 따라서, 콜백안에 그 후속처리-다음 비동기 처리-를 계속해서 적어주어야 한다.

```js
const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay);
};

delayedColorChange("red", 1000, () => {
  delayedColorChange("orange", 1000, () => {
    delayedColorChange("yellow", 1000, () => {
      delayedColorChange("green", 1000, () => {
        delayedColorChange("blue", 1000, () => {
          delayedColorChange("indigo", 1000, () => {
            delayedColorChange("violet", 1000, () => {});
          });
        });
      });
    });
  });
});
```

- 예를 들어,`setTimeout`으로 1초마다 화면이 바뀌는 코드를 작성하면
- 위처럼 콜백안에 또 콜백, 콜백안에 또 콜백이 들어가는 콜백지옥이 생긴다.
- 코드의 가독성도 떨어지고, 코드를 이해하기 힘들 수 있다.

## 프로미스 사용하기

![](https://images.velog.io/images/otterp/post/cbbf3dbe-b8a5-4664-8108-a8618bfc7140/image.png)

```js
const promise = new Promise((resolve, reject) => {
  // 비동기 처리 성공
  resolve('result')
  // 비동기 처리 실패
  reject('false')
}
```

- 프로미스의 기본 형태, 비동기 처리에 성공하면 `resolve`를 반환하고 state가 `fulfilled`로 변한다.
- 비동기 처리에 실패하면 `reject`를 반환하고 state가 `rejected`로 변한다.

### then, catch

- 프로미스의 후속처리 메서드

```js
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("YOUR FAKE DATA HERE");
      }
      reject("Request Error!");
    }, 1000);
  });
};

fakeRequest("/dogs/1")
  .then((data) => {
    console.log("DONE WITH REQUEST!");
    console.log("data is:", data);
  })
  // promise가 resolve되면 실행된다.
  .catch((err) => {
    console.log("OH NO!", err);
  });
// promise가 reject되면 실행된다.
```

- `then`, `catch`를 통해서 promise의 반환값을 출력하거나, 사용할 수 있다.

### 프로미스 체이닝

```js
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!!!!! (page1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    // 프로미스가 성공할때만 새롭게 return되므로 아래에서 그대로 이어 쓸 수 있음
    .then((data) => {
        console.log("IT WORKED!!!!!! (page2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!")
        console.log(err)
```

- 맨처음 promise가 `resolve`되면, 첫번째 `then`이 실행된다.
  - 첫번째 `then`에서 콜백으로 `console.log`가 실행된다. - 여기서 다음에 작업할 새로운 promise를 return한다.
- 첫번째 then에서 return한 `promise`에 대한 후속처리를 바로 이어서 할 수 있다.
- 세번째 then도 똑같다.
- 중간에 오류가 발생하면 then을 무시하고 catch가 실행된다.

```js
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// 매번 새로운 promise를 return하므로, then으로 바로바로 이어 후속처리를 할 수 있다.
delayedColorChange("red", 1000)
  .then(() => delayedColorChange("orange", 1000))
  .then(() => delayedColorChange("yellow", 1000))
  .then(() => delayedColorChange("green", 1000))
  .then(() => delayedColorChange("blue", 1000))
  .then(() => delayedColorChange("indigo", 1000))
  .then(() => delayedColorChange("violet", 1000));
```

- 이런 프로미스 체이닝으로 위에 콜백지옥을 깔끔하게 해결할 수 있다!

## async & await

- async, await는 promise를 보조하기 위해 추가되었다.
- 이를 사용하면 promise의 `then`을 사용하지 않고 마치 동기처럼 프로미스 처리결과를 반환할 수 있다.

```js
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("indigo", 1000);
  await delayedColorChange("violet", 1000);
  return "ALL DONE!";
  // 1초마다 순차적으로 실행된다.
}
```

- async는 프로미스를 반환한다.
- await는 프로미스가 `settled` -비동기 수행처리가 완료된 상태-가 될때까지 기다렸다가 `settled`가 되면 실행된다.

### 참고한 자료

모던 자바스크립트 Deep Dive
https://www.udemy.com/course/the-web-developer-bootcamp/
https://developer.mozilla.org/ko/docs/Learn/JavaScript/Asynchronous/Async_await
