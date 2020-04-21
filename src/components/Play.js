import React, { Component } from "react";
import axios from "axios";
const BASE_URL = "https://api.giphy.com/v1/gifs/search?api_key=";
const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;

class Play extends Component {
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
      console.log(this.state.gifs);
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.gifList();
    console.log(GIPHY_KEY);
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
          <img src={gif.images.original.url} alt="search results" />
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
      <div>
        <div className="selector">
          <form onSubmit={this.handleSubmit}>
            <select onChange={this.handleSelectChange}>
              <option value="">Pick Your Path Here</option>
              <option value="hire me">Hire Me</option>
              <option value="typing fast">Work Hard</option>
              <option value="teamwork makes the dream work">Team Player</option>
              <option value="computer science">Tech Life</option>
              <option value="strategy">Strategizer</option>
              <option value="i did it">Problem Solver</option>
            </select>
            <button className="selector" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="grid">{this.gifList()}</div>
      </div>
    );
  }
}
export default Play;
