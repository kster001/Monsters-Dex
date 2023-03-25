//import { Component } from 'react';
import { Monster } from '../../utils/types.utils';
import Card from '../card/card.component'
import './card-list.styles.css'

type CardListProps = {
    monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps): JSX.Element => (
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