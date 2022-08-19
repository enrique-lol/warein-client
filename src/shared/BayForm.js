import React from 'react'

const BayForm = ({ bay, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <input
      required
      name="designation"
      type="text"
      placeholder="Designation"
      value={bay.designation}
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
)

export default BayForm
