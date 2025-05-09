import React from 'react'

function Wish(props) {//props ===> name="Raju"
  return (
    <div>
        <h1 data-testid="recieveddata">{props.name}</h1>
    </div>
  )
}

export default Wish