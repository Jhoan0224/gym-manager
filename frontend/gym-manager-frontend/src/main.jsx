import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>

        <div className='d-flex flex-column min-vh-100'>
            <App />
        </div>

    </StrictMode>,
)