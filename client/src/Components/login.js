import React,{useState} from 'react'
import '../css/login.css'

const Login =()=> {
    const[email, setemail] = useState('');
    const[password, setpassword] = useState('');
    
    async function userLogin(event){
        event.preventDefault();
      const response =  await fetch('http://localhost:5000/api/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json();

        if(data.user){ 
            console.log(data.user);
            localStorage.setItem("name", data.user.name);
         
            alert('login successful');
            alert(localStorage.getItem("name"));
            //window.location.href='/';
        }



        else{alert('please check username and password')}

        console.log(data);
        
    }

  return (
    <div className='register'>

    <div className="login-form">
        <div className="login-form-flex">
    <h1>Login</h1>
        <form onSubmit={userLogin}>
        
        <input
        value={email}
        onChange={(e)=> setemail(e.target.value)}
        type="email" name="email" id="" 
        placeholder='email'/>
        <br />
        
        
        <input
        value={password}
        onChange={(e)=> setpassword(e.target.value)}
        type="password" name="password" id="" 
        placeholder='password'/>
        <br />
        <input type="submit" value="Register" className='button' />
        </form>    
    </div>    
    </div>
    </div>
  )
}

export default Login;
