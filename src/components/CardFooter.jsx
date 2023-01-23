import React, { Component } from "react";

class CardFooter extends Component {
    render() {
       return <a className="email" href={this.props.email}>{this.props.email}</a>
    }
}

export { CardFooter };