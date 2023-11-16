
import CartWidget from "./CartWidget";

const NavBar = () => {
    const cartItemCount = 912;
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <h1 className="is-size-1">Ecommerce</h1>
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#">
            
          </a>

          <a className="navbar-item" href="#">
            Productos
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Contacto
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href="#">
                WhatsApp
              </a>
              <a className="navbar-item" href="#">
                Instagram
              </a>
              <a className="navbar-item" href="#">
                Correo
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href="#">
                Reportar un problema
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
        <CartWidget itemCount={cartItemCount} />
      </div>
      </div>
    </nav> 
    );
  };
  
  export default NavBar;