/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Icon from "awesome-react-icons";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
//input창으로 수정 하는 TodoList
const TodoContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  width: 100%;
`;

const TodoAddition = css`
  position: sticky;
  top: 0px;
  box-sizing: border-box;
  margin-bottom: 20px;
  border-radius: 7px;
  padding: 10px;
  width: 600px;
  height: 60px;

  background-color: #eee;
`;

const AdditionInput = css`
  box-sizing: border-box;
  outline: none;
  border: none;
  border-bottom: 3px solid white;
  padding: 0px 50px 0px 10px;

  width: 100%;
  height: 100%;

  font-size: 1.2rem;
  background-color: #eee;
`;

const TodoAddButton = css`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  width: 35px;
  height: 35px;

  background-color: #ffffff00;
  transition: 1s all;
  cursor: pointer;
  &:hover {
    right: 15px;
    transform: translateY(-50%) rotate(180deg) scale(1.5);
  }
`;

const TodoList = css`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  border-radius: 7px;
  padding: 10px;
  width: 600px;

  background-color: #dbdbdb;
`;

const TodoContent = css`
  width: 85%;
  height: 40px;
`;

const ItemGroup = css`
  display: flex;
  align-items: center;
  height: 40px;
`;

const ItemButton = css`
  display: flex;
  align-items: center;
  border: none;
  height: 100%;
  color: #999;
  background-color: #ffffff00;
  cursor: pointer;
  &:hover {
    color: #121212;
  }
`;

const Todo_ex = () => {
  const [input, setInput] = useState({
    id: 0,
    content: "",
    modifyFalg: false,
  });

  const [todoList, setTodoList] = useState([]);

  const todoId = useRef(1);

  const onChange = (e) => {
    setInput({
      ...input,
      content: e.target.value,
    });
  };

  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      onClick();
    }
  };

  const onClick = () => {
    const todo = {
      ...input,
      id: todoId.current++,
    };
    setTodoList([...todoList, todo]);
    setInput({ ...input, content: "" });
  };

  const onRemove = (id) => {
    setTodoList(
      todoList.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const modifyChange = () => {};

  const onModify = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          setInput({ ...input });
          todo.modifyFalg = true;
        } else {
          todo.modifyFalg = false;
        }
        return todo;
      })
    );
  };

  const onSave = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...input };
        }
        return todo;
      })
    );
  };

  return (
    <div css={TodoContainer}>
      <div css={TodoAddition}>
        <input
          css={AdditionInput}
          type="text"
          placeholder="Add your new Todo"
          onChange={onChange}
          onKeyUp={onKeyUp}
          value={input.content}
        />
        <button css={TodoAddButton} onClick={onClick}>
          <Icon name="plus" />
        </button>
      </div>
      {todoList.map((todo) => {
        return (
          <div css={TodoList} key={todo.id}>
            <div css={TodoContent}>
              {todo.modifyFalg ? (
                <input
                  css={AdditionInput}
                  type="text"
                  placeholder="Add your new Todo"
                  onChange={modifyChange}
                />
              ) : (
                todo.content
              )}
            </div>
            <div css={ItemGroup}>
              {todo.modifyFalg ? (
                <button css={ItemButton} onClick={() => onSave(todo.id)}>
                  <Icon name="check" />
                </button>
              ) : (
                <button css={ItemButton} onClick={() => onModify(todo.id)}>
                  <Icon name="edit-pencil-simple" />
                </button>
              )}

              <button css={ItemButton} onClick={() => onRemove(todo.id)}>
                <Icon name="trash" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo_ex;
