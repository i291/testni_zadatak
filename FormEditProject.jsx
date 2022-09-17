import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditProject = () => {

  const [reqForMoney, setsetReqForMoney] = useState("");
  
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/project/${id}`);
        
        setsetReqForMoney(response.data.reqForMoney);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);

  const updateProject = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/projects/${id}`, {
        
        reqForMoney:reqForMoney
      });
      navigate("/projects/all");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title">Projects</h1>
      <h2 className="subtitle">Accept or reject request</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateProject}>
              <p className="has-text-centered">{msg}</p>
              
             
             
              <div className="field">
                <label className="label">Request For Money</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      onChange={(e) => setsetReqForMoney(e.target.value)}
                    >
                      <option value="accept">Accept</option>
                      <option value="reject">Reject</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditProject;