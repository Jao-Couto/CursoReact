import { useState } from "react";
import Navbar from "./widgets/Navbar";
import Tasks from "./screens/Tasks";
import Modal from './widgets/Modal';
import Header from './widgets/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    const [tasks, setTasks] = useState([])

    const [dropdown, setDropdown] = useState("");

    

    return (
        <Router>
            <Header setDropdown={(drop) => setDropdown(drop)}></Header>
            <Navbar></Navbar>
            <Modal className={dropdown} setTasks={(task) => setTasks([...tasks, task])} setDropdown={(value) => setDropdown(value)} />
            <Routes>
                <Route path="/hoje" element={<Tasks type="Hoje" dropdown={dropdown}></Tasks>}></Route>
                <Route path="/atrasadas" element={<Tasks type="Atrasadas" dropdown={dropdown}></Tasks>}></Route>
                <Route path="/futuras" element={<Tasks type="Futuras" dropdown={dropdown}></Tasks>}></Route>
                <Route path="/executadas" element={<Tasks type="Executadas"></Tasks>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
