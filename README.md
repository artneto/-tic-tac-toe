# -tic-tac-toe Milestone

Welcome to my second milestone project. I chose to make my own version of the Tic Tac Toe game for this project because I like challenge, consequently I believe this is the best choice for me.

The project is developed in HTML, CSS, and JavaScript.

[**View Tic Tac Toe website here!**](https://artneto.github.io/-tic-tac-toe/)

The users  for this game will be assigned as Player X and will play against the computer - Player O selecting the square you want to put your X into by clicking in the box. The first player to get three squares in a row wins.

This site will be targeted at people of all ages with the intention of providing excellent practice in problem solving, analytical thinking, spatial reasoning, deduction, and strategy.

## UX and Features


In order to be efficient, the header presents the game with 9 grids.
Below we highlight the rules of the game, in a simple way to understand the rules.

Once the game is complete, a black screen with a message informing the round winner and starting a new game after the countdown. 

##### User Stories
* I want a game that is clear on how to play.
* I want be able to chose the grid.
* I want to play against the computer. 
* I want to know if I got the sequence right.
* I want the game restart automatically without refreshing the page. 

#### 1.Strategy
The objective of this project is to create interactivity and strategy between the user and the computer.

#### 2. Goals
The goal of this website is to provide a positive user experience while playing this interactive game.

#### 3. Scope
The website is responsive, allowing people to interact with it on their mobile platforms.


#### 4. Features

* Homepage
    * On the homepage there will be displayed only the game and instructions.

    * Result
    * The result will be shown after the game is completed.


    #### 5. Skeleton

* Wireframe was created using [Balsamiq](https://balsamiq.com/)


##### Home Page

![game](/assets/images/game.png)


##### Testing 


* I've tested the game in different browsers: Chrome, Firefox, Safari. 
* I've confirmed that the same results are always correct. 
* I've confirmed that the text are all readable and easy to understand. 
* I've confirmed that game is playing in different medias: Smatphone, Tablet, Broswer. 
* Ive confirmed that the bot is playing against player X is working properly. 

## Technologies Used


##### Languages Used

* [HTML5](https://html.com/html5/)
* [CSS3](https://css-tricks.com/)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)


##### Programs used, Frameworks
* [Balsamiq](https://balsamiq.com/)
* [Google Fonts](https://fonts.google.com/)
* [Coolors](https://coolors.co/ebf5df-bad4aa-d4d4aa-edb458-e8871e)
* [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
* [GitHub](https://github.com/)

##### Validation

[W3C Markup Validator](https://validator.w3.org/)
* Home Page

[W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
* CSS 

##### Testing

Used the above validators to check the code but tested the following:
1. Clicked in grid to confirm Im player X and bot is player O.
2. Completed the game to make sure I was being challenged by the bot. 
3. Checked on Devtools console tab if the game sequence and user sequence were being displayed correctly.
4. Checked on Devtools console tab if correct IDs were being invocked.
5. Played full game to ensure alert text box shows at the end of the game and result message shows.



##### Bugs/errors
1. I had to start over the javascript code multiple times due to errors on javascript code with player X and O not being identified. 
2. I  had to checkTie function inside the for loop statement said for (index in cells) but it should be for(index in cell) and was causing trouble to the game.
3. I removed the setTimeout because it with start after the setIntervel ends and will not work at the same time so after the three seconds end it will wait for another four seconds 
then reload so I made an if condition inside the setInterval checks if the next countSecounds is smaller than 0 it will reload so the interval counts from 3 to 0 then reloads.


## Deployment

##### GitHub Pages

1. A local project was created in GitHub with a new repository called 'Tic-Tac-Toe Milestone'
2. The project had regular push and detailed commits which were pushed to the GitHub website before deployment
3. The project was deployed by logging in to GitHub and locating the [GitHub Repository](https://artneto.github.io/-tic-tac-toe-Milestone/)
4. At the top of the Repository (not top of page), locate the "Settings" Button on the menu and click
5. Scroll down the Settings page until the "GitHub Pages" Section was found
6. Under "Source", click the dropdown called "None" and select "Master Branch"
7. The page will refresh and you will be brought back to the top of the settings page
8. Scroll back down through the page to locate the now published site [link](https://artneto.github.io/-tic-tac-toe-Milestone/) in the "GitHub Pages" section
9. The code can be run locally through clone or download, you can do this by opening the repository, clicking on the code button and then selecting either 'clone' or 'download'
10. The Clone option provides a url, which you can use on your desktop IDE
11. The Download option gives you a link so that you can download the zip file so that you can unzip it in your local machine
---

## Credits

I used several code from other users:

##### Code Snippets

* [How to compare arrays](https://www.30secondsofcode.org/articles/s/javascript-array-comparison) 30 seconds of code
* [Web Dev Simplified](https://www.youtube.com/watch?v=Y-GkMjUZsmM&t=69s) - Build Tic Tac Toe With JavaScript - Tutorial, I have used this video as example but my game is different from this one. 
* [Florin Pop](https://www.youtube.com/watch?v=x7WJEmxNlEs) - Simple Countdown Timer with JavaScript - Day 21
---

## Acknowledgements
I would like to thank my mentor, **Cans**, for his help on this project and for providing me some tools that made my project easier,
**Slack Community** for their assistance with minor coding issues and **Beatriz Amorim** who tested my page and gave me excellent feedback based on his milestone submission.

