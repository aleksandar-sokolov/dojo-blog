import Home from './Home';
import NavBar from './NavBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <div className="content">
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/create" exact>
                            <Create />
                        </Route>
                        <Route path="/blogs/:id" exact>
                            <BlogDetails />
                        </Route>
                        <Route path="*" >
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
