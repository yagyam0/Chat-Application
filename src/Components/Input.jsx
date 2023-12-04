import React from 'react';

const Input = ({ name, type, placeholder, value, handleChange, handleBlur }) => {
  return (
      <div className='input-field'>
        <label className='input-label'> {placeholder} </label>
        <input 
            type={type}
            autoComplete='off'
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
        />
      </div>
  )
}

export default Input;