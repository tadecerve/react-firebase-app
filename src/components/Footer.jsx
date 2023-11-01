import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      {/* FOOTER */}
      <footer className="footer">
        <div className="contenedor">
          <div className="barra">
          <Link className="logo" to="/">
              <h1 className="logo__nombre no-margin centrar-texto">
                Blog<span className="logo__bold">DeServicios</span>
              </h1>
            </Link>
            
            <nav className="navegacion">
              <Link to="/nosotros" className="navegacion__enlace">
                Nosotros
              </Link>
              <Link to="/" className="navegacion__enlace">
                Servicios
              </Link>
              <Link to="/contactos" className="navegacion__enlace">
                Contacto
              </Link>
              <Link to="/login" className="navegacion__enlace">
                Salir
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer