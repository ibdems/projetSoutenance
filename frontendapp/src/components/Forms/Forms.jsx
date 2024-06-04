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
    <Label for={forLabel} className={`fw-bold text-left textLabel text-black ` + className} style={{marginBottom: '0px'}}>
      {text}
    </Label>
  );
}

export function MyInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div  className="position-relative">
      <Input
        {...field}
        {...props}
        className={`border p-2 fs-5 fw-5 ${meta.touched && meta.error ? 'border-danger' : meta.touched && !meta.error ? 'border-success' : 'border-black'} ${props.className}`}
      > </Input> 
      {meta.touched && meta.error ? (
        <span className="position-absolute top-0 end-0 translate-middle-y fs-5 pe-2 text-danger" style={{ right: '10px' }}>❌</span>
      ) : meta.touched ? (
        <span className="position-absolute top-0 end-0 translate-middle-y fs-5 pe-2 text-success" style={{ right: '10px' }}>✓</span>
      ) : null}
      {meta.touched && meta.error ? (
        <div className="text-danger" style={{marginBottom: '-15px', fontSize: '15px'}}>{meta.error}</div>
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
    <div className="position-relative">
      <Select
        {...props}
        value={props.options ? props.options.find(option => option.value === field.value) : ''}
        onChange={handleChange}
        className={`border text-black fs-5 fw-5 ${meta.touched && meta.error ? 'border-danger' : meta.touched && !meta.error ? 'border-success' : ''} ${props.className}`}
        styles={{
          control: (provided) => ({
            ...provided,
            height: 'auto',
            minHeight: '40px',
            border: '1px solid black',
            color: 'black'
          }),
        }}
      > 
      </Select>
      {meta.touched && meta.error ? (
        <span className="position-absolute top-0 end-0 translate-middle-y fs-5 pe-2 text-danger" style={{ right: '10px' }}>❌</span>
      ) : meta.touched ? (
        <span className="position-absolute top-0 end-0 translate-middle-y fs-5 pe-2 text-success" style={{ right: '10px' }}>✓</span>
      ) : null}
      {meta.touched && meta.error ? (
        <div className="text-danger">{meta.error}</div>
      ) : null}
      
    </div>
  );
}
