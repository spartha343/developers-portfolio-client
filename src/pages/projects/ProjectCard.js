import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const ProjectCard = ({ project }) => {
    const { image, title, backEnd, frontEnd, liveLink, description } = project;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='rounded-2xl' src={image} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={backEnd}><button className={`btn btn-sm btn-primary ${backEnd === '' && 'btn-disabled'}`}>Back End</button></Link>
                    <Link to={frontEnd}><button className={`btn btn-sm btn-primary ${backEnd === '' && 'btn-disabled'}`}>Front End</button></Link>
                    <Link to={liveLink}><button className="btn btn-sm btn-primary">Live Site <FaArrowRight /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;