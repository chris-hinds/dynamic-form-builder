import { buildValidation } from "../../utils";

const TextArea = ({ element, error, register, watch }) => {
  const validation = buildValidation(element.validation, watch);

  return (
    <textarea
      data-testid="query-field"
      required={!!validation?.required}
      {...register(element.name, validation)}
      invalid={error}
      aria-invalid={error}
    />
  );
};

export default TextArea;
