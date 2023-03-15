
const CrudTable = ({data, setDataToEdit, deleteData}) => {

    return (
        <div>
            <h3>Tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length === 0 ? (
                            <tr>
                                <td colSpan="3">No existen elementos</td>
                            </tr>
                        ) : (
                            data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.lastname}</td>
                                    <td><button onClick = {()=> setDataToEdit (item)}>Editar</button>
                                    <button onClick = {()=> deleteData (item.id)}>Eliminar</button></td>
                                </tr>
                            )
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default CrudTable