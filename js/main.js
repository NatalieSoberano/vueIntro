// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

var vm = new Vue({
  el: "#app",

  data: {

    // mock up the user - this well eventually come from the database UMS (user management system)
    user: {
      isAdmin: false, 
      avatar: null,  //make sure photos are optimized - "useravatar.png",
      isLoggedIn: true
    }, 

    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],

    showDetails: false
  },

  //methods are the functionality
  methods: {
    setUserPrefs() {
      // this is the preferences control, hit the api when ready (or a user component)
      console.log('set user prefs here');
    },

    userLogin(){
      //call the login route, or load the login component 
      console.log('do loging / logout on click');

      //this is a ternary statement -> short for if/else
      //the expression evaluates to true or false - if its true, set the value equal to 
      // the left of the colon. If its false, set the value equal to the right 
      this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true;
    }

  }
});
