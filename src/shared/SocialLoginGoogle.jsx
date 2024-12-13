import React, { useContext } from 'react';
import AuthContext from '../context/AuthContex/AuthContex';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLoginGoogle = () => {
    const {googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';
    const handleGoogleSignIn = ()=> {
        googleSignIn()
        .then((result) => {
            console.log(result.user)
            navigate(from)
        })
        .catch((err) => {
            console.log(err.message);
        })
    }    
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn w-full'>Google Loing</button>
        </div>
    );
};

export default SocialLoginGoogle;