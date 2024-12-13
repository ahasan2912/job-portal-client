import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams();
    const {user}= useAuth();
    const navigate = useNavigate();
    const submitJobApplication = (e) => {
        e.preventDefault();
        const from = e.target;
        const linkedIn = from.linkedIn.value;
        const github = from.github.value;
        const resume = from.resume.value;

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }
        fetch('http://localhost:3000/job-application', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
           if(data.insertedId){
            Swal.fire("Application Successful!");
           }
           navigate('/myApplications');
        })
    }
    return (
        <div className='flex items-center justify-center my-10'>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl border">
                <form onSubmit={submitJobApplication} className="card-body">
                    <h1 className="text-center text-5xl font-semibold">Apply Job</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">LinkedIn URL</span>
                        </label>
                        <input type="url" name='linkedIn' placeholder="LInkedIn URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">GitHUB URL</span>
                        </label>
                        <input type="url" name='github' placeholder="gitHub URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resume URL</span>
                        </label>
                        <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApply;