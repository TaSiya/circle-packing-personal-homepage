import React from 'react'

const Icons = ({icons}) => {
  
  const iconsDisplay = <ul className="icons">
      {
        icons.map((icon) => (
          <li>
            <a
              target="_blank"
              href={icon.link}
              className={`icon ${icon.icon}`}
            >
              <span className="label">{icon.label}</span>
            </a>
          </li>
          ) )
      }
      
    </ul>
  return iconsDisplay
}

export default Icons
