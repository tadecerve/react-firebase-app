import React from "react";
import IMG1 from "../img/curso1.jpg";
import IMG5 from "../img/services5.jpg";
import IMG4 from "../img/services4.jpg";
import IMG7 from "../img/services7.jpg";
import IMG8 from "../img/services8.jpg";
import IMG9 from "../img/services9.jpg";
import "../styles.css";
import { Link, useNavigate } from "react-router-dom";


// AQUI IRIAN LOS PRODUCTOS O SERVICIOS DISPONIBLES

export const ProductosLista = () => {
  return (
    <>
      //
      <main className="contenedor">
        <h3 className="centrar-texto">
          Todos nuestros servicios para contratar
        </h3>

        <div className="curso">
          <div className="curso__imagen">
            <img src={IMG1} alt="imagen del curso" />
          </div>

          <div className="curso__informacion">
            <h4 className="no-margin">Servicio de Desayuno a Domicilio</h4>
            <p className="curso__label">
              Precio:
              <span className="curso__info">$1500</span>
            </p>
            <p className="curso__label">
              Teléfono:
              <span className="curso__info">15988777</span>
            </p>
            <p className="curso__descripcion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              sed blanditiis vel doloribus est cumque natus ratione repellendus
              modi. Eos dolorum iste ipsa molestiae omnis, numquam molestias
              asperiores odio! Et?
            </p>
          </div>
        </div>

        <div className="curso">
          <div className="curso__imagen">
            <img src={IMG5} alt="imagen del curso" />
          </div>

          <div className="curso__informacion">
            <h4 className="no-margin">Servicio de electricidad</h4>
            <p className="curso__label">
              Precio:
              <span className="curso__info">$1250</span>
            </p>
            <p className="curso__label">
              Teléfono:
              <span className="curso__info">15415698</span>
            </p>
            <p className="curso__descripcion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              sed blanditiis vel doloribus est cumque natus ratione repellendus
              modi.
            </p>
          </div>
        </div>

        <div className="curso">
          <div className="curso__imagen">
            <img src={IMG4} alt="imagen del curso" />
          </div>

          <div className="curso__informacion">
            <h4 className="no-margin">Servicios de Eventos y Catering</h4>
            <p className="curso__label">
              Precio:
              <span className="curso__info">$3033</span>
            </p>
            <p className="curso__label">
              Teléfono:
              <span className="curso__info">15455682</span>
            </p>
            <p className="curso__descripcion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              sed blanditiis vel doloribus est cumque natus ratione repellendus
              modi. Eos dolorum iste ipsa molestiae omnis, numquam molestias
              asperiores odio! Et?
            </p>
          </div>
        </div>

        <div className="curso">
          <div className="curso__imagen">
            <img src={IMG7} alt="imagen del curso" />
          </div>

          <div className="curso__informacion">
            <h4 className="no-margin">Servicio de Mudanza</h4>
            <p className="curso__label">
              Precio:
              <span className="curso__info">$454</span>
            </p>
            <p className="curso__label">
              Teléfono:
              <span className="curso__info">15455682</span>
            </p>
            <p className="curso__descripcion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              sed blanditiis vel doloribus est cumque natus ratione repellendus
              modi. Eos dolorum iste ipsa molestiae omnis, numquam molestias
              asperiores odio! Et?
            </p>
          </div>
        </div>

        <div className="curso">
          <div className="curso__imagen">
            <img src={IMG8} alt="imagen del curso" />
          </div>

          <div className="curso__informacion">
            <h4 className="no-margin">Servicio de Lavandería y Tintorería</h4>
            <p className="curso__label">
              Precio:
              <span className="curso__info">$120</span>
            </p>
            <p className="curso__label">
              Teléfono:
              <span className="curso__info">15455682</span>
            </p>
            <p className="curso__descripcion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              sed blanditiis vel doloribus est cumque natus ratione repellendus
              modi. Eos dolorum iste ipsa molestiae omnis, numquam molestias
              asperiores odio! Et?
            </p>
          </div>
        </div>

        <div className="curso">
          <div className="curso__imagen">
            <img src={IMG9} alt="imagen del curso" />
          </div>

          <div className="curso__informacion">
            <h4 className="no-margin">Servicios de Seguridad del Hogar</h4>
            <p className="curso__label">
              Precio:
              <span className="curso__info">$4512</span>
            </p>
            <p className="curso__label">
              Teléfono:
              <span className="curso__info">15457782</span>
            </p>
            <p className="curso__descripcion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              sed blanditiis vel doloribus est cumque natus ratione repellendus
              modi. Eos dolorum iste ipsa molestiae omnis, numquam molestias
              asperiores odio! Et?
            </p>
          </div>
        </div>
      </main>

      <p
          className="my-4 text-black flex justify-between
                px-3  "
        >
           <Link to="/AgregarServicio">Agregar Servicio</Link>
        </p>

      {/* FOOTER */}
      <footer className="footer">
        <div className="contenedor">
          <div className="barra">
            <a className="logo" href="index.html">
              <h1 className="logo__nombre no-margin centrar-texto">
                Blog<span className="logo__bold">DeServicios</span>
              </h1>
            </a>

            <nav className="navegacion">
              <a href="/Nosotros" className="navegacion__enlace">
                Nosotros
              </a>
              <a href="/" className="navegacion__enlace">
                Servicios
              </a>
              <a href="/contactos" className="navegacion__enlace">
                Contacto
              </a>
              <a href="/login" className="navegacion__enlace">
                Salir
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

// PRODUCTOS ZAPAS

// <h1 className="titleServicios">SERVICIOS</h1>
//       <div className="productos">
//         {/* Producto 1 */}
//         <div className="producto">
//           <a href="#">
//             <div className="producto__img">
//               <img src={IMG}></img>
//             </div>
//           </a>
//           <div className="producto__footer">
//             <h1>Title</h1>
//             <p>Categoria</p>
//             <p className="price">$320</p>
//           </div>
//           <div className="buttom">
//             <button className="btn">Añadir al carrito</button>
//             <div>
//               <a href="#" className="btn">
//                 Vista
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Producto 2 */}
//         <div className="producto">
//           <a href="#">
//             <div className="producto__img">
//               <img src={IMG}></img>
//             </div>
//           </a>
//           <div className="producto__footer">
//             <h1>Title</h1>
//             <p>Categoria</p>
//             <p className="price">$320</p>
//           </div>
//           <div className="buttom">
//             <button className="btn">Añadir al carrito</button>
//             <div>
//               <a href="#" className="btn">
//                 Vista
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Producto 3 */}
//         <div className="producto">
//           <a href="#">
//             <div className="producto__img">
//               <img src={IMG}></img>
//             </div>
//           </a>
//           <div className="producto__footer">
//             <h1>Title</h1>
//             <p>Categoria</p>
//             <p className="price">$320</p>
//           </div>
//           <div className="buttom">
//             <button className="btn">Añadir al carrito</button>
//             <div>
//               <a href="#" className="btn">
//                 Vista
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Producto 4 */}
//         <div className="producto">
//           <a href="#">
//             <div className="producto__img">
//               <img src={IMG}></img>
//             </div>
//           </a>
//           <div className="producto__footer">
//             <h1>Title</h1>
//             <p>Categoria</p>
//             <p className="price">$320</p>
//           </div>
//           <div className="buttom">
//             <button className="btn">Añadir al carrito</button>
//             <div>
//               <a href="#" className="btn">
//                 Vista
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
