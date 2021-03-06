var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "survival - overworld",
        "survival - nether"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1600086708",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Survival Daytime",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "survivalday",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival - overworld",
            "last_rendertime": 1599377915,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                31,
                106,
                15
            ],
            "minZoom": 0,
            "spawn": [
                31,
                106,
                15
            ],
            "north_direction": 0
        },
        {
            "name": "Survival Nighttime",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "survivalnight",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival - overworld",
            "last_rendertime": 1599377915,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                31,
                106,
                15
            ],
            "minZoom": 0,
            "spawn": [
                31,
                106,
                15
            ],
            "north_direction": 0
        },
        {
            "name": "Survival Nether",
            "zoomLevels": 6,
            "defaultZoom": 1,
            "maxZoom": 6,
            "path": "survivalnether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival - nether",
            "last_rendertime": 1599376885,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                31,
                106,
                15
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "Survival Nether",
            "zoomLevels": 6,
            "defaultZoom": 1,
            "maxZoom": 6,
            "path": "survivalnethersouth",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "survival - nether",
            "last_rendertime": 1599376885,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                31,
                106,
                15
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 2
        }
    ]
};
