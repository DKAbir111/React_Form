import { useEffect, useRef } from "react";

export default function RefForm() {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

    }

    useEffect(() => {
        nameRef.current.focus(); // Focus on name input field on mount
    }, [])
    return (
        <div>

            <h2>Ref Form From</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" ref={nameRef} />  <br />
                <input type="email" name="email" ref={emailRef} defaultValue={'abir@gmail.com'} /> <br />
                <input type="password" name="password" ref={passwordRef} /> <br />
                <input type="submit" />
            </form>

        </div>
    )
}
