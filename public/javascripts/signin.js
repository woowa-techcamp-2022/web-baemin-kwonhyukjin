import { $ } from "./utils/easy-selector.js";

const form = $(".signinPage__form");

form.addEventListener("submit", async (e) => {
  const target = e.target;
  const [email, pwd] = target;

  if (email.value.trim() === "") {
    e.preventDefault();
    email.classList.add("error");
  }

  if (pwd.value.trim() === "") {
    e.preventDefault();
    pwd.classList.add("error");
  }

  if (email.value.trim() !== "" && pwd.value.trim() !== "") {
    email.classList.remove("error");
    pwd.classList.remove("error");
    /**
     * TODO :: 로그인 구현하기
     */

    // await fetch("/auth/signin", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: email.value.trim(),
    //     password: pwd.value.trim(),
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
  }
});
