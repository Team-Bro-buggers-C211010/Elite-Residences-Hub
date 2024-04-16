import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const UpdateProfile = () => {
    const { user, setUpdate, update } = useContext(AuthContext);
    const handleUpdateProfile = (e) => {
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        if(name!== "" && photo !== "" )
        {
            updateProfile(user, {
                displayName: name,
                photoURL: photo,
            })
                .then(() => setUpdate(!update))
                .catch()
        }
        else if(name !== "" && photo === "")
        {
            updateProfile(user, {
                displayName: name,
            })
                .then(() => setUpdate(!update))
                .catch()
        }
        else if (name === "" && photo !== ""){
            updateProfile(user, {
                photoURL: photo,
            })
                .then(() => setUpdate(!update))
                .catch()
        }
    }
    return (
        <div className='relative top-[67px] mt-10 container mx-auto'>
            <div className="mx-auto mb-6 border border-[#23BE0A] md:p-5 md:w-1/4 font-bold text-white text-2xl rounded-2xl flex items-center justify-center shadow-lg h-24 bg-[#70b100e1]">User Details</div>
            <div className="text-center font-semibold mb-5 text-2xl fontWorkSans">Note: Only Name & Photo URL can be modified.</div>
            <div className="flex flex-col mx-auto gap-y-3 md:w-1/2">
                <form onSubmit={handleUpdateProfile} className='space-y-4'>
                    <label className="input input-bordered flex items-center gap-2">
                        Name :
                        <input type="text" name='name' className="grow" placeholder={user.displayName} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Email :
                        <input type="email" name='email' className="grow" placeholder={user.email} disabled />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Photo URL :
                        <input type="photo" name='photo' className="grow" placeholder={user.photoURL} />
                    </label>
                    <div className="mt-3 md:gap-x-2 gap-y-2 md:gap-y-0 flex justify-center font-semibold">
                        <button className='btn bg-transparent border border-[#70b100] text-[#70b100] hover:bg-[#70b100] hover:text-white'>Update Profile</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;