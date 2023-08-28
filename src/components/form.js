// import React from 'react'

// const form = () => {
//     const data= {name:"", email:"", password:""};
//     const [inputData, setInputData]= useState(data)
//     function handleData(e){
//         setInputData({...inputData}, [e.target.name] : e.target.value)
//         console.log(inputData)
//     }
//     function handleSubmit(e){
//         e.preventDefault();
        
//     }
//   return (
//    <form className='container'> onSubmit= {handleSubmit}
//     <div className='header'>
//         <h1> Registration Form </h1>
//     </div>
//     <div>
//         <input type='text' placeholder="Enter your Name"
//         name="name" value= {inputData.name} onChange= {handleData}></input>
//     </div>
//     <div>
//         <input type='text' placeholder="Enter your email"
//         name="email" value= {inputData.email} onChange= {handleData}></input>
//     </div> 
//     <div>
//         <input type='text' placeholder="Enter your password"
//         name="password" value= {inputData.password} onChange= {handleData}></input>
//     </div>
//     <div>
//         <button type='Submit'>Submit</button>
//     </div>
//    </form>
//   )
// }

// export default form
