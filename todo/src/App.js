import { useState } from "react";
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
        description: "bla",
        code: "hoje",
    };

    const atrasadas = {
        name: "Atrasadas",
        description: "bla",
        code: "atrasadas",
    };

    const futuras = {
        name: "Futuras",
        description: "bla",
        code: "futuras",
    };

    const executadas = {
        name: "Executadas",
        description: "bla",
        code: "executadas",
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
                        element={<Tasks typeMap={atrasadas} />}
                    />
                    <Route
                        path="/futuras"
                        element={<Tasks typeMap={futuras} />}
                    />
                    <Route
                        path="/executadas"
                        element={<Tasks typeMap={executadas} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
