import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders learn taggert title", () => {
    render(<App />);
    const titleElement = screen.getByText(/Taggert/i);
    expect(titleElement).toBeInTheDocument();

    screen.debug();
  });
});
