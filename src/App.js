import React, {Component} from 'react';
import './App.css';
import { Button } from '@material-ui/core';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: "Eduardo Lino",
      contador: 0,
      total: 0
    }
    this.aumentar = this.aumentar.bind(this);
  }

  aumentar(){
    console.log("aumentou");
    let state = this.state;
    state.contador += 1;
    this.setState(state);
  }

  render(){
    return(
      <div>
        {this.state.nome} <br/>
        <button onClick={this.aumentar}> + </button> <br/>
        <Button color="primary">Hello World</Button>
        {this.state.contador}
      </div>
    )
  }

}

export default App;
