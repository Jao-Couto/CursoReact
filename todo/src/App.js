import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Modal from './components/Modal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    const [tasks, setTasks] = useState([])
    const [tasksExecutadas, setTasksExecutadas] = useState([])

    const [dropdown, setDropdown] = useState("");

    return (
        <Router>
            <Header setDropdown={(value) => setDropdown(value)}></Header>
            <Modal className={dropdown} setTasks={(task) => setTasks([...tasks, task])} setDropdown={(value) => setDropdown(value)} />
            <Routes>
                <Route path="/hoje" element={<Tasks hoje setTasks={(task) => setTasks(task)} tasks={tasks} setTasksExecutadas={(task) => setTasksExecutadas(task)} tasksExecutadas={tasksExecutadas}></Tasks>}></Route>
                <Route path="/atrasadas" element={<Tasks atrasadas setTasks={(task) => setTasks(task)} tasks={tasks} setTasksExecutadas={(task) => setTasksExecutadas(task)} tasksExecutadas={tasksExecutadas}></Tasks>}></Route>
                <Route path="/proximas" element={<Tasks proximas setTasks={(task) => setTasks(task)} tasks={tasks} setTasksExecutadas={(task) => setTasksExecutadas(task)} tasksExecutadas={tasksExecutadas}></Tasks>}></Route>
                <Route path="/executadas" element={<Tasks executadas setTasks={(task) => setTasks(task)} tasks={tasks} setTasksExecutadas={(task) => setTasksExecutadas(task)} tasksExecutadas={tasksExecutadas}></Tasks>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
