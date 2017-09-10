import React from 'react';
import ReactDOM from 'react-dom';

class SearchDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 
  render() {
    let wordList = !this.props.words ? [] : this.props.words.map((word) => <li key={word}>{word}</li>);
    return(
      <ul>{wordList}</ul>
    );
  }

}

module.exports = SearchDisplay;
