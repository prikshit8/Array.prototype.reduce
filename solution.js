/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  const result = initialValue; // this can be undefined as well
  if (this.length === 0 && initialValue === undefined) {
    throw "empty array";
  }
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== undefined) {
      if (result === undefined) {
        result = this[i];
      } else {
        result = callbackFn(result, this[i], i, this);
      }
    }
  }
  return result;
};
