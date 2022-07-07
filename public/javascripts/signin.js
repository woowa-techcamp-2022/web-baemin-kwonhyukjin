import { $ } from "./utils/easy-selector.js";

const form = $(".signinPage__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const target = e.target;
  const [email, pwd] = target;

  if (email.value.trim() === "") email.classList.add("error");
  if (pwd.value.trim() === "") pwd.classList.add("error");

  if (email.value.trim() !== "" && pwd.value.trim() !== "") {
    email.classList.remove("error");
    pwd.classList.remove("error");
    /**
     * TODO :: 로그인 구현하기
     */
  }
});
