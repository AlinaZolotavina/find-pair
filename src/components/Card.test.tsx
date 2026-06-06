import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";
import type { Card as CardType } from "../types/cards";

const mockHandleChoice = jest.fn();

const card: CardType = {
  id: 1,
  name: "apple",
  matched: false,
  status: "normal",
};

function renderCard(disabled: boolean) {
  return render(
    <Card
      card={card}
      onHandleChoice={mockHandleChoice}
      flipped={false}
      disabled={disabled}
    />,
  );
}

beforeEach(() => {
  mockHandleChoice.mockClear();
});

test("does not call onHandleChoice when disabled", async () => {
  const user = userEvent.setup();
  renderCard(true);
  await user.click(screen.getByTestId("card-back"));
  expect(mockHandleChoice).not.toHaveBeenCalled();
});

test("calls onHandleChoice when enabled", async () => {
  const user = userEvent.setup();

  renderCard(false);

  await user.click(screen.getByTestId("card-back"));

  expect(mockHandleChoice).toHaveBeenCalledWith(card);
  expect(mockHandleChoice).toHaveBeenCalledTimes(1);
});
