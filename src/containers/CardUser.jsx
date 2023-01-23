import React, { Component } from "react";
import { CardBody, CardFooter, CardHeader } from "../components";

class CardUser extends Component {
  render() {
    return (
      <div className="cardUser">
      <CardHeader name={this.props.user.first_name} last={this.props.user.last_name} />
      <CardBody avatar={this.props.user.avatar} />
      <CardFooter email={this.props.user.email} />
    </div>
    )
  }
}

export {CardUser};



