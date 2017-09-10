import React from 'react';
import ReactDOM from 'react-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._partOfSpeechOptions = this._partOfSpeechOptions.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value  = target.type === 'checkbox' ? target.checked : target.value;
    const name   = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState == XMLHttpRequest.DONE && xhr.status === 200) {
        let wordObj = JSON.parse(xhr.responseText);
        this.props.searchCallback(wordObj);
      }
    }
    xhr.open('GET', this.props.backendUrl + '/search?' + this._formatParams(this.state), true);
    xhr.send();
    event.preventDefault();
  }

  render() {
    let syllableOptions = [<option value ='' key='syllablePlaceholder'>Select</option>];
    for(let i=1; i<=18; i++) {
      let key = `syllableOption${i}`;
      let option = <option key={key} value={i}>{i}</option>;
      syllableOptions.push(option);
    }

    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Sounds like:
          <input type='text' value={this.state.value} onChange={this.handleChange} name='sounds_like' onChange={this.handleChange}/>
        </label>
        <br/><br/>
        <label>
          Part of speech:
          <select name='part_of_speech' onChange={this.handleChange}>{this._partOfSpeechOptions()}</select>
        </label>
        <br/><br/>
        <label>
          Number of syllables:
          <select name='number_of_syllables' onChange={this.handleChange}>{syllableOptions}</select>
        </label>
        <br/><br/>
        <label>
          Primary stress:
          <select name='primary_stress' onChange={this.handleChange}>{syllableOptions}</select>
        </label>
        <br/><br/>
        <label>
          Secondary stress:
          <select name='secondary_stress' onChange={this.handleChange}>{syllableOptions}</select>
        </label>
        <br/><br/>
        <input type='submit' value='Search' />
      </form>
    );
  }
  
  _partOfSpeechOptions() {
      const partsOfSpeech = {
      noun: 'Noun',
      // plural: 'Plural',
      noun_phrase: 'Noun phrase',
      verb_participle: 'Verb (participle)',
      verb_transitive: 'Verb (transitive)',
      verb_intransitive: 'Verb (intransitive)',
      adjective: 'Adjective',
      adverb: 'Adverb',
      conjunction: 'Conjunction',
      preposition: 'Preposition',
      interjection: 'Interjection',
      pronoun: 'Pronound',
      article_definite: 'Article (definite)',
      article_indefinite: 'Article (indefinite)'
      //nominative: 'Nominative'
    };

    let partOfSpeechOptions = [<option value ='' key='posPlaceholder'>Select</option>];
    for(let pos in partsOfSpeech) {
      let option = <option key={pos} value={pos}>{partsOfSpeech[pos]}</option>
      partOfSpeechOptions.push(option);
    }

    return partOfSpeechOptions;
  }

  _formatParams(params) {
    return Object.keys(params).map(function(key) {
      return key + '=' + encodeURIComponent(params[key]);
    }).join('&')
  }

}

module.exports = SearchForm;
