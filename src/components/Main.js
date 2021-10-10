import PropTypes from 'prop-types'
import React from 'react'
import JSONData from '../content/mycontent.json'
import Work from "./Work"

import close from "./elements/close"

const Main = (props) => {

  console.log("propsss", props)

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="intro"
        className={`${props.article === 'intro' ? 'active' : ''} ${
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
        <h2 className="major">About Me</h2>
        <span className="image main">
          <div>
            <img src={JSONData.AboutImage} alt="" />
          </div>
        </span>
        {/* <p> */}
        {JSONData.AboutContent.map(item => {
          return (
            <div
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: '400',
                fontSize: 'medium',
                lineHeight: '1.5',
              }}
            >
              <br />
              {item}
            </div>
          )
        })}
        {/* </p> */}
        {/* not visible in gatsby build */}
        {close}
        {/* <div style={closeStyle} onClick={() => props.onCloseArticle()}>
          ← Back
        </div> */}
      </article>

      <Work {...props} JSONData={JSONData} />
      {JSONData.showTalksAndBlogTab && (
        <article
          id="talks"
          className={`${props.article === 'talks' ? 'active' : ''} ${
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
          <h2
            style={{
              fontWeight: '700',
            }}
            className="major"
          >
            Talks
          </h2>
          <div
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: '400',
              fontSize: 'medium',
              lineHeight: '1.5',
            }}
          >
            {JSONData.TalksAndBlogsTopContent}
          </div>
          <br />
          <div
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: '400',
              fontSize: 'medium',
              lineHeight: '1.5',
            }}
          >
            {JSONData.TalkIntroLine}
          </div>
          
          <hr />
          <h2 style={{ fontWeight: '700' }}>Blogs</h2>
          <div
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: '400',
              fontSize: 'medium',
              lineHeight: '1.5',
            }}
          >
            {JSONData.BlogsIntroLine}
          </div>
          <br />

          {/* not visible in gatsby build */}
          {close}
          {/* <div style={closeStyle} onClick={() => props.onCloseArticle()}>
          ← Back
        </div> */}
        </article>
      )}
      <article
        id="about"
        className={`${props.article === 'about' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major"> CV </h2>
        <div
          style={{
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: '400',
            fontSize: 'large',
            lineHeight: '1.9',
          }}
        >
          {JSONData.CVStartLine}
        </div>
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          
          <a
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: '400',
              fontSize: 'large',
              lineHeight: '1.5',
            }}
            target="_blank"
            href={JSONData.Resume}
          >
            Resume
          </a>
        </div>
        {/* </p> */}
        {/* not visible in gatsby build */}
        {close}
        {/* <div style={closeStyle} onClick={() => props.onCloseArticle()}>
          ← Back
        </div> */}
      </article>

      </div>
  )
}


Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
