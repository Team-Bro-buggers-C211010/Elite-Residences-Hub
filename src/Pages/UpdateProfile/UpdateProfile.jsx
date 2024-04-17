import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const UpdateProfile = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const { user, setUser } = useContext(AuthContext);
    const handleUpdateProfile = (e) => {
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        if (name !== "" && photo !== "") {
            updateProfile(user, {
                displayName: name,
                photoURL: photo,
            })
                .then(() => { 
                    setUser({ ...user, displayName: name, photoURL: photo }) 
                    alert("User Name & Photo URL is updated !!!")
                })
                .catch()
        }
        else if (name !== "" && photo === "") {
            updateProfile(user, {
                displayName: name,
            })
                .then(() => {
                    setUser({ ...user, displayName: name })
                    toast.success("User Name is updated !!!")
                })
                .catch()
        }
        else if (name === "" && photo !== "") {
            updateProfile(user, {
                photoURL: photo,
            })
                .then(() => { 
                    setUser({ ...user, photoURL: photo })
                    toast.success("User Photo URL is updated !!!")
                })
                .catch()
        }
        else {
            toast.warning("Nothing is updated!!!")
        }
    }
    return (
        <div className='relative top-[67px] mt-6 md:mt-10 container mx-auto mb-24 px-1 md:px-0'>
            <Helmet>
                <title> {user.displayName} | Elite Residences Hub </title>
            </Helmet>
            <div data-aos="fade-down" data-aos-duration="1000" className="mx-auto mb-6 border border-[#23BE0A] md:p-5 w-full md:w-1/4 font-bold text-white text-2xl rounded-2xl flex items-center justify-center shadow-lg h-24 bg-[#70b100e1]">User Details</div>
            <div className="text-center font-semibold mb-5 text-2xl fontWorkSans" data-aos="zoom-in-down" data-aos-duration="1500">Note: Only Name & Photo URL can be modified.</div>
            <div className='grid grid-cols-1 justify-center items-center gap-y-5'>
                <div data-aos="zoom-in" data-aos-duration="2000" className='h-64 w-64 mx-auto rounded-full border-2 border-[#8cbd52] p-2 shadow-inner flex justify-center items-center'>
                    <img src={user.photoURL} className='object-cover rounded-full w-60 h-60 shadow-xl' alt="" />
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col mx-auto gap-y-2 md:gap-y-3 md:w-1/2 bg-[#8cbd52] shadow-lg justify-center p-6 rounded-2xl">
                    <form onSubmit={handleUpdateProfile} className='space-y-2 md:space-y-4'>
                        <label className="input input-bordered flex items-center gap-x-2 text-xs md:text-base">
                            Name :
                            <input type="text" name='name' className="grow text-xs md:text-base" placeholder={user.displayName} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 text-xs md:text-base">
                            Email :
                            <input type="email" name='email' className="grow text-xs md:text-base" placeholder={user.email ? user.email : "Not Given by Provider"} disabled />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 text-xs md:text-base">
                            Photo URL :
                            <input type="photo" name='photo' className="grow text-xs md:text-base" placeholder={user.photoURL} />
                        </label>
                        <div className="mt-3 md:gap-x-2 gap-y-2 md:gap-y-0 flex justify-center font-semibold">
                            <button className='btn bg-white border border-[#ffffff] text-[#70b100] hover:bg-[#70b100] hover:text-white'>Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;