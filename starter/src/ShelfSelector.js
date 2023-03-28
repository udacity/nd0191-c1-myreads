import PropTypes from 'prop-types';

const ShelfSelector = ({ shelf, onShelfChange }) => {
    
    const selectedShelf = () => (shelf) ? shelf : 'none';

    const options = [
        { value: 'moveTo', label: 'Move to...' },
        { value: 'currentlyReading', label: 'Currently Reading' },
        { value: 'wantToRead', label: 'Want to Read' },
        { value: 'read', label: 'Read' },
        { value: 'none', label: 'None' }
    ];

    const optionIsDisabled = (option) => {
        return option.value === "moveTo";
    }

    const handleShelfChange = (event) => {
        onShelfChange(event.target.value);
    };

    return (
        <div className="book-shelf-changer">
            <select onChange={handleShelfChange} value={selectedShelf()}>
                {options.map((option) => {
                    return (
                      <option
                        key={option.value}
                        value={option.value}
                        disabled={optionIsDisabled(option)}
                      >
                        {option.label}
                      </option>
                    );
                })}
            </select>
      </div>
    );
}

ShelfSelector.propTypes ={
    shelf: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default ShelfSelector;