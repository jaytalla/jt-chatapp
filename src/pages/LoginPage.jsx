import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app';
import { collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from '../config/firestore';
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";


const LoginPage = ({setIsAuthenticated, setCurrentPage}) => {
    // FOR GOOGLE AUTH 
    const provider = new GoogleAuthProvider();


    // REDIRECT 
    // history.push('/SignupPage');

    const [formValue, setFormValue] = useState({email: '', password: ''}); 
    const test = async() => {
        const q = query(collection(db, "users"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    }

    useEffect(() => {
        test();
    },[])

    const HandleInputs = (event) => {
        const {name, value} = event.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    const LoginWithGoogle = async(event) => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            // alert("Login Success!");
            // SET VALUES TO LOCAL STORAGE
            localStorage.setItem("email", result.user.email);
            setIsAuthenticated(true);
        }).catch((error) => {
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            alert("Login Failed!");
        });
    }

    const saveLocalStorage = () => {
        
    }


    const LoginAuth = async(event) => {
        if (formValue.email === '' || formValue.password === '') {
            alert('please input all the required fields.');
        } else {
            const auth = getAuth();
            event.preventDefault();
            try {
                await signInWithEmailAndPassword(auth, formValue.email, formValue.password);
                localStorage.setItem("email", formValue.email);
                alert("Login success");
            } catch (error) {
                alert("Login failed");
            }
        }
    }


    return (
    <div className='flex justify-center w-full h-screen items-center bg-black bg-[url("assets/images/bg.jpg")] bg-cover bg-blend-multiply bg-opacity-40'>
        <div className='w-[30%] min-w-[300px] md:min-w-[400px] h-fit bg-white p-5 py-10'>
            <form onSubmit={LoginAuth} action="" className='flex flex-col text-center justify-center placeholder:text-center'>
                <input type="text" name='email'    onChange={HandleInputs} value={formValue.email} placeholder='Username' className='placeholder:text-center text-center shadow-lg p-2' required /><br />
                <input type="text" name='password' onChange={HandleInputs} value={formValue.password} placeholder='Password' className='placeholder:text-center text-center shadow-lg p-2' required /><br />
                <button type='submit' className='w-full bg-slate-900 p-5 text-3xl text-white hover:bg-black'>LOGIN</button>
            </form>
            <div className='flex flex-col items-center justify-center mt-10 w-full h-fit'>
                <p className='p-2'>or</p>
                <button onClick={LoginWithGoogle} className='flex items-center'><FcGoogle className='text-xl mr-2' />LOGIN WITH GOOGLE</button>
                <button onClick={() => setCurrentPage(1)} className='flex items-center text-blue-700 mt-5'>Forgot account? Sign up for ChatApp</button>
            </div>
        </div>
        
    </div>
  )
}

export default LoginPage