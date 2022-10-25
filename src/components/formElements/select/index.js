import { buildValidation } from "../../utils";

const SelectField = ({ element, error, register, watch }) => {
  const validation = buildValidation(element.validation, watch);

  return (
    <select
      id={element.name}
      required={!!validation?.required}
      {...register(element.name, validation)}
      invalid={error}
      aria-invalid={error}
    >
      {element.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
