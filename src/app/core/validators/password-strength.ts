import { AbstractControl, ValidationErrors } from '@angular/forms';

export function strongPassword(
  control: AbstractControl
): ValidationErrors | null {
  const password = control.value;
  if (!password) {
    return null;
  }

  const errors: ValidationErrors = {};

  if (!/[A-Z]/.test(password)) {
    errors['hasUpperCase'] =
      'Password must contain at least one uppercase letter.';
  }

  if (!/[a-z]/.test(password)) {
    errors['hasLowerCase'] =
      'Password must contain at least one lowercase letter.';
  }

  if (!/[0-9]/.test(password)) {
    errors['hasNumeric'] = 'Password must contain at least one numeric digit.';
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors['hasSpecial'] =
      'Password must contain at least one special character.';
  }

  return Object.keys(errors).length ? errors : null;
}
