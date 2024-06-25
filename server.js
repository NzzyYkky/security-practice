const express = require('express');
const app = express();
const port = 3000;
const api = require('./router/api')

app.use(express.static('public'));

app.use('/api', api);

app.get("/", (req, res, next) => {
   res.end('top page')
});

app.listen(port, () => {
   console.log(`Server is running on localhost ${port}`);
})
