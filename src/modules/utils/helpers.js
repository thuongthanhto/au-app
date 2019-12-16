export const sortTaskByBookMark = (list) => list.sort((a, b) => b.bookmark - a.bookmark);

export const validationAddSchedule = (values) => {
  const errors = {};
  if(!values.title) {
    errors.title = 'Title is required';
  }
  if(!values.description) {
    errors.description = 'Description is required';
  }
  if(!values.startDate) {
    errors.startDate = 'Start date is required';
  }
  if(!values.startTime) {
    errors.startTime = 'Start time is required';
  }
  if(!values.endTime) {
    errors.endTime = 'End time is required';
  }
  return errors;
};