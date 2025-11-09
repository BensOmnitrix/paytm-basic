export const Card = (props: any) => {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="shadow-xl rounded-xl w-85">
                {props.children}
            </div>
        </div>
    )
}