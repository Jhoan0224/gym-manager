import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>


        {/* <div className='d-flex flex-grow-1 container py-2'> */}
            <App />
        {/* </div> */}


    </StrictMode>,
)
