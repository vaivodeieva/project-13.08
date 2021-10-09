import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hobbies from './Views/Hobbies';
import Contact from './Views/Contact';
import Page404 from './Views/Page404';
import Art from './Views/Art';
import Photos from './Views/Photos';

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

                    <Route path="/art">
                        <Art /> 
                    </Route>

                    <Route path="/photos">
                        <Photos /> 
                    </Route>

                    <Route>
                        <Page404 />
                    </Route>

                </Switch>
                <Footer />
            </Router>

        </div>
    );
}

export default App;
