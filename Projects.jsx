import React,{useEffect} from 'react'
import { Layout } from './Layout'
import ProjectList from '../components/ProjectList'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'
export const Projects = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const{isError,user}=useSelector((state => state.auth))

    useEffect(()=>{
        dispatch(getMe)
    },[dispatch]);

    useEffect(()=>{
        if(isError){
            navigate("/");
        }
        if(user && user.role === "admin"){
            navigate("/dashboard");
        }
    },[isError,user, navigate]);
  return (
    <Layout>
        <ProjectList></ProjectList>
    </Layout>
  )
}
export default Projects