import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const FormAddProject = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [reqForMoney, setreqForMoney] = useState("");

    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
  
    const saveProject = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5000/projects/add", {
          name: name,
          price: price,
          reqForMoney:reqForMoney
        });
        navigate("/projects");
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
  return (
    <div>
    <h1 className="title">Projects</h1>
    <h2 className="subtitle">Add New Project</h2>
    <div className="card is-shadowless">
      <div className="card-content">
        <div className="content">
          <form onSubmit={saveProject}>
            <p className="has-text-centered"></p>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                 onChange={(e) => setName(e.target.value)}
                  placeholder="Product Name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Price</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Request for Money</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                onChange={(e) => setreqForMoney(e.target.value)}
                  placeholder="yes/no"
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button type="submit" className="button is-success">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
export default FormAddProject
