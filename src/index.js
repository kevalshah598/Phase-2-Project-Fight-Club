import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import App from './components/App';
import Form from './components/Form';
import About from './components/About';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/form",
                element: <Form />
            },
            {
                path: "/about",
                element: <About/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} /> );

