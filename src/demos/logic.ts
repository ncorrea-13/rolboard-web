export interface Fighter {
  id: string;
  name: string;
  detail: string;
  hp: number;
  max: number;
  ini: number;
  side: "pc" | "npc";
}

export function rollD20(rand: () => number = Math.random): number {
  return 1 + Math.floor(rand() * 20);
}

export function adjustHp(f: Fighter, delta: number): Fighter {
  return { ...f, hp: Math.min(f.max, Math.max(0, f.hp + delta)) };
}

/** Next standing fighter in initiative order; the round advances when the order wraps. */
export function nextTurn(
  order: Fighter[],
  active: number,
  round: number,
): { active: number; round: number } {
  for (let step = 1; step <= order.length; step++) {
    const i = (active + step) % order.length;
    if (order[i].hp > 0) {
      return { active: i, round: i <= active ? round + 1 : round };
    }
  }
  return { active, round };
}

export const START: Fighter[] = [
  {
    id: "kael",
    name: "Kael Morrow",
    detail: "Tiefling · Pícaro",
    hp: 19,
    max: 27,
    ini: 21,
    side: "pc",
  },
  {
    id: "lyra",
    name: "Lyra Vance",
    detail: "Semielfa · Bardo",
    hp: 24,
    max: 31,
    ini: 17,
    side: "pc",
  },
  {
    id: "maton",
    name: "Matón de Ashmoor",
    detail: "Ad-hoc",
    hp: 16,
    max: 16,
    ini: 9,
    side: "npc",
  },
];
