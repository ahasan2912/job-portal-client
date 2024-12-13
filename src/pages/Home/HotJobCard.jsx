import React from 'react';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
    const { _id, title, company, company_logo, requirements, location, salaryRange, jobType, description } = job;
    return (
        <div className=" bg-white shadow-lg rounded-lg border border-gray-200 p-5 flex flex-col">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src={company_logo} // Replace with the LinkedIn icon URL
                        alt={company}
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-3">
                        <h3 className="font-medium text-gray-800">{company}</h3>
                        <p className="text-sm text-gray-500">{location}</p>
                    </div>
                </div>
                <span className="text-green-500 text-xl font-bold">⚡</span>
            </div>
            <h2 className="mt-4 text-lg font-semibold text-gray-900">
                {title}
            </h2>
            <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
                <div className="flex items-center">
                    <span className="mr-1">📅</span> {jobType}
                </div>
                <div className="flex items-center">
                    <span className="mr-1">⏱</span> 4 minutes ago
                </div>
            </div>
            <p className="text-gray-600 text-sm mt-4">
                {description}
            </p>
            <div className="flex items-center flex-wrap gap-2 mt-4 flex-grow">
                {requirements.map((skill, idx) =>
                    <span key={idx} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-lg cursor-pointer h-8">
                        {skill}
                    </span>
                )}
            </div>
            <div className="flex items-center justify-between mt-6">
                <p className="text-blue-600 font-bold text-lg">
                    {salaryRange.min}-{salaryRange.max}<span className="text-sm font-medium text-gray-500">/Hour</span>
                </p>
                <Link to={`/jobs/${_id}`}>
                    <button className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                        Apply Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HotJobCard;