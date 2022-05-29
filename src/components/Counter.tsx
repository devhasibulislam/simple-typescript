import { ChangeEvent, FormEvent, useState } from 'react';

interface User {
    name?: string,
    job?: string
}

const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        setUser({
            name: "Laish Islam",
            job: "WordPress Developer"
        });

        console.log(user);
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();

        const name = event.target.value;
        console.log(name);
    }

    return (
        <div>
            <div>
                <button
                    onClick={(): void => {
                        if (count >= 0) {
                            setCount(count + 1)
                        }
                    }}
                >
                    +
                </button>
                <input
                    type="number"
                    name="counter"
                    id="counter"
                    value={count}
                    style={{ textAlign: 'center' }}
                />
                <button
                    onClick={(): void => {
                        if (count !== 0) {
                            setCount(count - 1)
                        }
                    }}
                >
                    -
                </button>
            </div>
        </div>
    );
};

export default Counter;