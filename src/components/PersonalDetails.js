import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from "material-ui/AppBar"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Enter Personal Details " />
                    <TextField
                        hintText="Enter your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange("firstName")}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        hintText="Enter your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange("lastName")}
                        defaultValue={values.lastName}
                    />
                    <br />
                    <TextField
                        hintText="Enter your Email"
                        floatingLabelText="Email"
                        onChange={handleChange("email")}
                        defaultValue={values.email}
                    />
                    <br />
                    <TextField
                        hintText="Enter your Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange("occupation")}
                        defaultValue={values.occupation}
                    />
                    <br />
                    <TextField
                        hintText="Enter your city"
                        floatingLabelText="city"
                        onChange={handleChange("city")}
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField
                        hintText="Enter your bio"
                        floatingLabelText="bio"
                        onChange={handleChange("bio")}
                        defaultValue={values.bio}
                    />
                    <br />
                    <RaisedButton label="Continue" primary={true} style={styles.button}
                        onClick={this.continue}>

                    </RaisedButton>
                    <RaisedButton label="Back" primary={false} style={styles.button}
                        onClick={this.back}>

                    </RaisedButton>

                </>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails
