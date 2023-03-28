/** @jsxImportSource @emotion/react */
import React from "react";
import * as S from "./style.js";
import TodoListButton from "./TodoListButton/TodoListButton.js";
import Icon from "awesome-react-icons";

const TodoList = ({ todo, openModal, onRemove }) => {
  return (
    <div css={S.TodoList} key={todo.id}>
      <div css={S.TodoContent}>{todo.content}</div>
      <div css={S.ItemGroup}>
        <TodoListButton onClick={() => openModal(todo.id)}>
          <Icon name="edit-pencil-simple" />
        </TodoListButton>
        <TodoListButton onClick={() => onRemove(todo.id)}>
          <Icon name="trash" />
        </TodoListButton>
      </div>
    </div>
  );
};

export default TodoList;
