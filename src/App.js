import React, { Component } from 'react';



import Navbar from "./Components/Navbar";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Body from "./Components/Body";


class App extends Component {
  render() {
    return (

        <MuiThemeProvider>
            <div>
                <Navbar />
                <Body/>
            </div>
        </MuiThemeProvider>


    );
  }
}

export default App;
