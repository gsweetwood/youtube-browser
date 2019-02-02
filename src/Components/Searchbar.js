import React from "react";

class Searchbar extends React.Component {
  state = { searchTerm: "" };

  updateTerm = event => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    //TODO: get the callback function from App
    //COMPLETE
    this.props.onSearchSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>YouTube Video Search</label>
            <input
              className="prompt"
              type="text"
              placeholder="Search for a video"
              value={this.state.searchTerm}
              onChange={this.updateTerm}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
