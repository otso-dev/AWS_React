/** @jsxImportSource @emotion/react */
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import * as S from "./style";

const Todo = () => {
  const todo = {
    id: 0,
    comment: "",
    modifyFlag: false,
  };
  const todoIndex = useRef(1);
  const inputRef = useRef();
  const [todoList, setTodo] = useState([]);
  const [input, setInput] = useState(todo);

  const addTodoHandler = () => {
    console.log("add");
    const addtodo = {
      ...input,
    };
    console.log(addtodo);
    addtodo.id = todoIndex.current++;
    setTodo([...todoList, addtodo]);
  };

  const inputHandler = (e) => {
    console.log("input");
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const keyupHandler = (e) => {
    if (e.keyCode === 13) {
      inputRef.current.click();
    }
  };

  const onRemove = (index) => {
    console.log(index);
    setTodo(todoList.filter((todo) => todo.id !== index));
  };

  const onModify = (index) => {
    setTodo(
      todoList.map((todo) => {
        if (todo.id === index) {
          setInput({ ...input });
          todo.modifyFlag = true;
        } else {
          todo.modifyFlag = false;
        }
        return todo;
      })
    );
  };

  const onSave = (index) => {
    setTodo(
      todoList.map((todo) => {
        if (todo.id === index) {
          return {
            ...input,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div css={S.Container}>
      <div>
        <input
          type="text"
          placeholder="Todo"
          onKeyUp={keyupHandler}
          onChange={inputHandler}
          name="comment"
        />
        <button onClick={addTodoHandler} ref={inputRef}>
          추가
        </button>
        <h1 css={S.Header}>TodoList</h1>
        <ul css={S.Ul}>
          {todoList.map((todo) => {
            return (
              <li css={S.Li} key={todo.id}>
                {todo.modifyFlag ? (
                  <input
                    type="text"
                    placeholder="Todo"
                    onKeyUp={keyupHandler}
                    onChange={inputHandler}
                    name="comment"
                  />
                ) : (
                  todo.comment
                )}
                <div>
                  {todo.modifyFlag ? (
                    <button onClick={() => onSave(todo.id)}>확인</button>
                  ) : (
                    <button onClick={() => onModify(todo.id)}>수정</button>
                  )}

                  <button onClick={() => onRemove(todo.id)}>삭제</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
