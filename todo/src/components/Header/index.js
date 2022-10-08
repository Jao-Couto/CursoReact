import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header(props) {

    const showDropdown = () => {
        props.setDropdown("show");
        document.body.style.backgroundColor = "rgba(0,0,0,0.5)"
    }
    return (
        <>
            <header className="header">
                <section>
                    <Link to={'/hoje'}>Hoje</Link>
                    <Link to={'/atrasadas'}>Atrasadas</Link>
                    <Link to={'/proximas'}>Próximas</Link>
                    <Link to={'/executadas'}>Executadas</Link>
                </section>

                <section>
                    <img src="https://cdn.pixabay.com/photo/2017/01/10/23/01/icon-1970474_1280.png" alt="Adicionar Tarefa" onClick={showDropdown}></img>
                    <img src="https://github.com/Jao-Couto.png" alt="Usuário" resize="contain"></img>
                </section>
            </header>
        </>
    );
}

export default Header;
