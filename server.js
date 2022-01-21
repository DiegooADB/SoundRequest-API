const app = require('./src/app.js');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Executing server on PORT ', PORT));

module.exports = app;