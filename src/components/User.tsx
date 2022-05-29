/**
 * Approach: 1
*/

/* const User: = (props: {name?: string, age?: number}) => {
    return (
        <div>
            <p><b>{props?.name}</b>{' '}|{' '}<b>{props?.age}</b></p>
        </div>
        );
    };

export default User; */

/**
 * Approach: 2
*/

/* import { FC } from "react";

const User: FC<{ name?: string, age?: number }> = (props) => {
    return (
        <div>
            <p><b>{props?.name}</b>{' '}|{' '}<b>{props?.age}</b></p>
        </div>
    );
};

export default User; */

/**
 * Approach: 3
 */

/* import { FC } from "react";

interface Props {
    name?: string,
    age?: number
}

const User: FC<Props> = ({ name, age }) => {
    return (
        <div>
            <p><b>{name}</b>{' '}|{' '}<b>{age}</b></p>
        </div>
    );
};

export default User; */

/**
 * Approach: 4
 */

import { FC } from "react";
import UserModel from "../types/UserModel";

interface Props {
    user: UserModel
}

const User: FC<Props> = ({user}) => {
    return (
        <div>
            <p><b>{user?.name}</b>{' '}|{' '}<b>{user?.email}</b></p>
        </div>
    );
};

export default User;