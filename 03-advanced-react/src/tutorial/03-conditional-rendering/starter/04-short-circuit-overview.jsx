import { useState } from 'react'

const ShortCircuitOverview = () => {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState('Hello world')

  return <h2>{value1 || value2}</h2>
}
export default ShortCircuitOverview
