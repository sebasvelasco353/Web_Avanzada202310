import { useContext } from "react";
import { detailsContext } from "../App";

const Details = () => {

    const actualItem = useContext(detailsContext)
   console.log("this the actual item", actualItem)

    return (
        <div className="details">
            <section>
                <h1> Name: {actualItem.name} </h1>
                <button> Editar </button>
            </section>
            <section>
                <h3> Edad: {actualItem.age} </h3>
                <button> Editar </button>
            </section>
            <section>
                <h3> Semestre:  {actualItem.semester} </h3>
                <button> Editar </button>
            </section>
            <section>
                <h3> Major: {actualItem.major} </h3>
                <button> Editar </button>
            </section>
        </div>     
    )
};
export default Details;
