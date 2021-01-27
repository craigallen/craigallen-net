const settings = {
  "name": "craigallen-net",
  "state": {
    "frontity": {
      "url": "https://craigallen.net",
      "title": "Craig Allen",
      "description": "Front-end developer"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Podcast",
              "https://whywemakestuff.com"
            ],
            [
              "Twitter",
              "https://twitter.com/craigger"
            ],
            [
              "Contact",
              "/contact/"
            ]
          ],
          colors: {
            primary: "#9645d7",
            headerBg: "#5a2edd",
            footerBg: "#5a2edd",
            bodyBg: "#f4efff"
          },
          "featured": {
            "showOnList": false,
            "showOnPost": false
          },
          autoPrefetch: "in-view",
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://craigallen.net"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
