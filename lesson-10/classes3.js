class MathHelper {
  static quote = 'Math is great';
  static square(number) {
    return number * number;
  }
}

const instanceMath = new MathHelper();
console.log(instanceMath.quote)

console.log(MathHelper.square(5)); // 25
console.log(MathHelper.quote)