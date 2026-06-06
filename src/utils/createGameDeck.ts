import baseCards from "./baseCards";
import type { Card } from "../types/cards";

export default function createGameDeck(): Card[] {
  return [...baseCards, ...baseCards]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({
      ...card,
      id: Math.random(),
      matched: false,
      status: "normal",
    }));
}
