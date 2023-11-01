import data from "../data/servicios.json";

export const pedirDatos = () => {
    return new Promise((resolve,reject)=> {
       setTimeout(()=> {
        resolve(data)
       },500) 
    })
}

export const pedirItemsPorId = (id) => {
    return new Promise((resolve,reject)=>{

        const item = data.find((el)=> el.id === id);

        if(item) {
            resolve(item)
        } else{
            reject({
                error: "No se encontro el servicio"
            })
        }
    })
}