import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Modal from './components/Modal';

function App() {
    const [tasks, setTasks] = useState([])
    const [dropdown, setDropdown] = useState("");

    return (
        <>
            <Header setDropdown={(value) => setDropdown(value)}></Header>
            <Modal className={dropdown} setTasks={(task) => setTasks(task)} setDropdown={(value) => setDropdown(value)} />

            <section style={{ display: "flex", alignItems: 'center', flexDirection: 'column' }}>
                {tasks.map((item, index) => {
                    if (index == 0)
                        return <Tasks {...item} key={index}></Tasks>
                })}

            </section>
        </>
    );
}

export default App;
