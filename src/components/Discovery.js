import React, { Component } from "react";
import axios from "axios";
const BASE_URL = "https://api.giphy.com/v1/gifs/search?api_key=";
const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;

class Discovery extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      category: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.get(
        `${BASE_URL}${GIPHY_KEY}&q=${this.state.category}`
      );
      this.setState({
        gifs: response.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.gifList();
  }

  gifList() {
    return this.state.gifs.map((gif, index) => {
      return (
        <div key={index} className="results">
          <h4>
            {gif.title === " " || gif.title === ""
              ? `${this.state.category.toUpperCase()} GIF`
              : gif.title.toUpperCase()}
          </h4>
          <img className="giphyresults" src={gif.images.original.url} alt="search results" />
        </div>
      );
    });
  }

  handleSelectChange(event) {
    this.setState({
      category: event.target.value,
    });
  }

  render() {
    return (
      <>
        <div className="selector">
          <h3>Search fun GIFs that describe me!</h3>
          <form onSubmit={this.handleSubmit}>
            <select onChange={this.handleSelectChange}>
              <option value="">Discover Here</option>
              <option value="hire me">Hire Me</option>
              <option value="typing fast">Hard Worker</option>
              <option value="teamwork makes the dream work">Team Player</option>
              <option value="computer science">Tech Life</option>
              <option value="strategy">Strategizer</option>
              <option value="i did it">Problem Solver</option>
              <option value="learn">Life Long Learner</option>
            </select>
            <button className="selectorbutton" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="grid">{this.gifList()}</div>
      </>
    );
  }
}
export default Discovery;