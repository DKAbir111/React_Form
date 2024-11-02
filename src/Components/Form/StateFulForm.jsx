import { useState } from "react";

export default function StateFulForm() {

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }
        else {
            console.log(name, email, password);
        }

    }
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState('');
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
                {
                    password.length < 6 && <p style={{ color: 'red' }} >At least 6 charecters</p>
                }
                <input type="submit" />
            </form>

        </div >

    )
}
