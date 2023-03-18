import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, {Component, useState} from "react";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
// import SignedInLinks from "./components/layout/SignedInLinks";
// import SignedOutLinks from "./components/layout/SignedOutLinks";
import CreateProject from "./components/projects/CreateProject";
import { useSelector } from "react-redux";

//const {id} = useParams();
// function ProjectDetails() {
//   // 👇️ get ID from url
   //const _id = useParams();
   //console.log(_id)
//   return(_id.id)
// }
//  const  projects = useSelector((state) => state.auth.projects )

class App extends Component {
 
  render() {
    // const  projects = useSelector((state) => state.auth.projects )
    return (

      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Dashboard/>}/>
            <Route path="/project/:id" element={<ProjectDetails/>}/>
            <Route path='/signin' element={<SignIn/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/create' element={<CreateProject/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;