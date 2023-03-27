/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";

const UserList = () => {
  useEffect(() => {
    console.log("컴포넌트 렌더링");
  }, []);

  const user = {
    id: 0,
    username: "",
    password: "",
    name: "",
    email: "",
    modifyFlag: false, //각각의 유저마다 boolean값을 넣어서 수정할지 안할지 선택하기위해 Flag를 만듬
  };

  const userIndex = useRef(1);
  const [users, setUsers] = useState([]);
  const [inputs, setInputs] = useState(user);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const addButtonRef = useRef();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
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
      if (index !== 0) {
        inputRefs[index].current.focus();
      }
    }
  };

  const addHandler = () => {
    const user = {
      ...inputs,
    };
    console.log(user);
    user.id = userIndex.current++;

    setUsers([...users, user]);
  };

  const onRemove = (index) => {
    // users.splice(index - 1, 1);
    // setUsers([...users]);

    setUsers(users.filter((user) => user.id !== index));
  };

  const onModify = (index) => {
    //해당 유저를 수정하는 함수
    setUsers(
      //setUsers를 이용해 유저의 상태가 변화된다.
      users.map((user) => {
        //map을 써서 해당 유저와 클릭했을때 해당 user.id의 index의 값이 같으면
        if (user.id === index) {
          setInputs({ ...user });
          user.modifyFlag = true;
        } else {
          user.modifyFlag = false;
        }
        return user;
      })
    );
  };

  const onSave = (index) => {
    // 해당 유저의 수정된 값을 저장.
    setUsers(
      users.map((user) => {
        if (user.id === index) {
          return {
            ...inputs,
            // id: user.id,
          };
        }
        return user;
      })
    );
  };

  return (
    <div css={S.container}>
      <div>
        <input
          css={S.Input}
          type="text"
          onKeyUp={keyupHandler}
          onChange={inputHandler}
          placeholder="username"
          name="username"
          ref={inputRefs[0]}
        />
        <input
          css={S.Input}
          type="text"
          onKeyUp={keyupHandler}
          onChange={inputHandler}
          placeholder="password"
          name="password"
          ref={inputRefs[1]}
        />
        <input
          css={S.Input}
          type="text"
          onKeyUp={keyupHandler}
          onChange={inputHandler}
          placeholder="name"
          name="name"
          ref={inputRefs[2]}
        />
        <input
          css={S.Input}
          type="text"
          onKeyUp={keyupHandler}
          onChange={inputHandler}
          placeholder="email"
          name="email"
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
            <th css={S.ThAndTd}>update</th>
            <th css={S.ThAndTd}>delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              //key라는 props를 이용해서 이 부분만 재랜더링을 할 수 있다.
              <tr key={user.id}>
                <td css={S.ThAndTd}>{user.id}</td>
                <td css={S.ThAndTd}>
                  {user.modifyFlag ? ( //수정버튼을 누르면 input태그로 바뀐다. modifyFlag를 이용해서
                    <input
                      type="text"
                      onKeyUp={keyupHandler}
                      onChange={inputHandler}
                      placeholder="username"
                      name="username"
                      ref={inputRefs[0]}
                      defaultValue={user.username}
                    />
                  ) : (
                    user.username
                  )}
                </td>
                <td css={S.ThAndTd}>
                  {user.modifyFlag ? (
                    <input
                      type="text"
                      onKeyUp={keyupHandler}
                      onChange={inputHandler}
                      placeholder="password"
                      name="password"
                      ref={inputRefs[1]}
                      defaultValue={user.password}
                    />
                  ) : (
                    user.password
                  )}
                </td>
                <td css={S.ThAndTd}>
                  {user.modifyFlag ? (
                    <input
                      type="text"
                      onKeyUp={keyupHandler}
                      onChange={inputHandler}
                      placeholder="name"
                      name="name"
                      ref={inputRefs[2]}
                      defaultValue={user.name}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td css={S.ThAndTd}>
                  {user.modifyFlag ? (
                    <input
                      type="text"
                      onKeyUp={keyupHandler}
                      onChange={inputHandler}
                      placeholder="email"
                      name="email"
                      ref={inputRefs[3]}
                      defaultValue={user.email}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td css={S.ThAndTd}>
                  {user.modifyFlag ? (
                    <button onClick={() => onSave(user.id)}>확인</button> //user정보를 수정하기위해 두개의버튼을 만들고 수정할 유저만 수정시키기위해 user.id 즉 index값을 넘긴다.
                  ) : (
                    <button onClick={() => onModify(user.id)}>수정</button>
                  )}
                </td>
                <td css={S.ThAndTd}>
                  <button onClick={() => onRemove(user.id)}>삭제</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
