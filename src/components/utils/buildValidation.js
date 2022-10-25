const buildValidation = (validation, watch) => {
  if (typeof validation.required === "object") {
    const required = validation.required.value.includes(
      watch(validation.required.field)
    )
      ? validation.required.message
      : false;

    return {
      required,
    };
  }

  return validation;
};

export { buildValidation };
