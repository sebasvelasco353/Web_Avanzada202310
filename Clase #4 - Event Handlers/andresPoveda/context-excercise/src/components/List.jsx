import { useContext } from "react";
import { studentsContext } from "../App";

const List = ({addSemester, removeSemester, showDetails}) => {

    const actualList = useContext(studentsContext)


    return (
        <>
            <table>
                <tbody>
                    {
                        actualList.map((item, index) => {
                            return <tr key={index} onClick={() => showDetails(item)}>
                                <th>Name: {item.name}</th>
                                <th> Edad: {item.age}</th>
                                <th> Semesters: {item.semester}</th>
                                <th> Major: {item.major}</th>
                                <th> <button onClick={() => addSemester(item.id)}> +1 semester </button></th>
                                <th> <button onClick={() => removeSemester(item.id)} > -1 semester </button></th>
                            </tr>
                        })
                    }
                </tbody>
            </table>  

           
                {/* <p> Current Name: Andres Poveda</p>
                <label for="nameInput">Nuevo nombre</label>
                <input type="text" id="nameInput"/>
                <button >Guardar</button>
            </div>*/}
                {/*  */}
            
            
        </>
        
    )
};
export default List;
