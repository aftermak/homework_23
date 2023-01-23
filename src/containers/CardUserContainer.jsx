import React, { Component } from "react";
import { CardUser } from "./CardUser.jsx";

class CardUserContainer extends Component {
   render() {
      return(
            <div className="container">
               {this.props.users.map(user=>{
               return <CardUser user={user} key={user.id} />
               })}
            </div>
            )
   }
 };

export {CardUserContainer};