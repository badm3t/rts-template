import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import { theme } from './ui/theme';
import { GlobalStyle } from './ui/global';

const App = () => (
   <ThemeProvider theme={theme} >
       <GlobalStyle bg='bgDarker' color='fg' />
       <HashRouter>
         <React.Fragment>
           <Switch>
            // <Route exact path='/' render={() => <Redirect to='/about' />} />
           </Switch>
         </React.Fragment>
       </HashRouter>
   </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
