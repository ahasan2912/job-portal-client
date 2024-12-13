import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerAnimation from '../assets/lottie/Animation.json';
import AuthContext from '../context/AuthContex/AuthContex';
import SocialLoginGoogle from '../shared/SocialLoginGoogle';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        /*  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
         passwordRegex.test(password); */

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className='flex items-center justify-center'>
            <Lottie className='h-[508px]' animationData={registerAnimation}></Lottie>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border">
                <form onSubmit={handleRegister} className="card-body">
                    <h1 className="text-5xl font-bold text-center">Register now!</h1>
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
                        <button className="btn btn-primary">Register</button>
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

export default Register;