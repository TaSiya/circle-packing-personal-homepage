import React from 'react'
import Sections from "./Project-sections"

const ProjectsDisplay = ({sections}) => {
  const sectionViews = sections.map((section, idx) => <Sections key={idx} section={section} /> )
  return sectionViews
}

export default ProjectsDisplay
