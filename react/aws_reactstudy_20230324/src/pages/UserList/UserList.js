/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";

const UserList = () => {
  useEffect(() => {
    console.log("component rendering");
  }, []);

  const user = {
    id: 0,
    username: "",
    pasword: "",
    name: "",
    email: "",
  };

  const [inputs, setInput] = useState(user);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const addButtonRef = useRef();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...inputs, [name]: value });
  };

  const keyupHandler = (e) => {
    if (e.keyCode === 13) {
      let index = 0;
      switch (e.target.name) {
        case "username":
          index = 1;
          break;
        case "password":
          index = 2;
          break;
        case "name":
          index = 3;
          break;
        default:
          addButtonRef.current.click();
      }
    }
  };

  const addHandler = () => {};

  const users = [
    {
      id: 1,
      username: "aaa",
      password: "1234",
      name: "AAA",
      email: "aaa@gmail.com",
    },
    {
      id: 2,
      username: "bbb",
      password: "1234",
      name: "bbb",
      email: "bbb@gmail.com",
    },
    {
      id: 3,
      username: "ccc",
      password: "1234",
      name: "ccc",
      email: "ccc@gmail.com",
    },
  ];

  const userIndex = useRef(4);

  return (
    <div css={S.container}>
      <div>
        <input
          type="text"
          onKeyUp={keyupHandler}
          onChange={inputHandler}
          placeholder="username"
          name="username"
          value={0}
          ref={inputRefs[0]}
        />
        <input
          type="text"
          onKeyUp={keyupHandler}
          onChange={inputHandler}
          placeholder="password"
          name="password"
          value={0}
          ref={inputRefs[1]}
        />
        <input
          type="text"
          onKeyUp={keyupHandler}
          onChange={inputHandler}
          placeholder="name"
          name="name"
          value={0}
          ref={inputRefs[2]}
        />
        <input
          type="text"
          onKeyUp={keyupHandler}
          onChange={inputHandler}
          placeholder="email"
          name="email"
          value={0}
          ref={inputRefs[3]}
        />
        <button type="button" onClick={addHandler} ref={addButtonRef}>
          추가
        </button>
      </div>
      <table css={S.table}>
        <thead>
          <tr>
            <th css={S.ThAndTd}>index</th>
            <th css={S.ThAndTd}>username</th>
            <th css={S.ThAndTd}>password</th>
            <th css={S.ThAndTd}>name</th>
            <th css={S.ThAndTd}>email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            userIndex.current += 1;
            return (
              <tr>
                <td css={S.ThAndTd}>{user.id}</td>
                <td css={S.ThAndTd}>{user.username}</td>
                <td css={S.ThAndTd}>{user.password}</td>
                <td css={S.ThAndTd}>{user.name}</td>
                <td css={S.ThAndTd}>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
