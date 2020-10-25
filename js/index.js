var app = new Vue({
  el: "#app",
  data: {
    show: false,
    editable: false,
    newlinkname: "",
    newlinkurl: "",
    newlinkdescription: "",
    globaltaglist: ["test"],
    search: "",
    nfts: "",
    bookmarks: [
      {
        text: "Material Design Dev Tutorials",
        hyperlink: "https://material.io/collections/developer-tutorials/",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel lectus ut turpis fermentum vestibulum. ",
        taglist: ["testing", "tag2"],
        newtag: "",
        favorited: false,
        lastlocation: -1,
      },

      {
        text: "JSON Placeholder API",
        hyperlink: "https://jsonplaceholder.typicode.com/",
        description:
          "A fake online REST API tool for prototyping / testing simple http requests",
        taglist: ["testing", "tag2"],
        newtag: "",
        favorited: false,
        lastlocation: -1,
      },
    ],
  },
  methods: {
    put: function (link) {
      this.$http
        .put(
          "https://roots-network-69742.firebaseio.com/chromes.json",
          this.bookmarks
        )
        .then(function (data) {
          alert("Database Updated Succesfully");
        });
    },
    searchArray: function (nameKey, myArray) {
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
          return myArray[i];
        }
      }
    },
    searchArrayBool: function (nameKey, myArray) {
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] === nameKey) {
          return true;
        }
      }
    },
  },

  created() {
    this.$http.get('https://api.opensea.io/api/v1/assets/?owner=0x92b406851390541F445B7C697014133d4B5BfcE3&order_direction=desc&offset=0&limit=20').then(function (data) {
        return data.json()
       
    }).then(function (data) {
      this.nfts = data;
    })
},
  computed: {
    // generate a list of tags and their counts with counts over 10
  },
});
