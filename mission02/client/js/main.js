const nav = getNode(".nav");

// 배경 색상 변경
function setBgColor(index) {
  const body = getNode("body");

  let colorA = data[index - 1].color[0];
  let colorB = data[index - 1].color[1];

  // 값이 없다면 기본 값을 '#000'으로 셋팅
  if (typeof colorB === "undefined") colorB = "#000";

  css(body, "background", `linear-gradient(to bottom, ${colorA}, ${colorB})`);
}


// 메인 비주얼 이미지 변경
function setImage(index) {
  const visual = getNode(".visual img");

  attr(visual, "src", `./assets/${data[index - 1].name}.jpeg`);
  attr(visual, "alt", data[index - 1].alt);
}


// 이미지에 맞게 이름 변경
function setNameText(index) {
  const nickName = getNode(".nickName");

  nickName.textContent = data[index - 1].name;
}


// 이벤트 위임 핸들러
function handleSlider(e) {
  e.preventDefault();

  const li = e.target.closest("li");
  const liList = getNodes("li");

  if (!li) return;

  const index = attr(li, "data-index");

  // 클릭 이벤트
  liList.forEach((item) => {
    removeClass(item, "is-active");
  });
  addClass(li, "is-active");

  setImage(index);
  setNameText(index);
  setBgColor(index);
}

nav.addEventListener("click", handleSlider);
