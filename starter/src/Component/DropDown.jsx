import React, { useEffect } from "react";

export default function DropDown({ value, handleSelectChange }) {
  const [selectValue, setSelectValue] = React.useState(null);

  React.useEffect(() => {
    value ? setSelectValue(value) : setSelectValue("none");
  });
  return (
    <div className='book-shelf-changer'>
      <select
        value={selectValue}
        onChange={(e) => {
          handleSelectChange(e);
         // setSelectValue(e.target.value);
        }}>
        <option value='none' disabled>
          Move to...
        </option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        {value && <option value='none'>None</option>}
      </select>
    </div>
  );
}
