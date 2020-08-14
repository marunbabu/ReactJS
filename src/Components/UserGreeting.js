import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        //1st approach using if/else
     /*    if (this.state.isLoggedIn) {
            return (
                <div>Welcome Marun</div>
            )
        } else {
            return (
                <div> Welcome Guest</div>
            )
        } */
      /*   return (
            <div>
                Welcome Marun
            </div>
        ) */

    /*     //2nd approach using Element Variable
        let message
        if(this.state.isLoggedIn){
        message = <div>Welcome Marun</div>
        }else{
            message = <div>Welcome Guest</div>
        }
        return(
        <div>{message}</div>
        ) */

        //3rd approach using Ternary conditional operator
      /*   return(
            this.state.isLoggedIn?(
            <div>Welcome Marun</div>):
            (<div>Welcome Guest</div>)
        ) */

        //4th approach using short circuit operator
        return(
            this.state.isLoggedIn && <div>Welcome Marun</div>
        )
    }
}
export default UserGreeting