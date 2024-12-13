import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerAnimation from '../assets/lottie/Amimation2.json';
import AuthContext from '../context/AuthContex/AuthContex';
import SocialLoginGoogle from '../shared/SocialLoginGoogle';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const {sinIngUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';
    const handleLoing = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        //sinIngUser
        sinIngUser(email, password)
        .then(result => {
            console.log(result.user);
            navigate(from)
        })
        .catch(err => {
            console.log(err.message);
        })

    }
    return (
        <div className='hidden lg:flex items-center justify-center my-10'>
            <Lottie className='h-[508px]' animationData={registerAnimation}></Lottie>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border">
                <form onSubmit={handleLoing} className="card-body">
                    <h1 className="text-5xl font-bold text-center">SignIn now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="divider">OR</div>
                <div className='px-6 pb-6'>
                    <SocialLoginGoogle></SocialLoginGoogle>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
