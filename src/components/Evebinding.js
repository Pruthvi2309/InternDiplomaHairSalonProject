import React, { Component } from 'react'

class Evebinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {msg:'hello'}
    }
    clickhandler()
    {
        this.setState({
            msg:'goodbye'
        })
    }
    
  render() {
    return (
      <div>
        <center>
            <div>
                {this.state.msg}
            </div>
            <button onClick={this.clickhandler.bind(this)}>click</button> */
            {/* <button onClick={ ()=> this.clickhandler()}>Click</button> */}
            {/* <button onClick={ this.clickhandler}>Click</button> */}

        </center>
        
      </div>
    )
  }
}

export default Evebinding
