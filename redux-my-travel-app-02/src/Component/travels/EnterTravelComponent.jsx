import React, { Component } from 'react';
class EnterTravelComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            desc: 'add Discription',
            date: 'Date'
        }
        this.handleChange = this.handleChange.bind(this); 
        this.loginClick = this.loginClick.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    loginClick() {
        console.log(this.state.desc);
        console.log(this.state.date);
    }
    render() {
        return (
            <div>
                <h1>Add Travel</h1>
                <div className="container">
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br/><hr></hr>
             <input type="text" name="Date" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success"  onClick={this.loginClick}>Submit</button>
                </div>
            </div> )}}

export default  EnterTravelComponent