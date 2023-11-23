import React from 'react'

/**
 * It takes in a prop called children and a prop called tipo,
 *  and returns a div with the className of
 * alerta and the value of the tipo prop.
 * @returns A React component.
 */

const Mensaje = ({children, tipo}) => {
  return (
    <div className={`alerta ${tipo}`}>{children}</div>
  )
}

export default Mensaje;