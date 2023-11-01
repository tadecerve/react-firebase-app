import Item from "./Item";


const ItemList = ({servicios}) => {
  return (
    <div className="container">
      <h1 className="main-title">Servicios</h1>

      <div className="servicios">
        {servicios.map((serv) => <Item servicio={serv} key={serv.id}/> )}
      
      </div>
        
    </div>
  );
};

export default ItemList
