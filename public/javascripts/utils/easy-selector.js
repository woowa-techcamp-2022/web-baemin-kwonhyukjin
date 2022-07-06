export const $ = (selector) => {
  const result = document.querySelector(selector);
  if (!(result instanceof HTMLElement)) return null;

  return result;
};
