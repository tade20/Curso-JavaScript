import React,{useState} from 'react';

import  'firebase/auth';
import {useFirebaseApp,useUser} from  'reactfire';
import { Form } from 'react-bootstrap';


export default  (props) => {

    
    const [email , setEmail] = useState('');
    const [contra , setPassword] = useState('');

    
    const firebase = useFirebaseApp();
    const user = useUser();
    

     
    const createUser = async ()=>{

        await firebase.auth().createUserWithEmailAndPassword(email,contra);

    }
    
    const loginUser = async ()=>{
        await firebase.auth().signInWithEmailAndPassword(email,contra);
    }

    
    const  closeSession =async()=>{
        await firebase.auth().signOut();
    }

    return (<div>
            { user &&
            <div> 
             <Form>
             <Form.Group controlId="formBasicEmail">
                    <input type="text" placeholder="Nombre" onChange={(ev)=>setEmail(ev.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                    <input type="text" placeholder="Contraseña" onChange={(ev)=>setPassword(ev.target.value)} />
                    </Form.Group>
                    <button variant="primary" onClick={loginUser}>Iniciar session</button>
                    <button onClick={createUser}>Crear usuario</button>
            </Form>
              
            </div>
            }   
           { user &&
                <div>
                    <button onClick={closeSession}>Cerrar Sesion</button>
                </div>    

           }
         

    </div>);


}