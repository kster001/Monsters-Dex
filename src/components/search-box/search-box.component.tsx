import { ChangeEvent } from 'react';
import Input from '@mui/material/Input';
import './search-box.styles.css'

// const ariaLabel = { 'aria-label': 'description' };
type searchBoxProps = {
    placeholder: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

//const func: () => void = () => {}

const SearchBox = ({ onChangeHandler, placeholder }: searchBoxProps): JSX.Element => {
    return (
        <Input
            className="search-box"
            placeholder={placeholder} 
            onChange={onChangeHandler}
        />
    );
};

export default SearchBox;