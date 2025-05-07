import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ClientPortal from './pages/ClientPortal';
import Internship from './pages/Internship';
import './styles.css';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Blog from './pages/Blog';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/services" component={Services} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Blog" component={Blog} />
            <Route path="/client-portal" component={ClientPortal} />
            <Route path="/internship" component={Internship} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;