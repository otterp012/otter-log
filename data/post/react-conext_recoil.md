---
title: context와 recoil 비교해보기
publishedAt: 2022-06-12
description: react context가 조금 불편해서 recoil을 써봤다.
thumbnailImg: https://velog.velcdn.com/images/otterp/post/534ac621-1bb4-4817-b1e0-8fafef4df462/image.png
isFeatured: false
tags:
  - react
  - recoil
series: context와 recoil 비교해보기
  - react-conext_recoil
  - react-conext_recoil2
---

처음, `Context Api`를 알았을 때는 신세계였다. 리액트를 처음 공부하면서 가장 골치가 아팠던 부분은 `props driling`이었다. 부모컴포넌트와 하위컴포넌트의 deps가 적을때는 문제되지 않았다. 그런데, 부모 컴포넌트와 하위 컴포넌트의 deps차이가 커졌을때는 힘들었다. props들을 올렸다가 내렸다가 하는 로직들로 컴포넌트가 채워졌다. 그래도 부모-하위의 관계일때는 괜찮았다. 정말 극단적인 경우에는 하위컴포넌트가 다른 부모 컴포넌트의 상태를 받아와야했다. 이걸 구현하려면 `App` 컴포넌트까지 올렸다 내려야하나...? 하는 생각이 들었다. 그때 알게된 게 `Context Api`였다. 정말 편했고 좋았는데..

그런데, `Context Api`를 사용하다가 불편함을 느꼈다.

**1. `Context Api`는 컨텍스트가 전달되는 모든 컴포넌트를 리렌더링 한다.**

**2. 위 문제를 해결하기 위해 컨텍스트를 쪼갰더니, 컨텍스트가 너무 많아졌다.
**_**`Context Api`의 사용은 컨텍스트가 전달되는 모든 컴포넌트를 리렌더링**_ 한다고 배웠고, 이러한 문제를 해결하기 위해 `Context`를 쪼개게 되었다. 또, 가끔은 상태만 필요로 하기도 하고 또는 상태를 변경하는 로직만 필요로 하는 경우도 있었기에 한개의 `Context`도 두가지로 쪼갰다. _**상태만 쓰는 것과, 상태를 `dispatch`하는 걸로 점점 컨텍스트가 많아졌다. `Provider`는 더 많아졌다**_. ~~그럼에도 memo, callback도 공부하며 열심히 리렌더링을 막아보려고 했지만 쉽지 않았다.~~

**3. 새로운 컨텍스트를 만들수밖에 없는 상황이 있었다.**
또,_ `A` 컨텍스트와 `B` 컨텍스트에서 같이 사용해야하는 새로운 상태가 있다고 생각해보자. 그러면 어떻게 상태를 정의해주어야 할까? `A`, `B`에 따로 상태를 정의해주는 것으론 해결되지 않을 것이다. 결국 새로운 컨텍스트를 만들어주어야 한다. 극단적인 상황을 생각해보면 이렇게 계속계속 컨텍스트를 만들어야 한다._** 리렌더링을 문제 해결을 위해 컨텍스트를 쪼갠다 -> 새로운 전역 상태가 필요해졌다. -> 또 만든다 로 귀결될 수밖에 없을 것이라는 생각이 들었다.**\_

그래서 전역 상태관리 라이브러리를 한번 사용해보는게 어떨까라는 생각이 들었다. 이미 공부해보았고, 많이 사용한다는 리덕스도 있었지만 이번 프로젝트의 마감기한이 얼마 남지 않았고 리덕스를 공부해 보았지만 전역상태에서 비동기 요청이 있을 것인데 그부분이 아직 미숙하다고 생각했다. `recoil`의 공식문서를 보니 상대적으로 간단히 적용할 수 있을 것이라는 근거없는 자신감이 들었다. 그래서 같이 프로젝트하는 팀원에게 양해를 구하고 내가 담당하는 파트에서 `recoil`을 적용해보게 되었다.

## Recoil 써보기

리코일을 시작하면서 공식문서를 참고하며 진행했습니다.
[리코일 공식문서](https://recoiljs.org/ko/)

```tsx
// PriceRecilStore.ts

import { atom } from "recoil";

export type PriceStateType = {
  minPrice: number | null;
  maxPrice: number | null;
};

export const priceState = atom<PriceStateType>({
  key: "PriceState",
  default: {
    minPrice: null,
    maxPrice: null,
  },
});

// 여기 default에서 초깃값을 전달해 줄 수 있다.
```

일단 `atom`을 만드는 것에부터 시작했다. `atom`은 상태의 단위이며 `atom`이 업데이트 되면 이를 구독한 컴포넌트는 새로운 값을 반영하여 다시 렌더링 된다. 이 `atom`이 각기 다른 컴포넌트에서 사용된다 하더라도 같은 상태를 공유하게 된다. `Context Api`의 `Context`같은 곳이고 리덕스의 store구나?

이 `atom`을 사용할 곳을 정해, `RecoilRoot`를 넣어준다.

```tsx
// App.tsx
const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <AppContainer>
        <RecoilRoot>
          <Router>
            <Routes>
              <Route path='/'>
                <Route index element={<MainPage />} />
                <Route path='search' element={<SearchPage />} />
              </Route>
            </Routes>
          </Router>
        </RecoilRoot>
      </AppContainer>
    </ThemeProvider>
  </>
);

export default App;
```

일단 공부하고 있는 과정이기도 하고, App에 적용했지만 각기 다른 `Recoil root`를 만들어 분할해서 사용할수도 있다고 한다. 이건 `Context`의 Provider 같은 거구나? 싶었다.

그리고 대부분의 코드를 리팩토링했다. `value`만 쓰는 곳은 `useRocoilValue` 메서드를 활용했고 `value, setState`가 모두 필요한 곳은 `useRocoilState` 메서드를 활용했다. 그리고, 상태를 초기화 해야할때는 `useResetRecoilState` 메서드도 있어 사용할 수 있었다.

```tsx
... codes
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { priceState } from '../../store/priceStore/PriceRecilStore';

const Price = ({
  setOpenedModal,
}: {
  setOpenedModal: Dispatch<React.SetStateAction<ModalType>>;
}) => {
  const { minPrice, maxPrice } = useRecoilValue(priceState);
  const reSetPrice = useResetRecoilState(priceState);
  const priceValue =
    minPrice !== null || maxPrice !== null
      ? `${minPrice?.toLocaleString() || ''}~${
          maxPrice?.toLocaleString() || ''
        }`
      : undefined;
  ... 이런식으로 활용했다.
};

export default Price;
```

## 그런데 이거 re-render 막아주는 게 맞나?

~~막아준다 하지만 실제론 어떻게 될지 모르는거 아닌가~~
그래서, `profiler`를 통해서 어떻게 렌더링 되는지 확인해 보았다.

물론, 모든 부분이 똑같은 코드지만 context를 사용한 코드와 recoil을 사용한 코드로 나누어 측정했다. 가격이 바뀔때 다른 코드가 어떻게 되는지를 확인하기 위함이므로 가격 모달창을 띄워둔 상태에서 레인지를 옮겨보았다.

![](https://velog.velcdn.com/images/otterp/post/f7cc99d2-2e9d-4f55-a87f-bcbcc3193a86/image.png)
프라이스는 이렇게 생겼다. 레인지를 통해서 최소값과 최대값을 계속해서 변경할 수 있다.

지금 Price는 `SearchBarButton` 이라는 컴포넌트를 하위에 두고 있다.

### Context Api를 사용했을땐 이랬다.

![](https://velog.velcdn.com/images/otterp/post/8505f1d7-7426-4193-88db-cb02cf7fe7a2/image.png)
일단 렌더링 되는데에는 8.5ms가 걸렸다.

![](https://velog.velcdn.com/images/otterp/post/4084bbeb-9472-4dfb-b44f-d286d5c63ede/image.gif)
시간을 안재어 봐도 하위컴포넌트인 검색부분까지 계속 렌더링이 되고 있었다.
이를 프로파일러에서 확인해보면 이렇다.

![](https://velog.velcdn.com/images/otterp/post/5192898f-7e04-4b1c-ba4b-92a73a994afa/image.png)

이래서 context가 업데이트 될때마다 하위 컴포넌트가 렌더링된다는 건지 확인할 수 있었다. 그리고 이는 불필요한 렌더링이니까!
근데 하위컴포넌트가 간단한부분이라 `memo`, `callback` 훅을 통해서도 충분히 막을 수 있겠다라는 생각도 들었다.

### Recoil을 사용하니까 이렇게 됐다.

![](https://velog.velcdn.com/images/otterp/post/6012de55-ccec-4f41-8c0f-3aeac1dfd7d1/image.png)
일단 빨라졌다!

![](https://velog.velcdn.com/images/otterp/post/918620a1-b66c-4b0b-8cc3-7619863fc01c/image.gif)
그리고 기존에 깜빡이던 부분들도 더이상 확인되지 않는다.
위와 같이 확인해보자.

![](https://velog.velcdn.com/images/otterp/post/214ba53c-f0a0-4b1e-8537-8bcd20bdaf57/image.png)
이젠 `SearchButton`이 렌더링되는 것을 확인할 수 없다.

## 그래서 문제가 해결되었나?

내가 생각했던 context 사용의 문제는 거의 해결되었다.
컨텍스트의 리렌더링 문제는 위에 확인한 바대로 해결할 수 있었다.
또 컨텍스트를 만들지 않다보니 당연히 프로바이더도 없어졌다.
그리고, 마지막 기존 컨텍스트의 상태가 필요할때 어떻게 처리해야하는가? 에 대한 문제는 `selector`를 공부하면서 해소되었다. (다음 포스트에서 작성할 예정이다.)

그런데 이를 사용해보고 공부해보면서 느낀 점은 무조건 라이브러리를 쓰거나 하는 게 좋지만은 않다는 것이다.
무엇보다 같이 하는 사람-팀원같의 의견조율이 가장 중요하다고 느꼈다.

원래 작성했던 코드는 대부분 `Context`를 전역상태관리 도구로 사용하고 있었고, 한부분만 `Recoil`로 수정하니 코드의 공통성이 떨어져 보였다. 또, 팀원은 다른 부분을 구현하느로 너무 바빴기 때문에 `recoil`을 공부할 시간이 없었다. 내가 `recoil`로 작성하고 설명해드렸지만 팀원분도 바쁘고, 나도 정신없었다.

그래서 결과적으론 팀원에게 좀 미안함을 느꼈다. 물론 양해를 구하고 진행하긴 했지만, 상태관리라이브러리 또는 모든 라이브러리를 사용할때에는 팀원간의 조율, 협의가 최우선적으로 필요하다는 생각이 들었다.
