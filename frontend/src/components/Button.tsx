export const Button = (props:any) => {
    return (
        <div className="bg-gray-950 text-gray-50 m-5 mt-6 h-8 rounded-md flex items-center justify-center ">
            {props.label}
        </div>
    )
}