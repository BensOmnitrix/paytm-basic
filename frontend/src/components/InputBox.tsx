export const InputBox = (props:any) => {
    return (
        <div className="ml-5 mr-5 mt-3">
            <label htmlFor="inputBox" className="block mb-1 font-semibold">{props.label}</label>
            <input className="border-2 focus:outline-gray-500 rounded-md w-full pl-2 h-8" type="text" id="inputBox" placeholder={props.placeholder}/>
        </div>
    )
}