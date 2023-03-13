import React from "react"

class WelcomeClass extends React.Component {

    render(){
        return <h1>hello world {this.props.type} version</h1>
    }
}

export default WelcomeClass;