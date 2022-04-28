
import Editor from "@monaco-editor/react";
import './App.css';
import { useRef, useState } from 'react';

const App=()=> {
  const editorRef = useRef(null);
  const [valor,setValor]= useState('');
  const [resultado,setConsola]= useState('');
  //const [dot,setDot]= useState('');

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
  function showGraph() {
    //alert(editorRef.current.getValue());
    console.log(editorRef.current.getValue());
    
    var url = 'http://localhost:5000/ast';
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
      let dot = response.result;
      console.log(dot)
    } );

    
  }

  return (
    <div className="min-h-screen min-w-full bg-amber-100 flex justify-center items-center flex-col gap-10">
      <div className='text-black text-3xl font-bold text-center'>Compscript</div>
      
      <div className="grid grid-cols-2 gap-2">
        <div>
        <Editor
          height="60vh"
          width="80vh"
          defaultLanguage="typescript"
          theme="vs-dark"
          defaultValue="//"
          onMount={handleEditorDidMount}
          value={ valor }
          onChange={ ( e ) => setValor( e.target.value ) }
       />
        </div>
        <div>
        <textarea
      className="
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
      background="#ff6347"
      rows="16"
      placeholder=" Consola"
      value={ resultado }
      onChange={ ( e ) => setConsola( e.target.resultado ) }
        ></textarea>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        <div>
        <button onClick={showValue} className="bg-blue-500 hover:bg-blue-800 font-bold rounded py-2 px-10">Ejecutar</button>
        </div>
        <div>
        <button onClick={showGraph} className="bg-blue-500 hover:bg-blue-800 font-bold rounded py-2 px-10">AST</button>
        
        </div>
        <div>
        <input 
          type="file"
          multiple={ false }
          onChange={ leerEntrada }
        />
        </div>
      </div>
      <a href="/arbolAST.svg">Ver arbol</a>
    </div>
    
    
    
  );
}

export default App;

