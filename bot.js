require('dotenv').config();
var Twit = require('twit');
const request = require('request');

var T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});


const getDataFromRidracoli = async () => {

  const url = "https://www.romagnacque.it/datidiretta/index2.php";
  let options = { json: true };

  request(url, options, (error, res, body) => {
    if (error) {
      return console.log(error)
    };

    if (!error && res.statusCode == 200) {

      const ridracoliObj = body;

      const maxVolumeLevel = 33060000;
      const currentVolumeLevel = ridracoliObj.volumeInvaso;
      const volumePercentage = Math.round(currentVolumeLevel * 100 / maxVolumeLevel).toFixed(2);

      const airTemperature = ridracoliObj.idrometeoRidraccoli.CtemperaturaAria;


      const textToTwitt = `Il volume dell'invaso è al ${volumePercentage} %, la temperatura è di ${airTemperature} °`

      console.log(textToTwitt);

      // T.post('statuses/update', { status: textToTwitt }, function (err, data, response) {
      //   console.log(data);
      // })

    };
  });

};

getDataFromRidracoli();