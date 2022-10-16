import { useEffect, useState } from "react";
import Navbar from "./widgets/Navbar";
import Tasks from "./screens/Tasks";
import Modal from "./widgets/Modal";
import Header from "./widgets/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [show, setShow] = useState(false);

    const setShowFunc = (bool) => {
        setShow(bool);
    };

    const hoje = {
        name: "Hoje",
        code: "hoje",
    };

    const atrasadas = {
        name: "Atrasadas",
        code: "atrasadas",
    };

    const futuras = {
        name: "Futuras",
        code: "futuras",
    };

    const executadas = {
        name: "Executadas",
        code: "executadas",
    };

    const excluidas = {
        name: "Excluidas",
        code: "excluidas",
    };

    return (
        <Router>
            <Header setShow={setShowFunc}></Header>
            <Modal
                show={show}
                setShow={setShowFunc}
            />
            <div className="sidebar">
                <Navbar></Navbar>
                <Routes>
                    <Route path="/hoje" element={<Tasks typeMap={hoje}></Tasks>}></Route>
                    <Route
                        path="/atrasadas"
                        element={<Tasks typeMap={atrasadas}></Tasks>}
                    ></Route>
                    <Route
                        path="/futuras"
                        element={<Tasks typeMap={futuras}></Tasks>}
                    ></Route>
                    <Route
                        path="/executadas"
                        element={<Tasks typeMap={executadas}></Tasks>}
                    ></Route>
                    <Route
                        path="/excluidas"
                        element={<Tasks typeMap={excluidas}></Tasks>}
                    ></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
