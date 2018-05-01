import React from 'react';
import './styles.css';

export default function EmailInput(props) {
  return (
    <input type="text" value={props.value} className="__email-input" 
      placeholder={props.placeholder}
      onChange={props.handleChange} />
  );
}