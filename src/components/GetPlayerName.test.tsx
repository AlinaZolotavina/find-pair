import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import GetPlayerName from "./GetPlayerName";

const mockNavigate = jest.fn();
const mockSetPlayerName = jest.fn();

function renderGetPlayerName() {
  return render(
    <MemoryRouter>
      <GetPlayerName />
    </MemoryRouter>,
  );
}

beforeEach(() => {
  jest.clearAllMocks();
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),

  useNavigate: () => mockNavigate,

  useOutletContext: () => ({
    setPlayerName: mockSetPlayerName,
  }),
}));

test("renders input and button", () => {
  renderGetPlayerName();

  expect(
    screen.getByPlaceholderText("Enter your name or nickname"),
  ).toBeInTheDocument();

  expect(screen.getByRole("button", { name: /play/i })).toBeInTheDocument();
});

test("play button is disabled initially", () => {
  renderGetPlayerName();

  const button = screen.getByRole("button", {
    name: /play/i,
  });

  expect(button).toBeDisabled();
});

test("enables button after entering name", async () => {
  const user = userEvent.setup();

  renderGetPlayerName();

  const input = screen.getByRole("textbox");

  await user.type(input, "Alice");

  await waitFor(() => {
    expect(
      screen.getByRole("button", {
        name: /play/i,
      }),
    ).toBeEnabled();
  });
});

test("submits player name", async () => {
  const user = userEvent.setup();

  renderGetPlayerName();

  const input = screen.getByRole("textbox");

  await user.type(input, "Alice");

  await user.click(
    screen.getByRole("button", {
      name: /play/i,
    }),
  );

  expect(mockSetPlayerName).toHaveBeenCalledWith("Alice");

  expect(mockNavigate).toHaveBeenCalledWith("/new-game", { replace: true });
});
