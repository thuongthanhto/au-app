export const generateSexConfigs = () => [
  {
    label: 'Female',
    value: 'female',
  },
  {
    label: 'Male',
    value: 'male',
  },
];

export const generateOalLevels = () => [
  {
    label: 'Light',
    value: '0',
  },
  {
    label: 'Moderate',
    value: '1',
  },
  {
    label: 'Heavy',
    value: '2',
  },
];

export const generateEalLevels = () => [
  {
    label: 'Light',
    value: '0',
  },
  {
    label: 'Moderate',
    value: '1',
  },
  {
    label: 'Very active',
    value: '2',
  },
];

export const generateAges = () => {
  const ages = [];

  for (let i = 2; i <= 80; i += 1) {
    ages.push({label: `${i} years`, value: i});
  }

  return ages;
};

export const generateHeights = () => {
  const heights = [];

  for (let i = 70; i <= 200; i += 1) {
    heights.push({label: `${i} cm`, value: i});
  }

  return heights;
};

export const generateWeights = () => {
  const weights = [];

  for (let i = 10; i <= 129; i += 1) {
    weights.push({label: `${i} kg`, value: i});
  }

  return weights;
};
