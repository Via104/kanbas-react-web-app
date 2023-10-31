import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import DynamicStyling from "./DynamicStyling";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todo/TodoList";
import { useSelector } from "react-redux";

function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);
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
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <TodoList />
      <ConditionalOutput />
      <Styles />
      <Classes />
      <JavaScript />
      <PathParameters />
      <DynamicStyling />
    </div>
  );
}
export default Assignment3;