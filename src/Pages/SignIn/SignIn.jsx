import React, { useContext } from 'react';
import loginBG from "../../images/loginBG.png";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
    const naviGate = useNavigate();
    const { user, setUser, signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    console.log(user);
    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            alert("Password should be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setLoginError("Password should have one uppercase character");
            alert("Password should have one uppercase character");
            return;
        }
        else if (!/[0-9]/.test(password)) {
            alert("Password should have one number init.");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            alert("Password should have at least one lowercase character");
            return;
        }
        signInUser(email, password)
            .then(res => {
                console.log(res.user);
                e.target.reset();
                naviGate('/');
            })
            .catch(err => {
                console.error(err);
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                console.log(res.user);
                naviGate('/');
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    const handleGitHubSignIn = () => {
        signInWithGithub()
            .then(res => {
                console.log(res.user);
                naviGate('/');
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className="relative top-[67px] bg-cover flex items-center bg-center bg-no-repeat md:h-[calc(100%-67px)] lg:h-[calc(100vh-67px)] w-full" style={{ backgroundImage: `url(${loginBG})` }}>
            <div className='px-2 md:px-0 backdrop-blur-sm bg-white/30 w-full h-full'><div className="container mx-auto hero rounded-2xl md:h-[800px] ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#71b100]">SignIn now!</h1>
                        <p className="py-6 text-sm md:text-base">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control text-sm md:text-base">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered text-sm md:text-base" required />
                            </div>
                            <div className="form-control text-sm md:text-base">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered text-sm md:text-base" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-sm md:text-base">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <p className="text-xs md:text-base">New in AuthContext? <Link to="/register" className="font-bold text-[#82b440] hover:text-lg">SignUp Now!</Link></p>
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
