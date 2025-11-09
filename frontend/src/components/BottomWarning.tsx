import { Link } from "react-router-dom"

export const BottomWarning = (props: any) => {
    return (
        <div className="flex justify-center items-center m-5">
            <div className="mr-1">{props.label}</div>
            <Link to={props.toLink} className="underline">{props.buttonLabel}</Link>
        </div>
    )
}