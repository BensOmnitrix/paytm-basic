import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin = () => {
    return (
        <div>
            <Card>
                <Heading label={"Signin"} />
                <SubHeading label={"Enter you credentials to access your"}/>
                <SubHeading label={"account"}/>
                <InputBox label={"Email"} placeholder={"johndoe@example.com"}/>
                <InputBox label={"Password"}/>
                <Button label={"Signin"}></Button>
                <BottomWarning label={"Don't have an account ?"} toLink={"/signup"} buttonLabel={"Signup"}/>
            </Card>
        </div>
    )
}