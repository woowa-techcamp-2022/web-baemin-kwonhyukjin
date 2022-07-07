import { $ } from "./utils/easy-selector.js";
import { getRandomNum } from "./utils/getRandomNum.js";
import {
  getIsCertificateNumValid,
  getIsPhoneValid,
} from "./utils/validation.js";

const phoneInput = $(".phone__phone-input input");
const certificateNumBox = $(".phone__certificate-box");
const certificateNum = certificateNumBox.querySelector("input");

const requestCertificateNumBtn = $(".phone__certificate-btn");

const validPhoneCheckBox = $(".phone__phone-input .completed");
const validCertificateNumCheckBox = $(".phone__certificate-input .completed");

const completeBtn = $(".phone .header__next");
const reRequestCertificateBtn = $(".phone__re-certificate-btn");

const fillRandomCertificateNum = (element) => {
  element.value = "";
  validCertificateNumCheckBox.classList.remove("valid");
  completeBtn.classList.remove("active");

  setTimeout(() => {
    element.value = getRandomNum(4);
    const isCertficateNumValid = getIsCertificateNumValid(element.value);
    validCertificateNumCheckBox.classList.toggle("valid", isCertficateNumValid);
    completeBtn.classList.toggle("active", isCertficateNumValid);
  }, 2000);
};

const attachEvent = () => {
  phoneInput.addEventListener("input", (e) => {
    const target = e.target;

    if (!(target instanceof HTMLInputElement)) return;
    target.value = target.value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");

    const isPhoneValid = getIsPhoneValid(target.value);
    validPhoneCheckBox.classList.toggle("valid", isPhoneValid);

    if (isPhoneValid) {
      requestCertificateNumBtn.disabled = !isPhoneValid;
    }
  });

  requestCertificateNumBtn.addEventListener("click", () => {
    requestCertificateNumBtn.classList.add("hide");
    certificateNumBox.classList.add("visible");

    fillRandomCertificateNum(certificateNum);
  });

  reRequestCertificateBtn.addEventListener("click", () => {
    fillRandomCertificateNum(certificateNum);
  });
};

window.addEventListener("DOMContentLoaded", () => {
  attachEvent();
});
