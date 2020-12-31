import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppNavbar from './components/AppNavbar'
import { Container } from 'reactstrap';
import ShoppingList from './components/ShoppingList';




const App = () => {
    return (
        <div>
            <AppNavbar />
            <Container>
                <ShoppingList />
            </Container>
        </div>
    )
}

export default App
