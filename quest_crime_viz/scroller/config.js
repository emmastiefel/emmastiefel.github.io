var config = {
    style: 'mapbox://styles/emma-mquest/ckla1yj1y1hph18k7p6tppruf',
    accessToken: 'pk.eyJ1IjoiZW1tYS1tcXVlc3QiLCJhIjoiY2trdDVtdmQyMTdtdTMxbW9ucXY2eXRlayJ9.JyYgyB7A-MvdcQs2Xbs3Ig',
    showMarkers: false,
    markerColor: 'none',
    theme: 'light',
    use3dTerrain: false,
    title: 'Safety around Minerva Residence Halls',
    //subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'by jasen and emma',
    introduction: 'intro.html',
    footer: 'Source: source citations, etc.',
    chapters: [
        { //section 1
            id: 'section1',
            alignment: 'left',
            hidden: false,
            html: 'section1.html',
            location: {
                center: { lon: -122.41302, lat: 37.78360 },
                zoom: 16.00,
                pitch: 0.00,
                bearing: 0.00
                //center: [-122.40939, 37.78358],
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'total',
                     opacity: 0.75
                 }
            ],
            onChapterExit: []
        },
        { //section 2
            id: 'section2',
            alignment: 'left',
            hidden: false,
            html: 'section2.html',
            location: {
                center: { lon: -122.42800, lat: 37.78360 },
                zoom: 13.96,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
           onChapterExit: [
            {
                layer: 'total',
                opacity: 0
            }
           ]
        },
        { //section 3
            id: 'section3',
            alignment: 'left',
            hidden: false,
            html: 'section3.html',
            location: {
                center: { lon: -122.42800, lat: 37.78360 },
                zoom: 13.96,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'violent_crime',
                    opacity: 0.75
                }
            ],
           onChapterExit: [
            {
                layer: 'violent_crime',
                opacity: 0
            }
           ]
        },
        { //section 4
            id: 'section4',
            alignment: 'right',
            hidden: false,
            html: 'section4.html',
            location: {
                center: { lon: -122.39609, lat: 37.78253 },
                zoom: 13.96,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
           onChapterExit: []
        },
        { //section 5 - catcalling
            id: 'section5',
            alignment: 'right',
            hidden: false,
            html: 'section5.html',
            location: {
                center: { lon: -122.39609, lat: 37.78253 },
                zoom: 13.96,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
           onChapterExit: []
        },
        { //section 6 - bias
            id: 'section6',
            alignment: 'right',
            hidden: false,
            html: 'section6.html',
            location: {
                center: { lon: -122.39609, lat: 37.78253 },
                zoom: 13.96,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
           onChapterExit: []
        },
        { //section 7 - seoul
            id: 'section7',
            alignment: 'left',
            hidden: false,
            html: 'section7.html',
            location: {
                center: { lon: 126.97699, lat: 37.50654 },
                zoom: 11.50,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
           onChapterExit: []
        },
        { //section 8 - other res halls
            id: 'section8',
            alignment: 'left',
            hidden: false,
            html: 'section8.html',
            location: {
                center: { lon: 8.08309, lat: 16.38562 },
                zoom: 2.07,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
           onChapterExit: []
        },
        { //section 9 - conclusion
            id: 'section9',
            alignment: 'left',
            hidden: false,
            html: 'section9.html',
            location: {
                center: { lon: 8.08309, lat: 16.38562 },
                zoom: 2.07,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
           onChapterExit: []
        },
        { //section 10 - methodology
            id: 'section10',
            alignment: 'left',
            hidden: false,
            html: 'section10.html',
            location: {
                center: { lon: 8.08309, lat: 16.38562 },
                zoom: 2.07,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
           onChapterExit: []
        }
    ]
};
