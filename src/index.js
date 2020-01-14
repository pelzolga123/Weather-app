
const getIcon = (currentIcon) => {
  // eslint-disable-next-line no-undef
  const icon = new Skycons({ color: 'orange' });
  icon.set('icon', currentIcon);
  icon.play();
};

const getWeather = (latitude, longtitude) => {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const fetchUrl = `${proxy}https://api.darksky.net/forecast/c4f08572f7ad079daf0e57e8f9da343e/${latitude},${longtitude}`;
  const temperature = document.getElementById('result');

  fetch(fetchUrl)
    .then((data) => data.json()).then((data) => {
      temperature.innerHTML = `${data.currently.temperature}&#8457;`;
      getIcon(data.currently.icon);
      clear(temperature, data.currently.temperature);
    })
    .catch((err) => err);
};

const clear = (temperature, value) => {
  const removeBtn = document.getElementById('remove');
  const check = document.body.contains(removeBtn);
  if (check) {
    document.parentNode.removeChild(removeBtn);
  } else {
    switchBtn(temperature, value);
  }
};

const getCoordinates = (city) => {
  const fetchMap = `https://eu1.locationiq.com/v1/search.php?key=8345fc71b8f8b7&q=${city}&format=json`;

  fetch(fetchMap)
    .then((data) => data.json()).then((data) => {
      const latitude = data[0].lat;
      const longtitude = data[0].lon;
      getWeather(latitude, longtitude);
    })
    .catch((err) => err);
};

function renderItem() {
  fetch('https://source.unsplash.com/1600x1400/?beach').then((response) => {
    document.body.setAttribute('style', `background-image:url("${response.url}")`);
  });
}

renderItem();


const getInput = () => {
  const getBtn = document.getElementById('getWeather');
  const request = document.getElementById('city');
  getBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getCoordinates(request.value);
  });
};

const countCelsius = (fahrenheit) => {
  const celsius = Math.round((fahrenheit - 32) * (5 / 9));
  return celsius;
};

const switchBtn = (header, value) => {
  const btn = document.createElement('button');
  const parentDiv = document.getElementById('res');
  const getHeader = header;
  btn.innerHTML = '&#8451;';
  btn.setAttribute('class', 'btn btn-primary switch');
  btn.setAttribute('id', 'remove');

  console.log(value);

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (btn.innerHTML === '℃') {
      btn.innerHTML = '&#8457;';
      getHeader.innerHTML = `${countCelsius(value)}&#8451;`;
    } else if (btn.innerHTML === '℉') {
      btn.innerHTML = '&#8451;';
      getHeader.innerHTML = `${value}&#8457;`;
    }
  });
  parentDiv.appendChild(btn);
};

getInput();
