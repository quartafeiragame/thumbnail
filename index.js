import cors from 'cors';
import express from 'express';
const app = express();
const port = 8906;
import ytdl from '@distube/ytdl-core';

app.use(cors());


app.get('/',(req, res) => {
  const url = req.query.url;
  if (!url) return res.send('No url provided');
  async function thumb(url) {
      try {
    const info = await ytdl.getInfo(url)
const thumbnail = info.videoDetails.thumbnails[0].url;
  const imagem = thumbnail.split(".jpg")[0] + ".jpg";
    console.log(imagem);
    res.send(imagem);
  } catch (error) {
     return res.send(error);
  }
}
  thumb(url);
  
  });




app.listen(port, () => console.log(`servidor rodando no  http://localhost:${port}`))