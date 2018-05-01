import React from 'react';
import EmailInput from './components/email-input';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.vlaue,
    })
  }

  render() {
    return (
      <div>
        <EmailInput value={this.state.email} placeholder="Your email address"
          handleChange ={this.handleChange} />
      </div>
    );
  }
}

export default App;
