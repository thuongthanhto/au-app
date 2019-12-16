export const PREFIX_NAME = 'KANE';

export const baseCombineActionTypes = (actionName) => ({
  [`${actionName}_REQUEST`]: `${PREFIX_NAME}_${actionName}_REQUEST`,
  [`${actionName}_SUCCESS`]: `${PREFIX_NAME}_${actionName}_SUCCESS`,
  [`${actionName}_FAILURE`]: `${PREFIX_NAME}_${actionName}_FAILURE`
});