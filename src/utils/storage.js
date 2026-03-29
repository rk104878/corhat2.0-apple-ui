// SAVE DATA
export const saveContact = (data) => {
  localStorage.setItem("contactData", JSON.stringify(data));
};

// GET DATA
export const getContact = () => {
  return JSON.parse(localStorage.getItem("contactData"));
};  