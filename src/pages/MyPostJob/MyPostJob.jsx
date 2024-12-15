import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyPostJob = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://job-portal-server-silk.vercel.app/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            });
    }, [user?.eamil])
    return (
        <div>
            <h2 className='text-3xl'>My Posted Jobs: {jobs?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Job title</th>
                            <th>Daedline</th>
                            <th>Job Count</th>
                            <th>View Application</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, idx) =>
                            <tr key={idx} className="hover">
                                <th>{idx + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.applicationCount}</td>
                                <td>
                                    <Link to={`/viewApplication/${job._id}`}>
                                        <button className='btn btn-link'>View Application</button>
                                    </Link>
                                </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostJob;