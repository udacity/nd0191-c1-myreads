import React from "react";

const SelectShelf = ({book, shelf,onUpdateShelf}) => {

  return (
    <select defaultValue={shelf} onChange={(e)=>onUpdateShelf(book,e.target.value)}>
      <option value="none" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  );
};
export default SelectShelf;
