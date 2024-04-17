import { Link, useNavigate } from "react-router-dom";
import registerBG from "../../images/register.webp"
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
const Register = () => {
    const {setUser , setLoading} = useContext(AuthContext);
    useEffect(() => {
        AOS.init();
    }, [])
    const [eyeCheck, setEyeCheck] = useState(false);
    const { createUser } = useContext(AuthContext);
    const naviGate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
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
            toast.error("Password should have at least one lowercase character.");
            return;
        }
        createUser(email, password)
            .then(res => {
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: photo,
                })
                .then(
                    () => {setUser({...res.user,displayName:name,photoURL:photo});}
                )
                e.target.reset();
                setLoading(true);
                naviGate('/');
                toast.success("User register successfully !!!");
            })
            .catch(err => {
                toast.error("Invalid information or user already created !!!");
            })
    }
    return (
        <div className="relative top-[67px] bg-cover mb-[67px] flex items-center bg-center bg-no-repeat md:h-[calc(100%-67px)] lg:h-[calc(1024px-67px)] w-full" style={{ backgroundImage: `url(${registerBG})` }}>
            <Helmet>
                <title> Elite Residences Hub | Register </title>
            </Helmet>
            <div className='backdrop-blur-sm bg-white/30 w-full h-full'>
                <div className="hero rounded-2xl lg:h-[800px]">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left md:w-1/2" data-aos="flip-left" data-aos-duration="1500">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#71b100]">Register now!</h1>
                            <p className="py-6 text-sm md:text-base">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div data-aos="flip-right" data-aos-duration="2000" className="card shrink-0 w-full max-w-sm md:w-1/2 shadow-2xl bg-base-100 border-2 border-[#82b440]">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your name" className="text-xs md:text-base input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo url" name="photo" className="input text-xs md:text-base input-bordered w-full max-w-xs" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input text-xs md:text-base input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={eyeCheck ? "text" : "password"} name="password" placeholder="Password" className="input text-xs md:text-base input-bordered" required />
                                    <Link className="absolute right-14 bottom-[150px] md:bottom-40" onClick={() => setEyeCheck(!eyeCheck)}> {eyeCheck ? <LuEyeOff className="w-5 h-5" /> : <LuEye className="w-5 h-5" />} </Link>
                                </div>
                                <div>
                                    <p className="text-xs md:text-base">Already in family? <Link to="/signin" className="font-bold text-[#82b440] hover:text-lg">SignIn Now!</Link></p>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#71b100] text-white hover:bg-transparent hover:border hover:border-[#8cbd52] hover:text-[#82b440]">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;