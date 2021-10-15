import React from 'react'

const Projects = ({project}) => {
  const {title, description, role, github, url, type} = project;
  return (
    <div className="card  btn-outline-secondary text-center" style={{width: 18 +'rem'}}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-body">
        <a href={url} className="card-link">Demo</a>
        {github !== "#" ? <a href={github} className="card-link">github</a> : ''}
      </div>
    </div>
  )
}

export default Projects
