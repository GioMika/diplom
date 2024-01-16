
function ValidationError({ keyName, message }) {

  return (
    <>
      {keyName &&
        <p style={{ color: "rgb(229, 241, 4)", fontSize: "26px" }}>
          {message}
     </p>
      }
    </>
  )
}

export default ValidationError;
