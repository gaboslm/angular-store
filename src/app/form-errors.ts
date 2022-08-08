
export const errors = {
  required: (name?: string) => `The ${name} field is required`,
  minlength: (name?: string) => `The ${name} field must have at least 3 characters`,
  maxlength: (name?: string) => `The ${name} field must have at most 10 characters`,
}
