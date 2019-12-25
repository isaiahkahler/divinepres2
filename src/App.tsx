import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Create from './pages/create';
import Present from './pages/present';
import { HomeRoute, CreateRoute, PresentRoute } from './components/constants';
import { createMuiTheme, Theme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Arial'
    },
    palette: {
        primary: {
            main: "#ffbb00",
            light: "#ffd86b",
            dark: "#cc8708"
        },
        secondary: {
            main: "#0077d9",
            light: "#2ea1ff",
            dark: "#004a87"
        }
    }
});

function App(props: {}) {
    return (
        <Router>
            <ThemeProvider theme={theme}>

                <Switch>
                    <Route path={CreateRoute}>
                        <Create />
                    </Route>
                    <Route path={PresentRoute}>
                        <Present />
                    </Route>
                    <Route path={HomeRoute}>
                        <Home />
                    </Route>
                </Switch>
            </ThemeProvider>
        </Router>
    );
}


export default App;
