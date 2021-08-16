import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hobbies from './Views/Hobbies';
import Contact from './Views/Contact';


function App() {

    return (
        <div>
            <Router>
                <Header />
                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/hobbies">
                        <Hobbies />
                    </Route>

                    <Route path="/contact">
                        <Contact />
                    </Route>

                </Switch>
                <Footer />
            </Router>

            
        </div>
    );
}

export default App;
