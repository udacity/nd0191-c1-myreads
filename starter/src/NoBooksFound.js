import PropTypes from 'prop-types';

const NoBooksFound = ({books}) => {
    return (
        <div hidden={books.length !== 0}>No books found</div>
    )
}

NoBooksFound.propTypes = {
    books: PropTypes.array.isRequired
}

export default NoBooksFound;