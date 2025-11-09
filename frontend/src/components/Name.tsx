export const Name = (props:any) => {
    return (
        <div className="flex items-center relative left-5">
                <div className="text-lg rounded-full bg-gray-400 h-10 w-10 flex justify-center items-center cursor-pointer">{props.initials}</div>
                <div className="ml-5 text-xl font-semibold">{props.firstName} {props.lastName}</div>
        </div>
    )
}