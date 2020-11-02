import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from "material-ui/AppBar"



export class Sucess extends Component {

    continue = e => {
        e.preventDefault();

        //Process form//
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Sucess" />
                    <h1>Thank You for your Submission</h1>
                </>
            </MuiThemeProvider>
        )
    }
}

export default Sucess
