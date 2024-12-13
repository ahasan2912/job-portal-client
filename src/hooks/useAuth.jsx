import React, { useContext } from 'react';
import AuthContext from '../context/AuthContex/AuthContex';

const useAuth = () => {
    const  context  = useContext(AuthContext)
    return context;
};

export default useAuth;