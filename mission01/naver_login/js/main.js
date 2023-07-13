const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

// 1. 상태 변수 관리
const userEmail = document.getElementById("userEmail");
const emailInput = document.querySelector(".user-email-input");

const userPassword = document.getElementById("userPassword");
const pwdInput = document.querySelector(".user-password-input");

const loginButton = document.querySelector(".btn-login");

// 2. email 정규표현식을 사용한 validation
userEmail.addEventListener("input", emailCheck);

// 3. pw 정규표현식을 사용한 validation
userPassword.addEventListener("input", passwordCheck);

// 4. 로그인 버튼을 클릭시 조건처리
loginButton.addEventListener("click", loginSubmit);

function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function emailCheck() {
  emailReg(userEmail.value)
    ? emailInput.classList.remove("is--invalid")
    : emailInput.classList.add("is--invalid");
}

function passwordCheck() {
  pwReg(userPassword.value)
    ? pwdInput.classList.remove("is--invalid")
    : pwdInput.classList.add("is--invalid");
}

function loginSubmit() {
  if (userEmail.value === user.id && userPassword.value === user.pw) {
    window.location.href = 'welcome.html'
  } else {
    alert('아이디 또는 비밀번호가 일치하지 않습니다!')
  }
}