// if we want to performing testing on React App --> Need to use some inbuilt varibles, inbulit functions, inbuilt classes
// library --> testing-library --> automatically installed whenever we create our react app
// library --> Jest

// Lets test / check whether the App component is really displaying the message "Welcome to React" or not
// create a new test --> check 

import {getByTestId, render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import App from "./App"
import APIData from "./APIData"

describe("APIData component", function()
{

   test("Check whether li length is minimum one or not", async function()
   {
      //Logic

      render(<App/>)

      const allListItems = await screen.findAllByRole("listitem")
      // allListItems = [1st, 2nd, 3rd, 4th]

      expect(allListItems).toHaveLength(20)
     
   })

})


// watch Mode