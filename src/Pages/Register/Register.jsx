import { Link, useNavigate } from "react-router-dom";
import registerBG from "../../images/register.webp"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
const Register = () => {
    const { createUser } = useContext(AuthContext);
    const naviGate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            setLoginError("Password should be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setLoginError("Password should have one uppercase character");
            return;
        }
        else if (!/[0-9]/.test(password)) {
            setLoginError("Password should have one number init.");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setLoginError("Password should have at least one lowercase character.");
            return;
        }
        console.log(name, email, password);
        createUser(email, password)
            .then(res => {
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: photo,
                })
                e.target.reset();
                naviGate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="relative top-[67px] bg-cover flex items-center bg-center bg-no-repeat md:h-[calc(100%-67px)] lg:h-[calc(100vh-67px)] w-full" style={{ backgroundImage: `url(${registerBG})` }}>
            <div className='px-2 md:px-0 backdrop-blur-sm bg-white/30 w-full h-full'>
                <div className="hero rounded-2xl lg:h-[800px]">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left md:w-1/2">
                            <h1 className="text-5xl font-bold text-[#71b100]">Register now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm md:w-1/2 shadow-2xl bg-base-100">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo url" name="photo" className="input input-bordered w-full max-w-xs" />
                                </div>
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