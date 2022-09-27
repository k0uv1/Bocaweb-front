import './App.css';
import {Component} from 'react';
import {Cabecalho} from './Components/Cabecalho/cabecalho';
import {Lista} from './Components/Lista/lista';
import {Rodape} from './Components/Rodape/rodape';
 
class App extends Component{

  state = {
    busca:'',
    odas:[]
  }

  componentDidMount(){
    this.carregaODAS();
  }

  carregaODAS(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAS()
  }

  render(){
    const {odas} = this.state;
    
    return (
      <section>
        <Cabecalho 
        busca={this.state.busca}
        buscaODA={this.buscaODA}/>
        <Lista odas={odas}/>
        <Rodape/>

           
      </section>
    )
  }
}

export default App;