import { $, $$ } from "./utils/easy-selector.js";

const woowaButton = $(".terms .woowaButton");
const form = $(".terms > form");
const entireTerms = $$(".terms .term > input:not(#all-select)");
const allAcceptButton = $(".terms .term > input#all-select");
const requiredTerms = $$(".terms .term[data-required] > input");
const radios = $$('.terms input[name="age-check"]');

const isSubmitAvailable = () =>
  Array.from(requiredTerms).every((term) => term.checked);

const isAllSelected = () =>
  Array.from(entireTerms).every((term) => term.checked);

const isAgeChecked = () => Array.from(radios).some((radio) => radio.checked);

const attachEvent = () => {
  form.addEventListener("change", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    woowaButton.disabled = !isSubmitAvailable() || !isAgeChecked();
    allAcceptButton.checked = isAllSelected();
  });

  allAcceptButton.addEventListener("change", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    entireTerms.forEach((term) => (term.checked = target.checked));
  });
};

window.onload = () => {
  attachEvent();
};
