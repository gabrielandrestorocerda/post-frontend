import React from "react"


import Button from "../Button/Button";

const Datatablerow = ({ dataElement, deleteFunction}) => {
    return(
        <tr className="tr">
            <td className="td">{dataElement.post}</td>
            <td className="td">{dataElement.description}</td>
            <td className="td center">
                <Button klass='button delete' onClick={() => deleteFunction(dataElement)}> Eliminar</Button>
            </td>
        </tr>
    )
}
export default Datatablerow;