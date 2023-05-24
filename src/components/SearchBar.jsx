import React from 'react';
import { Outlet } from 'react-router-dom';

export default function SearchBar() {
  return (
    <div>
      SearchBar <Outlet />
      {/* <form onSubmit={e => renderMovieByName(e.target.value)}>
        <input type="text" />
        <button type="submit"></button>
      </form> */}
    </div>
  );
}
