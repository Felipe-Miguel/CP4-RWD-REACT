import '../css/Carteirinha.css'
import React, { useState } from 'react';

export default function Carterinha(props) {
    const [dados, setDados] = useState({ 'nome': '', 'rm': '', 'curso': '', 'turma': '' })
    const mostrarDados = (e) => {
        const { name, value } = e.target;
        if (name == 'nome') {
            setDados({ 'nome': value, 'rm': dados.rm, 'curso': dados.curso, 'turma': dados.turma })
        } else if (name == 'rm') {
            setDados({ 'nome': dados.nome, 'rm': value, 'curso': dados.curso, 'turma': dados.turma })
        } else if (name == 'curso') {
            setDados({ 'nome': dados.nome, 'rm': dados.rm, 'curso': value, 'turma': dados.turma })
        } else if (name == 'turma') {
            setDados({ 'nome': dados.nome, 'rm': dados.rm, 'curso': dados.curso, 'turma': value })
        }
    }
    return (
        <>
        <div className='allCart'>
            <div className='container'>
                <img src={props.Perfil} class='ftPerfil' />
                <div className='geralCart'>
                    <ul className='ulCarteirinha'>
                        <li>Nome: {props.nomes[2]}</li>
                        <li>RM: {props.rms[2]}</li>
                        <li>Curso: {props.cursos[2]}</li>
                        <li>Turma: {props.turmas[2]}</li>
                    </ul>
                </div>
            </div>
            <div className='container'>
                <img src={props.Perfil} class='ftPerfil' />
                <div className='geralCart'>
                    <ul className='ulCarteirinha'>
                        <li>Nome: {props.nomes[2]}</li>
                        <li>RM: {props.rms[2]}</li>
                        <li>Curso: {props.cursos[2]}</li>
                        <li>Turma: {props.turmas[2]}</li>
                    </ul>
                </div>
            </div>
            <div className='container'>
                <img src={props.Perfil} class='ftPerfil' />
                <div className='geralCart'>
                    <ul className='ulCarteirinha'>
                        <li>Nome: {props.nomes[2]}</li>
                        <li>RM: {props.rms[2]}</li>
                        <li>Curso: {props.cursos[2]}</li>
                        <li>Turma: {props.turmas[2]}</li>
                    </ul>
                </div>
            </div>
            <div className='container'>
                <img src={props.Perfil} class='ftPerfil' />
                <div className='geralCart'>
                    <ul className='ulCarteirinha'>
                        <li>Nome: {dados.nome}</li>
                        <li>RM: {dados.rm}</li>
                        <li>Curso: {dados.curso}</li>
                        <li>Turma: {dados.turma}</li>
                    </ul>
                </div>
            </div>
            <div className='containerForm'>
            <ul>
                        <p>Preencha os dados da carteirinha acima</p>
                        <input className='inputDados' placeholder="Nome" type="text" name="nome" onChange={mostrarDados} />
                        <input className='inputDados 'placeholder="RM" type="text" name="rm" onChange={mostrarDados} />
                        <input className='inputDados' placeholder="Curso"type="text" name="curso" onChange={mostrarDados} />
                        <input className='inputDados' placeholder="Turma" type="text" name="turma" onChange={mostrarDados} />
                    </ul>
            </div>
        </div>
        </>
    )
}
