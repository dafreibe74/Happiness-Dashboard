d3.csv('for_maps.csv')
  .then(function(rows) {
    if (!Array.isArray(rows)) {
      throw new Error('Invalid data format. Expected an array.');
    }

    function unpack(rows, key) {
      return rows.map(function(row) {
        return row[key];
      });
    }

    var data = [{
      type: 'choropleth',
      locations: unpack(rows, 'CODE'),
      z: unpack(rows, 'HAPPINESS'),
      text: unpack(rows, 'COUNTRY'),
      colorscale: [
        [0, 'rgb(5, 10, 172)'],
        [2, 'rgb(40, 60, 190)'],
        [4, 'rgb(70, 100, 245)'],
        [6, 'rgb(90, 120, 245)'],
        [8, 'rgb(106, 137, 247)'],
        [10, 'rgb(220, 220, 220)']
      ],
      autocolorscale: false,
      reversescale: true,
      marker: {
        line: {
          color: 'rgb(180,180,180)',
          width: 0.5
        }
      },
      tick0: 0,
      zmin: 0,
      dtick: 1000,
      colorbar: {
        autotic: false,
        title: 'Happiness Score'
      }
    }];

    var layout = {
      title: 'Global Happiness Scores 2021',
      geo: {
        showframe: false,
        showcoastlines: false,
        projection: {
          type: 'mercator'
        }
      }
    };

    Plotly.newPlot('myDiv', data, layout, { showLink: false });
  })
  .catch(function(error) {
    console.error('Error:', error);
  });
