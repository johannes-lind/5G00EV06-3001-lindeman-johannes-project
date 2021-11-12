# 5G00EV06-3001-lindeman-johannes-project

Name: 

Johannes Lindeman

Topic: 

Film app

A React app to search information about films (actors, plot description, revenue, metascore, IMDB-score, director(s)). Functionality will include the ability to add films to a watchlist and a possibility to search films by title. Home page will show interesting information like what are today's most popular films. App will be using React components (both funtion and class components). React router will be used in the implementation of the app. 

APIs:

The app will use at least two APIs: IMDb-API (https://imdb-api.com/api) and OMDb-API (http://www.omdbapi.com/). The reason for this is that while IMDb-API offers a lot more variety and usability, it's free subscription includes only 100 requests per day and therefore using only IMDb would make development a lot more restricted and difficult. The number for OMDb is 1000, so the bulk of the data will be requested from OMDb. 

The app will be published in Heroku https://cinetic.herokuapp.com/


Release 1: 2021-11-15 features:

-User is able to see homepage which shows 15 most popular film right now
-User can search films by title
-User can see information for searched films
-User can add films to watchlist
-User can remove films from watchlist
-User can clear watchlist
-User can click the poster of films listed in any view to see the film's information
-User can exit and open the app and watchlist is saved to persistant storage
