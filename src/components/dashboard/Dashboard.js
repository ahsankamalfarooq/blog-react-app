import React, {Component} from "react";
import { useSelector } from "react-redux";
import ProjectList from "../projects/ProjectList";
import Notification from "./Notifications";
import { connect } from "react-redux";


class Dashboard extends Component {
  render() {
   const {projects} = this.props
    return(
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects}/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notification/>
                </div>
            </div>
        </div>
    )
  }
}

export const mapStateToProps = (state) => { 
    return {
       projects : state.project.projects
    }
}



export default connect(mapStateToProps )(Dashboard);