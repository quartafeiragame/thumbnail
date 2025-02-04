const cors = require('cors');
const express = require('express');
const app = express();
const port = 8906;
const ytdl = require('@distube/ytdl-core');

app.use(cors());


app.get('/', async(req, res) => {
  const url = req.query.url;
  if (!url) return res.send('No url provided');
  try {
    const info = await ytdl.getInfo(url)
const thumbnail = info.videoDetails.thumbnails[0].url;
  const imagem = thumbnail.split(".jpg")[0] + ".jpg";
    console.log(imagem);
    res.send(imagem);
  } catch (error) {
     return res.send(error);
  }

  
  });




app.listen(port, () => console.log(`servidor rodando no  http://localhost:${port}`))
