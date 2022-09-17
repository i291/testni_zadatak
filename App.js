import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Dashboard } from "./pages/Dashboard";
import Login from "./components/Login";
import Projects from "./pages/Projects";
import AllProjects from "./pages/AllProjects";
import EditProject from "./pages/EditProject"
import AddProject from "./pages/AddProject";
import ProjectDetails from "./pages/ProjectDetails"
function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/projects/all" element={<AllProjects></AllProjects>}></Route>
        <Route path="/projects/add" element={<AddProject></AddProject>}></Route>
        <Route path="/projects/edit/:id" element={<EditProject />} />
        <Route path="/projects/details/:id" element={<ProjectDetails />} />


      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
