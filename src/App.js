import React, { Component } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/searchBox/search-box";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    this.setState({ monsters: users });
  }

  render() {
    const { monsters, searchField } = this.state;

    const monstersFiltered = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        />
        <CardList monsters={monstersFiltered} />
        {/*Card List is responsible about genrate List in rows */}
      </div>
    );
  }
}

export default App;
