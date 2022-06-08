import './search-box.styles.css'

const SearchBox = ({ onChangeHandler, className, placeholder }) => {
    return (
        <input
            type="search"  
            className={`search-box ${className}`}
            placeholder={placeholder} 
            onChange={onChangeHandler}
        />
    );
};
// class SearchBox extends Component {
//     render() {
//         const { onChangeHandler, className, placeholder } = this.props;
//         return (
//             <input
//                 type="search"  
//                 className={`search-box ${className}`}
//                 placeholder={placeholder} 
//                 onChange={onChangeHandler}
//             />
//         );
//     }
// }

export default SearchBox;