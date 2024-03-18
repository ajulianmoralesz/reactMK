
const Personaje = function(props){

    return (
        <div key={props.persona.id}
        className="flex flex-col max-w-sm bg-white border border-gray-200 
        rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4 py-4 justify-between" >

            <div className="flex flex-col items-center">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={props.persona.image} alt="Personaje"></img>
            </div>

            <div className="px-4 py-0">

                <div className="font-bold text-xl mb-2">
                    {props.persona.name}
                </div>

                <div className="text-gray-700 text-base mb-2">
                    <p><b>Especie:</b> {props.persona.species} </p>
                    <p><b>Origen:</b> {props.persona.origin.name} </p>
                    <p><b>Genero:</b> {props.persona.gender} </p>
                    <p><b>Ubicacion:</b> {props.persona.location.name} </p>
                </div>

            </div>

        </div>
    )

}

export default Personaje