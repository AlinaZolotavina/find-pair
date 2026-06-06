import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cards from "../components/Cards";
import type { Card as CardType } from "../types/cards";
const mockSetGameCards = jest.fn();
const mockOnGameFinish = jest.fn();

function createCard(
  id: number,
  name: CardType["name"],
  matched: boolean,
): CardType {
  return {
    id,
    name,
    matched,
    status: matched ? "match" : "normal",
  };
}
const cards = [
  createCard(1, "apple", false),
  createCard(2, "apple", false),
  createCard(3, "tomato", false),
];

const finishedCards = [
  createCard(1, "apple", true),
  createCard(2, "apple", true),
];

function renderCards(cards: CardType[]) {
  return render(
    <Cards
      cards={cards}
      setGameCards={mockSetGameCards}
      onGameFinish={mockOnGameFinish}
    />,
  );
}

beforeEach(() => {
  jest.clearAllMocks();
});

test("marks matching cards as matched", async () => {
  const user = userEvent.setup();

  renderCards(cards);

  const cardElements = screen.getAllByTestId("card-back");

  await user.click(cardElements[0]);
  await user.click(cardElements[1]);

  expect(mockSetGameCards).toHaveBeenCalledTimes(1);

  const updater = mockSetGameCards.mock.calls[0][0];

  const result = updater(cards);

  expect(result[0].matched).toBe(true);
  expect(result[1].matched).toBe(true);
  expect(result[0].status).toBe("match");
  expect(result[1].status).toBe("match");
});

test("marks non-matching cards with no-match status", async () => {
  const user = userEvent.setup();

  renderCards(cards);

  const cardElements = screen.getAllByTestId("card-back");

  await user.click(cardElements[1]);
  await user.click(cardElements[2]);

  expect(mockSetGameCards).toHaveBeenCalledTimes(1);

  const updater = mockSetGameCards.mock.calls[0][0];

  const result = updater(cards);

  expect(result[1].matched).toBe(false);
  expect(result[2].matched).toBe(false);
  expect(result[1].status).toBe("no-match");
  expect(result[2].status).toBe("no-match");
});

test("does not allow selecting the same card twice", async () => {
  const user = userEvent.setup();

  renderCards(cards);

  const cardElements = screen.getAllByTestId("card-back");

  await user.click(cardElements[0]);
  await user.click(cardElements[0]);

  expect(mockSetGameCards).not.toHaveBeenCalled();
});

test("calls onGameFinish when all cards are matched", () => {
  renderCards(finishedCards);
  expect(mockOnGameFinish).toHaveBeenCalledTimes(1);
});

test("does not call onGameFinish when not all cards are matched", () => {
  renderCards(cards);
  expect(mockOnGameFinish).not.toHaveBeenCalled();
});
