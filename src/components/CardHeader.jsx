import React, { Component } from "react";

class CardHeader extends Component {
    render() {
       return <div className="name">{`${this.props.name } ${this.props.last}`}</div>
    }
}

export { CardHeader };