export const validateEmail = (email) => {
  const re = /^([\w-+]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  return re.test(email);
};

export const validatePassword = password => (
  password.length > 5 && password.length < 73
);
