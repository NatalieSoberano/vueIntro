// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

Vue.component('player', {
  props: ['movie'], //the container for the data that is going to flow into the component 
    // allows our html that is currently our object to gain data like videocontrols 
  template: `
    <div>
      <h3 class="movie-title">{{ movie.videotitle }}</h3>
      <video :src=" 'video/' + movie.vidsource" controls autoplay></video>
      <div class="movie-details">
        <p>{{ movie.videodescription }}</p>
      </div>
    </div> 
  `
}) // componenets take a name and a object - 'poster' is name here

var vm = new Vue({
  el: "#app",

  data: {

    // mock up the user - this well eventually come from the database UMS (user management system)
    user: {
      isLoggedIn: true, 
      settings: {}
    }, 

    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],

    movie: {
      videotitle: "video title goes here",
      vidsource:"",
      videodescription: ""
    },
    
    showDetails: false
  },

  created: function(){
    //run a fetch call and get the user data 
    console.log('created lifecycle hook fired here, go get user data');
    this.getUserData();
  },

  //methods are the functionality
  methods: {
    getUserData(){
    // do a fetch call her and get the user from the DB
      const url = './includes/index.php?getUser=1'

      fetch(url)
      .then(res => res.json()) // translate JSON to plain object
      .then(data => { // use the plain data object (the user)
        console.log(data); // log it to the console (testing)

        // put our DB data into Vue 
        this.user.settings = data[0];
      })
      .catch((error) => console.log(error))

    },

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
    }, 

    showMovieDetails({name, vidsource, description}){
      // console.log('show these movie details: ' , movie);

      this.videotitle = name; 
      this.vidsource = vidsource;
      this.videodescription = description;

      // make the video details display
      this.showDetails = true;
    }

  }
});
