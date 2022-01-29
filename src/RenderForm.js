import './RenderForm.scss';
import React from 'react';
const { v4: uuidv4 } = require('uuid');

function RenderForm({
  inputTextProps,
  radioProps,
  textAreaProps
}){
  return(
    <form className='form'>
      <h1>Formulario</h1>
      <div className='form-inputText'>
        {
          inputTextProps.map((input) => {
            return (
              <div>
                <input
                  key={uuidv4()}
                  placeholder={input.inputProps}
                />
                {uuidv4()}
              </div>
            )
          })
        }
      </div>
      <div className='form-radioButton'>
        {
          radioProps.map((radio) => {
            return (
              <div key={uuidv4()}>
                <input
                  value={radio.radioProps}
                  type='radio'
                />
                <label>{radio.radioProps}</label>
              </div>
            )
          })
        }
      </div>
      <div className='form-textArea'>
        {
          textAreaProps.map((textArea) => {
            return (
              <textarea
                key={uuidv4()}
                placeholder={textArea.textAreaProps}
              >
                Info
              </textarea>
            )
          })
        }
      </div>
    </form>
  )
}

export default RenderForm;
