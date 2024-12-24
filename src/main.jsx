import { createRoot } from 'react-dom/client'
import './styles/main.css'
import Router from '@/routes/router.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <Router/>
    </>
)
