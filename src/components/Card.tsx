import type { Card as CardType } from "../types/cards";
interface CardProps {
  card: CardType;
  onHandleChoice: (card: CardType) => void;
  flipped: boolean;
  disabled: boolean;
}

function Card({ card, onHandleChoice, flipped, disabled }: CardProps) {
  function handleClick() {
    if (!disabled) {
      onHandleChoice(card);
    }
  }
  return (
    <div className="card-container">
      <div
        className={`card-wrapper ${flipped ? "card_state_flipped" : ""} ${`card_status_${card.status}`}`}
      >
        <div
          data-testid="card-back"
          className={`card card_side_back`}
          onClick={handleClick}
        />
        <div className={`card card_side_front card_image_${card.name}`} />
      </div>
    </div>
  );
}

export default Card;
