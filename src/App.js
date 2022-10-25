import { useState } from "react";
import { isEmpty } from "ramda";
import { useForm } from "react-hook-form";
import generateEmailTemplate from "./components/emailTemplate";

// Forms Data
import payrollEnquiryFormData from "../src/forms/payrollEnquiry.json";

// Components
import InputGroup from "./components/inputGroup";

import "./App.css";

const App = () => {
  const [htmlString, setHtmlString] = useState(null);
  const { formMetadata, formElements } = payrollEnquiryFormData;

  const {
    handleSubmit,
    watch,
    register,
    reset,
    formState: { errors, isDirty, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setHtmlString(generateEmailTemplate(formMetadata, data));
    reset();
  };

  if (!payrollEnquiryFormData) return null;

  return (
    <div className="container">
      <legend>{formMetadata.title}</legend>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formElements.map((element) => (
          <InputGroup
            key={`form-element-${element.name}`}
            element={element}
            errors={errors}
            watch={watch}
            register={register}
            dirtyFields={dirtyFields}
          />
        ))}
        <button
          type="submit"
          disabled={!isDirty || !isValid || !isEmpty(errors)}
        >
          Submit
        </button>
      </form>
      {htmlString && (
        <div className="htmlOutputContainer">
          <textarea className="htmlOutput" value={htmlString} readOnly />
        </div>
      )}
    </div>
  );
};

export default App;
