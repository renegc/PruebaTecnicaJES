import React from 'react';
import Header from './Components/Header';
import Fiscalias from './Components/Fiscalias';
import NuevaFiscalia from './Components/NuevaFiscalia';
import EditarFiscalia from './Components/EditarFiscalia';



import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//redux
import {Provider} from 'react-redux';
import store from './store';


function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header/>

        <div className="Container mt-5">
          <Switch>
            <Route exact path="/" component={Fiscalias}/>
            <Route exact path="/fiscalias/nuevo" component={NuevaFiscalia}/>
            <Route exact path="/fiscalias/editar/:id" component={EditarFiscalia}/>

          </Switch>
        </div>
        </Provider>
    </Router>
  );
}

export default App;
