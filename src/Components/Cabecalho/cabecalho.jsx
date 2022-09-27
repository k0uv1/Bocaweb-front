export const Cabecalho = ({busca, buscaODA}) =>{
  var logo = require('./img/logobranco.png')
    return( 
    <html>
        <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>

        </head>
        <body>

        <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#!"><img src={logo} className="d-inline-block" alt='logo-bocaweb'></img>BocaWeb - Front</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#!">Conheça o BocaWeb</a>
            </li>
        
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Administração
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#!">Action</a></li>
                <li><a className="dropdown-item" href="#!">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#!">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#!'>Contato</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2"
          name='busca'
          type='text'
          value={busca}
          placeholder='O que deseja buscar?'
          onChange={buscaODA}
          />
            <button className="btn text-black bg-light" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>

        </body>
    </html>
    

    )
}

