const models = require("../models/index");
const crypto = require("node:crypto");

// Makes sure that the password is correct
const assertValidPasswordService = (pass) => {
  if (pass.length < 8) {
    throw new Error("Password must be at least 8 characters long");
  }
  // validate it has one lower case letter
  if (!pass.match(/[a-z]/)) {
    throw new Error("Password must have at least one lower case letter");
  }
  // validate it has one upper case letter
  if (!pass.match(/[A-Z]/)) {
    throw new Error("Password must have at least one upper case letter");
  }
  // validate it has one number
  if (!pass.match(/[0-9]/)) {
    throw new Error("Password must have at least one number");
  }
};

// Makes sure that email is valid

const assertEmailIsValid = (email) => {
  // must validate a valid email
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = email.match(emailRegex);
  if (!isValid) {
    throw new Error("Email is invalid");
  }
};

// Encripts password
const encryptPassword = (password) => {
  const hash = crypto
    .createHmac("sha512", "no salt for now")
    .update(password)
    .digest("base64");
  return hash;
};

module.exports = {
  assertValidPasswordService,
  assertEmailIsValid,
  encryptPassword,
};
