import Card from "./Card";
import { useEffect, useState } from "react";
import type { Card as CardType } from "../types/cards";

interface CardsProps {
  cards: CardType[];
  setGameCards: React.Dispatch<React.SetStateAction<CardType[]>>;
  onGameFinish: () => void;
}

function Cards({ cards, setGameCards, onGameFinish }: CardsProps) {
  const [firstChoice, setFirstChoice] = useState<CardType | null>(null);
  const [secondChoice, setSecondChoice] = useState<CardType | null>(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (cards.length && cards.every((card) => card.matched)) {
      onGameFinish();
    }
  }, [cards, onGameFinish]);

  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.name === secondChoice.name) {
        setGameCards((prevCards) =>
          prevCards.map((card) =>
            card.name === firstChoice.name
              ? { ...card, matched: true, status: "match" }
              : card,
          ),
        );
        setTimeout(() => resetTurn(), 800);
      } else {
        setGameCards((prev) =>
          prev.map((card) =>
            card.id === firstChoice.id || card.id === secondChoice.id
              ? { ...card, status: "no-match" }
              : card,
          ),
        );
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  const handleChoice = (card: CardType) => {
    if (disabled) return;
    if (card.id === firstChoice?.id) return;
    !firstChoice ? setFirstChoice(card) : setSecondChoice(card);
  };

  const resetTurn = () => {
    setGameCards((prev) =>
      prev.map((card) =>
        card.status !== "normal" ? { ...card, status: "normal" } : card,
      ),
    );
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  };

  return (
    <div className="cards">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onHandleChoice={handleChoice}
          flipped={
            card.id === firstChoice?.id ||
            card.id === secondChoice?.id ||
            card.matched
          }
          disabled={disabled}
        />
      ))}
    </div>
  );
}

export default Cards;
