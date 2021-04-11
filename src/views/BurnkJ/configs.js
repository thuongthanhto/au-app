import {_activity_METs} from '../../modules/utils/helpers';

export function generateDurations() {
  const increments = 5; // min
  const durations = [];
  for (let i = 1; i <= 60; ++i) {
    let label = '';
    const min = i * increments;
    const hours = min / 60;
    const minLeft = min % 60;
    const hoursClean = Math.floor(hours);
    if (hoursClean !== 0) {
      label = `${hoursClean} hr`;
      label += hoursClean > 1 ? 's' : '';
    }
    if (minLeft !== 0) {
      label += label.length ? ', ' : '';
      label += `${minLeft} min`;
    }
    durations.push({value: min, label});
  }

  return durations;
}

export function generateActivities() {
  const result = [];

  for (const activity in _activity_METs) {
    result.push({value: activity, label: activity});
  }

  return result;
}
