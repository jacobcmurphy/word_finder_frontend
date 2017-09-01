import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './search_form.jsx';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Word to the Wise</h1>
        <SearchForm/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app-mount'));
