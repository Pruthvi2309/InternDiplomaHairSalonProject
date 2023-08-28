import React, { Component } from 'react'
class Message extends Component {

    constructor() {
      super()
    
      this.state = {
        message: 'welcome visitor'
         
      }
    }
    changeMessage()
    {
        this.setState({
            message: 'Thank you for subscribing... '
        })
    }
    
  render() {
    return (
      <div>
        <center>
        <h1>
            {this.state.message}
            <button onClick={()=>this.changeMessage()}> Subscribe</button>
        </h1>
        </center>
      </div>
    )
  }
}


export default Message
