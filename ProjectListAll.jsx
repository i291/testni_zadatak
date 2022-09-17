import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const ProjectListAll = () => {
    const [projects, setprojects] = useState([]);
    const navigate = useNavigate();
    const [msg, setMsg] = useState("");


    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = async () => {
        const response = await axios.get("http://localhost:5000/projects/all");
        setprojects(response.data);
    };




    return (
        <div>
            <h1 className='title'>Projects</h1>
            <h2 className='subtitle'>List of All  projects</h2>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Request For Pricing</th>
                        <th>Actions</th>



                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr key={project.uuid}>
                            <td>{index + 1}</td>
                            <td>{project.name}</td>
                            <td>{project.price}</td>
                            <td>{project.reqForMoney} </td>
                            <td>

                                <Link
                                    to={`/projects/edit/${project.uuid}`}
                                    className="button is-small is-info"
                                >
                                    Accept/Reject
                                </Link>

                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ProjectListAll
