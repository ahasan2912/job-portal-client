import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyApplication = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Seiral</th>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        jobs.map((job, idx) => <tr key={idx}>
                            <th>{idx+1}</th>
                            <td>{job.title}</td>
                            <td>{job.company}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyApplication;
