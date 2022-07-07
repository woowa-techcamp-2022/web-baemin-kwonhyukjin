export const getIsPhoneValid = (phoneNum) => {
  return (
    typeof phoneNum === "string" &&
    phoneNum.length === 13 &&
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
