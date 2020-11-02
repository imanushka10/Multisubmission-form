import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from "material-ui/AppBar"
import { List, ListItem } from "material-ui/List"
import RaisedButton from "material-ui/RaisedButton"




export class Confirm extends Component {

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
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props
        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem primaryText="first Name"
                            secondaryText={firstName}>

                        </ListItem>
                        <ListItem primaryText="last Name"
                            secondaryText={lastName}>

                        </ListItem>
                        <ListItem primaryText="email"
                            secondaryText={email}>

                        </ListItem>
                        <ListItem primaryText="Occupation"
                            secondaryText={occupation}>
                        </ListItem>
                        <ListItem primaryText="city"
                            secondaryText={city}>

                        </ListItem>
                        <ListItem primaryText="bio"
                            secondaryText={bio}>

                        </ListItem>
                    </List>

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

export default Confirm
