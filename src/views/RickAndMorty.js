import React from "react";
import { getData } from '../services/PrimerServicio';
import Personaje from "../components/Personaje";

const RickAndMorty = function () {

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getData()
    .then(result => {
        setData(result.results);
    })
    .catch(err=> {
      console.log(err);
    })
  },[]);

  const ListPersonajes = data.map(pers => {
    return <Personaje key={pers.id} persona={pers}></Personaje>
  })

  return (
    <div className="w-auto p-2 content-center">
        <h1 className="text-2xl"> Primera Aplicacion </h1>
        <hr />

      <div className="grid xl:grid-cols-5 lg:grid-cols-3 xl:gap-4 lg:gap-2">
          {
            ListPersonajes
          }
      </div>

    </div>
  );
}

export default RickAndMorty;
