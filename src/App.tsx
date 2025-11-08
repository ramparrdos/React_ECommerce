import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Shopping from './pages/Shopping'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App(){
    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Shopping/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
        </>
    )
};

export default App;