import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given an Info component", () => {
  describe("When its renderized", () => {
    test("Then it should show 'Calling...' text", () => {
      const expectedText = "Calling...";

      render(<Info isCalling={true} display={[]} />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
