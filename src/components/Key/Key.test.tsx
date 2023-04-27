import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When it recieves a text '0'", () => {
    test("It should show a button with a text '0' inside", () => {
      const text = "0";

      render(<Key isBig={true} text={text} actionOnClick={jest.fn} />);
      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument;
    });
  });
});
