import "@testing-library/jest-dom";
import Contact from "../Contact";
import {render,screen} from "@testing-library/react";

test("should load the contact componet",()=>{
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    // assertion 
    expect(heading).toBeInTheDocument();

})

      it("should check the button ",()=>{
    render(<Contact/>);
    const button = screen.getByRole("button");
    // assertion 
    expect(button).toBeInTheDocument();

})