import { dateToday } from "./dateToday";

describe("suite of tests for dateToday.ts", () => {
  test("returns today's date", () => {
    expect(dateToday()).toStrictEqual(new Date().toLocaleDateString());
  });
});
