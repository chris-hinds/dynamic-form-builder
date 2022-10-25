import { buildValidation } from "../../utils";

const InputField = ({ element, error, register, watch }) => {
  const validation = buildValidation(element.validation, watch);
  return (
    <input
      required={!!validation?.required}
      type={element.type}
      {...register(element.name, validation)}
      invalid={error}
      aria-invalid={error}
    />
  );
};

export default InputField;
