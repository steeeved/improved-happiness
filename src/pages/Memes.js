import { useState, useEffect } from 'react';
import { useMeme } from '../components/useMeme.js';
import Styles from './Memes.module.scss';
import { saveAs } from 'file-saver';

export const Memes = () => {
  const { memes, isLoading } = useMeme();
  const [memeData, setMemeData] = useState([]);
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    setMeme(memes?.[0]);
    memes?.forEach((meme) => {
      setMemeData((memeImages) => [...memeImages, meme]);
    });
  }, [memes]);

  function getRandMeme() {
    const item = memeData[Math.floor(Math.random() * memeData.length)];
    setMeme(item);
  }

  function downloadMeme(url, name) {
    console.log(name)
    saveAs(url, `${name}.jpg`);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={Styles.mainDiv}>
      <h1>World's top 100 Memes</h1>
      <div className={Styles.meme}>
        <img src={meme?.url} />
        <h4>{meme?.name}</h4>
      </div>
      <div className={Styles.buttons}>
        <button onClick={() => getRandMeme()}>Next</button>
        <button onClick={() => downloadMeme(meme?.url, meme?.name)}>
          Download
        </button>
      </div>
    </div>
  );
};
