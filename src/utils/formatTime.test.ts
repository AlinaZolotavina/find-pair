import formatTime from "./formatTime";

describe("formatTime", () => {
  test("formats 0 ms", () => {
    expect(formatTime(0)).toBe("0m 0s");
  });

  test("formats minutes and seconds", () => {
    expect(formatTime(95000)).toBe("1m 35s");
  });

  test("formats hours", () => {
    expect(formatTime(12500000)).toBe("3h 28m 20s");
  });

  test("formats exactly one hour", () => {
    expect(formatTime(3600000)).toBe("1h 0m 0s");
  });
});
