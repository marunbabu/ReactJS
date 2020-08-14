import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic:'React'
        }
    }
    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChanage = (event)=>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = () =>{
      
        alert( `I am ${this.state.username}.. ${this.state.comments}..${this.state.topic}`)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User Name </label>
                    <input type='text' value={this.state.username} onChange={this.handleUserNameChange}></input>
                </div>
                <br />
                <div>
                    <label>Comments </label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <br />
                <div>
                    <label>Topics </label>
                    <select value={this.state.topic} onChange={this.handleTopicChanage}>
                        <option value="React">React</option>
                        <option value="Java">Java</option>
                        <option value="Angular">Angular</option>
                    </select>
                </div>
                <br/>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default Form
