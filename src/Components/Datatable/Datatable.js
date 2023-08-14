import React from "react"


import Datatablerow from "./Datatablerow";

import './Datatable.css';

const Datatable = ({ data, deleteFunction }) => {
    return (
        <table className="datatable">
            <thead>
                <tr className="tr">
                    <th className="th">Post</th>
                    <th className="th">Descripción</th>
                    <th className="th center">Acción</th>
                </tr>
            </thead>
            <tbody className="tbody border-table">
                { data.map((dataElement, index) => <Datatablerow 
                                                    dataElement={dataElement}
                                                    key={index} 
                                                    deleteFunction={deleteFunction}/>)}
            </tbody>
        </table>
    )
}

export default Datatable;