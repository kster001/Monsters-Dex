import Input from '@mui/material/Input';
import './search-box.styles.css'

// const ariaLabel = { 'aria-label': 'description' };

const SearchBox = ({ onChangeHandler, className, placeholder }) => {
    return (
        <Input
            className="search-box"
            placeholder={placeholder} 
            onChange={onChangeHandler}
        />
    );
};

export default SearchBox;