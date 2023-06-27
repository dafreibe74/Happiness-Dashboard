(async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/custom/world.topo.json'
    ).then(response => response.json());

    Highcharts.getJSON('./static/highchart_js.json', function (data) {
        console.log(data)
        Highcharts.mapChart('container', {
            chart: {
                map: topology
            },

            title: {
                text: 'Number of Metal Bands 2021 by Country'
            },

            subtitle: {
                text: 'Map of Metal Bands with bubbles'
            },

            legend: {
                enabled: false
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            mapView: {
                fitToGeometry: {
                    type: 'MultiPoint',
                    coordinates: [
                        // Alaska west
                        [-164, 54],
                        // Greenland north
                        [-35, 84],
                        // New Zealand east
                        [179, -38],
                        // Chile south
                        [-68, -55]
                    ]
                }
            },

            series: [{
                name: 'Countries',
                color: '#E0E0E0',
                enableMouseTracking: false
            }, {
                type: 'mapbubble',
                name: 'Metal Bands 2021',
                joinBy: ['iso-a3', 'iso-a3'],
                data: data,
                minSize: 4,
                maxSize: '12%',
                tooltip: {
                    pointFormat: '{point.properties.hc-a2}: {point.z}'
                }
            }]
        });
    });

})();