import React from 'react';
import axios from "axios"
import {connect} from 'react-redux'

import {Header} from './components'
import {Home, Cart} from "./pages";
import {Route} from 'react-router-dom'

import {setPizzas} from "./redux/actions/pizzas";



function App ({setPizzas, items}) {

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            setPizzas(data.pizzas)
        })
    },[])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" render={() => <Home items={items}/>} exact/>
                <Route path="/cart" component={Cart} exact/>
            </div>
        </div>
    )
}



const mapStateToProps = (state) =>  {
    return {
        items: state.pizzas.items,
        filter: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPizzas: (items) => dispatch(setPizzas(items)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)