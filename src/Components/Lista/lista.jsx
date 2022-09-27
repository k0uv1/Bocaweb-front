export const Lista = ({odas}) => {
    return( 
      <div>
        <p className="qtd_odas"> {odas.length} odas </p>
            <div className='lista row row-cols-1 row-cols-sm-2 row-cols-md-3 g-0'>
            {odas.map(oda => (
        <div class="card key={oda._id}">
          <h4 class="card-header text-center">BocaWeb</h4>
          <div class="card-body">
            <h5 class="card-title">Nome: {oda.nome}</h5>
            <h6 class="card-subtitle mb-2">Usuário: {oda.usuario}</h6>
            <p class="card-text">Descrição: {oda.descricao}</p>
          </div>
          <div class="card-footer">Data inclusão: {oda.data_inclusao}</div>
          <div class="card-footer">Palavras chave: {oda.palavras_chave}</div>
        </div>
        ))}
        </div>
      </div>
    )    
  }