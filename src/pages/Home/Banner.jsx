import React from 'react';
import { easeOut, motion } from "framer-motion";
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'


const Banner = () => {
    return (
        <div className="hero my-10 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        className='w-96 rounded-t-[40px] border-blue-500 border-l-8 border-b-8 rounded-br-[40px]'
                        src={team1}
                        animate={{y: [50, 100, 50]}}
                        transition={{duration: 10, repeat:Infinity}} />
                    <motion.img
                        className='w-96 rounded-t-[40px] border-blue-500 border-l-8 border-b-8 rounded-br-[40px]'
                        src={team2}
                        animate={{x: [100, 150, 100]}}
                        transition={{duration: 10, delay: 3, repeat:Infinity}} />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
                        className="text-5xl font-bold">Latest <motion.span
                            animate={{ color: ['#ecff33', '#33ffe3', '#ff6133'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >Jobs</motion.span> For Yoru!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;