import React, { Component } from "react";

class CardBody extends Component {
    render() {
        return <img className="avatar" src={this.props.avatar} alt={this.props.avatar} />
    }
}

export { CardBody };

