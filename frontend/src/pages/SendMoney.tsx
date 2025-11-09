import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { Name } from "../components/Name"

export const SendMoney = () => {
    return (
        <div>
            <Card>
               <Heading label={"Send Money"}/> 
               <Name firstName={"Lakshay"} lastName={"Batra"} initials={"LB"}/>
               <InputBox label={"Amount(in $)"} placeholder={"Enter amount"}/>
               <Button label={"Initiate Transfer"}/>
            </Card>
        </div>
    )
}