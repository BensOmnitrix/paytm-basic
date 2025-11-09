import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signup = () => {
    return (
        <div>
            <Card>
                <Heading label={"Signup"}></Heading>
                <SubHeading label={"Enter your information to create an"} />
                <SubHeading label={"account"} />
                <InputBox label={"First Name"} placeholder={"John"}/>
                <InputBox label={"Last Name"} placeholder={"Doe"}/>
                <InputBox label={"Email"} placeholder={"johndoe@gmail.com"}/>
                <InputBox label={"Password"} placeholder={""}/>
                <Button label={"Signup"}/>
                <BottomWarning label={"Already have an account ?"} toLink={"/signin"} buttonLabel={"Signin"}/>
            </Card>
        </div>
    )
}