import React from 'react';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.search.value;
    onSubmit(inputValue);
    console.log(inputValue);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
