// if we want to performing testing on React App --> Need to use some inbuilt varibles, inbulit functions, inbuilt classes
// library --> testing-library --> automatically installed whenever we create our react app
// library --> Jest

// Lets test / check whether the App component is really displaying the message "Welcome to React" or not
// create a new test --> check 

import {getByTestId, render, screen, within} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import App from "./App"
// import APIData from "./APIData"
function hasToContain(data1, data2, data3)//data1 = myform, data2 = button, data3 = 2
{
   //Logic to check whether 2 buttons are present inside the form or not

   const myData = within(data1).queryAllByRole(data2)//within(myform).queryAllByRole(button)

   // myData = [1st buttonDown, 2nd button]

   if(myData.length === data3)
   {
      //It means there are exactly 2 buttons kept inside the form
      return{
         pass: true
      }
   }
   else
   {
      return{
         fail: false
      }
   }

   }


   describe("Matcher component", function()
{

  test("Checkning the count of the buttons", function()
   {
     render(<App/>)

   //const myButtons = screen.getAllByRole("button")
   //expect(myButtons).toHaveLength(2)


// <form> 
//    <button>Ok</button>
//    <button>Continue</button>
// </form>
   // const myform = screen.ByRole("form")
   const myform = screen.getByTestId("myform")
   expect(myform).hasToContain("button", 2)

   })
 
})


expect.extend({hasToContain})

// matches(functions) in jest (toHaveLength(), toEqual(), toBeInTheDocument(). not.toBeInTheDocument())

// watch Mode

// findAllByRole() --> When we want to find a HTML element that will be displayed on to the screen by taking some time
// This method returns a promise

// But in out case, button html element will be dispalyed immediately on to the screen, without much delay
// To identify that button element getAllRole() will be sufficient
// This method returns no promise