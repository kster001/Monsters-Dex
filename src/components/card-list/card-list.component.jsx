//import { Component } from 'react';
import Card from '../card/card.component'
import './card-list.styles.css'

const CardList = ({ monsters }) => (
    <div className='card-list'>
        {
            monsters.map((monster, i) => {
                return <Card key={i} monster={monster} cardId={i} />;
            
            })
        }
    </div>

);
// class CardList extends Component {
//     render() {
//         const { monsters } = this.props;
//         return (
//             <div className='card-list'>
//                 {
//                     monsters.map((monster, i) => {
//                         return <Card key={i} monster={monster} />;
                    
//                     })
//                 }
//             </div>

//         );
//     }
// }

export default CardList;