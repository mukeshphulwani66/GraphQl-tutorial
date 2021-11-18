import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../gqloperations/mutations';

export default function Signup() {
    const [formData,setFormData] = useState({})
    const [signupUser,{data,loading,error}] = useMutation(SIGNUP_USER)

    if(loading) return <h1>Loading</h1>

    const handleChange = (e)=>{
        setFormData({
         ...formData,
         [e.target.name]:e.target.value
        })
    
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        signupUser({
            variables:{
                userNew:formData
            }
        })
    }
    return (
        <div className="container my-container">
            {
                error && 
                <div className="red card-panel">{error.message}</div>
            }

            {
                data && data.user &&
                <div className="green card-panel">{data.user.firstName} is SignedUp. You can login now!</div>
            }
            <h5>Signup!!</h5>
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 placeholder="First Name"
                 name="firstName"
                 onChange={handleChange}
                 required
                 />
                <input
                 type="text"
                 placeholder="Last Name"
                 name="lastName"
                 onChange={handleChange}
                 required
                 />
                <input
                 type="email"
                 placeholder="email"
                 name="email"
                 onChange={handleChange}
                 required
                 />
                <input
                 type="password"
                 placeholder="password"
                 name="password"
                 onChange={handleChange}
                 required
                 />
                  <Link to="/login"><p>Already have an account ?</p></Link> 
                 <button className="btn #673ab7 deep-purple" type="submit">Submit</button>
            </form>
        </div>
    )
}
