import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './search_form.jsx';
import SearchDisplay from './search_display.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.displayWords = this.displayWords.bind(this);
  }

  render() {
    return(
      <div>
        <h1>Word to the Wise</h1>
        <SearchForm backendUrl='http://localhost:9292' searchCallback={this.displayWords}/>
        <SearchDisplay words={this.state.words}/>
      </div>
    );
  }

  displayWords(wordObj) {
    this.setState({ words: wordObj.words });
  }
}

ReactDOM.render(<App/>, document.getElementById('app-mount'));
