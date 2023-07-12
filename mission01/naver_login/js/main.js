const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

// 1. email 정규표현식을 사용한 validation
const userEmail = document.getElementById("userEmail");
const emailInput = document.querySelector(".user-email-input");

userEmail.addEventListener("change", (e) => {
  emailReg(e.target.value)
    ? emailInput.classList.remove("is--invalid")
    : emailInput.classList.add("is--invalid");
});

// 2. pw 정규표현식을 사용한 validation
const userPassword = document.getElementById("userPassword");
const pwdInput = document.querySelector(".user-password-input");

userPassword.addEventListener("change", (e) => {
  pwReg(e.target.value)
    ? pwdInput.classList.remove("is--invalid")
    : pwdInput.classList.add("is--invalid");
});

// 3. 상태 변수 관리

// 4. 로그인 버튼을 클릭시 조건처리
const loginButton = document.querySelector(".btn-login");

loginButton.addEventListener("click", (e) => {
  if (userEmail.value === user.id && userPassword.value === user.pw) {
    window.location.href = 'welcome.html'
  }
});

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
