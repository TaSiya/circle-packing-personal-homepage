import React from 'react'

const close = (props) => {
  return (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    >susjsj</div>
  )
}

export default close
