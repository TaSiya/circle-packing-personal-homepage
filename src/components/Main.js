import PropTypes from 'prop-types'
import React from 'react'
import JSONData from '../content/mycontent.json'

const Main = (props) => {
  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )

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
        <h2 className="major">Work</h2>
        <span className="image main">
          <img src={JSONData.WorkImage} alt="" />
        </span>

        <div
          style={{
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: '400',
            fontSize: 'medium',
            lineHeight: '1.5',
          }}
        >
          {JSONData.WorkContent}
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
          {JSONData.InternshipsStartLine}
        </div>
        <ul>
          {JSONData.InternShips.map(item => {
            return (
              <li
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontWeight: '400',
                  fontSize: 'medium',
                  lineHeight: '1.5',
                }}
              >
                <a target="_blank" href={item.link}>
                  {item.name}
                </a>
              </li>
            )
          })}
        </ul>
        <div
          style={{
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: '400',
            fontSize: 'medium',
            lineHeight: '1.5',
          }}
        >
          {JSONData.ProjectsStartLine}
        </div>
        <ul>
          {JSONData.Projects.map(item => {
            return (
              <li
                style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontWeight: '400',
                  fontSize: 'medium',
                  lineHeight: '1.5',
                }}
              >
                <a target="_blank" href={item.link}>
                  {item.name}
                </a>
              </li>
            )
          })}
        </ul>

        {/* not visible in gatsby build */}
        {close}
        {/* <div style={closeStyle} onClick={() => props.onCloseArticle()}>
          ← Back
        </div> */}
      </article>
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
          <ul>
            {JSONData.Talks.map(item => {
              return (
                <li style={{ marginBottom: '25px' }}>
                  <h3
                    style={{
                      fontWeight: '700',
                      marginBottom: 0,
                    }}
                  >
                    {item.talkTitle}
                  </h3>
                  <span
                    style={{
                      marginTop: 0,
                      fontSize: 'small',
                    }}
                  >
                    {item.talkMetadata}
                  </span>
                  <p
                    style={{
                      fontFamily: 'Fira Mono, monospace',
                      fontWeight: '100',
                      fontSize: 'small',
                      lineHeight: '1.5',
                      marginBottom: '15px',
                      marginTop: '10px',
                    }}
                  >
                    {item.talkDescription}
                  </p>
                  {item.links.map(linkItem => {
                    return (
                      <a
                        style={{
                          marginRight: '10px',
                          lineHeight: '1.5',
                        }}
                        target="_blank"
                        href={linkItem.url}
                      >
                        {linkItem.linkTitle}
                      </a>
                    )
                  })}
                </li>
              )
            })}
          </ul>
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
          <ul>
            {JSONData.Blogs.map(item => {
              return (
                <li
                  style={{
                    fontFamily: 'Fira Mono, monospace',
                    fontWeight: '400',
                    fontSize: 'medium',
                    lineHeight: '1.8',
                  }}
                >
                  <a target="_blank" href={item.link}>
                    {item.blogTitle}
                  </a>
                </li>
              )
            })}
          </ul>

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
