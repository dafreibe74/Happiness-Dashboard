(async () => {
  const topology = await fetch(
    "https://code.highcharts.com/mapdata/custom/world.topo.json"
  ).then((response) => response.json());

  Highcharts.getJSON("./static/highchart_js.json", function (data) {
    console.log(data);
    Highcharts.mapChart("container", {
      chart: {
        map: topology,
      },

      title: {
        text: "Number of Metal Bands 2021 by Country",
      },

      subtitle: {
        text: "Map of Metal Bands with bubbles",
      },

      legend: {
        enabled: false,
      },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: "bottom",
        },
      },

      mapView: {
        fitToGeometry: {
          type: "MultiPoint",
          coordinates: [
            // Alaska west
            [-164, 54],
            // Greenland north
            [-35, 84],
            // New Zealand east
            [179, -38],
            // Chile south
            [-68, -55],
          ],
        },
      },

      series: [
        {
          name: "Countries",
          color: "#E0E0E0",
          enableMouseTracking: false,
        },
        {
          type: "mapbubble",
          name: "Metal Bands 2021",
          joinBy: ["iso-a3", "iso-a3"],
          data: data,
          minSize: 4,
          maxSize: "12%",
          tooltip: {
            pointFormat: "{point.properties.hc-a2}: {point.z}",
          },
        },
      ],
    });
  });
})();

d3.csv("for_maps.csv")
  .then(function (rows) {
    if (!Array.isArray(rows)) {
      throw new Error("Invalid data format. Expected an array.");
    }

    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }

    var data = [
      {
        type: "choropleth",
        locations: unpack(rows, "CODE"),
        z: unpack(rows, "HAPPINESS"),
        text: unpack(rows, "COUNTRY"),
        colorscale: [
          [0, "rgb(5, 10, 172)"],
          [2, "rgb(40, 60, 190)"],
          [4, "rgb(70, 100, 245)"],
          [6, "rgb(90, 120, 245)"],
          [8, "rgb(106, 137, 247)"],
          [10, "rgb(220, 220, 220)"],
        ],
        autocolorscale: false,
        reversescale: true,
        marker: {
          line: {
            color: "rgb(180,180,180)",
            width: 0.5,
          },
        },
        tick0: 0,
        zmin: 0,
        dtick: 1000,
        colorbar: {
          autotic: false,
          title: "Happiness Score",
        },
      },
    ];

    var layout = {
      title: "Global Happiness Scores 2021",
      height: 700,
      geo: {
        showframe: false,
        showcoastlines: false,
        projection: {
          type: "mercator",
        },
      },
    };

    Plotly.newPlot("myDiv", data, layout, { showLink: false });
  })
  .catch(function (error) {
    console.error("Error:", error);
  });
