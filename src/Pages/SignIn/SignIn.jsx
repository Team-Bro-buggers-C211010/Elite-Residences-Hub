import React from 'react';
import loginBG from "../../images/loginBG.png";
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="relative top-[66px] bg-cover flex items-center bg-center bg-no-repeat md:h-[calc(100%-66px)] lg:h-[calc(100vh-66px)] w-full" style={{ backgroundImage: `url(${loginBG})` }}>
            <div className='backdrop-blur-sm bg-white/30 w-full h-full'><div className="container mx-auto hero rounded-2xl md:h-[800px] ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold text-[#71b100]">SignIn now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <p className="text-xs md:text-base">New in AuthContext? <Link to="/register" className="font-bold text-[#82b440] hover:text-lg">SignUp Now!</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#71b100] text-white hover:bg-transparent hover:border hover:border-[#8cbd52] hover:text-[#82b440]">Sign In</button>
                            </div>
                            <p className="flex justify-center"><button className="text-white btn btn-success">Google</button></p>
                        </form>
                    </div>
                </div>
            </div></div>
        </div>
    );
};

export default SignIn;
