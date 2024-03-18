
const CustomButton = function ( { count, onClick, color, titulo } ){
    return (

        <div>
            {
                titulo
            }

            <button className={"btn bg-" + color + "-500" } onClick={onClick}>
                        Clicked {count} times
                    </button>
        </div>


    );

}

export default CustomButton;