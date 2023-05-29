import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LayoutComponent from './components/layout/layout-component';

function App() {
    return (
        <main id='_tuanp-app'>
            <BrowserRouter basename='/'>
                <LayoutComponent />
            </BrowserRouter>
        </main>
    )
}

export default App;