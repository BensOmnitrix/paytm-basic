import { useNavigate } from "react-router-dom"
import { Name } from "./Name"

export const SearchResult = (props: any) => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-between mt-5">
            <Name firstName={props.firstName} lastName={props.lastName} initials={props.initials}/>
            <div onClick={() => {
                navigate(`/send?id=${props._id}&firstName=${props.firstName}&lastName=${props.lastName}`)
            }} className="active:bg-gray-700  cursor-pointer bg-gray-950 text-gray-50 rounded-md h-8 w-27 flex items-center justify-center relative right-5">Send Money</div>
        </div>
    )
}