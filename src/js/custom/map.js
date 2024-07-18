google.maps.event.addDomListener(window, "load", initMap);

function initMap() {
  let mapOptions = {
    zoom: 10,

    center: new google.maps.LatLng(50.0595854, 14.3255421),

    styles: [
      {
        featureType: "landscape",
        stylers: [
          { hue: "#FFBB00" },
          { saturation: 43.400000000000006 },
          { lightness: 37.599999999999994 },
          { gamma: 1 },
        ],
      },
      {
        featureType: "road.highway",
        stylers: [
          { hue: "#FFC200" },
          { saturation: -61.8 },
          { lightness: 45.599999999999994 },
          { gamma: 1 },
        ],
      },
      {
        featureType: "road.arterial",
        stylers: [
          { hue: "#FF0300" },
          { saturation: -100 },
          { lightness: 51.19999999999999 },
          { gamma: 1 },
        ],
      },
      {
        featureType: "road.local",
        stylers: [
          { hue: "#FF0300" },
          { saturation: -100 },
          { lightness: 52 },
          { gamma: 1 },
        ],
      },
      {
        featureType: "water",
        stylers: [
          { hue: "#0078FF" },
          { saturation: -13.200000000000003 },
          { lightness: 2.4000000000000057 },
          { gamma: 1 },
        ],
      },
      {
        featureType: "poi",
        stylers: [
          { hue: "#00FF6A" },
          { saturation: -1.0989010989011234 },
          { lightness: 11.200000000000017 },
          { gamma: 1 },
        ],
      },
    ],
  };

  let mapElement = document.getElementById("map-canvas");
  let map = new google.maps.Map(mapElement, mapOptions);

  const iconBase = "images/ico/";
  const icons = {
    info: {
      icon: {
        url: iconBase + "pin.svg",
        scaledSize: new google.maps.Size(48, 48), // Adjust the size as needed
      },
    },
  };

  for (let i = 0; i < points.length; i++) {
    const marker = new google.maps.Marker({
      position: points[i].position,
      icon: icons[points[i].type].icon,
      label: {
        text: points[i].number,
        color: "white",
        fontSize: "14px",
        fontWeight: "bold",
      },
      map: map,
    });
  }
}

const points = [
  {
    position: new google.maps.LatLng(50.0851133, 14.5785705),
    type: "info",
    number: "30",
  },
  {
    position: new google.maps.LatLng(49.2208457, 16.6536349),
    type: "info",
    number: "16",
  },
  {
    position: new google.maps.LatLng(49.2276272, 17.6703409),
    type: "info",
    number: " ",
  },
  {
    position: new google.maps.LatLng(49.2034397, 17.541245),
    type: "info",
    number: "3",
  },
];
