import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap';
import Lottie from 'react-lottie';
import animationData from '../components/assets/login.json';
import { loginAPI, registerAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { tokenAuthorizationContext } from '../components/context/TokenAuth';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};


function Auth({ register }) {
    const {isAuthenticated, setIsAuthenticated} = useContext(tokenAuthorizationContext)
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        username: "", email: "", password: ""
    })

    const isRegisterform = register ? true : false

    // register
    const handleRegister = async (e) => {
        e.preventDefault()
        const { username, email, password } = userData

        if (!username || !email || !password) {
            alert('Please fill the missing fields')
        }
        else {
            const result = await registerAPI(userData)
            console.log(result);
            if (result.status === 200) {
                console.log(result);
                alert(`${result.data.username} has registered successfully`)
                setUserData({
                    username: "", email: "", password: ""
                })
                navigate('/login')
            } else {
                alert(result.response.data)
                console.log(result);
            }
        }

    }

    const handlelogin = async (e) => {
        console.log("asdkjkjhshdkadh");
        e.preventDefault()
        const { email, password } = userData
        if (!email || !password) {

            // toast.warning("All fields are required");
            alert("All fields are required");

        } else {
            const result = await loginAPI(userData)
            console.log(result);
            if (result.status === 200) {
                console.log(result);
                //toast.success(${result.data.username} has registered successfully);
                sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
                sessionStorage.setItem("token", result.data.token)
                setIsAuthenticated(true)
                setUserData({
                    username: "", password: ""
                })
                navigate('/')
            } else {
                toast.error(result.response.data)
                console.log(result);
            }
        }
    }

    return (
        <div style={{ width: '100', height: '100vh', marginTop: '100px' }}>
            <div className='container w-75'>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'blue' }}><i class="fa-solid fa-arrow-left"></i>Back to Home</Link>
                <div className='card shadow p-5 bg-info'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            {/* <img src="https://cdn.dribbble.com/users/2234430/screenshots/8587843/media/5a7b6b3be7edd17ae98a25d010277e62.gif" className='rounded-start w-100' alt="" /> */}
                            <Lottie
                                options={defaultOptions}
                                height={550}
                                width={550}
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center flex-column">
                                <h1 className='fw-bolder text-dark mt-2'><i className='fa-brands fa-stack-overflow fa-bounce'></i> Project fair</h1>
                                <h5 className='fw-bolder mt-4 pb-3 text-dark'>
                                    {
                                        isRegisterform ? 'Sign up to Your Account' : 'Sign in to Your Account'
                                    }
                                </h5>
                                <Form className='text-light w-100'>
                                    {
                                        isRegisterform &&

                                        <Form.Group className="mb-3" controlId="formBasicEmail">

                                            <Form.Control type="email" placeholder="Enter username" value={userData.username} onChange={e => setUserData({
                                                ...userData, username: e.target.value
                                            })} />

                                        </Form.Group>

                                    }

                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                        <Form.Control type="email" placeholder="Enter email" value={userData.email} onChange={e => setUserData({
                                            ...userData, email: e.target.value
                                        })} />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                        <Form.Control type="text" placeholder="Enter password" value={userData.password} onChange={e => setUserData({
                                            ...userData, password: e.target.value
                                        })} />

                                    </Form.Group>
                                    {
                                        isRegisterform ?
                                            <div>
                                                <button className='btn btn-light mb-2' onClick={handleRegister} >
                                                    Register
                                                </button>
                                                <p>
                                                    Already have an account?Click here to <Link to={'/login'} style={{ textDecoration: 'none', color: 'blue' }}>Login</Link>
                                                </p>
                                            </div> :
                                            <div>
                                                <button className='btn btn-light mb-2' onClick={handlelogin} >
                                                    Login
                                                </button>
                                                <p>
                                                    New User?Click here to <Link to={'/register'} style={{ textDecoration: 'none', color: 'red' }}>Register</Link>
                                                </p>
                                            </div>

                                    }
                                </Form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth