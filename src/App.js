import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import cards from "./cards.json";
import Row from './components/Row';
import Col from './components/Col';
import Card from './components/Card';

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

let currentScore = 0;
let topScore = 0;

class App extends Component {
  
  
  state = {
    cards,
    headerMsg: "Click an image to begin!",
    currentScore,
    topScore
  };

  componentDidMount() {
    this.setState({ cards: shuffle(this.state.cards)});
  }

  
  gameOver = () => {

    var restArray = this.state.cards.map((item , i) => {
      item.clicked = false;
      return restArray;
    });
    
    this.setState({
      cards: restArray,
      currentScore: 0,
      headerMsg: "Click an Image to begin!!",
    })

    alert("you have already clicked!! Game Over!!!");
    return true;
  };

  updateScore = () =>{
    if(this.state.currentScore === this.state.topScore){
      this.setState({
        currentScore: this.state.currentScore + 1,
        topScore: this.state.topScore + 1,
      })

    }else if(this.state.currentScore < this.state.topScore){
      this.setState({
        currentScore: this.state.currentScore + 1,
      })
    }
    
    return true;
  }

  handleClickevent = id => {
    var newArray = this.state.cards.map((item , i ) => {
      if(item.id === id){
        if(item.clicked === true){
          this.gameOver();
        }else{
          item.clicked = true;
          this.updateScore();
        }
      }

      return item;
    });
    this.setState({
      cards:shuffle(newArray),
      headerMsg:"You guessed correctly!!"
    });

  };

  render() {
    return (
      <Wrapper>
       <Header 
       headerMsg={this.state.headerMsg}
       currentScore={this.state.currentScore}
       topScore={this.state.topScore}
       />
       <div className="container">
       <Row>
          {this.state.cards.map( (card, i) => (
            <Col size={"3"} key={i}>
              <Card 
              name={card.name}
              image={card.image}
              key={i}
              id={card.id}
              handleClickevent={this.handleClickevent}
          />
            </Col>
              
          ))}          
        </Row>
       </div>   

       <Footer />
      </Wrapper>      
    );
  }
}

export default App;
