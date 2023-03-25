import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect, Fragment, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromDB } from './firebase/firestore';
import { populateMonsters } from "./store/monster.action";
import { getMonsters } from './store/monster.selector';
import Navigation from './components/navigation/navigation.component';
import Add from './components/add-monster/add-monster.component';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
import { Monster } from './utils/types.utils';
import { RootState } from './store/store';
import './App.css';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getDataFromDB().then((monsters) => {
      if(monsters) {
        dispatch(populateMonsters(monsters));
      }
    });
    
  }, [])

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation />}> 
            <Route index element={<Home />} />
            <Route path="/add" element={<Add />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );

}

const Home = () => {
  const monsters = useSelector<RootState, Monster[]>(getMonsters);
  const [searchValue, setSearchValue] = useState('');
  const [ filteredMonsters , setFilteredMonsters ] = useState(monsters);
  
  useEffect(() => {
      const newFilteredMonsters:Monster[] = monsters.filter((monster: Monster) => {
        return monster.name.toLowerCase().includes(searchValue);
      });
      setFilteredMonsters(newFilteredMonsters);
    
  }, [monsters, searchValue]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value.toLowerCase());
  };

  return (
    <Fragment>
      <SearchBox onChangeHandler={onSearchChange} placeholder="Find Character"/>
      <CardList monsters = { filteredMonsters }/>
    </Fragment>
  );
};

// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchValue: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState({monsters: users}))
//   }
   
//   onSearchChange = (event) => {this.setState({searchValue: event.target.value.toLowerCase()})}

//   render() {
//     const { monsters, searchValue } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchValue);
//     });

//     return (
//         <div className="App">
//           <h1 className='app-title'>Monsters Rolodex</h1>
//           <SearchBox onChangeHandler={onSearchChange} className="search-box" placeholder="search monsters"/>
//           <CardList monsters = { filteredMonsters }/>
//         </div>
//     );
//   }
// }

export default App;
