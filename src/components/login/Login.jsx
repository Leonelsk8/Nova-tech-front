import React from 'react'
import { useForm } from "react-hook-form";



const Home=()=> {

  const {register, formState:{errors},watch,handleSubmit}= useForm();
  //  se usa el watch para ver que no haya orto usuario con el mismo nombre pensar bien la logica 
    const onSubmit=(data)=>{
      console.log(data);
    }
  

  return (
    <div className="wrapper">
        <div className="container main">
            <div className="row">
                <div className="col-md-6 side-image">
                    
                    <img src="./images/2.jpg" alt=""/>
                    <div className="text">
                        <p>Unete a nuestra pagina para conseguir descuentos <i>- 25% Off</i></p>
                    </div>
                </div>
                <div className="col-md-6 right">
                     <div className="input-box">
                        <header>Login</header>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="input-field">
                                <input type="text" {...register('emailUserLogin',{
                                  // pattern: expresion regular definir con ivan
                                  required: true,
                                  maxLength:60,
                                })} className="input" id="email"/>
                                {errors.emailUserLogin?.type==='required'&& <p> el campo de correo esta vacio, por favor agregue un correo </p>}
                                {errors.emailUserLogin?.type==='maxLength'&& <p> Se esta exediendo la cantidad permitida de caracteres, debe tener menos de 60 caracteres </p>}
                                <label for="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input type="password" {...register('paswordLogin',{
                                  required:true,
                                  maxLength:60
                                 })} className="input" id="password" />
                                 {errors.paswordLogin?.type==='required'&& <p> el campo de correo esta vacio, por favor agregue un correo </p>}
                                 {errors.paswordLogin?.type==='maxLength'&& <p> Se esta exediendo la cantidad permitida de caracteres, debe tener menos de 60 caracteres </p>}
                                <label for="password">Password</label>
                            </div>
                            <div className="input-field">
                                <input type="submit" className="submit" value="Submit"/>
                                
                            </div>
                            <div className="signin">
                                <span>Olvidaste tu usuario o contraseña? <a href="#">Presiona aqui</a></span>
                            </div>
                        </form>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home