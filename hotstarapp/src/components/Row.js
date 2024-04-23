import React from 'react'
import "../styles/rowstyle.css"
function Row({ title }) {
    return (
      <div className='row-contents'>
        <h2>{title}</h2>
      </div>
    );
  }

export default Row