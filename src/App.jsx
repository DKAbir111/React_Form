
import './App.css'
import ReuseableFrom from './Components/Form/ReuseableFrom'
// import RefForm from './Components/Form/RefForm'
// import SimpleForm from './Components/Form/SimpleForm'
// import StateFulForm from './Components/Form/StateFulForm'

function App() {
  const handleSignUpSubmit = data => {

    console.log(data)
  }

  const handleUpdateSubmit = data => {

    console.log(data)
  }



  return (
    <>
      {/* <SimpleForm /> */}
      {/* <StateFulForm /> */}
      {/* <RefForm /> */}
      <ReuseableFrom formTitle={"Sign up"} handleSubmit={handleSignUpSubmit}>
        <h2>Sign up from</h2>
        <p>Please sign up</p>
      </ReuseableFrom>
      <ReuseableFrom formTitle={"Update From"} submitBtnText={"Update"} handleSubmit={handleUpdateSubmit}>
        <h2>Update  from</h2>
        <p>Always keep your from updated</p>
      </ReuseableFrom>
    </>
  )
}

export default App;
