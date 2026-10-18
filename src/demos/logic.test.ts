import { describe, expect, it } from "vitest";
import { START, adjustHp, nextTurn, rollD20 } from "./logic";

describe("rollD20", () => {
  it("covers 1 to 20 only", () => {
    expect(rollD20(() => 0)).toBe(1);
    expect(rollD20(() => 0.9999)).toBe(20);
  });
});

describe("adjustHp", () => {
  it("clamps between 0 and max", () => {
    expect(adjustHp(START[0], -100).hp).toBe(0);
    expect(adjustHp(START[0], 100).hp).toBe(START[0].max);
  });
});

describe("nextTurn", () => {
  it("advances and wraps into a new round", () => {
    expect(nextTurn(START, 0, 1)).toEqual({ active: 1, round: 1 });
    expect(nextTurn(START, 2, 1)).toEqual({ active: 0, round: 2 });
  });
  it("skips fallen fighters", () => {
    const order = [START[0], adjustHp(START[1], -99), START[2]];
    expect(nextTurn(order, 0, 1)).toEqual({ active: 2, round: 1 });
  });
  it("stays put when everyone is down", () => {
    const order = START.map((f) => adjustHp(f, -99));
    expect(nextTurn(order, 1, 3)).toEqual({ active: 1, round: 3 });
  });
});
