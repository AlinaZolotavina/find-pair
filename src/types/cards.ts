export type CardName =
  | "apple"
  | "grapes"
  | "pear"
  | "banana"
  | "cucumber"
  | "eggplant"
  | "tomato"
  | "strawberries"
  | "pumpkin"
  | "corn"
  | "broccoli"
  | "carrot";

export type CardStatus = "normal" | "match" | "no-match";

export type BaseCard = {
  name: CardName;
};

export type Card = {
  readonly id: number;
  name: CardName;
  status: CardStatus;
  matched: boolean;
};
