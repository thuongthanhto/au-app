export const _lookup = {
  female: {
    rmr: [655.1, 1.8, 9.6, 4.7],
    sex_age_values: [
      /*	Under 10
      Age		AVG kg		kJ/kg/day	AVG kJ	*/
      [1 / 12, [4, 480, 1920]],
      [2 / 12, [5.7, 420, 2390]],
      [6 / 12, [7.44, 400, 2980]],
      [1, [9.5, 400, 3800]],
      [2, [11.8, 400, 4720]],
      [3, [13.85, 400, 5540]],
      [4, [16.8, 395, 6120]],
      [5, [18.9, 345, 6480]],
      [6, [21.3, 320, 6770]],
      [7, [23.8, 295, 7050]],
      [8, [26.6, 275, 7280]],
      [9, [29.7, 255, 7510]],
      /* Over 10
       Age		*kg 		base kJ		Confidence-range */
      [10, [0.056, 3.434, 940]],
      [18, [0.062, 2.036, 1000]],
      [30, [0.034, 3.538, 940]],
      [60, [0.0386, 2.875, 0]],
      [75, [0.041, 2.61, 0]],
    ],
    /* [occupational][non-occupational] */
    activity_adjust: [
      [1.4, 1.5, 1.6] /* Light */,
      [1.5, 1.6, 1.7] /* Moderate */,
      [1.5, 1.6, 1.7] /* Heavy */,
    ],
  },
  male: {
    rmr: [66.5, 5.0, 13.7, 6.8],
    sex_age_values: [
      /*	Under 10
      Age		AVG kg		kJ/kg/day	AVG kJ	*/
      [1 / 12, [4.15, 480, 1990]],
      [2 / 12, [6.12, 420, 2570]],
      [6 / 12, [8, 400, 6200]],
      [1, [10.04, 400, 4020]],
      [2, [12.39, 400, 4960]],
      [3, [14.4, 400, 5760]],
      [4, [17.0, 395, 6730]],
      [5, [10.3, 370, 7190]],
      [6, [21.7, 350, 7570]],
      [7, [24.2, 325, 7920]],
      [8, [26.8, 305, 8240]],
      [9, [29.7, 290, 8550]],
      /* Over 10
       Age		*kg 		base kJ		Confidence-range */
      [10, [0.074, 2.754, 880]],
      [18, [0.063, 2.896, 1280]],
      [30, [0.048, 3.653, 1400]],
      [60, [0.0499, 2.93, 0]],
      [75, [0.035, 3.434, 0]],
    ],
    /* [occupational][non-occupational] */
    activity_adjust: [
      [1.4, 1.5, 1.6] /* Light */,
      [1.6, 1.7, 1.8] /* Moderate */,
      [1.7, 1.8, 1.9] /* Heavy */,
    ],
  },
};

export const _activity_METs = {
  Basketball: 6.0,
  'Bicycling: gentle': 6.0,
  'Bicycling: vigorous': 10.0,
  Billiards: 2.5,
  Bushwalking: 6.0,
  'Child care': 2.5,
  'Dancing: ballroom': 3.0,
  'Dancing: nightclub': 4.5,
  Fishing: 3.0,
  Frisbee: 3.0,
  'Gaming: yoga': 2.3,
  'Gaming: dance': 7.2,
  Gardening: 3.5,
  'Gardening: mowing': 4.5,
  Golf: 4.3,
  Guitar: 3.0,
  'Health club exercise': 5.0,
  'Housework: light': 2.5,
  'Housework: vacuuming': 3.5,
  'Housework: cooking': 2.0,
  'Housework: laundry': 2.3,
  Kayaking: 5.0,
  'Lawn bowling': 3.3,
  'Making a bed': 3.3,
  'Martial arts': 10.3,
  Paddleboarding: 6.0,
  Pilates: 3.8,
  Reading: 1.0,
  'Rock climbing': 8.0,
  'Running/jogging': 8.0,
  Rugby: 8.3,
  Rollerskating: 7.0,
  'Sitting at a sporting event': 1.5,
  Skateboarding: 5.0,
  Skiing: 7.0,
  Snorkelling: 5.0,
  Soccer: 7.0,
  'Stair climbing, slow': 4.0,
  'Stair climbing, fast': 8.8,
  Surfing: 3.0,
  Swimming: 7.0,
  'Table tennis': 4.0,
  Tennis: 7.0,
  'Touch football': 8.0,
  TV: 1.0,
  'Video game exercise': 3.8,
  Volleyball: 8.0,
  'Walking: gentle': 3.5,
  'Walking: vigorous': 3.8,
  'Walking the Dog': 3.0,
  'Weight lifting': 3.0,
  Yoga: 2.5,
};

export const _summary_METs = {
  Light: 3.0,
  Medium: 6.0,
  Vigorous: 8.0,
};

const ratios = {
  kJ: {
    Cal: 0.239,
  },
  Cal: {
    kJ: 4.184,
  },
};
export const sortTaskByBookMark = list =>
  list.sort((a, b) => b.bookmark - a.bookmark);

export const validationAddSchedule = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Title is required';
  }
  if (!values.description) {
    errors.description = 'Description is required';
  }
  if (!values.startDate) {
    errors.startDate = 'Start date is required';
  }
  if (!values.startTime) {
    errors.startTime = 'Start time is required';
  }
  if (!values.endTime) {
    errors.endTime = 'End time is required';
  }
  return errors;
};

export const checkActivityVisibility = age => {
  const ageVal = parseFloat(age);
  if (!isNaN(ageVal) && ageVal >= 10) {
    return true;
  }

  return false;
};

export const checkWeightGoalVisibility = age => {
  const ageVal = parseFloat(age);
  if (!isNaN(ageVal) && ageVal >= 18) {
    return true;
  }

  return false;
};

export function toClosest(value, grain) {
  const remainder = value % grain;
  const rounding = remainder > grain / 2 ? grain : 0;
  const result = value - remainder + rounding;

  return result;
}

export function isEmpty(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

export function getBMRUnderTen(age, sex, weight) {
  let sex_age_values;

  for (let i = 0, count = _lookup[sex].sex_age_values.length; i < count; ++i) {
    if (_lookup[sex].sex_age_values[i][0] <= age) {
      sex_age_values = _lookup[sex].sex_age_values[i][1];
    }
  }

  let result = weight * sex_age_values[1];

  result = {
    value: result,
    tolerance: 0,
  };

  return result;
}

function getBMRTenAndOlder(age, sex, weight) {
  let sex_age_values;

  for (let i = 0, count = _lookup[sex].sex_age_values.length; i < count; ++i) {
    if (_lookup[sex].sex_age_values[i][0] <= age) {
      sex_age_values = _lookup[sex].sex_age_values[i][1];
    }
  }

  let result = (sex_age_values[0] * weight + sex_age_values[1]) * 1000;

  result = {
    value: result,
    tolerance: sex_age_values[2],
  };

  return result;
}

function adjustBMRForActivity(
  bmr,
  sex,
  tolerance,
  occupationalIntensity,
  nonOcupationalIntensity,
) {
  const adjustment =
    _lookup[sex].activity_adjust[occupationalIntensity][
      nonOcupationalIntensity
    ];

  const result = {
    value: bmr * adjustment,
    upper: (bmr + tolerance) * adjustment,
    lower: (bmr - tolerance) * adjustment,
  };

  return result;
}

function getBMR(
  sex,
  age,
  weight,
  occupationalIntensity,
  nonOcupationalIntensity,
) {
  let result;
  if (age < 10) {
    result = getBMRUnderTen(age, sex, weight);
  } else {
    result = getBMRTenAndOlder(age, sex, weight);

    const adjustments = adjustBMRForActivity(
      result.value,
      sex,
      result.tolerance,
      occupationalIntensity,
      nonOcupationalIntensity,
    );
    result.upper = adjustments.upper;
    result.lower = adjustments.lower;
    result.value = adjustments.value;
  }

  return result;
}

export const updateProfileCalculations = activeProfile => {
  const profile = activeProfile || null;
  if (profile !== null) {
    const bmrResult = getBMR(
      profile.sex,
      profile.age,
      profile.weight,
      profile.oal_level,
      profile.eal_level,
    );

    console.log(bmrResult);
    // ec.baseBMR = bmrResult.value;

    profile.BMR.current.bottom = bmrResult.lower;
    profile.BMR.current.top = bmrResult.upper;

    profile.BMR.goal.bottom = bmrResult.lower;
    profile.BMR.current.top = bmrResult.upper;

    profile.BMR.current.value = bmrResult.value;
    profile.BMR.goal.value = bmrResult.value;

    profile.BMR.current.tolerance = bmrResult.tolerance;

    if (typeof profile.weight_goal !== 'undefined') {
      const adjustment = 2000;

      profile.BMR.goal.value =
        profile.BMR.current.value + profile.weight_goal * adjustment;
      if (profile.BMR.current.tolerance) {
        profile.BMR.goal.bottom =
          profile.BMR.current.bottom + profile.weight_goal * adjustment;
        profile.BMR.goal.top =
          profile.BMR.current.top + profile.weight_goal * adjustment;
      }
    }

    return profile;
  }

  return null;
};

export const customReducer = (state, newState) => ({
  ...state,
  ...newState,
});

export function calculateGoalBMR(goal, oldProfile) {
  const adjustment = 2000;
  const goalDirection = parseFloat(goal);
  const profile = {...oldProfile, weight_goal: goalDirection};

  if (!profile.BMR.goal) {
    profile.BMR.goal = {};
  }

  profile.BMR.goal.value =
    profile.BMR.current.value + goalDirection * adjustment;

  if (profile.BMR.current.tolerance) {
    profile.BMR.goal.bottom =
      profile.BMR.current.bottom + goalDirection * adjustment;
    profile.BMR.goal.top = profile.BMR.current.top + goalDirection * adjustment;
  }

  return profile;
}

export function getRMR(sex = 'male', height = 175, weight = 70, age = 40) {
  const rmrValues = _lookup[sex].rmr;
  return (
    rmrValues[0] +
    rmrValues[1] * height +
    rmrValues[2] * weight -
    rmrValues[3] * age
  );
}

function getEnergyUse(activity, rmr, weight, hours) {
  const met = _activity_METs[activity] || _summary_METs[activity];
  return (1 / (rmr / weight / 24)) * met * weight * hours * 4.184;
}

export function calculateBurn(activity, duration, profile) {
  if (activity === '' || isNaN(duration)) {
    return '';
  }

  const rmr = getRMR(profile.sex, profile.height, profile.weight, profile.age);

  const energyUse = Math.round(
    getEnergyUse(activity, rmr, profile.weight, duration / 60),
  );

  return energyUse;
}

export function toDP(value, places) {
  const p = Math.pow(10, places);
  return Math.round(value * p) / p;
}

export function convert(value, source, destination) {
  return value * ratios[source][destination];
}

export function getActivityDuration(activity, rmr, weight, energy) {
  const met = _activity_METs[activity] || _summary_METs[activity];

  return energy / 4.184 / weight / met / (1 / (rmr / weight / 24));
}
