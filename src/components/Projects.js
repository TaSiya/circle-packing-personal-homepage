import React from 'react'

const Projects = ({project}) => {
  const {title, description, role, github, url, type, thumbnail} = project;
  return (
    <div className="col-sm-12 col-md-6 mt-2">
      <div className="card btn-outline-secondary text-center" >  
        <div className="card-body">
          <h4 className="card-title ">{title}</h4>
          <p className="card-text" style={{textAlign:"left"}}>
            {description} <br />
            <span style={{textAlign:"left", fontWeight: "bold"}}>
              Project role: 
              <span style={{fontWeight: "normal"}}> {role}</span>
            </span>
          </p>
          
        </div>
        <div className="card-body" style={{paddingTop: 0}}>
          <a href={url} className="card-link">Demo</a>
          {github !== "#" ? <a href={github} className="icon fa-github card-link"> Code</a> : ''}
        </div>
      </div>
    </div>
  )
}

export default Projects
