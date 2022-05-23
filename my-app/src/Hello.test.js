import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test('Hello App rendering',() =>{
    render(<Hello />);
    const text = screen.getByText(/This is the header section/i);
    expect(text).toBeInTheDocument();
});