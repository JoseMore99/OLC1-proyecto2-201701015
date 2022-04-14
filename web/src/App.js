
import Editor from "@monaco-editor/react";
import './App.css';
import { useRef } from 'react';

function App() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
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
    .then(response => console.log('Success:', response));
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
     />
      </div>
     
     <button onClick={showValue} className="bg-blue-500 hover:bg-blue-800 font-bold rounded py-2 px-3">Ejecutar</button>
    </div>
    
    
  );
}

export default App;
