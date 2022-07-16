import React from "react";
import PropTypes from "prop-types";

export default function DropDown({ value, handleSelectChange }) {
  const [selectValue, setSelectValue] = React.useState("none");

  React.useEffect(() => {
    value && setSelectValue(value);
  }, [value]);
  return (
    <div className='book-shelf-changer'>
      <select value={selectValue} onChange={handleSelectChange}>
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
DropDown.propTypes = {
  value: PropTypes.string,
  handleSelectChange: PropTypes.func.isRequired,
};
