import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards
  };

  render() {
    return (
      <Wrapper>
       <Header />
       <Footer />
      </Wrapper>      
    );
  }
}

export default App;
