import React, { useState } from 'react'
import './styles.js'
import { Container } from './styles.js'
import logo from '../../imagens/imag.png'
import axios from 'axios'
import Routes from '../routes/Routes'


const Login = () => {


    var [formulario, setFormulario] = useState('')
    const [logged, setLogged] = useState('')
   
    const callLogin = () =>{

        axios.post('/login', formulario)
            .then(function (response) {
                response.data === 'ok' ? setLogged(true) : setLogged(false);
                console.log(logged)
             })
            .catch(function (error) {
                console.log(error);
        });

    }

    const handleChange = (e) =>{
        let obj = {
            [e.target.name] : e.target.value

        }
        setFormulario(obj)
    }


    return (
        <Container>
            <div className="maior">
                <img src={logo}/>
                <h1>Log in to you account</h1>
                <div className="menor">
                    <input  onChange={handleChange} placeholder="Username" name="username" type="text"/>
                    <input  onChange={handleChange} type="password" name="password" placeholder="Password"/>
                    <button onClick={callLogin} className="buttonLogin">Login</button>
                </div>
            </div>
        </Container>
    )
}

export default Login