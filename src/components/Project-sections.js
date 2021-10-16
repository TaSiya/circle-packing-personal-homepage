import React from 'react'
import Projects from "./Projects"

const Sections = ({section}) => {
  const viewProjects = section.projects.length > 0 ? section.projects.map((project, idx) => <Projects key={idx} project={project} />) : false
  console.log("section.label", section.label, viewProjects)
  if(!viewProjects) {
    return ''
  }
  return (
    <div className={section.name}>
      <h2>{section.label}</h2>
      <div className="row">
        {viewProjects && viewProjects}
      </div>
      
      <hr />
    </div>
  )
}

export default Sections
