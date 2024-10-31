export default function SimpleForm() {
    const handleSubmit = e => {
        e.preventDefault();
        console.log("From submited");
    }
    return (
        <div>
            <h2>Simple From</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" />  <br />
                <input type="email" /> <br />
                <input type="password" /> <br />
                <input type="submit" />
            </form>
        </div>
    )
}
