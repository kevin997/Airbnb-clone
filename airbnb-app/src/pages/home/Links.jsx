import React from 'react';
import { Link } from 'react-router-dom';

function Links() {
  return (
      <div>
          <header>Here are the pages created so far</header>
          <ol>
              <li> <Link to="/login"  >Login Page</Link > </li>
          </ol>
    </div>
  )
}

export default Links
