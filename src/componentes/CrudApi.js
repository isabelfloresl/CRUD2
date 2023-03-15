
import { useEffect, useState } from "react"
import CrudForm from "./CrudForm"
import CrudTable from "./CrudTable"
import { helpHTTP } from "../helper/helpHttps"
import Message from "./Loader"
import Loader from "./Loader"


const CrudApi = () => {

    let api = helpHTTP();
    //let url = 'http://localhost/5000/users'
    let url="http://localhost:5000/users"

    useEffect (() => {

        setLoading(true)
        api.get(url).then((response) => {

            if(!response.err){
                setDb(response)
                setError(null)    
            }
            else{
                setDb(null)
                setError(response)
            }
            setLoading(false)
            
        })

    }, [])

    const [db, setDb] = useState ([])
    const [dataToEdit,setDataToEdit] =useState (null)

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const createData=(data)=>{
        setDb([...db,data])
    };
    
    const updateData=(data)=>{
        let newData = db.map (item => item.id==data.id?data:item)
        setDb(newData)
    }
    const deleteData=(id)=>{
        let eliminar = db.filter(item => item.id!==id)
        setDb (eliminar)
    }
    return (
        <div>
            <h1>CRUD Api</h1>
            {loading && <Loader/>}
            {error && <Message msg = {`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>}
            <CrudForm create={createData} update={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>

            {db && <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>}


        </div>
    )
}
export default CrudApi