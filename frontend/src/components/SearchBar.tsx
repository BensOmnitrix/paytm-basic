export const SearchBar = (props:any) => {
    return (
        <div className="ml-5 mr-5 mt-3">
            <label htmlFor="inputBox" className="block font-bold text-2xl mb-3">{props.label}</label>
            <input onChange={props.onChange} className="border-2 border-gray-200 focus:outline-gray-700 rounded-md w-full pl-2 h-10" type="text" id="inputBox" placeholder={props.placeholder}/>
        </div>
    )
}