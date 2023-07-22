import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    errorname: '',
    secondname: '',
    error: '',
    submitted: false,
  }

  firstnameBlur = event => {
    this.setState({firstname: event.target.value})
    const {firstname} = this.state

    if (firstname === '') {
      console.log(firstname)
      return this.setState({errorname: 'Required'})
    }
    return this.setState({errorname: ''})
  }

  secondnameBlur = event => {
    const {secondname} = this.state
    this.setState({secondname: event.target.value})
    if (secondname === '') {
      return this.setState({error: 'Required'})
    }
    return null
  }

  onSubmit = event => {
    event.preventDefault()
    const {firstname, secondname} = this.state
    if (firstname !== '' && secondname !== '') {
      this.setState({submitted: true})
    } else if (firstname === '' && secondname !== '') {
      this.setState({errorname: 'Required'})
    } else if (firstname !== '' && secondname === '') {
      this.setState({error: 'Required'})
    } else {
      this.setState({errorname: 'Required', error: 'Required'})
    }
  }

  onAnotherResponse = () => {
    this.setState({submitted: false, firstname: '', secondname: ''})
  }

  onChangeFirstName = event => {
    this.setState({firstname: event.target.value})
  }

  onChangeSecondName = event => {
    this.setState({secondname: event.target.value})
  }

  renderRegistrationForm = () => {
    const {errorname, error, firstname, secondname} = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="firstname">FIRST NAME</label>
        <br />
        <input
          type="text"
          id="firstname"
          onBlur={this.firstnameBlur}
          value={firstname}
          onChange={this.onChangeFirstName}
        />
        <p>{errorname}</p>
        <label htmlFor="lastname">LAST NAME</label>
        <br />
        <input
          type="text"
          id="lastname"
          onBlur={this.secondnameBlur}
          value={secondname}
          onChange={this.onChangeSecondName}
        />
        <p>{error}</p>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    )
  }

  renderSubmitForm = () => (
    <div className="background2">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button type="button" onClick={this.onAnotherResponse} className="button">
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {submitted} = this.state
    return (
      <div className="background">
        <h1 className="heading">Registration</h1>
        <div className="background1">
          {submitted ? this.renderSubmitForm() : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
