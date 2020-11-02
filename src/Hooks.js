

// import React, { useState } from 'react'




// const Form = () => {

//     const [name, setName] = useState('')
//     const [username, setUserName] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')
//     const [email, setEmail] = useState('')
//     const [phone, setPhone] = useState('')

//     const handleChangeName = (e) => {
//         setName({ name: e.target.value })

//     }
//     const handleChangeUserName = (e) => {
//         setUserName({ username: e.target.value })

//     }
//     const handleChangePassword = (e) => {
//         setPassword({ password: e.target.value })
//     }
//     const handleChangeConfirmPassword = (e) => {
//         setConfirmPassword({ confirmpassword: e.target.value })
//     }
//     const handleChangeEmail = (e) => {
//         setEmail({ email: e.target.value })
//     }
//     const handleChangePhone = (e) => {
//         setPhone({ phone: e.target.value })
//     }

//     const onSubmit = (e) => {
//         if (password === confirmPassword) {
//             const info = { name, username, password, confirmPassword, email, phone }

//             console.log(info)
//         }
//         else {
//             alert('Passwords did not Match. Try Again')
//         }


//     }
//     return (
//         <div>
//             <form>
//                 <input
//                     type="text"
//                     name="Name"
//                     placeholder="Name"
//                     onChange={handleChangeName}
//                 />
//                 <input
//                     type="text"
//                     name="Name"
//                     placeholder="UserName"
//                     onChange={handleChangeUserName}
//                 />

//                 <input
//                     type="password"
//                     name="Password"
//                     placeholder="password"
//                     onChange={handleChangePassword}
//                 />

//                 <input
//                     type="password"
//                     name="confirmPassword"
//                     placeholder="Confirm Password"
//                     onChange={handleChangeConfirmPassword}
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     onChange={handleChangeEmail}

//                 /><input
//                     type="phone"
//                     name="Phone"
//                     placeholder="Phone no."
//                     onChange={handleChangePhone}

//                 />



//                 <button onClick={onSubmit}>  Login</button>
//             </form>


//         </div>
//     )
// }

// export default Form


//ComponentDidMount replacement with useEffect


// const Component = () => {
//   useEffect(() => {
//     console.log("Behavior before the component is added to the DOM");
//   },[]);
//   return <h1>Hello World</h1>;
// };
// export default Component



// ComponentDidUpdate replacement with UseEffect

// const Component = () => {
//   useEffect(() => {
//     console.log("Behavior before the component is added to the DOM");
//   });
//   return <h1>Hello World</h1>;
// };
// export default Component




// ComponentWIllUnmount

// const Component = () => {
//   useEffect(() => {
//     return () => {
//       console.log("Behavior before the component is added to the DOM");
//     }
//   }, []);
//   return <h1>Hello World</h1>;
// };
// export default Component






