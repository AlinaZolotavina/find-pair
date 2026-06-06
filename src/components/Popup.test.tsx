import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Popup from "./Popup";

const mockClose = jest.fn();
const mockPlayAgain = jest.fn();

function renderPopup() {
  return render(
    <MemoryRouter>
      <Popup
        isOpen={true}
        gameResult="00:01:25"
        onClose={mockClose}
        onPlayAgain={mockPlayAgain}
      />
    </MemoryRouter>,
  );
}

test("adds opened class when popup is open", () => {
  renderPopup();

  expect(screen.getByRole("dialog")).toHaveClass("popup_is-opened");
});

test("renders game result", () => {
  renderPopup();

  expect(screen.getByText(/00:01:25/i)).toBeInTheDocument();
});

test("calls onPlayAgain when play again button is clicked", async () => {
  const user = userEvent.setup();

  renderPopup();

  await user.click(
    screen.getByRole("button", {
      name: /play again/i,
    }),
  );

  expect(mockPlayAgain).toHaveBeenCalledTimes(1);
});

test("calls onClose when leaderboard link is clicked", async () => {
  const user = userEvent.setup();

  renderPopup();

  await user.click(
    screen.getByRole("link", {
      name: /leaderboard/i,
    }),
  );

  expect(mockClose).toHaveBeenCalledTimes(1);
});

test("calls onClose when close button is clicked", async () => {
  const user = userEvent.setup();

  renderPopup();

  await user.click(
    screen.getByRole("button", {
      name: /close popup/i,
    }),
  );

  expect(mockClose).toHaveBeenCalledTimes(1);
});

test("calls onClose when Escape is pressed", async () => {
  const user = userEvent.setup();

  renderPopup();

  await user.keyboard("{Escape}");

  expect(mockClose).toHaveBeenCalledTimes(1);
});
