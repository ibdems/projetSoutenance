import React from 'react';
import { Button, Label, Input } from 'reactstrap';
import './forms.scss';
import Select from 'react-select';
// import ReactFileUploader from 'react-file-uploader';

export function MyButton({ text, onClick, bgColor, className, type }) {
  return (
    <Button type={type} className={' p-1 fw-bold fs-4 form-control' + className} style={{ backgroundColor: bgColor }} onClick={onClick}>
      {text}
    </Button>
  );
}

export function MyLabel({ forLabel, text, className }) {
  return (
    <Label for={forLabel} className={`fw-bold text-left textLabel text-black ` + className}>
      {text}
    </Label>
  )
}

export function MyInput({ id, name, placeholder, type, value, rows, onChange, className, style }) {

  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <Input className={'border-black p-3 fs-5 fw-5 ' + className}
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      rows={rows}
      onChange={handleChange}
      style={style}
    />
  )
}

export function MySelect({ id, name, options, value, onChange, className }) {
  return (
    <Select
      id={id}
      name={name}
      options={options}
      value={value}
      onChange={onChange}
      className={`border-black text-black fs-5 fw-5 ${className}`}
      styles={{
        control: (provided) => ({
          ...provided,
          height: 'auto',
          minHeight: '65px',
          border: '1px solid black'
        }),
      }}
    />
  );
}

// export const MyInputImage = () => {
//   const handleUpload = (files) => {
//     // Gérez les fichiers téléchargés ici
//     console.log('Fichiers téléchargés :', files);
//   };

//   return (
//     <ReactFileUploader
//       accept=".png,.jpg,.jpeg"
//       maxSize={5 * 1024 * 1024} // Taille maximale du fichier en octets (ici, 5 Mo)
//       maxFiles={3} // Nombre maximal de fichiers autorisés à être téléchargés
//       onUpload={handleUpload} // Callback appelée lorsqu'un fichier est téléchargé
//     />
//   );
// };



