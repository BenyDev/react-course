const ErrorExample = () => {
  var count = 0

  return (
    <>
      <h2>useState error example</h2>
      <button
        onClick={() => {
          count += 1
          console.log(count)
        }}
      >
        Value:{count}
      </button>
    </>
  )
}

export default ErrorExample
