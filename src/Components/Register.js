import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';
import "./Register.css"

function Register() {
    const [name,setName]=useState('')
    const[userName,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const[mobile,setMobile]=useState('')
    const [error,setError]=useState(false)
    const[isChecked,setIsChecked]=useState(true)
    const navigate =useNavigate()

    function submitHandler(e){
        e.preventDefault()
        console.log(name,userName,email,mobile,isChecked)
        if (name.length|userName.length|email.length|mobile.length<=0 & isChecked){
            setError(true)
        }
    }
    function clickHandler(e){
        if (name&&userName&&email&&mobile){
            localStorage.setItem('name', name);
            localStorage.setItem('userName',userName)
            localStorage.setItem('email',email)
            localStorage.setItem('mobile',mobile)
            navigate('/Category')
        }
    }



    return(
        <div className="main-container">
            <div className="left-section">
                <p className="descriptions" style={{width: 695}}>Discover new things on Superapp</p>
            </div>
            <div className="right-section">
                <div className="app">
                    <h1 className="heading">Super App</h1>
                    <p className="newaccount">Create your new account</p>
                </div>
                <form className="form" onSubmit={submitHandler}>
                    <input type="text" placeholder="Name" className="input" onChange={e=>setName(e.target.value)}/>
                    {error&& name.length<=0 ? <label className="error">Field is required</label>:""}
                    <input type="text" placeholder="UserName" className="input" onChange={e=>setUserName(e.target.value)}/>
                    {error&& userName.length<=0 ? <label className="error">Field is required</label>:""}
                    <input type="email" placeholder="Email" className="input" onChange={e=>setEmail(e.target.value)}/>
                    {error&& email.length<=0? <label className="error">Field is required</label>:""}
                    <input type="number" placeholder="Mobile" className="input" onChange={e=>setMobile(e.target.value)}/>
                    {error&& mobile.length<=0? <label className="error">Field is required</label>:""}
                    <div className="consent">
                        <input type="checkbox" id="oktoshare" onChange={e=>setIsChecked(false)}/>
                        <label for="oktoshare" className="label"> Share my registration data with Superapp</label>
                    </div>
                    {error&&isChecked?<label className="error">Check this box if you want to proceed</label>:""}
                    <button className="button" onClick={clickHandler} type="submit">SIGN UP</button>
                </form>
                <div className="terms">
                    <p className="conditions">By clicking on Sign up. you agree to Superapp<span className="policy">Terms and Conditions of Use</span></p>
                    <p className="conditions">To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp<span className="policy">Privacy Policy</span></p>
                </div>
            </div>
        </div>
    );
}

export default Register