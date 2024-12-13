import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(formData.entries());
        const initialData = Object.fromEntries(formData.entries());
        const { min, max, currency, ...newJob } = initialData;
        newJob.salaryRange = { min, max, currency }
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');
        console.log(newJob);

        fetch('http://localhost:3000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire("Application Successful!");
                    navigate('/myPostedJobs')
                }
            })
    }
    return (
        <div className='flex flex-col justify-center items-center my-10'>
            <div className="card bg-base-200 w-full shrink-0 shadow-2xl">
                <form onSubmit={handleAddJob} className="card-body">
                    {/* Job title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" name='title' placeholder="Job Title" className="input input-bordered" required />
                    </div>
                    {/* Job location  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Location</span>
                        </label>
                        <input type="text" name='location' placeholder="Location" className="input input-bordered" required />
                    </div>
                    {/* Job Type */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Type</span>
                        </label>
                        <select name='type' defaultValue={'Pick Job type'} className="select select-ghost w-full input-bordered">
                            <option disabled>Pick Job type</option>
                            <option>Full-time</option>
                            <option>Intern</option>
                            <option>React</option>
                            <option>Part-time</option>
                        </select>
                    </div>
                    {/* Job Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Field</span>
                        </label>
                        <select name='field' defaultValue={'Pick Job Field'} className="select select-ghost w-full input-bordered">
                            <option disabled>Pick Job Field</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Teaching</option>
                        </select>
                    </div>
                    {/* salary reange */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary Range</span>
                            </label>
                            <input type="text" name='max' placeholder="Max" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" name='min' placeholder="Min" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <select name='currency' defaultValue={'Currency'} className="select select-ghost w-full input-bordered">
                                <option disabled>Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>INR</option>
                            </select>
                        </div>
                    </div>
                    {/* Job description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered" placeholder="Description"></textarea>
                    </div>
                    {/* Company Name  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Name</span>
                        </label>
                        <input type="text" name='company' placeholder="Company Name" className="input input-bordered" required />
                    </div>
                    {/* Job requirements */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Requirements</span>
                        </label>
                        <textarea name='requirements' className="textarea textarea-bordered" placeholder="Put each requirements in a new line" required></textarea>
                    </div>
                    {/* Job Responsibilities */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Responsibilities</span>
                        </label>
                        <textarea name='responsibilities' className="textarea textarea-bordered" placeholder="Write each responsibilities in a new line" required></textarea>
                    </div>
                    {/* HR Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR Name</span>
                        </label>
                        <input type="text" name='hr_name' placeholder="HR Name" className="input input-bordered" required />
                    </div>
                    {/* HR Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR Email</span>
                        </label>
                        <input type="email" name='hr_email' placeholder="HR Email" className="input input-bordered" defaultValue={user?.email} required />
                    </div>
                    {/* Application dateline */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Dadeline</span>
                        </label>
                        <input type="date" name='applicationDeadline' placeholder="Dadeline" className="input input-bordered" defaultValue={user?.email} required />
                    </div>
                    {/* Company Logo URL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Logo URL</span>
                        </label>
                        <input type="url" name='company_logo' placeholder="Company Logo URL" className="input input-bordered" required />
                    </div>
                    {/* submit button */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Job</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;