# IMDb Movie Fans Website

## Project Description

As movie fans, our team visited many big movie review websites. However, some of them don’t have all of the movies or their information is outdated. And most of them don't provide an option for visitors to add or update their movie information.

Our project motivation is to provide a website where people can find movie information, reviewing movies and interact with our database directly to add or update our movie collection.

As one of the largest online databases of movies, we extracted some of the movie information from IMDb and stored them in our database and provided four ways for visitors to use our website. They can search movie information, providing reviews, adding new movies or updating existing movie record.

![image](https://github.com/xqiao30/Group11-Final-INST377SP2021/blob/main/Heroku_AddPage.png)

## Link to Project Website

https://peaceful-bayou-21239.herokuapp.com/

## Links
    
* [GitHub](https://github.com/xqiao30/Group11-Final-INST377SP2021) 
* [Heroku](https://peaceful-bayou-21239.herokuapp.com/) 
* [Developer Menual](#developer-menual) 

## Target Browsers

Our target operating system is Windows/macOS/Linux. After testing, our website works on Chrome, version 90.0.4430.85, Safari, version 14.0.3, Firefox, version 87.0, and we believe it will work on most desktop browsers.

# Developer Menual

## How to install your application and all dependencies

1. Clone this repository by clikcing "Code" through Github Desktop or through Terminal.
2. Open repository in VSCode Terminal or other Terminal applications.
3. Type ```npm install``` into new VSCode terminal window and run.
4. The application should now be set to use.

## How to run your application on a server

1. Open repository in VSCode terminal or other Terminal application.
2. Type ```npm start``` to run. There should be no errors.
3. In a web browser, go to url: http://localhost:3000/.

## How to run any tests you have written for your software

There are no prewritten tests for this project, but you can try using 
our website directly like search a movie to see if it returns a value.

Or, you can use Cypress to run your own written tests.
1. Open two terminals and make sure you are in the main project directory.
2. In the first terminal, run ```npm start```.
3. In the second terminal run ```npm test```.

## The API for your server application - all GET, POST, PUT, etc endpoints, and what they each do

```/api``` - API route for IMDb movie and relevant information.
* GET - Logs to console response query from URL. returns response 'Got a GET request from /api'. Get information from our database.
* POST - Add new movie information to our database.
* PUT - Update existing movie information of our database.
* Delete - Delete existing movie information of our database based on request.

## A clear set of expectations around known bugs and a road-map for future development.
### Bugs:
    
There are null values in movie_imdb_ratings table and movie_financials table that need to be fixed.

### Future Development:

1. Visitors can add more movie information to our database in the future.
2. Displaying average ratings for each movie.
3. Displaying which director has most movies.
4. Adding more movie information like where this movie was filmed.
5. Using new techniques to prevent unfriendly visitor to damage our database.
