import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Tests for Card component", () => {
  test("has correct title and subtitle", () => {
    render(
      <Card id="card" title="Title" subtitle="Subtitle">
        <p>Children</p>
      </Card>
    );
    const heading = screen.getByTestId("card-card-heading");
    expect(heading.innerHTML).toBe("Title");
  });
});
