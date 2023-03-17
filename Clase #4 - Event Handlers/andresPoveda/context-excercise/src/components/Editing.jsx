import { useContext } from "react";
//import { detailsContext } from "../App";

const Editing = () => {

    //const actualItem = useContext(detailsContext)
    //console.log("this the actual item", actualItem)

    return (
        <div className="editing">
            <form className="form">
                <p>Current: </p>
                <div>
                    <p> New: </p>
                    <input type="text" id="userInput" />
                    <button> Save </button>  
                </div>
               
            </form>
        </div>
    )
};
export default Editing;
