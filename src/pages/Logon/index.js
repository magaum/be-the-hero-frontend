import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css'
import herosImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero logo" />

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua Id" />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="register">
                        <FiLogIn size={18} color="#e02041" />
                        Não tenho cadastro
                    </Link>

                </form>
            </section>

            <img src={herosImg} alt="Heroes" />
        </div>
    );
}