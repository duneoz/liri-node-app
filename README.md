# ABOUT THE APP
LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. That way, you can know more!

At a high level, the app is well organized.

HOW TO USE LIRI

## Step by Step instructions
1. Open your terminal such as Bash.
2. Navigate to the folder that contains the liri.js file.
3. Depending on the command you run, the output will vary.

  ### Example 1a: Run the concert-this command

  `node liri.js concert-this <name of artist or band>`
 
   Output: The system will display a list of all events and locations where the artist or band will perform. It can result in multiple records. The system will also log all the results in the log.txt file. See screen-shot below:

![](/concer-this.png)

  ### Example 1b: Run the concert-this-axios command

  `node liri.js concert-this-axios <name of artist or band>`
 
   Output: The system will display a list of all events and locations where the artist or band will perform. It can result in multiple records. The system will also log all the results in the log.txt file. But, it uses AXIOS. See screen-shot below:

![](/concert-this-axios.png)

  ### Example 2: Run the spotify-this-song command

 `node liri.js spotify-this-song <name of song>`
 
  Output: The system will display a list of information associated with the song. It can result in multiple records. The system will also log all the results in the log.txt file. See screen-shot below:

![](/spotify-this-song.png)

  ### Example 3: Run the movie-this command

 `node liri.js movie-this <name of movie>`
 
Output: The system will display information associated with the movie. The system will also log all the results in the log.txt file. See screen-shot below:


![](/movie-this.png)


  ### Example 4: Run the do-what-it-says command

 `node liri.js do-what-it-says`
 
Output: The system will read the text in the random.txt file, and perform the comman listed in the random.txt file.

See screen-shot below:

![](/do-what-it-says.png)

### TECHNOLOGIES USED
* Javascript
* Nodejs
* Node packages:
  * Node-Spotify-API
  * Request
  * Axios
  * Moment
  * DotEnv
* APIs used:
  * Bands in Town
  * OMDB
  * Spotify
* Git
* GitHub

**Deployed App:** https://github.com/duneoz/liri-node-app/blob/master/liri.js

*I developed this app with knowledge learned in-class and by leveraging google-fu.*
