import React from 'react';

import {Route} from "react-router-dom";

import {Header} from './components/index'
import {Home, Cart} from "./pages/index";
import axios from "axios";

function App() {
const [pizzas, setPizzas] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then((response) => {
                setPizzas(response.data.pizzas)
            })
    }, [])


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' render={() => <Home  items={pizzas}/>} exact/>
                <Route path='/cart' component={Cart} exact/>
            </div>
        </div>
    );
}

export default App;
