import React, { Component } from 'react';

class Card extends Component {

    render(){
    
        return (
            <div className="card__div" key={this.props.id}>
                    <img
                        className="card__img"
                        alt={this.props.name}
                        src={this.props.image}
                        key={this.props.id}
                        onClick={() => this.props.handleClickevent(this.props.id)}/>
            </div>
        )

    }
}

export default Card;