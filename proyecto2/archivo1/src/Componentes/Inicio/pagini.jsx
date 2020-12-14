import React from 'react'
import { Component } from 'react';
import Tarjeta from '../cards/tarjetas';
class inicio extends Component{
    constructor (props){
        super(props);
        this.state = {
            listaProdu : []
        }
    }
    componentDidMount(){
        fetch('https://restapitalleragustin.firebaseio.com/ProductoSuper/-MN3YD38_EiC_pgC1pmN.json').
        then(respuesta => respuesta.json()).
        then(resp => this.setState(
            {listaProdu:resp}
        ))

    }
   render(){
       
       return(
           <div>
              {this.state.listaProdu.map((item) =>{
                  return(<Tarjeta Nombre = {item.Nombre} Tipo = {item.Tipo} Articulo = {item.URL}></Tarjeta>)
              
                })} 
           </div>
       );
   }
}
export default inicio;