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
          <img
            className="giphyresults"
            src={gif.images.original.url}
            alt="search results"
          />
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
        <h2 className="myvideonotes">
          Or just enjoy some media of activities that happen in my free time!
        </h2>

        <div className="myvideogrid">
          <div>
            <h3 className="myvideostitles">Making Adidas Stan Smith Shoes</h3>
            <p className="myvideossubtitles">Sound Optional</p>
            <video className="myvideos" controls muted loop autoplay>
              <source
                src="https://res.cloudinary.com/dolrvzlkq/video/upload/v1587712780/Portfolio/Day2StanSmithClassWithYuji_gd2vk6.mov"
                type="video/mp4"
              />
              Your browser does not support the video.
            </video>
          </div>

          <div>
            <h3 className="myvideostitles">
              Finishing Adidas Stan Smith Shoes
            </h3>
            <p className="myvideossubtitles">Sound Optional</p>
            <video
              className="myvideos"
              src="https://res.cloudinary.com/dolrvzlkq/video/upload/v1588080325/Portfolio/StanSmithCompletion_xnp0qs.mov"
              type="video/mp4"
              controls
              muted
              loop
              autoplay
            >
              Your browser does not support the video.
            </video>
          </div>

          <div>
            <h3 className="myvideostitles">AfroTech Speaker Delane Parnell</h3>
            <p className="myvideossubtitles">Sound Optional</p>
            <video
              className="myvideos"
              src="https://res.cloudinary.com/dolrvzlkq/video/upload/v1588080792/Portfolio/DelaneParnelGamerAfroTech_wl8ail.mp4"
              type="video/mp4"
              controls
              muted
              loop
              autoplay
            >
              Your browser does not support the video.
            </video>
          </div>

          <div>
            <h3 className="myvideostitles">AfroTech Speaker Zac Hinton Product Designer</h3>
            <p className="myvideossubtitles">Sound Optional</p>
            <video
              className="myvideos"
              src="https://res.cloudinary.com/dolrvzlkq/video/upload/v1588085131/Portfolio/AfroTechProductDesignerZac_ag6dnp.mp4"
              type="video/mp4"
              controls
              muted
              loop
              autoplay
            >
              Your browser does not support the video.
            </video>
          </div>

          <div>
            <h3 className="myvideostitles">Millinery (Hat Making)</h3>
            <p className="myvideossubtitles">No Sound</p>
            <video className="myvideos" controls muted loop autoplay>
              <source
                src="https://res.cloudinary.com/dolrvzlkq/video/upload/v1587708532/Portfolio/FinishedHat_npatml.mov"
                type="video/mp4"
              />
              Your browser does not support the video.
            </video>
          </div>

          <div>
            <h3 className="myvideostitles">Mule Making Class</h3>
            <p className="myvideossubtitles">No Sound</p>
            <video
              className="myvideos"
              src="https://res.cloudinary.com/dolrvzlkq/video/upload/v1588084419/Portfolio/MakingMulesClip_fatx8p.mp4"
            >
              /> Your browser does not support the video.
            </video>
          </div>

          <div>
            <h3 className="myvideostitles">Mule Shoemaking</h3>
            <p className="myvideossubtitles">No Sound</p>
            <video
              className="myvideos"
              poster="https://res.cloudinary.com/dolrvzlkq/image/upload/v1588080318/Portfolio/MuleMade_xq77yf.jpg"
              src=""
            >
              /> Your browser does not support the video.
            </video>
          </div>

          <div>
            <h3 className="myvideostitles">UX 2-Day Bootcamp</h3>
            <p className="myvideossubtitles">No Sound</p>
            <video className="myvideos" controls muted loop autoplay>
              <source
                src="https://res.cloudinary.com/dolrvzlkq/video/upload/v1587707626/Portfolio/UXBootCamp_qtvnmo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video.
            </video>
          </div>

          <div>
            <h3 className="myvideostitles">UX 2-Day Bootcamp</h3>
            <p className="myvideossubtitles">No Sound</p>
            <video
              className="myvideos"
              poster="https://res.cloudinary.com/dolrvzlkq/image/upload/v1588080318/Portfolio/DrawingSkillsUX_lj8hfn.jpg"
              src=""
            >
              /> Your browser does not support the video.
            </video>
          </div>
        </div>
      </>
    );
  }
}
export default Discovery;
