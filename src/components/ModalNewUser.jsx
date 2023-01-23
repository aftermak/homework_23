import React, { Component, Fragment } from "react";
import uuid from 'react-uuid';

class ModalNewUser extends Component {
    constructor () {
        super();
        this.state = {
            isOpen: false,
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    onSubmit = (e) => {
        if(this.state.first_name && this.state.last_name && this.state.email){
            e.preventDefault();
            this.setState({isOpen: false})
            this.props.addUser({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                key: uuid(),
                id: uuid(),
                avatar: "https://img.icons8.com/bubbles/130/null/theodore-peterson.png"
            })
        }
        e.preventDefault();
        
    }

    onFirstNameInputChange = (e) => {
        this.setState({
            first_name: e.target.value
        })
    }

    onLastNameInputChange = (e) => {
        this.setState({
            last_name: e.target.value
        })
    }

    onEmailInputChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    render() {
        return (
    
            <Fragment>
                <button className="newBtn" onClick={()=>{this.setState({isOpen: true})}}>New User</button>
                {this.state.isOpen && (
                    <div className="blur">
                        <div className="modal-body">
            
                            <div className="logo"></div>
                            <div className="title">New User</div>

                            <form onSubmit={this.onSubmit}>
                                <div className="inputs">
                                    <label>FIRST NAME</label>
                                    <input type="text" placeholder="Input First Name" onChange={this.onFirstNameInputChange} />
                                    <label>LAST NAME</label>
                                    <input type="text" placeholder="Input Last Name" onChange={this.onLastNameInputChange} />
                                    <label>EMAIL</label>
                                    <input type="email" placeholder="Input EMAIL" onChange={this.onEmailInputChange}/>
                                </div>
                                <button>CREATE</button>
                            </form>
                        
                        </div>
                    </div>
                  
                )}
            </Fragment>     
        )
    }
}

export {ModalNewUser};
