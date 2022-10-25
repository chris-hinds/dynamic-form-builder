import { buildValidation } from "../../utils";

const TextArea = ({ element, error, register, watch }) => {
  const validation = buildValidation(element.validation, watch);

  return (
    <textarea
      required={validation?.required}
      {...register(element.name, validation)}
      invalid={error}
      aria-invalid={error}
    />
  );
};

export default TextArea;
