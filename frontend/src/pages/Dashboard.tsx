import { useRef, useState } from "react";
import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { SearchBar } from "../components/SearchBar";
import { SearchResult } from "../components/SearchResult";
import axios from "axios";

export const DashBoard = () => {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);

  const debounceTimer = useRef(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilter(value);
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(async () => {
      try {
        if (!value.trim()) {
          setUsers([]);
          return;
        }

        const token = localStorage.getItem("token");

        const response = await axios.get(
          `http://localhost:5000/api/v1/user/bulk?filter=${value}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setUsers(response.data.users || []);
      } catch (err) {
        console.error(err);
        setUsers([]);
      }
    }, 100);
  };

  return (
    <div>
      <AppBar
        leftLabel={"Payments App"}
        firstName={"Lakshay"}
        initials={"LB"}
      />
      <Balance balance={"100000"} />
      <SearchBar
        onChange={handleChange}
        label={"Users"}
        placeholder={"Search users..."}
      />
      {users.map(({ firstName, lastName, _id }) => {
        const initials = firstName[0] + lastName[0];
        return (
          <SearchResult
            firstName={firstName}
            lastName={lastName}
            initials={initials}
            _id={_id}
            key={_id}
          />
        );
      })}
    </div>
  );
};
