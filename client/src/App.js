import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './container/Main/Main';
import AboutUs from './container/AboutUs';
import ContactUs from './container/ContactUs';
import PrivacyPolicy from './container/PrivacyPolicy';
import Header from './container/Header';
import Footer from './container/Footer';
import './App.css';
class App extends Component {
  render() {
    console.log('Host URL' + process.env.PUBLIC_URL);
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' render={() => <Main />} />
            <Route exact path='/about' render={() => <AboutUs />} />
            <Route exact path='/contact' render={() => <ContactUs />} />
            <Route exact path='/privacy' render={() => <PrivacyPolicy />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
