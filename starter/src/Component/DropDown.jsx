import React from "react";

export default function DropDown({ value, handleSelectChange }) {
  return (
    <div className='book-shelf-changer'>
      <select  onChange={handleSelectChange}>
        <option disabled>Move to...</option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  );
}
