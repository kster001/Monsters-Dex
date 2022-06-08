//import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [ filteredMonsters , setFilteredMonsters ] = useState(monsters);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users));
  }, []);
   
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchValue);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchValue]);

  const onSearchChange = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <h1 className='app-title'>Monsters PersonalDex</h1>
      <SearchBox onChangeHandler={onSearchChange} className="search-box" placeholder="search monsters"/>
      <CardList monsters = { filteredMonsters }/>
    </div>

  );

}

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
