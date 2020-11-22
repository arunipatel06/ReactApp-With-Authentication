const bcrypt = require("bcrypt");

//encode
exports.encodePassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    console.log(error.message);
  }
};

exports.comparePassword = async (registeredPassword, enteredPassword) => {
  try {
    const isSame = await bcrypt.compare(enteredPassword, registeredPassword);
    return isSame;
  } catch (error) {
    console.log(error.message);
  }
};
