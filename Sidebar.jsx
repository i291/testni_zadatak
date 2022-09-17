import React from 'react'
import {NavLink,useNavigate} from "react-router-dom"
import { IoPricetag, IoHome, IoLogOut,IoPerson} from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux";
import { Logout, reset } from "../features/authSlice";

export const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user}=useSelector((state) => state.auth);

    const logout=()=>{
        dispatch(Logout());
        dispatch(reset());
        navigate("/");
    }
  return (
    <div>
      <aside className="menu pl-4 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          {user && user.role !== "admin" && (
          <div>
            <p className="menu-label">User</p>
              <li>
                <NavLink to={"/projects"}>
                  <IoPerson /> My Projects
                </NavLink>
              </li>
              <p className="menu-label">User</p>
              <li>
                <NavLink to={"/projects/add"}>
                  <IoPerson />Add project
                </NavLink>
              </li>
          </div>
          
        )}

        </ul>
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Admin</p>
              <li>
                <NavLink to={"/projects/all"}>
                  <IoPerson /> All Projects
                </NavLink>
              </li>
          </div>
        )}

        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  )
}
export default Sidebar
