import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Game from "./Game";

const mockNavigate = jest.fn();
const mockSetRestartHandler = jest.fn();

function createContext() {
  return {
    playerName: "Anna",
    setGameResult: jest.fn(),
    openPopup: jest.fn(),
    isGameFinished: false,
    setIsGameFinished: jest.fn(),
    setRestartHandler: mockSetRestartHandler,
  };
}

let mockContext = createContext();

function renderGame() {
  return render(
    <MemoryRouter>
      <Game />
    </MemoryRouter>,
  );
}

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
  useOutletContext: () => mockContext,
}));

beforeEach(() => {
  jest.clearAllMocks();
  mockContext = createContext();
});

test("redirects to home when playerName is empty", () => {
  mockContext = {
    ...createContext(),
    playerName: "",
  };
  renderGame();
  expect(mockNavigate).toHaveBeenCalledWith("/", { replace: true });
});

test("does not redirect when playerName exists", () => {
  renderGame();
  expect(mockNavigate).not.toHaveBeenCalled();
});

test("registers restart handler", () => {
  renderGame();
  expect(mockSetRestartHandler).toHaveBeenCalledTimes(1);
  expect(typeof mockSetRestartHandler.mock.calls[0][0]).toBe("function");
});
