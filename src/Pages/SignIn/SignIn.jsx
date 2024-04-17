import React, { useContext, useState } from 'react';
import loginBG from "../../images/loginBG.png";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const SignIn = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const naviGate = useNavigate();
    const location = useLocation();
    const [eyeCheck, setEyeCheck] = useState(false);
    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            toast.error("Password should be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error("Password should have one uppercase character");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error("Password should have at least one lowercase character");
            return;
        }
        signInUser(email, password)
            .then(res => {
                e.target.reset();
                naviGate(location?.state ? location.state : "/");
                toast.success("Log In Successfully !!!");
            })
            .catch(err => {
                toast.error("Invalid Email or Password !!!");
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                toast.success("Log In Successfully !!!");
                naviGate('/');
            })
            .catch(err => {
                toast.error(err.message);
            })
    }
    const handleGitHubSignIn = () => {
        signInWithGithub()
            .then(res => {
                toast.success("Log In Successfully !!!");
                naviGate('/');
            })
            .catch(err => {
                toast.error(err.message);
            })
    }
    return (
        <div className="relative top-[67px] bg-cover mb-[67px] flex items-center bg-center bg-no-repeat md:h-[calc(100%-67px)] lg:h-[calc(1024px-67px)] w-full" style={{ backgroundImage: `url(${loginBG})` }}>
            <Helmet>
                <title> Elite Residences Hub | Sign-In </title>
            </Helmet>
            <div className='backdrop-blur-sm bg-white/30 w-full h-full'><div className="container mx-auto hero rounded-2xl md:h-[800px] ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left" data-aos="flip-left" data-aos-duration="1500">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#71b100]">SignIn now!</h1>
                        <p className="py-6 text-sm md:text-base">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-[#82b440]" data-aos="flip-right" data-aos-duration="2000">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control text-xs md:text-base">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered text-xs md:text-base" required />
                            </div>
                            <div className="form-control text-xs md:text-base">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={eyeCheck ? "text" : "password"} name="password" placeholder="Password" className="input text-xs md:text-base input-bordered" required />
                                <Link className="absolute right-14 bottom-[278px]  md:bottom-[293px]" onClick={() => setEyeCheck(!eyeCheck)}> {eyeCheck ? <LuEyeOff className="w-5 h-5" /> : <LuEye className="w-5 h-5" />} </Link>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-xs md:text-base">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <p className="text-xs md:text-base">New in AuthContext? <Link to="/register" className="font-bold text-[#82b440] hover:text-lg">Register Now!</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#71b100] text-white hover:bg-transparent hover:border hover:border-[#8cbd52] hover:text-[#82b440]">Sign In</button>
                            </div>
                            <div className="divider">OR</div>
                            <div className='flex justify-center gap-x-4'>
                                <NavLink className="hover:tooltip hover:tooltip-open hover:tooltip-bottom" data-tip="Google" onClick={handleGoogleSignIn}><FcGoogle className="w-8 h-8 hover:border hover:border-[#8cbd52] hover:rounded-full hover:p-1" /></NavLink>
                                <NavLink className="hover:tooltip hover:tooltip-open hover:tooltip-bottom" data-tip="GitHub" onClick={handleGitHubSignIn}><FaGithub className="w-8 h-8 hover:border hover:border-[#8cbd52] hover:rounded-full hover:p-1" /></NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div></div>
        </div>
    );
};

export default SignIn;
