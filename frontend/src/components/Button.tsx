export const Button = (props:any) => {
    return (
        <div onClick={props.onClick} className="bg-gray-950 active:bg-gray-700 cursor-pointer text-gray-50 m-5 mt-6 h-8 rounded-md flex items-center justify-center ">
            {props.label}
        </div>
    )
}