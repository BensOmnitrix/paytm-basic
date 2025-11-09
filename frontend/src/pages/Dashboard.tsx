import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { SearchBar } from "../components/SearchBar"
import { SearchResult } from "../components/SearchResult"

export const DashBoard = () => {
    return (
        <div>
            <AppBar leftLabel={"Payments App"} firstName={"Lakshay"} initials={"LB"}/>
            <Balance balance={"100000"}/>
            <SearchBar label={"Users"} placeholder={"Search users..."}/>
            <SearchResult firstName={"Lakshay"} lastName={"Batra"} initials={"LB"}/>
        </div>
    )
}