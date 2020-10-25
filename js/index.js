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
    hedra:"",
    ghost:"",
    urbit:"",
    weather: ""
  
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
      this.nfts = data.assets;
       this.ghost = data.assets[0]
       this.hedra = data.assets[3]
       this.urbit = data.assets[8]
    })

    this.$http.get('http://wttr.in/Phoenix.txt').then(function (weather) {
      return weather
  }).then(function (weather) {
    this.weather = weather;
  })
   

  

    
},
  computed: {
    filteredassets: function () {
  }
  },
});
