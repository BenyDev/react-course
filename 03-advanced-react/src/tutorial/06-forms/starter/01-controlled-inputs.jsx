import { useState } from 'react'

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  // const handleChange = (e) => {
  //   setName(e.target.value)
  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name, email)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          id="email"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  )
}
export default ControlledInputs
