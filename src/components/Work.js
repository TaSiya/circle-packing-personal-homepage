import React from 'react'

import close from "./elements/close"
import ProjectsDisplay from "./Work-display"

const Work = (props) => {
  const JSONData = props.JSONData
  return (
    <article
      id="work"
      className={`${props.article === 'work' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{
        display: 'none',
        height: '90vh',
        overflow: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <ProjectsDisplay sections={JSONData.WorkSections} />
      {close}
    </article>
  )
}

export default Work
