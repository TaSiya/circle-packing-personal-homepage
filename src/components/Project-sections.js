import React from 'react'
import Projects from "./Projects"

const Sections = ({section}) => {
  console.log("section", section)
  const viewProjects = section.projects.length > 0 ? section.projects.map((project, idx) => <Projects key={idx} project={project} />) : false
  return (
    <div className={section.name}>
      <h4>{section.label}</h4>
      {viewProjects && viewProjects}
      <hr />
    </div>
  )
}

export default Sections
