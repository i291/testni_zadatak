import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const ProjectListAll = () => {
    const [projects, setprojects] = useState([]);
    

    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = async () => {
        const response = await axios.get("http://localhost:5000/projects");
        setprojects(response.data);
    };

    return (
        <div>
            <h1 className='title'>Projects</h1>
            <h2 className='subtitle'>List of My projects</h2>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Request For Pricing</th>
                        <th>Details</th>



                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr key={project.uuid}>
                            <td>{index + 1}</td>
                            <td>{project.name}</td>
                            <td>{project.price}</td>
                            <td>{project.reqForMoney } </td>
                            
                            <Link
                                    to={`/projects/details/${project.uuid}`}
                                    className="button is-small is-info"
                                >
                                    Show details
                            </Link>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ProjectListAll
