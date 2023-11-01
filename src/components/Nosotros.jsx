import React from "react";
import "../styles.css";
import ImgNosotros from "../img/services2.jpg";
import { useAuth } from "../context/authContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const Nosotros = () => {
  const { user, logout } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <main className="contenedor">
        <h3 className="centrar-texto">Sobre Nosotros</h3>

        <div className="sobre-nosotros">
          <div className="sobre-nosotros__imagen">
            <img src={ImgNosotros} alt="imagen nosotros" />
          </div>

          <div className="sobre-nosotros__texto">
            <p className="sobre-nosotros__parrafo">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis tempora adipisci vel assumenda tempore, perferendis,
              debitis cumque provident vero nulla voluptatem illum dolores iusto
              quidem, veritatis soluta dolorum! Laborum, similique. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Modi optio, facere
              omnis, consequatur facilis mollitia fugit vitae est voluptates eos
              vero eveniet fugiat natus, porro architecto itaque corrupti unde
              temporibus? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. At blanditiis recusandae qui aspernatur amet eos accusamus
              nisi voluptas fuga aperiam! Quas ratione beatae placeat,
              voluptatibus voluptate repellendus alias aliquam? Minima.
            </p>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
};
