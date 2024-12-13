import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import banner from '../../assets/thumb.png'
import ReactiveButton from 'reactive-button';

const JobDetails = () => {
    const job = useLoaderData();
    const { _id, title, company, company_logo, requirements, location, salaryRange, jobType, description, status } = job;
    return (
        <div>
            <div className='my-10'>
                <img className='rounded-lg' src={banner} alt="" />
            </div>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-4xl font-semibold'>{title}</h1>
                    <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
                        <div className="flex items-center">
                            <span className="mr-1">📅</span> {jobType}
                        </div>
                        <div className="flex items-center">
                            <span className="mr-1">⏱</span> 4 minutes ago
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={`/jobApply/${_id}`}>
                    <button className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                        Apply Now
                    </button>
                    </Link>
                </div>
            </div>
            <div className='border-t my-10'></div>
            <div className="bg-white shadow-md rounded-lg border border-gray-200 p-4 my-10">
                <h2 className="text-lg font-bold mb-4">{title}</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="">
                        <p className="">{company}</p>
                        <p className="">Salary: {salaryRange.min} - {salaryRange.max}</p>
                    </div>

                    <div className="flex items-center">
                        <span className="material-icons">money</span>
                        <p className="ml-2">Salary</p>
                        <p className="ml-2"></p>
                    </div>
                    <div className="flex items-center">
                        <span className="material-icons">work_history</span>
                        <p className="ml-2">Experience</p>
                        <p className="ml-2"></p>
                    </div>
                    <div className="flex items-center">
                        <span className="material-icons">work</span>
                        <p className="ml-2">{jobType}</p>
                        <p className="ml-2">{status}</p>
                    </div>
                    <div className="flex items-center">
                        <span className="material-icons">schedule</span>
                        <p className="ml-2">Deadline</p>
                        <p className="ml-2"></p>
                    </div>
                    <div className="flex items-center">
                        <span className="material-icons">update</span>
                        <p className="ml-2">Updated</p>
                        <p className="ml-2"></p>
                    </div>
                    <div className="flex items-center">
                        <span className="material-icons">location_on</span>
                        <p className="ml-2">Location</p>
                        <p className="ml-2">{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
