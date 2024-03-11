import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app';
import { collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from '../config/firestore';
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const SignupPage = ({setCurrentPage}) => {
    const [formValue, setFormValue] = useState({email: '', password: ''}); 
    const HandleInputs = (event) => {
        const {name, value} = event.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    }
  return (
    <div>
        <div className='flex justify-center w-full h-screen items-center bg-black bg-[url("assets/images/bg.jpg")] bg-cover bg-blend-multiply bg-opacity-40'>
            <div className='w-[30%] h-fit bg-white p-5 py-10'>
                <form  action="" className='flex flex-col text-center justify-center placeholder:text-center'>
                    <input type="text" name='username'    onChange={HandleInputs} value={formValue.email} placeholder='Username' className='placeholder:text-center text-center shadow-lg p-2' required /><br />
                    <input type="text" name='email' onChange={HandleInputs} value={formValue.password} placeholder='Email' className='placeholder:text-center text-center shadow-lg p-2' required /><br />
                    <input type="text" name='password' onChange={HandleInputs} value={formValue.password} placeholder='Password' className='placeholder:text-center text-center shadow-lg p-2' required /><br />
                    <input type="text" name='cpassword' onChange={HandleInputs} value={formValue.password} placeholder='Confirm Password' className='placeholder:text-center text-center shadow-lg p-2' required /><br />
                    <button type='submit' className='w-full bg-slate-900 p-5 text-3xl text-white hover:bg-black'>DONE</button>
                </form>
                <div className='flex flex-col items-center justify-center mt-10 w-full h-fit'>
                    <button onClick={() => setCurrentPage(0)} className='flex items-center'>LOGIN</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SignupPage