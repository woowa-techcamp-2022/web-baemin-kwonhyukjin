import { $, $$ } from "./utils/easy-selector.js";

const inputContainers = $$(".customInput");
const input = $(".customInput__wrapper > input");
const closeButton = $(".customInput__wrapper > .close");

const attachEvent = () => {
  if (!inputContainers) return;

  inputContainers.forEach((inputContainer) => {
    inputContainer.addEventListener("focusin", (e) => {
      const container = e.currentTarget;
      if (!(container instanceof HTMLElement)) return;
      container.classList.add("focused");
    });

    inputContainer.addEventListener("focusout", (e) => {
      const container = e.currentTarget;
      const target = e.target;
      if (!(container instanceof HTMLElement)) return;
      if (!(target instanceof HTMLElement)) return;

      if (
        e.relatedTarget?.nodeName === "BUTTON" &&
        e.relatedTarget?.innerText === "✕"
      )
        return;

      container.classList.remove("focused");
    });

    closeButton.addEventListener("click", (e) => {
      input.value = "";
    });
  });
};

window.addEventListener("DOMContentLoaded", () => {
  attachEvent();
});
