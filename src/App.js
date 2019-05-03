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

class App extends Component {
  
  
  state = {
    cards,
    headerMsg: "Click an image to begin!",
    currentScore: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ cards: shuffle(this.state.cards)});
    console.log("first shuffle array : ", this.state.cards);
  }

  
  gameOver = () => {

    var restArray = this.state.cards.map((item , i) => {
      item.clicked = false;
      return restArray;
    });
    
    this.setState({
      cards: restArray,
      currentScore: 0,
      navCenter: "Click an Image to begin!!",
    })

    alert("you have already clicked!! Game Over!!!");
    return true;
  };

  addSomeScore = () =>{
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
    console.log("what is this ID for:" , id);
    var newArray = this.state.cards.map((item , i ) => {
      // console.log("this is item: " , item);
      if(item.id === id){
        if(item.clicked === true){
          this.gameOver();
        }else{
          item.clicked = true;
          this.addSomeScore();
        }
      }

      return item;
    });
    this.setState({
      cards:shuffle(newArray),
      navCenter:"You guessed correctly!!"
    });

    console.log("the new array: " , this.state.cards);
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
            <Col size={"3"}>
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
