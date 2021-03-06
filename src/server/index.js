const express = require('express');
const path = require('path');
const app = express();
import router from './routes';

const port = process.env.PORT || 3000;


const assets = express.static(path.join(__dirname, '../../public'))
app.use(assets)

app.use('*', router);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
export default app;