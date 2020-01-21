// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

var vm = new Vue({
  el: "#app",

  data: {

    // mock up the user - this well eventually come from the database UMS (user management system)

    user: {
      isAdmin: true,
      isLoggedIn: true,
      avatar: "thor.png"
    },


    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],

    videotitle: "video title goes here",
    videodescription: " Video desciption goes here",
    videosource:"",

    showDetails: false
  },

  methods: {
    logInOut() {
//Test the login logout UI =? BUtton should change the color
//eventually 
console.log('do login / logout on click ');
//? Ternary statement shorthand for if/else
//evaluate the expression 
//left of the colon, if it's false use the value the right
this.user.isLoggedIn = (this.user.isLoggedIn) ? false :true;
    },

    setUserPrefs() {
      console.log('set user prefs via routing and probablu a component');
    },
  //This is ES6 data destructuring - pull the keys and  valiues you need, not the whole object  
    loadMovie({name, description, videosource}) {
      console.log('Show movie details');

      this.videotitle = name;
      this.videodesciption = description;
      this.videosource = videosource;

      this.showDetails = true;
    }
  }
});
