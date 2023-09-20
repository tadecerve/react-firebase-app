import { useAuth } from "../context/authContext";
import "../styles.css";



export function Home() {
  // const authContext = useContext(context)
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
    <header className="header">
      <div className="contenedor">
        <div className="barra">
          <a className="logo" href="/">
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
            <a href="/Contactos" className="navegacion__enlace">
              Contacto
            </a>
            <a href="/login" className="navegacion__enlace">
              Salir
            </a>
          </nav>
        </div>
      </div>

      <div className="header__texto">
        <h2 className="no-margin">Blog de servicios para contratar</h2>
        <p className="no-margin">
          Postulá tu servicio que deseas ofrecer o contratá el que necesites
        </p>
      </div>
    </header>

    
    
  );
}

{
  /* <div className="w-full max-w-xs m-auto text-black">
             <div className="bg-white rounded shadow-md px-8 pt-6 pb-8
            mb-4">
                <h1 className="text-xl mb-4"> Welcome { user.displayName || user.email}</h1>

                <button onClick={handleLogout} className="bg-slate-200
                 hover:bg-slate-300 rounded py-2 px-4 text-black">
                     logout
                 </button>
            </div>
         </div>  */
}

//      <header class="h-60rem bg-cover bg-no-repeat bg-center">
//      <div className="w-full md:w-min-[90%,120rem] mx-auto">
//           <img src= {miImagen} alt="Mi imagen"/ >

//           <div className="pt-16">
//               <a className="text-white" href="/">
//                    <h1 className="text-center m-0 font-bold font-normal text-black ">Blog <span class="font-bold">DeServicios</span></h1>
//                </a>
//           </div>

//       </div>

//   </header>
