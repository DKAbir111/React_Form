import PropTypes from 'prop-types'
const ReuseableFrom = ({ formTitle, submitBtnText = 'Submit', handleSubmit, children }) => {
    const localSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value

        }
        handleSubmit(data);
    }
    return (
        <div>
            <h2>{formTitle}</h2>
            {children}
            <form onSubmit={localSubmit}>
                <input type="text" name="name" />  <br />
                <input type="email" name="email" /> <br />
                <input type="password" name="password" /> <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

ReuseableFrom.propTypes = {
    formTitle: PropTypes.string.isRequired,
    submitBtnText: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};


export default ReuseableFrom;