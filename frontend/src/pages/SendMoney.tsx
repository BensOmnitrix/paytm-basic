import { useAsyncError, useSearchParams } from "react-router-dom"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { Name } from "../components/Name"
import { useState } from "react"
import axios from "axios"
import { Success } from "../components/Success"
import { Error } from "../components/Error"

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const firstName = searchParams.get("firstName");
    const lastName = searchParams.get("lastName");
    const [amount,setAmount] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    }

    const onClick = async () => {
        const token =  localStorage.getItem("token");
        const response = await axios.post("http://localhost:5000/api/v1/account/transfer",{
            to: id,
            amount: amount
        },{
            headers: {
                "Authorization": token
            }
        })
        if(response.data.message !== "Transfer successfull"){
            setShowSuccess(true);
        }
    }

    return (
        <div>
            <Card>
                {showSuccess ? <Success message={"Transfer successfull"} /> : <div></div>}
               <Heading label={"Send Money"}/> 
               <Name firstName={firstName} lastName={lastName} initials={"U"}/>
               <InputBox onChange={onChange} label={"Amount(in $)"} placeholder={"Enter amount"}/>
               <Button onClick={onClick} label={"Initiate Transfer"}/>
            </Card>
        </div>
    )
}