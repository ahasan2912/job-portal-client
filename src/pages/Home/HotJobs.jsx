import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, [])
    return (
        <div>
            <div className='grid grid-cols-4 gap-5 mb-10'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;