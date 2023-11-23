import { useState } from "react";
import Mensaje from "./Mensaje";


const NuevoPresupuesto = ({ 
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto 
}) => {

    const [mensaje, setMensaje] = useState("")

    const handlePresupuesto = (e) => {
        e.preventDefault();

     if (!presupuesto || presupuesto < 0) {
             /**
             * If the value of the input is not a number or is less than 0, 
             * then display an error message.
             */
             setMensaje("No es un presupuesto valido")
             return
        } 
        setMensaje("")
        setIsValidPresupuesto(true)


    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handlePresupuesto} className="formulario">
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>

                    <input
                        type="number"
                        className="nuevo-presupuesto"
                        placeholder="Añade tu presupuesto"
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}
                        /** Aqui con "e" capturo el evento y lo envio como parametro
                         * a mi estado setPresupuesto, para capturar el valor del input.
                         * De esa forma setPresupuesto vale lo que se reciba por el input.
                         */
                    />
                    {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                </div>

                <input type="submit" value="Añadir" />
            </form>
        </div>
    );
}

export default NuevoPresupuesto;