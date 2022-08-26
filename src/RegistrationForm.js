import React,{useState}  from 'react'
//import { Button } from 'src/Button'
//import { Header } from "src/Header";

 export const RegistrationForm=()=>{

    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [finalFirstName,setFinalFirstName]=useState(firstName)
    const [finalLastName,setFinalLastName]=useState(lastName)

    const onButtonClick=(methodName,param)=>{
        methodName(param)    
    }

    return <div>
        <Header />
        <h6>Personal Details</h6>
           First Name {finalFirstName} {finalLastName}

           <input type="text" value={firstName} onChange={(a)=>{console.log(a.target.value);
            setFirstName(a.target.value) 
        }}/>
         <input type="text" value={lastName} onChange={(a)=>{console.log(a.target.value);
            setLastName(a.target.value)
        }}/>
        
        <h6>Educational Details</h6>

        <Button clickEvent={onButtonClick} updateStateMethod ={setFinalFirstName} stateVariable={firstName} label='Change first name'/>
        <Button clickEvent={onButtonClick} updateStateMethod ={setFinalLastName} stateVariable={lastName} label='Change last name'/>
        
        
    </div>
}
//export default RegistrationForm;



    
                            