// const latitude = 51.507351;
// const longtitude = -0.127758;
// const key = process.env.DARKSKY_API_KEY;

const getIcon = (currentIcon) => {
  const icon = new Skycons({'color': 'orange'});
  console.log(currentIcon);
  icon.set('icon', currentIcon);
  icon.play();
};

const getWeather = (latitude, longtitude) => {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const fetchUrl = `${proxy}https://api.darksky.net/forecast/c4f08572f7ad079daf0e57e8f9da343e/${latitude},${longtitude}`;
  const temperature = document.getElementById('result');

  fetch(fetchUrl)
    .then(data => {
      return data.json();
    }).then(data => {
      temperature.innerHTML = data.currently.temperature;
      getIcon(data.currently.icon);
    })
    .catch((err) => {
      displayErr();
      return err;
    });

};

const getCoordinates = (city) => {
  const fetchMap = `https://eu1.locationiq.com/v1/search.php?key=8345fc71b8f8b7&q=${city}&format=json`;

  fetch(fetchMap)
    .then(data => {
      return data.json();
    }).then(data => {
      const latitude = data[0].lat;
      const longtitude = data[0].lon;
      getWeather(latitude, longtitude);
    })
    .catch((err) => {
      displayErr();
      return err;
    });
};

const getInput = () =>{
  const getBtn = document.getElementById('getWeather');
  const request = document.getElementById('city');

  getBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getCoordinates(request.value);
  });
};

getInput();
