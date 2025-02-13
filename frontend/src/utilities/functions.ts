export const hasFieldErrors = (errors: any): errors is { fieldErrors: Record<string, any> } => {
  return errors && typeof errors.fieldErrors === "object";
};
