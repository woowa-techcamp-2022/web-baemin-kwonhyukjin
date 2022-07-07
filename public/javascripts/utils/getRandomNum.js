export const getRandomNum = (length) => {
  if (typeof length !== "number") return;

  return new Array(length)
    .fill(0)
    .map(() => Math.floor(Math.random() * 10))
    .join("");
};
