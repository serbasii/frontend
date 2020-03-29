window.owntracks = window.owntracks || {};
window.owntracks.config = {
  map: {
    attribution: "",
  },
  wms:[
        {
          url: "http://mapserver-slp.mendelu.cz/cgi-bin/mapserv?map=/var/local/slp/krtinyWMS.map",
          name: "Teplota",
          visible: true,
          layers: "Teplota",
        },
	  ]
};