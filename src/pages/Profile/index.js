import React from 'react'
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import './styles.css'
import logoImg from '../../assets/logo.svg'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero logo" />
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/cadastro/casos">Cadastrar novo caso</Link>

                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CARAI</strong>
                    <p>Casos de familia</p>

                    <strong>Descrição</strong>
                    <p>Descrição mais descrita</p>

                    <strong>Valor: </strong>
                    <p>R$ 8984984984894984</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li><li>
                    <strong>CARAI</strong>
                    <p>Casos de familia</p>

                    <strong>Descrição</strong>
                    <p>Descrição mais descrita</p>

                    <strong>Valor: </strong>
                    <p>R$ 8984984984894984</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li><li>
                    <strong>CARAI</strong>
                    <p>Casos de familia</p>

                    <strong>Descrição</strong>
                    <p>Descrição mais descrita</p>

                    <strong>Valor: </strong>
                    <p>R$ 8984984984894984</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li><li>
                    <strong>CARAI</strong>
                    <p>Casos de familia</p>

                    <strong>Descrição</strong>
                    <p>Descrição mais descrita</p>

                    <strong>Valor: </strong>
                    <p>R$ 8984984984894984</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    )
}