import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>

        <nav className='fs-3 bg-warning'>soy nav</nav>

        <div className='d-flex flex-grow-1 container'>
            <App />
        </div>

        <footer className='fs-3 bg-info'>soy footer</footer>

    </StrictMode>,
)
