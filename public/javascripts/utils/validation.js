const uppercaseExp = /([a-z])/;
const lowercaseExp = /([A-Z])/;
const etcExp = /([\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"])/;
const numberExp = /([0-9])/;
const exps = [uppercaseExp, lowercaseExp, etcExp, numberExp];

export const errorMessages = {
  비밀번호:
    "10자 이상, 대문자, 소문자, 숫자, 특수문자 중 2종류를 조합해야해요.",
  생년월일: "날짜 형식이 잘못되었어요. (YYYY-MM-DD)",
};

export const getIsPhoneValid = (phoneNum) => {
  return (
    typeof phoneNum === "string" &&
    !phoneNum.length === 13 &&
    /^010-[0-9]{4}-[0-9]{4}$/.test(phoneNum)
  );
};

export const getIsCertificateNumValid = (certification) => {
  return typeof certification === "string" && certification.length === 4;
};

export const getIsEmailValid = (email) => {
  return (
    typeof email === "string" && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  );
};

export const getIsPasswordValid = (password) => {
  if (typeof password !== "string") return false;

  if (password.length < 10) return false;

  const passwordExpType = exps.reduce((acc, cur) => {
    if (password.search(cur) !== -1) return acc + 1;

    return acc;
  }, 0);

  if (passwordExpType < 2) return false;

  return true;
};
