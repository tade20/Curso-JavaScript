import React from 'react'
import { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
class tarjeta extends Component{
    render(props) {
        return (
    <CardDeck className="d-flex">
     <Card className="d-flex">
     <Card.Img {...this.props.Articulo}/>
         
         
        <Card.Body>
        <Card.Title>{this.props.Nombre}</Card.Title>
         <Card.Text>
            {this.props.Tipo}
      </Card.Text>
    </Card.Body>
  
     </Card>
     
</CardDeck>
        );
    }
}
export default tarjeta;