var config = {
    style: 'mapbox://styles/emma-mquest/ckla1yj1y1hph18k7p6tppruf',
    accessToken: 'pk.eyJ1IjoiZW1tYS1tcXVlc3QiLCJhIjoiY2trdDVtdmQyMTdtdTMxbW9ucXY2eXRlayJ9.JyYgyB7A-MvdcQs2Xbs3Ig',
    showMarkers: false,
    markerColor: 'none',
    theme: 'light',
    use3dTerrain: false,
    title: 'Safety around Minerva Residence Halls',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'by jasen and emma',
    footer: 'Source: source citations, etc.',
    chapters: [
        { //section 1
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Total Crime',
            //image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-122.40939, 37.78358],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'total',
                     opacity: 0.5,
                     'stroke-opacity': 1
                 }
            ],
            onChapterExit: [
                {
                    layer: 'total',
                    opacity: 0,
                    'stroke-opacity': 0
                }
            ]
        },
        { //section 2
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Larceny Theft',
            viz: "res_category_counts",
            //image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                //center: [-122.40847, 37.79186 ], 851 center
                center: [-122.40939, 37.78358],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'larceny theft',
                    opacity: 0.5
                }
           ],
           onChapterExit: [
               {
                   layer: 'larceny theft',
                   opacity: 0
               }
           ]
        }
    ]
};
