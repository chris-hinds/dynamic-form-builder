// Components
import InputField from "../formElements/input";
import SelectField from "../formElements/select";
import TextArea from "../formElements/textArea";
import InputError from "../inputError";

const InputComponent = (props) => {
  const { type } = props.element;
  switch (type) {
    case "select":
      return <SelectField {...props} />;
    case "textarea":
      return <TextArea {...props} />;
    default:
      return <InputField {...props} />;
  }
};

const InputGroup = ({ element, errors, register, watch }) => {
  return (
    <div className="inputGroup">
      <label htmlFor={element.name}>{element.label}</label>
      {InputComponent({ element, errors, register, watch })}
      <InputError error={errors[element.name]} />
    </div>
  );
};

export default InputGroup;
