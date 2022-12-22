import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

let checkbool = false;
function stateCheck (){
  return(
    checkbool = !checkbool
  )
}
function mostrar(e){
  e.preventDefault();
  let user, password, remember, conjunto;

  user = document.getElementById("usuario").value;
  password = document.getElementById("password").value;
  remember = checkbool;

  conjunto = {
    user: user,
    password: password,
    remember: remember
  }
  console.log(conjunto)
}
function App(){
    return(
        <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
            <div className='login'>
                <h2 className='mb-3'>Iniciar Sesión</h2>
                <form className='needs-validation'>
                  <div className='form-group was-validated mb-2'>
                      <label htmlFor='Username' className='form-label'>User:</label>
                      <input id="usuario" type="text" className='form-control' required></input>
                      <div className='invalid-feedback'>
                        Por favor ingresa tu usuario.
                      </div>
                  </div>
                  <div className='form-group was-validated mb-2'>
                      <label htmlFor='Password' className='form-label'>Contraseña:</label>
                      <input id="password" type="password" className='form-control' required></input>
                      <div className='invalid-feedback'>
                        Por favor ingresa tu contraseña.
                      </div>
                  </div>
                  <div className='form-group form-check mb-2'>
                      <input id="remember" type="checkbox" onChange={stateCheck} className='form-check-input'></input>
                      <label htmlFor='remember' className='form-check-label'>Recuérdame</label>
                  </div>
                  <button type="submit" className='btn btn-success block w-100 mt-2' onClick={mostrar} >INICIAR SESIÓN</button>
                </form>
            </div>
        </div>
    )
}
export default App;
