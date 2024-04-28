import React from 'react';
import { Button, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './forms.scss';
// import ReactFileUploader from 'react-file-uploader';

export function MyButton({ text, onClick,bgColor }) {
  return (
    <Button type='submit' className='btn p-1 fw-bold fs-4 form-control' style={{backgroundColor: bgColor}} onClick={onClick}>
      {text}
    </Button>
  );
}

export function MyLabel({ forLabel, text }) {
  return (
    <Label for={forLabel} className={`fw-bold text-left textLabel text-black `}>
      {text}
    </Label>
  )
}

export function MyInput({id, name, placeholder, type, value, rows, onChange}) {
  const handleChange = (e) => {
    onChange(e.target.value); 
  };
  return (
    <Input className='border-secondary p-2 fs-4 fw-5 '
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      rows = {rows}
      onChange={handleChange}
    />
  )
}

export function MySelect({ id, name, options, value, onChange}) {
  const handleChange = (e) => {
    onChange(e.target.value); 
  };
  return (
    <Input type="select" className='border-secondary p-2 fs-4 fw-5' id={id} name={name} value={value} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </Input>
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



