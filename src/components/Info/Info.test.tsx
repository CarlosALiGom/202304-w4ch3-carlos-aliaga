import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given an Info component", () => {
  describe("When it receives a `calling`", () => {
    test("Then it should show 'calling'", () => {
      const callingText = "calling";
      const expectedText = callingText;

      render(<Info infoText={callingText} />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
