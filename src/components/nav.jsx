import React from 'react';

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>Lofi Beats</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}> <i className="fas fa-music"></i> Library </button>
    </nav>
  )
}

export default Nav;