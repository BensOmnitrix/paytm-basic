import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Error } from "../components/Error"
import { Success } from "../components/Success"

export const Signup = () => {
    const navigate = useNavigate();
    const [error,setError] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }
    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleClick = async () => {
        const response = await axios.post("http://localhost:5000/api/v1/user/signup",{
            firstName,lastName,email,password
        })
        if(!response.data.token){
            setError("yes");
        }
        const token = `Bearer ${response.data.token}`
        localStorage.setItem("token", token);
        navigate("/dashboard");
    }

    return (
        <div>
            <Card>
                {error == "yes" ? <Error/> : <div></div>}
                <Heading label={"Signup"}></Heading>
                <SubHeading label={"Enter your information to create an"} />
                <SubHeading label={"account"} />
                <InputBox onChange={handleFirstNameChange} label={"First Name"} placeholder={"John"} type={"text"}/>
                <InputBox onChange={handleLastNameChange} label={"Last Name"} placeholder={"Doe"} type={"text"}/>
                <InputBox onChange={handleEmailChange} label={"Email"} placeholder={"johndoe@gmail.com"} type={"text"}/>
                <InputBox onChange={handlePasswordChange} label={"Password"} placeholder={""} type={"password"}/>
                <Button onClick={handleClick} label={"Signup"}/>
                <BottomWarning label={"Already have an account ?"} toLink={"/signin"} buttonLabel={"Signin"}/>
            </Card>
        </div>
    )
}