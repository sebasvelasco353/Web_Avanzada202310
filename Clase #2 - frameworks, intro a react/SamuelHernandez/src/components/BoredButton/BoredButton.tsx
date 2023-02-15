import { ReactNode } from "react"

export const BoredButton = (
    props : {
        children? : ReactNode[] | ReactNode,
        onClick? : { (e: React.MouseEvent<HTMLButtonElement>) :void}
    }
) => {
    return (
        <button {...props}>
            {props.children}
        </button>
    )
}