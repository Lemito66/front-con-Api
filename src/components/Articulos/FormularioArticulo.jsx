import '../../inputText.css';
const FormularioArticulo = () => {
  return (
    <div>
      {/* Crear un formulario para 4 campos */}
      <form className='shadow-sm p-3 mb-5 bg-body rounded'>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputNombre"
            aria-describedby="emailHelp"
            required
            placeholder="Nombre del artículo"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Código
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputNombre"
            aria-describedby="emailHelp"
            required
            placeholder="Código del artículo"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Descripción
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputNombre"
            aria-describedby="emailHelp"
            required
            placeholder="Descripción del artículo"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Cantidad Inicial
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputNombre"
            aria-describedby="emailHelp"
            required
            placeholder="Nombre del artículo"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioArticulo;
