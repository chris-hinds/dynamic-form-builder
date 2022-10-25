import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("main application", () => {
  it("renders form title", () => {
    render(<App />);
    expect(screen.getByText("Payroll Enquiry")).toBeInTheDocument();
  });

  it("renders form submit button", () => {
    render(<App />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

describe("form submission", () => {
  it.skip("fires onSubmit function with valid inputs", async () => {
    const mockOnSubmit = jest.fn();

    render(<App />);

    await act(async () =>
      userEvent.selectOptions(
        screen.getByLabelText("What does your enquiry relate to"),
        "changeOfAddress"
      )
    );

    await act(async () =>
      fireEvent.change(screen.getByTestId("query-field"), {
        target: { value: "test query message" },
      })
    );

    await act(async () => fireEvent.click(screen.getByText("Submit")));

    await waitFor(() => expect(mockOnSubmit).toHaveBeenCalled());
  });
});
