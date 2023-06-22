(async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/custom/world.topo.json'
    ).then(response => response.json());

    Highcharts.getJSON('combined_json.json', function (data) {

        Highcharts.mapChart('container', {
            chart: {
                map: topology
            },

            title: {
                text: 'World Metal Bands 2021 by country'
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
                joinBy: ['iso-a3', ''],
                data: data,
                minSize: 4,
                maxSize: '12%',
                tooltip: {
                    pointFormat: '{point.properties.hc-a2}: {point.Metal_bands_per_100000_people} thousands'
                }
            }]
        });
    });

})();