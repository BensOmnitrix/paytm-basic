import { Name } from "./Name"

export const SearchResult = (props: any) => {
    return (
        <div className="flex items-center justify-between mt-5">
            <Name firstName={props.firstName} lastName={props.lastName} initials={props.initials}/>
            <div className="cursor-pointer bg-gray-950 text-gray-50 rounded-md h-8 w-27 flex items-center justify-center relative right-5">Send Money</div>
        </div>
    )
}