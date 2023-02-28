import { useContext } from "react";
import { studentsContext } from "../App";

const List = ({addSemester, removeSemester, showDetails}) => {

    const actualList = useContext(studentsContext)


    return (
        <>
            <h1> Andrés Poveda</h1>
            <h2> React context excercise</h2>
            <table>
                <tbody>
                    { 
                        actualList.map((item, index) => {
                            return <tr key={index} onClick={() => showDetails(item)}>
                                <th> <span> Name: </span> {item.name}</th>
                                <th> <span> Age: </span> {item.age}</th>
                                <th> <span> Semester: </span> {item.semester}</th>
                                <th> <span> Major: </span> {item.major}</th>
                                <th> <button className="addButton" onClick={() => addSemester(item.id)}> +1 semester </button></th>
                                <th> <button className="removeButton" onClick={() => removeSemester(item.id)} > -1 semester </button></th>
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
