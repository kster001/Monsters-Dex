import './card.styles.css';
import Divider from '@mui/material/Divider';

const Card = ({ monster, cardId }) => {
    const { name, powers, imageLink} = monster;
    return (
        <div className='card-container' key={cardId}>
            <img 
                alt={`monster ${name}`}
                src={imageLink}
            />
            <Divider variant="middle" className='card-divider' />
            <div className='card-details'>
                <div><span className='card-details-label'>Name: </span>{name}</div>
                <div><span className='card-details-label'>Powers: </span>{powers}</div> 
            </div>
        </div>
    );
};

// class Card extends Component {
//     render() {
//         const { name, email, id } = this.props.monster;
//         return (
//             <div className='card-container' key={id}>
//                 <img 
//                     alt={`monster ${name}`}
//                     src={`https://robohash.org/${id}?set=set2&size=180x180`}
//                 />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         );
//     }
// }

export default Card;