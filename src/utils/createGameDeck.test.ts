import createGameDeck from "./createGameDeck";

describe("createGameDeck", () => {
  test("creates 24 cards", () => {
    const deck = createGameDeck();

    expect(deck).toHaveLength(24);
  });

  test("every card starts unmatched", () => {
    const deck = createGameDeck();

    expect(
      deck.every((card) => card.matched === false && card.status === "normal"),
    ).toBe(true);
  });

  test("contains exactly two apples", () => {
    const deck = createGameDeck();

    const apples = deck.filter((card) => card.name === "apple");

    expect(apples).toHaveLength(2);
  });

  test("contains exactly two tomatoes", () => {
    const deck = createGameDeck();

    const tomatoes = deck.filter((card) => card.name === "tomato");

    expect(tomatoes).toHaveLength(2);
  });
});
