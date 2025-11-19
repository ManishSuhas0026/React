import { Component } from "react";

class Contact extends Component{
    render(){
        return(
            <>
            <h1>Contact name is {this.props.fname}</h1>
            </>
        )
    }
}
export default Contact;