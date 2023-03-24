import React, { useState } from 'react';

const InputSample = () => {
    const[username,setUsername] = useState("");
    const[password, setPassword] = useState("");

    const handlerChange= (e) =>{
        if(e.target.name === "username"){
            setUsername(e.target.value);
        }else{
            setPassword(e.target.value);
        }
    }
    
    return (
        <div>
            <input type="text" onChange={handlerChange} name="username" />
            <input type="text" onChange={handlerChange} name="password" />
            <div>username: {username}</div>
            <div>password: {password}</div>
        </div>
    );
};

export default InputSample;