import PropTypes from 'prop-types'
import React from 'react'
import JSONData from '../content/mycontent.json'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo backdrop-blur">
      <img
        src={JSONData.MainImage}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          display: 'block',
          borderRadius: '50%',
        }}
      ></img>
    </div>
    <div className="content backdrop-blur">
      <div className="inner backdrop-blur">
        <h1
          style={{
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: '300',
          }}
        >
          {JSONData.Name}
        </h1>
        ____
        <p>
          {JSONData.Description.map(item => {
            return (
              <div
                style={{
                  fontFamily: 'Fira Mono, monospace',
                  fontWeight: '100',
                  fontSize: 'small',
                  letterSpacing: '1px',
                }}
              >
                {item}
              </div>
            )
          })}
        </p>
        <ul className="icons">
            <li>
              <a
                target="_blank"
                href={JSONData.twitter}
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={JSONData.github}
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={JSONData.linkedin}
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            
          </ul>
          
      </div>
    </div>
    <nav
      className="backdrop-blur"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      }}
    >
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
            style={{
              fontFamily: 'Fira Mono, monospace',
              fontWeight: '200',
            }}
          >
            About Me
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
            style={{
              fontFamily: 'Fira Mono, monospace',
              fontWeight: '200',
            }}
          >
            Work
          </button>
        </li>
        {JSONData.showTalksAndBlogTab && (
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('talks')
              }}
              style={{
                fontFamily: 'Fira Mono, monospace',
                fontWeight: '200',
              }}
            >
              Talks+Blogs
            </button>
          </li>
        )}
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
            style={{
              fontFamily: 'Fira Mono, monospace',
              fontWeight: '200',
            }}
          >
            CV
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
