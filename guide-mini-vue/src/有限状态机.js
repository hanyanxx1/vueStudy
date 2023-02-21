function test(string) {
  let i;
  let startIndex;
  let endIndex;
  let result = [];

  function waitForA(char) {
    if (char === "a") {
      startIndex = i;
      return waitForB;
    }
    return waitForA;
  }
  function waitForB(char) {
    if (char === "b") {
      return waitForC;
    }
    return waitForA;
  }
  function waitForC(char) {
    if (char === "c" || char === "d") {
      endIndex = i;
      return end;
    }
    return waitForA;
  }
  function end() {
    return end;
  }

  let currentState = waitForA;

  for (i = 0; i < string.length; i++) {
    let nextState = currentState(string[i]);
    currentState = nextState;

    if (currentState === end) {
      console.log(startIndex, endIndex);
      result.push({
        start: startIndex,
        end: endIndex,
      });
      console.log(result);
      currentState = waitForA;
    }
  }
}

// console.log(test("abc")); // true
// console.log(test("aca")); // false
// console.log(test("acabc")); // true
// console.log(test("acabb")); // false
console.log(test("dabcsfgsabcdfgabdsd")); // false
