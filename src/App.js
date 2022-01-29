import React, {useState} from 'react'
import RenderForm from './RenderForm';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import './App.scss';

function App() {
  const [inputText, setInputText] = useState([]);
  const [inputProps, SetInputProps] = useState('');

  const [radio, setRadio] = useState([])
  const [radioProps, setRadioProps] = useState('')

  const [textArea, setTextArea] = useState([])
  const [textAreaProps, setTextAreaProps] = useState('')

  function addFields(e){
    e.preventDefault();
    let eachInputProps = {
      inputProps: inputProps,
    }
    setInputText([...inputText, eachInputProps]);
  }

  function addRadio(e){
    e.preventDefault();
    let eachRadioProps = {
      radioProps: radioProps,
    }
    setRadio([...radio, eachRadioProps]);
  }

  
  function addTextArea(e){
    e.preventDefault();
    let eachSelectProps = {
      selectProps: textAreaProps,
    }
    setTextArea([...textArea, eachSelectProps]);
  }

  return(
    <div className='container'>
      <div className='container-options'>
        <div className='container-inputText'>
          <TextField
            autoComplete="off"
            onChange={(e) => SetInputProps(e.target.value)}
            type="text"
            id="inputText"
            name="inputText"
            placeholder='Agrega nombre del campo'
            variant="outlined"
          />
          <Button
            type='submit'
            onClick={(e) => addFields(e)}
            variant="contained"
            >Agregar Input de Texto</Button>
        </div>
        <div className='container-radioButton'>
          <TextField
            autoComplete="off"
            onChange={(e) => setRadioProps(e.target.value)}
            type="text"
            id="radioTextInfo"
            name="radioTextInfo"
            placeholder='Agrega value del radiobutton'
            variant="outlined"
          />
          <Button
            type='submit'
            onClick={(e) => addRadio(e)}
            variant="contained"
            >Agregar Radio Button</Button>
        </div>
        <div className='container-textArea'>
          <TextareaAutosize
            autoComplete="off"
            onChange={(e) => setTextAreaProps(e.target.value)}
            type="textarea"
            id="TextArea"
            name="TextArea"
            placeholder='Agrega asunto del text Area'
            minRows={5}
            variant="outlined"
          />
          <Button
            type='submit'
            onClick={(e) => addTextArea(e)}
            variant="contained"
            >Agregar TextArea</Button>
        </div>
      </div>
      <div>
        <RenderForm inputTextProps={inputText} radioProps={radio} textAreaProps={textArea}/>
      </div>
    </div>
  )

}

export default App;
