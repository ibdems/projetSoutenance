import React from 'react';
import { Button, Label, Input } from 'reactstrap';
import './forms.scss';
import Select from 'react-select';
import { useField } from 'formik';


export function MyButton({ text, onClick, bgColor, className, type, icone }) {
  return (
    <Button type={type} className={' fw-bold fs-5 form-control ' + className} style={{ backgroundColor: bgColor }} onClick={onClick}>
      <i className={`${icone} fs-2 fw-bold`}></i> {text}
    </Button>
  );
}

export function MyLabel({ forLabel, text, className }) {
  return (
    <Label for={forLabel} className={`fw-bold text-left textLabel text-black ` + className}>
      {text}
    </Label>
  );
}

export function MyInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <Input
        {...field}
        {...props}
        className={'border-black p-2 fs-5 fw-5 ' + props.className}
      />
      {meta.touched && meta.error ? (
        <span className="text-danger">{meta.error}</span>
      ) : null}
    </div>
  );
}

export function MySelect({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;

  const handleChange = (option) => {
    setValue(option);
  };

  return (
    <div>
      <Select
        {...props}
        value={props.options ? props.options.find(option => option.value === field.value) : ''}
        onChange={handleChange}
        className={`border-black text-black fs-5 fw-5 ${props.className}`}
        styles={{
          control: (provided) => ({
            ...provided,
            height: 'auto',
            minHeight: '50px',
            border: '1px solid black'
          }),
        }}
      />
      {meta.touched && meta.error ? (
        <div className="text-danger">{meta.error}</div>
      ) : null}
    </div>
  );
}





