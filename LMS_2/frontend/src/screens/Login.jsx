import React , { useState }from 'react'
import Logo from '../assets/logo.svg'
import Message from '../assets/Message.svg'
import Lock from '../assets/Lock.svg'
import CustomInput from '../components/CustomInput'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()
    const formData = {
        email: email,
        password: password
    }

    const handleLogin = async () => {
        try{
            const res = await axios.post("http://localhost:3000/api/v1/user/login", formData);
            console.log(res);
            alert(res.data) 
            navigate('/dashboard');
        }catch(e){
            console.log(e);
        }
    }

    return (
        <div className='bg-[#F4F5FA] h-screen flex justify-center items-center'>
            <div className="px-[34px] py-[44px] w-fit bg-white flex flex-col justify-center rounded-[12px]">
                <div className='flex flex-col items-center gap-[30px]'>
                    <img className='w-[50px]' src={Logo} alt="Logo" />
                    <div className='flex flex-col items-center'>
                        <p className='font-[inter] text-[20px] font-medium leading-normal'>Welcome back!</p>
                        <p className='font-[inter] text-[14px] text-[#8b8d97] font-normal'>Login to your account</p>
                    </div>
                </div>
                <div className='mt-[60px] flex flex-col gap-[30px]'>
                    <CustomInput onChange={(e) => setEmail(e.target.value)} showIcon={true} iconSrc={Message} placeholder="Email Address" />
                    <CustomInput onChange={(e) => setPassword(e.target.value)} showIcon={true} iconSrc={Lock} placeholder="Password" />
                </div>
                <div className='mt-[12px]'>
                    <h1 className='text-[#5570F1] font-[inter] text-[14px] text-end'>Recover Password</h1>
                </div>
                <div className='my-[48px]'>
                    <h1 className='text-[#8B8D97] font-[inter] text-[14px] text-center'>Don't have an account? <span className='text-[#5570F1]'> Sign Up </span></h1>
                </div>
                <div className='flex justify-center'>
                    <button onClick={handleLogin} className='px-[16px] py-[17px] w-[148px] bg-[#5570F1] text-white font-[inter] text-[20px] rounded-[12px]' >Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login