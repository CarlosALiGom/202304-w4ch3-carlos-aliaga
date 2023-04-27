import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given an Info component", () => {
  describe("When its rendered", () => {
    test("Then it should show 'Calling...' text on it", () => {
      const text = "Calling...";
      render(<Info />);

      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
