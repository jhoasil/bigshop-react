import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navbar />
                </header>

                <Switch>
                    <Route path="/category/:categoryId">
                        <ItemListContainer />
                    </Route>
                    <Route path="/item/:itemId">
                        <ItemDetailContainer />
                    </Route>
                    <Route path="/">
                        <ItemListContainer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
