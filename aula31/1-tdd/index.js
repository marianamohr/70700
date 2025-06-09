const soma = (...nums) => {
  if (nums.length === 0) return 0;

  if (!nums.every((num) => typeof num === "number")) return null;

  return nums.reduce((acc, cur) => acc + cur);
  /* 
  refatoração do GEPETO
  return nums.length === 0
    ? 0
    : nums.every((n) => typeof n === "number")
    ? nums.reduce((a, b) => a + b)
    : null;
    */

  /*
  let validInput = true;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (typeof element !== "number") {
      validInput = false;
    }
  }
  if (!validInput) {
    return null;
  let soma = 0;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    soma = soma + element;
  }
  return soma;
  */

  /*
  if (typeof a === "string" || typeof b === "string") {
    return null;
  }
  if (a === undefined || b === undefined) {
    return 0;
  }

  return a + b;
  */
};

module.exports = soma;
