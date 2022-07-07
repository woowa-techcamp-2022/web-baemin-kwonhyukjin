import { $ } from "./utils/easy-selector.js";
import { getIsEmailValid } from "./utils/validation.js";

const emailInput = $(".email__email-input input");
const checkDuplicationBtn = $(".email__email-input-box > button");

const validEmailCheckbox = $(".email__email-input .completed");

const otherInputBox = $(".email__other-input-box");

const attachEvent = () => {
  checkDuplicationBtn.addEventListener("click", () => {
    const isEmailValid = getIsEmailValid(emailInput.value);
    validEmailCheckbox.classList.toggle("valid", isEmailValid);
    otherInputBox.classList.toggle("visible", isEmailValid);
  });
};

window.addEventListener("DOMContentLoaded", () => {
  attachEvent();
});
