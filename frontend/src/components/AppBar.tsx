export const AppBar = (props: any) => {
    return (
        <div className="flex justify-between items-center h-15 shadow-sm">
            <div className="font-semibold text-2xl ml-5">{props.leftLabel}</div>
            <div className="flex relative right-5">
                <div className="text-lg mr-2 flex items-center">Hello, {props.firstName}</div>
                <div className="text-lg rounded-full bg-gray-400 h-10 w-10 flex justify-center items-center cursor-pointer">{props.initials}</div>
            </div>
        </div>
    )
}   