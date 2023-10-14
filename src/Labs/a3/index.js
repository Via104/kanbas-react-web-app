import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";

function Assignment3() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];

    let variableArray1 = [
      functionScoped,
      blockScoped,
      constant1,
      numberArray1,
      stringArray1,
    ];

    console.log('Working With Arrays');
    console.log('functionScoped = ', functionScoped);
    console.log('blockedScoped = ', blockScoped);
    console.log('constant1 = ', constant1);
    console.log('numberArray1 = ', numberArray1);
    console.log('stringArray1 = ', stringArray1);
    console.log('variableArray1 = ', variableArray1);

    return (
      <div>
        <h1>Assignment 3</h1>
        <JavaScript/>
        <PathParameters/>
      </div>
    );
  }
  export default Assignment3;