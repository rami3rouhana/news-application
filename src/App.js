import React, { useEffect, useState } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from "./components/NewsCards/NewsCards";

const App = () => {
  const [newsArticales, setNewsArticales] = useState('');
  useEffect(() => {
    alanBtn({
      key: '1a2935cb42fe364b1dcfe5cd4c05318f2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticales(articles)
        }
      }
    });
  }, [])

  return (
    <div>
      <h1>Alan AI News Application</h1>
      <NewsCards articles={newsArticales} />
    </div>
  );
}

export default App;
