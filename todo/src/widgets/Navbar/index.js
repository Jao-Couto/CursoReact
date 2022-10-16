import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarDay, FaCalendarAlt, FaCalendarTimes, FaCalendarCheck } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
    return (
        <ul>
            <li>
                <Link to={"/atrasadas"}>
                    <FaCalendarTimes className="icons" />
                    <p>Atrasadas</p>
                </Link>
            </li>
            <li>
                <Link to={"/hoje"}>
                    <FaCalendarDay className="icons" />
                    <p>Hoje</p>
                </Link>
            </li>

            <li>
                <Link to={"/futuras"}>
                    <FaCalendarAlt className="icons" />
                    <p>Próximas</p>
                </Link>
            </li>
            <li>

                <Link to={"/executadas"}>
                    <FaCalendarCheck className="icons" />
                    <p>Executadas</p>
                </Link>
            </li>
            <li>

                <Link to={"/excluidas"}>
                    <FaCalendarCheck className="icons" />
                    <p>Excluidas</p>
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;
