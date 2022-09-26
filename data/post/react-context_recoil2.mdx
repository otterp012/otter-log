---
title: context와 recoil 비교해보기, 두번째
publishedAt: 2022-06-12
description: react context가 조금 불편해서 recoil을 써봤다.
thumbnailImg: https://velog.velcdn.com/images/otterp/post/1739a2b4-ea2a-4316-abee-99eaba414280/image.png
isFeatured: false
tags:
  - react
  - recoil
series: context와 recoil 비교해보기
  - react-conext_recoil
  - react-conext_recoil2
---

이번 미션에서는 -지금까지 했던 것보다는- 대규모의 데이터를 받아와야 했다. 우리가 지금까지 받와왔던 데이터들 보단 규모가 커서 스켈레톤 UI나 LazyLoad도 꼭 적용해보자고 했다. 큰 데이터를 계속해서 받아오는 상황이 곤혹스럽게 느껴졌다. 다 백엔드가 없어서그래 탓도했지만 없는걸 뭐 어떡하나. (우리는 프론트만으로 이루어져 있는 팀이었다.)

게다가 그 데이터를 각기 다른 컴포넌트에서 사용해야 했으므로, 비동기 로직을 어디서 처리할지도 고민이었다. 한 컴포넌트에서 받았다가 올렸다 내리나, 컨텍스트에서 하나, 각 컴포넌트에 하는 방법이 있겠다. 정도로 생각했다. 스켈레톤UI나 레이지로드는 꼭 해보고 우리 시간이 되면 데이터를 캐싱해서 사용할 수 있는 방법도 적용해보자 하고 회의를 끝냈다.

그런데, 여기서 이전 포스트에서 작성했던 불편한 문제가 나왔다. 지금, 데이터를 받아오기 전 우리가 구현했던 방법은 `Period, Price, Personnel` 이라는 세가지 컴포넌트를 각기 다른 컨텍스트를 만들어 활용하는 방법이었다. (당연히 리렌더링 문제를 해소하고자 컨텍스트를 나눴다. 그리고 이걸 나눈 건 좋은 방법이었던 것 같다. 실제로 리렌더링 문제가 어느정도 해소되기도 했다.)

이 세가지 컨텍스트가 다 담고 있는 데이터가 필요했다. 세가지를 다 받아와 컴포넌트에서 받을 수는 없었다. 또 다른 -거리가 먼- 컴포넌트가 이 데이터를 필요로 했다. 그럼 컨텍스트를 또 만들어, 그 컨텍스트로 데이터를 전달해주는 로직을 만들고, 컨텍스트에서 받아와 내려오는 방법을 해야겠다고 생각했다. 그런데 갑자기 아 이제 프로바이더를 그만 만들고 싶다.. 라는 생각에 빠져 사실 여기서 `recoil` 적용을 시작했다.

### recoil 비동기 로직 작성해보기

recoil 공식 문서를 참고하며 진행했습니다!

거의 코드의 흐름은 recoil 공식 문서와 동일하다.

```tsx
export const searchInfoState = atom({
  key: "SearchInfoState",
  default: {
    checkIn: null,
    checkOut: null,
    minPrice: null,
    maxPrice: null,
    personnel: null,
    minLatitude: 37.474643190801984,
    minLongitude: 127.0177264600349,
    latitude: 37.507322742120685,
    longitude: 127.0494023698062,
  },
});
// 이 atom을 통해서 데이터를 얻는다.
const cardsDataQuery = selector({
  key: "CardsDataQuery",
  get: async () => {
    const response = await fetch("URL");
    const cardsData = await response.json();
    return cardsData;
  },
});
// URL이 달리질일이 없어서 selectorFamily는 적용하지 않았다.
// 언제나 무조건 한가지 URL만 사용하면 되었다.

export const filteredCardsData = selector({
  key: "FilteredCardsData",
  get: ({ get }) => {
    const fetchedCardsData = get(cardsDataQuery);
    const currentSearchInfo = get(searchInfoState);
    // atom과 selector에 있는 값을 받아왔다! 이거 신세계인데 라는 생각이 들었다.
    const initialCondition = {
      filteredData: fetchedCardsData,
      currentSearchInfo,
    };

    const { filteredData } = filteredBySearchInfo(
      filteredByPrice,
      filteredByCoords,
      filteredByPeopleNum,
    )(initialCondition);

    return filteredData;
  },
  // 위에서 fetch 받아온 데이터를 여기서 필터해서 return했고,
  // 이 filteredData를 컴포넌트에서 사용했다.
});
```

여기서 새로운 게 보인다. `selector`이다.
recoil 공식문서에 따르면 `selcotor`은 다른 atom이나 selectors의 입력을 사용할 수 있는 순수함수이다. 이 상위의 atom이나 selectors가 바꾸뀌면 selector은 다시 실행되고 이게 변경되면 이를 사용하는 컴포넌트도 다시 렌더링 된다.
(defineProperty의 setter, getterr가 생각났다)

이를 통해, 컨텍스트를 사용하면서 불편함을 느꼈던 3번째 문제 - 컨텍스트들이 공통으로 사용하는 상태가 생기면 어떡하나 - 를 해결할 수 있었다. 여기서, 그냥 불러와서 사용하면 된다. 그리고 값이 불리어진 atom이나 selector가 변하면 자동적으로 다시 실행되니까 흐름이 보이기 시작했다.
어떤게 어떤거와 결합되어있고, 어디에 묶여있는지 보이는 게 좀 좋았다.

### Suspense, Lazy

그런데, `selector`을 사용해서 비동기 로직을 실행하면 `Suspense`, `Lazy` 를 사용해야한다는 오류가 났다. 미션 마감이 얼마 남지 않았다. 내가 이걸 지금 빨리 해야하는데 공부해서 할 수 있을까하는 고민을 했다. 이미 코드는 써놨고 다시 컨텍스트로 빨리 돌아갈까 하는 생각도 했다.

생각보단 쉬웠다. 다행이었다.
`Lazy`는 `Susnpense`가 있어야 작동하고, 공식문서에 따르면 `Suspense`는 로딩 지시기를 나타낸다.

지금, 이 데이터를 사용하는 컴포넌트들은 다음과 같았다.

```tsx
const Card = ({ accommInfo }: { accommInfo: CardDataType }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isReservationModalOpened, setIsReservationModalOpened] =
    useState<boolean>(false);

  const imgRef = useRef<HTMLImageElement>(null);
  const observer = useRef<IntersectionObserver>();

  useLayoutEffect(() => {
    observer.current = new IntersectionObserver(intersectionObserver);
    observer.current.observe(imgRef.current);
  }, []);

  const intersectionObserver = (
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver,
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setIsVisible(true);
      }
    });
  };
  // 간단히 이미지 lazyload를 적용했던 코드다. 다음이나 다다음 포스트에 정리해서
  // 올리려고 한다.
  const closeModal = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    setIsReservationModalOpened(false);
  };

  return (
    <CardContainer
      id={accommInfo.roomId}
      onClick={() => setIsReservationModalOpened(true)}
    >
      <CardImage
        src={isVisible ? accommInfo.imgSrc : undefined}
        alt='hotels'
        ref={imgRef}
      />
      <CardText price={accommInfo.price} name={accommInfo.name} />
      <HeartIcon />
      {isReservationModalOpened && (
        <ReservationModal accommInfo={accommInfo} closeModal={closeModal} />
      )}
    </CardContainer>
  );
};

export default Card;
```

데이터들을 받는 `Card`들은 이렇게 생겼다. 근데 잘 보면 여기서 데이터를 받지 않는다.

```tsx
const LazyCards = () => {
  const filteredData = useRecoilValue(filteredCardsData);
  return filteredData.map((card: CardDataType, i: number) => (
    <Card
      key={card.roomId}
      accommInfo={{
        ...card,
        imgSrc: `https://loremflickr.com/300/200/cats?${i}`,
      }}
    />
  ));
};

export default LazyCards;
```

`LazyCards`라는 새로운 컴포넌트 만들어 여기서 데이터를 받아서 위의 `Card` 컴포넌트 들에 전달해 주었다. 왜 이렇게 했냐고 묻는다면 ~~안쓰면 무수한 오류가 났다~~

이는 `React.Lazy`를 써야했기 때문이다. 이 `Card` 컴포넌트들은 데이터를 받는 비동기 요청이 모두 끝난 뒤에 렌더링되어야 하는 컴포넌트들이다. `Lazy`를 통해 데이터 요청이 다 끝난뒤 카드 컴포넌트들이 렌더링 된다.

그럼 이 비동기가 진행되고 있는 Loading 상태는 어떻게 알 수 있을까?
기존에는, 비동기 로직에서 데이터를 받아와 데이터가 있는지 없는지 여부등을 통해 `isLoading, setIsLoading` 등의 상태를 만들어 로딩상태를 감지했었다. 그런데 이렇게 `Lazy`를 쓰게 되면 다음과 같이 할 수 있다.

```tsx
const Cards = () => {
  const LazyCards = lazy(() => import("./LazyCards"));
  return (
    <CardsContainer>
      <Suspense fallback={<SkeletonCards />}>
        // 여기 fallback에서 로딩중 사용할 컴포넌트를 넣어주었다.
        <CardsTitle />
        <LazyCards />
      </Suspense>
    </CardsContainer>
  );
};

export default Cards;
```

이렇게 `Suspense`가 하위에 `Lazy`로 추가된 컴포넌트들의 로딩상태를 감지한다. 그래서 `fallback` 속성에 로딩중 표시될 컴포넌트를 넣어주니 작동이 되었다.

그런데, `selector`을 비동기로직에 이용하는 경우에 무조건 `suspense`, `lazy`를 사용해야만 하는 것은 아니라고 한다. ` useRecoilValueLoadable()` 훅을 사용하는 방법도 있다고 한다.

덧붙여 그럼 에러처리는 어떻게 하나 했는데, `ErrorBoundary`를 통해 가능했다. 이건 다음에 정리해야겠다.

### 그런데, 뭔가가 달라졌다.

이 프로젝트는 다량의 데이터를 계속해서 불러와야 하고 이로 인해 문제가 생길거라고 생각하고 있었는데 로딩을 위해 만들어둔 스켈레톤 UI가 처음에만 나오고 나오지 않았다. 데이터 `fetch`를 새로 받지 않은건가? 어떻게 이게 바로바로 되는거지? 라는 생각이 들었다.

아래의 이미지를 보면 검색조건이 달라지거나 지도의 좌표가 달라질때 카드의 로딩상태가 없다.
하지만 로딩은 검색조건이 달라오거나, 지도의 좌표가 달라지면 `fetch`요청을 다시 넣는 방식으로 되어있었다. 이 부분이 UI,UX적을 큰 문제가 될 수 있을거라고 생각했었다.

![](https://velog.velcdn.com/images/otterp/post/4ac4b894-1288-41ec-a38b-51db9c0d5391/image.gif)

왼쪽의 카드들이 바로바로 달라지는 걸 확인할 수 있다. 사진이 똑같아서 헷갈린다면 가운데의 스크롤 + 카드 첫번째 호텔의 이름을 보면 알 수 있다.

그래서, 개발자 도구의 네트워크 탭을 확인해 보니 처음한번만 fetch를 하고 새로운 요청이 없었다.

![](https://velog.velcdn.com/images/otterp/post/ce976d3b-f154-40d3-8c00-985a04ca2f28/image.png)

리코일 공식문서에 따르면, `selector`는
`결과는 쿼리가 유니크한 인풋이 있을 때에만 실행되도록 캐시됩니다.`라고 한다.
그렇다 그냥 캐시처리를 해버려서, 우리가 따로 캐시처리를 할 필요가 없었다. (이것도 좋은거 아닌가?라고 단순히 생각했다.) 우리의 로직은 무조건 한 URL에서만 데이터를 받아오는 로직이었으니 가능했다.

그런데, 리코일의 캐시처리관련한 부분은 문제라고 생각하는 사람들이 더 많은 것 같다.
이번 미션에서는 운좋게 얻어걸린 듯한 느낌이었고, 캐시처리를 받고 그 캐시에 따라서 `re-fetch` 한다던지 하는 동작을 리코일에서 사용하기 어렵다는 포스트가 많았다.

또 캐시처리를 알아보다보니 react-qeury, swr같은 개념이 등장했다 이와 엮어서 포스트를 작성해보려고 한다.

### 그래서 문제가 해결되었나?

해결되었다. 리코일에서 다른 상태-atom, selector-에서 값을 불러오는 기능을 통해 컨텍스트 였다면 새롭게 컨텍스트를 만들어야 하는 상황을 피할 수 있었다. 또 문제라고 생각했던 캐시도 얻어걸린 것 처럼 해결되었다.

전 포스트와 이번 포스트까지 마치 `context`의 단점만 나열하고 `recoil`의 장점만 나열한 듯한 느낌이 든다. 그런데, 오히려 공부하면서 느꼈던 점은 `context`도 나름 괜찮았는데? 싶었던 것도 있다. 불편함도 있었지만 상태가 잘변하지 않고 특정부분만을 위한 context를 사용한다면 오히려 Provider도 여기는 딱 이것만 쓴다! 하고 표시해줄수도 있고 라이브러리가 아니니 대부분의 사람들도 알고있는 개념이라는 것도 좋았다.

또 이번에 컨텍스트로 작성된 부분을 리코일로 살짝 바꾸었는데 생각보단 쉽지 않았다. 이 컨텍스트가 뭐와 연결되어있고 그런 부분도 있었고 시간이 생각보다 걸리는 작업이었다. 만약 기존에 해왔던 게 컨텍스트인데 갑자기 바꾸자! 이런건 말이안될 것 같다.

결과적으론 이것저것 공부는 하겠지만 이런 거 고르는 건 역시 팀원간의 협의와 조율인 것 같다. 이것저것 공부해봐서 어떠한 상황이든 조금은 대처할 수 있도록 하자!
