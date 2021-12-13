type colorsOptions = {
  [key: string]: {
    lines: number;
    tolerance: number;
    hex: string;
    name?: string;
  };
};

export const resistorColors: colorsOptions = {
  black: {
    lines: 0,
    tolerance: 0,
    hex: '#000000',
  },
  brown: {
    lines: 1,
    tolerance: 1,
    hex: '#6D4C41',
  },
  red: {
    lines: 2,
    tolerance: 2,
    hex: '#E53935',
  },
  orange: {
    lines: 3,
    tolerance: 0,
    hex: '#FF9800',
  },
  yellow: {
    lines: 4,
    tolerance: 0,
    hex: '#FDD835',
  },
  green: {
    lines: 5,
    tolerance: 0.5,
    hex: '#4CAF50',
  },
  blue: {
    lines: 6,
    tolerance: 0.25,
    hex: '#039BE5',
  },
  violet: {
    lines: 7,
    tolerance: 0.1,
    hex: '#9C27B0',
  },
  gray: {
    lines: 8,
    tolerance: 0.05,
    hex: '#616161',
  },
  white: {
    lines: 9,
    tolerance: 0,
    hex: '#fdfdfd',
  },
  gold: {
    lines: 0.1,
    tolerance: 5,
    hex: '#E5C063',
  },
  silver: {
    lines: 0.01,
    tolerance: 10,
    hex: '#aaa9ad',
  },
};

export const resistorColorsInArray = Object.keys(resistorColors).map((key) => {
  return { name: (resistorColors[key].name = key), ...resistorColors[key] };
});
