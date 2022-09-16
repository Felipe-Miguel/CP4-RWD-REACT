import Lampada from './components/Lampada'
import Carros from './components/Carros'
import Carterinha from './components/Carteirinha.jsx'
import Perfil from './img/Perfil.png'
import './css/App.css'
export default function App(){
    const nomes = ['Adriano Leite Ribeiro','Ronaldo Luiz Nazário de Lima','Ronaldo de Assis Amoreira']
    const rms = ['94921','85745','74854']
    const cursos = ['ADS','SI','Marketing']
    const turmas = ['1TDSPH','2KSJDS','9KSJDS']
    return(
        <>  
        <header className='head'>
        <h1 className='cp1'>CheckPoint 1</h1>
        </header>    
            <ul className='integrantes'>
                <li>Caio Henrique</li>
                <li>Carolina Puig</li>
                <li>Felipe Miguel</li>
                <li>Guilherme Costa</li>
                <li>Isadora Antunes</li> 
            </ul>
        <Lampada/>
        <Carros>
            <ul className='carros'>
                <li>Marea</li>
                <li>Brasilia</li>
                <li>Vectra</li>
                <li>Gol quadrado</li>
                <li>Golf sapão</li>
                <li>Kombi</li>
                <li>Opala</li>
                <li>Maverick</li>
                <li>Passat</li>
                <li>Buick</li>
            </ul>
        </Carros>
        <Carterinha nomes={nomes} rms = {rms} cursos ={cursos} turmas = {turmas} perfil = {Perfil}/>
        </>
    )
}