
import Editor from "@monaco-editor/react";
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const editorRef = useRef(null);
  const [valor,setValor]= useState('');
  const [resultado,setConsola]= useState('');

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
  }

  const leerEntrada = ( e ) => {
    const file = e.target.files[0];
    if ( !file ) return;
    const lector = new FileReader();
    lector.readAsText( file );
    lector.onload = () => {
      console.log( lector.result );
      setValor( lector.result );
    }
    lector.onerror = () => {
      console.log( lector.error );
    }
  }
  
  function showValue() {
    //alert(editorRef.current.getValue());
    console.log(editorRef.current.getValue());
    
    var url = 'http://localhost:5000/api';
    var data = {codigo: editorRef.current.getValue()};
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data), 
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response);
      setConsola(response.result)
    } );

    
  }

  return (
    <div className="min-h-screen min-w-full bg-amber-100 flex justify-center items-center flex-col gap-10">
      <div className='text-black text-3xl font-bold text-center'>Compscript</div>
      
      <div className="max-w-[60rem] w-full flex flex-col">
         <Editor
       height="60vh"
       defaultLanguage="typescript"
       theme="vs-dark"
       defaultValue="//"
       onMount={handleEditorDidMount}
       value={ valor }
      onChange={ ( e ) => setValor( e.target.value ) }
     />
      </div>
     
     <button onClick={showValue} className="bg-blue-500 hover:bg-blue-800 font-bold rounded py-2 px-3">Ejecutar</button>
     <input 
          type="file"
          multiple={ false }
          onChange={ leerEntrada }
        />
     <div className="max-w-[60rem] w-full flex flex-col">
     <textarea
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white-700
        bg-gray bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
      "
      id="txtconsola"
      rows="3"
      placeholder=" Consola"
      value={ resultado }
      onChange={ ( e ) => setConsola( e.target.resultado ) }
    ></textarea>
    </div>
    </div>
    
    
  );
}

export default App;
