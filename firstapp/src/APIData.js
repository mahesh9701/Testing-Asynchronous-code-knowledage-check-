import React from 'react'

function APIData() 
{

    const [myData, setMyData] = React.useState([])

    React.useEffect(function()
    {
        //Logic to make an API call / connect to other application present in the internet

        fetch("https://fakestoreapi.com/products")
        .then(function(output)
        {
             return output.json()
        })
        .then(function(result)
        {
           setMyData(result) 
        })
        .catch(function(error)
        {
            console.log(error)
        })
    })

  return (
    <div>
        {
         myData.map(function(i)
         {
            return (<li key={i.id}>{i.title}</li>)
         })
        }
    </div>
  )
}

export default APIData