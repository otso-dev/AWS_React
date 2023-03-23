import React from "react";

function PropsTest({ username,name,email,handlerClick }){
    const user = {
        username,
        name,
        email
    };
    
    //const {username,name,email} = user;

    
    const testPrint = ({ username,name,email}) =>{ //비구조할당 할떄는 양끝을 띄워주는게 표준
        console.log(`username -> ${username}`);
        console.log(`name -> ${name}`);
        console.log(`email -> ${email}`);
    };

    testPrint(user);

    return(
        <>
            <h1>비구조화 할당</h1>
            <p>username - {username}</p>
            <p>name - {name}</p>
            <p>email - {email}</p>
            <button onClick={handlerClick}>클릭</button>
        </>
        
    );
}

export default PropsTest;