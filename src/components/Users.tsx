import { useEffect, useState } from "react";
import UserModel from "../types/UserModel";
import User from "./User";

const Users = () => {
    const [user, setUser] = useState<UserModel[]>([]);
    useEffect((): void => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);
    return (
        <div>
            {/* <User
                name="RK Rakib Mia"
                age={22}
            /> */}

            <div
                style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem"}}
            >
                {
                    user.map(usr => <User
                        user={usr}
                    />)
                }
            </div>
        </div>
    );
};

export default Users;