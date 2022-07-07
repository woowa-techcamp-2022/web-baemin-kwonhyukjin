import { $ } from "./utils/easy-selector.js";
import { getRandomNum } from "./utils/getRandomNum.js";
import {
  getIsCertificateNumValid,
  getIsPhoneValid,
} from "./utils/validation.js";

const phoneInput = $(".phone__phone-input input");
const certificateNumInput = $(".phone__certificate-input");

const requestCertificateNumBtn = $(".phone__certificate-btn");

const validPhoneCheckBox = $(".phone__phone-input .completed");
const validCertificateNumCheckBox = $(".phone__certificate-input .completed");

const completeBtn = $(".phone .header__next");
console.log(completeBtn);

const fillRandomCertificateNum = (element) => {
  setTimeout(() => {
    element.value = getRandomNum(4);
    const isCertficateNumValid = getIsCertificateNumValid(element.value);
    validCertificateNumCheckBox.classList.toggle("valid", isCertficateNumValid);

    if (isCertficateNumValid) {
      console.log("is success");
      completeBtn.classList.add("active");
    }
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

  requestCertificateNumBtn.addEventListener("click", (e) => {
    requestCertificateNumBtn.classList.add("hide");
    certificateNumInput.classList.add("visible");

    const certificateNum = certificateNumInput.querySelector("input");
    fillRandomCertificateNum(certificateNum);
  });
};

window.addEventListener("DOMContentLoaded", (e) => {
  attachEvent();
});
