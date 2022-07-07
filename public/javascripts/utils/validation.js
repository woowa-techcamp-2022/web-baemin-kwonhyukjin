export const getIsPhoneValid = (value) => {
  return (
    typeof value === "string" &&
    value.length === 13 &&
    /^010-[0-9]{4}-[0-9]{4}$/.test(value)
  );
};

export const getIsCertificateNumValid = (value) => {
  return typeof value === "string" && value.length === 4;
};
