import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { cleanup, fireEvent, render } from "@testing-library/react"
import CheckboxWithLabel from "../../CheckboxWithLabel"

describe("CheckboxWithLabel", () => {
  it("changes the text after click", () => {
    const { queryByLabelText, getByLabelText, getByText } = render(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    )

    expect(queryByLabelText(/off/i)).toBeTruthy()

    fireEvent.click(getByLabelText(/off/i))

    expect(queryByLabelText(/on/i)).toBeTruthy()

    expect(getByText(/on/i)).toBeInTheDocument()
  })
})
