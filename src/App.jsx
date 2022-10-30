// import { useState, createContext, useContext } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// const UserContext = createContext();

// function App() {
//     const [user, setUser] = useState("Iqbal");

//     const changeName = () => {
//         setUser("King");
//     }

//     return(
//         <>
//             <UserContext.Provider value={user}>
//                 <h1>{`hello ${user}`}</h1>
//                 <Child />
//                 <button onClick={changeName}>change</button>
//             </UserContext.Provider>
//         </>
//     );
// }

// function Child () {
//     return(
//         <>
//             <h1>Child Component</h1>
//             <GrandCHild />
//         </>
//     );
// }

// function GrandCHild () {
//     const user = useContext(UserContext);

//     return(
//         <>
//             <h1>{`Grand Child Component of ${user}`}</h1>
//         </>
//     );
// }

// export default App

import { useState } from 'react';

function App() {
    const [inputs, setinputs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setinputs((values) => ({...values, [name]: value}))
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name 
                    <input 
                        type="text"
                        value={inputs.userName || ""}
                        name="userName"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Age 
                    <input 
                        type="text"
                        value={inputs.age || ""}
                        name="age"
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" />
            </form>

            <div>
                {`created_by: ${inputs.userName}    updated_by: ${inputs.age}`}
            </div>
        </>
    );
}

export default App