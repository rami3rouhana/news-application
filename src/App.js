import React, { useEffect, useState } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from './styles'
import alanLogo from './images/alanLogo.png'

const App = () => {
  const [newsArticales, setNewsArticales] = useState('');
  const classes = useStyles();

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
      <div className={classes.logoContainer}>
        <img src={alanLogo} className={classes.alanLogo} alt="alan logo"/>
      </div>
      <NewsCards articles={newsArticales} />
    </div>
  );
}

export default App;
