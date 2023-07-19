## 🦁 mission 02
썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직을 작성합니다.


---
### 🦁 데모 사진

<br>

<p align="center">
<img src="https://github.com/yxxung/home-work/assets/74893676/8f1aad84-f256-4723-aca5-3274a48daf9c" width="50%"/>
<img src="https://github.com/yxxung/home-work/assets/74893676/a232c8f3-1f34-4c9b-b72f-e831c781e316" width="50%"/>
<img src="https://github.com/yxxung/home-work/assets/74893676/d5f0d3d8-0463-40eb-b8b2-5e9565758b3c" width="50%"/>
<img src="https://github.com/yxxung/home-work/assets/74893676/f99f31b0-8547-47ec-af93-5561bbaf02cf" width="50%"/>
</p>

---

<br />

### 1. 클릭 이벤트
- 이벤트 위임 방식을 이용해 가장 상위 요소인 nav에 클릭 이벤트 처리를 했습니다.
- li 태그들을 순회하며 'is-active' class 탈부착을 통해 클릭 이벤트를 완성했습니다.

<br />
<br />

### 2. 배경 색상 변경
- setBgColor 함수를 생성해 배경 색상을 변경하는 코드를 작성했습니다.

```
function setBgColor(index) {
  const body = getNode("body");

  let colorA = data[index - 1].color[0];
  let colorB = data[index - 1].color[1];

  // 값이 없다면 기본 값을 '#000'으로 셋팅
  if (typeof colorB === "undefined") colorB = "#000";

  css(body, "background", `linear-gradient(to bottom, ${colorA}, ${colorB})`);
}
```
- linear-gradient의 인수로 쓰이는 color들을 변수로 만들어줬습니다.
- data 객체 배열의 값이 없다면(=undefined) 타입 체크를 통해 확인 후 colorB의 기본 값을 '#000'으로 셋팅했습니다.

<br />
<br />

### 3. 메인 이미지, 텍스트 변경
- data 객체 배열에 index를 통해 접근하여 선택된 요소에 맞게 값을 변경해줬습니다.