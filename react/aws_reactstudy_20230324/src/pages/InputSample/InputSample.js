import React, { useRef, useState } from "react";

const InputSample = () => {
  const userInfo = {
    username: "",
    password: "",
  };
  const [userInput, setUserInput] = useState(userInfo);
  const [userInputText, setUserInputText] = useState(userInfo);

  const { username, password } = userInputText;

  const passwordRef = useRef();

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value }); // 기존의 값을 key: value로 덮음
  };

  const nextFocus = (e) => {
    if (e.keyCode === 13) {
      passwordRef.current.focus();
    }
  };

  const submitHandler = (e) => {
    if (e.keyCode === 13) {
      setUserInputText({ ...userInput });
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={handlerChange}
        onKeyUp={nextFocus}
        name="username"
      />
      <input
        type="text"
        onChange={handlerChange}
        onKeyUp={submitHandler}
        name="password"
        ref={passwordRef}
      />
      <div>username: {username}</div>
      <div>password: {password}</div>
    </div>
  );
};

export default InputSample;
