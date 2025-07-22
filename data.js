var APP_DATA = {
  "scenes": [
    {
      "id": "0-courtyard",
      "name": "Courtyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.17364966078864263,
        "pitch": 0.005521604069581798,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.11990886372027099,
          "pitch": -0.00854129447734664,
          "rotation": 0,
          "target": "1-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-stairs",
      "name": "Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.029435953774001433,
          "pitch": -0.3094763079677332,
          "rotation": 0,
          "target": "2-entrance"
        },
        {
          "yaw": 1.5828194640122026,
          "pitch": 0.04135465018887885,
          "rotation": 0,
          "target": "0-courtyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.017762757692903364,
          "pitch": -0.22270664389872508,
          "rotation": 0,
          "target": "3-main-living"
        },
        {
          "yaw": 0.2954398657807804,
          "pitch": 0.25696808111317715,
          "rotation": 0,
          "target": "1-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-main-living",
      "name": "Main Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0338750316608731,
          "pitch": 0.04563981209256518,
          "rotation": 0,
          "target": "2-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Water Cherry House",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
