import React, { useEffect } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';

const App = () => {

  useEffect(() => {
    alanBtn({
      key: '1a2935cb42fe364b1dcfe5cd4c05318f2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ( {command} ) => {
        if(command==='testCommand'){
          alert("Command tested")
        }
      }
    });
  }, [])

  return (
    <div>
      <h1>Alan AI News Application</h1>
    </div>
  );
}

export default App;
