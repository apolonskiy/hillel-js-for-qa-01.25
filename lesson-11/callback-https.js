const https = require('https');

https.get('https://swapi.dev/api/planets/1', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (data) => {
    console.log(data.toString());
  });

})