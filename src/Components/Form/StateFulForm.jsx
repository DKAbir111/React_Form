import { useState } from "react";

export default function StateFulForm() {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);
    }
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }
    const handlePasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    return (

        <div>
            <h2>State full From</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleNameChange} required />  <br />
                <input type="email" name="email" onChange={handleEmailChange} /> <br />
                <input type="password" name="password" onChange={handlePasswordChange} /> <br />
                <input type="submit" />
            </form>
        </div >

    )
}
