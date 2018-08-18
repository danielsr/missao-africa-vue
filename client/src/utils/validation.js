import every from 'lodash/every';

export function isFormInvalid({ errors, fields }) {
  return every(fields, 'pristine') || errors.any();
}
