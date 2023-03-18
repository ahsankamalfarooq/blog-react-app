import React from 'react'
import {useParams } from "react-router-dom";

const ProjectDetails = () => { 
 
   const _id = useParams();
  const id = _id.id


  // console.log(props)
  // const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga  earum? Soluta amet nobis officia sed neque fuga aperiam quia?</p>
            </div>
            <div className="card-action-grey-lighten-4-grey-text">
                <div>Posted By The Team KHR</div>
                <div>*th Feburary, 3Pm</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails











