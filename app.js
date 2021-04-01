console.log('App');

const express = require('express');
const config = require('config');
// const path = require('path');
// const mongoose = require('mongoose');

// postgres://igypljvw:DggsF6kvE8C7bfl-JmSH8nyDj8mIDvop@hattie.db.elephantsql.com:5432/igypljvw

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// app.use('/api/auth', require('./routes/auth.routes'));
// app.use('/api/link', require('./routes/link.routes'));
// app.use('/t', require('./routes/redirect.routes'));

// if (process.env.NODE_ENV === 'production') {
//   app.use('/', express.static(path.join(__dirname, 'client', 'build')));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   })
// }

const PORT = config.get('port') || 5000;

app.use('/', require('./routes/routerIndex'));
app.use('/message', require('./routes/routerMessage')); // работает тест БД
// app.use('/select', require('./routes/routerPostrgresql')); // работает тест БД

async function start() {
  try {
    // await mongoose.connect(config.get('mongoURL'), {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true
    // });
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}



start();

