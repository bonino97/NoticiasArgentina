import React,{Component,Fragment} from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';



class App extends Component {
  state = {
    noticias:[]
  }

  async componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=36827d05345741a7bfec1283e85c84f9`;
    
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    console.log(noticias.articles);

    this.setState({
      noticias: noticias.articles
    })
  }

  render() { 
    
    return (
      <Fragment>
        <Header 
          titulo = 'Noticias Argentina'
        />
        <div className="container white contenedor-noticias">
          <Formulario
            consultarNoticias={this.consultarNoticias}
          />
          <ListaNoticias 
            noticias = {this.state.noticias}
          />
        </div>
      </Fragment>
    );
  }
}
 
export default App;
