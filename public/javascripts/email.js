import { $ } from "./utils/easy-selector.js";
import {
  errorMessages,
  getIsEmailValid,
  getIsPasswordValid,
} from "./utils/validation.js";

const emailInput = $(".email__email-input input");
const checkDuplicationBtn = $(".email__email-input-box > button");

const validEmailCheckbox = $(".email__email-input .completed");
const validPasswordCheckbox = $(".email__pwd-input .completed");

const otherInputBox = $(".email__other-input-box");

const passwordInput = $("#비밀번호");
const passwordErrorMsg = $(".email__pwd-input .error-msg");
const passwordWrapper = $(".email__pwd-input > .customInput__wrapper");

const submitButton = $(".email .header__next");

const isSubmitAvailable = () => {
  return (
    validEmailCheckbox.classList.contains("valid") &&
    validPasswordCheckbox.classList.contains("valid")
  );
};

const submitUserInfo = async () => {
  /**
   * TODO :: 회원가입 로직 with 이메일 / 패스워드
   */

  await fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailInput.value,
      password: passwordInput.value,
    }),
  });
};

const attachEvent = () => {
  checkDuplicationBtn.addEventListener("click", () => {
    const isEmailValid = getIsEmailValid(emailInput.value);
    validEmailCheckbox.classList.toggle("valid", isEmailValid);
    otherInputBox.classList.toggle("visible", isEmailValid);
  });

  (() => {
    let prevInput = "";
    let continueCount = 1;
    passwordInput.addEventListener("input", (e) => {
      const password = e.target.value;

      if (prevInput.length > password.length) {
        continueCount > 0 && continueCount--;
      } else {
        if (
          (password.length &&
            prevInput.length &&
            prevInput[prevInput.length - 1]) === password[password.length - 1]
        )
          continueCount++;
        else continueCount = 1;
      }

      const isPasswordValid = getIsPasswordValid(password) && continueCount < 3;
      validPasswordCheckbox.classList.toggle("valid", isPasswordValid);

      passwordErrorMsg.classList.toggle("hide", isPasswordValid);
      passwordWrapper.classList.toggle("error", !isPasswordValid);

      if (!isPasswordValid)
        passwordErrorMsg.textContent = errorMessages["비밀번호"];

      if (isSubmitAvailable()) submitButton.classList.add("active");

      prevInput = password;
    });
  })();

  submitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    await submitUserInfo();
    window.location.href = e.target.href;
  });
};

window.addEventListener("DOMContentLoaded", () => {
  attachEvent();
});
