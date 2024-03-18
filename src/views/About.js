import React from 'react'
import CustomButton from '../components/CustomButton';
import Titulo from '../components/Titulo';

const About =  function(){

    const [value, setValue] = React.useState({});
    const [count, setCount] = React.useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    function handleSubmit(e)
    {
        console.log('Submit Form');
        e.preventDefault();
    }

    function handleChange(e)
    {
        setValue(e.target.value);
        console.log(value);
    }

    return (
        <div className="w-full p-6 content-center">

            <form onSubmit={handleSubmit} >
                <label>
                    Dato:
                    <input type="text" onChange={handleChange}></input>
                </label>

                <CustomButton count={count} onClick={handleClick} color='red'
                titulo={<Titulo texto='Componente Uno'></Titulo>}
                />

                <CustomButton count={count} onClick={handleClick} color="blue"
                titulo={<Titulo texto='Componente Dos'></Titulo>}
                 />

                <input type="submit" value="Enviar Información"></input>
            </form>

        </div>
    )
}

export default About;