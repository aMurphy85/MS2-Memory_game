![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# _Among Us Memory Game_
- A simple memory game based on the hugely popular online murder mystery game (Among Us), set on a space station.
- The main objective of the game is to match all the pairs of cards in as little flips as possible. 
- The webpage has a very simple layout with a header with the games crewmates lined up which users will find amusing, a simple grid 
layout for the cards, a flip counter and a restart button, all with a faded backdrop to imulate a outer space feel.
- Great images of various crewmates carrying out various tasks have been used for the cards, that are bright and eye catching to 
users.
- Simple instructions make it clear on what users have to do without overwhelming them with to much infomation on load up.

# _UX_
- This website was created for users who are fans of the gaming world, inparticularly the among us game who are just looking to
pass the time with a fun game.

## _User Stories_
- _A user to this webiste:_
- I want to navigate through the site easily.
- I want simple instructions on the games rules.
- I want eye catching images and design layout on any device.
- I want to test my memory skills while at the same time as having a bit of fun.
- I want a game complete notice telling me how many flips I did it in.
- I want motivation to play again and try to better my previous scores.
- I want a restart button so I can start the game over at anytime.
- I want to be able to quit the game at anytime.

## _Wireframes_


## _Features_
#### _Homepage_
- A background that has a white center point and fades to a darker grey color towards the outskirts of the page.
- A navbar which has links to pop up modals:
    - 1 with detailed information about the Among Us game that is available to play online.
    - And another with a more detailed description on how to play the memory game.
- A header image of the Among Us game title with various crewmate characters acting as a bottom border.
- Clear simple instructions on how to play.
- An interactive flips counter that keeps track of how many card flips you have had while trying to complete the game.
- A 4 X 4 grid of cards displaying the image of a number of crewmates hanging out on a sofa playing on electronic devices.
- Game cards that are large enough to be seen clearly, on all devices.
- A restart button underneath the game cards that refreshes the page / flip counter, so users can start over whenever they want.
- A quit button beside the restart button that when pressed has a pop up indicating how many flips you have had before leaving with
a sorry to so you leave message.

#### _After matching all the cards_
- A victory pop up with a slight time delay, appears on game completion, that has a message congratulating you and indicates how 
many flips it took you to match all the cards in.
- The victory pop up also has a message inticing players to try and beat there previous flips score followed by a play again button
that restarts the game.

## _Features left to implement_
- A difficulty level (easy, normal, hard, casual with no timer) with fewer or more cards depending on the difficulty selected.
- A count down timer that has different start points depending on difficulty level selected for the user to beat before they run out of time.
- A on load up start screen pop up that holds the games title, a small introduction on how to play and a click to start.
- Links to more information on the among us game (ie. Youtube videos of game play, twitch players playing the game live and to steam, where
players can purchase the game if they fancy giving it a go for themselves).
- Audio and visual ques from the game for background theme, correct and incorrect card matches, a victory pop up indicator etc, to help make the user
feel more interaction to the site.

## _technologies used_
#### _Languages used_
- HTML5 for page content.
- CSS for page element styling.
- JavaScript for game logic.

#### _Libraries and Frameworks used_
- - [BootStrap](https://getbootstrap.com/docs/4.1/content/tables/)
    - **Bootstrap classes** to make elements responsive to different screen devices.
- - [Font_awesome](https://fontawesome.com/)
    - **Font awesome icons** to decorate the text.
- - [Google_fonts](https://fonts.google.com/)
    - **Google fonts** for the font used in the webpage.
- - [Balsamiq_Wireframes](https://balsamiq.com/wireframes/?gclid=CjwKCAjw47eFBhA9EiwAy8kzNIzUJovs67fX-HxfKaqbrJD7TjNN_URl15EZ4nMv_BDX0TkEIpQg_xoCdLMQAvD_BwE)
    - **Balsamiq wireframes** to create mockups of what the site will look like.

#### _Tools and Other resources used_
- GitHub to deploy webpage
- GitPod to build webpage
- W3Schools for help with my HTML, CSS and JavaScript
- CityPNG for the images used in the website
- W3C HTML and CSS validator to check

#### _Code used_
- - [Tania_Rascia](https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/)
    - **Tania_Rascia** followed instructions to create memory game template.

## _Testing_
### _User stories testing_
- As a user to this Among Us Memory Game website I:

    - I want to understand what the website is about easily.
        - A clear title image followed by a large header explaining its a memory game.

    - I want a simple design that is easy to navigate.
        - A simple one page website with elements like the navbar, header, game information,
        main game area and small footer in positions they are meant to be gives a better UX.

    - I want clear simple instructions explaining what it is I am meant to do.
        - A clear title and a simple one line sentence clearly explaining the games rules what 
        it is the user needs to do.

    - I want a deatiled instructions on what the game is based on and a more descriptive explaination if needed.
        - The navbar provides links to a simple pop ups that explains the Among Us online murder mystery 
        game and a more descriptive step by step explanantion of the game if needed.

    - I want the flips counter to keep track of how many flips I am taking to complete the game.
        - A clear indicator that counts up everytime a user flips a card is clearly indentified and easy to see
        while playing the game for users to keep track of.

    - I want the game area to be clear and easy to see.
        - A clear 4 X 4 grid of cards sized large enough with a nice spacing between making it clear to users to see. 
        The cards color scheme is a bold darker black against a much brighter white also making it clearer for the users.

    - I want to see interesting good quality images to memorize while playing.
        - Simple good quality colorful images of the Among Us crewmates make the cards easy to identify between 
        that users will also find attractive and amusing while playing.

    - I want to be able to restart the game easily if I need to.
        - A clearly indicated button just below the card grid area can be pressed at anytime during the game that brings up 
        a little pop up box in the middle of the screen that double checks the user does want to restart and if they do then
        press yes the page refreshes, shuffles the cards again and resets the flips counter.

    - I want to be able to quit the game easily if I need to.
        - A clearly indicated button just below the card grid area can be pressed at anytime during the game that brings up 
        a little pop up box in the middle of the screen that double checks the user does want to quit with a sorry to see you
        leave message. If they decide they definately want to leave the yes button refreshes the page.

    - I want a victory pop up window displaying a congratulations indicating how many moves it took me to find the matches.
        - On completion of finding all the card pairs, a pop up window displays in the center of the screen congratulating users
        and displaying the amount of moves they took to complete the game followed by a little message asking them to try and 
        beat there best score with a play again button that refreshes the page, shuffles the cards and resets the flips counter.

    - I want to be able to play the game on any device.
        - The website is responsive to all device sizes (desktop, tablet and phones) maintaining its 4 X 4 game grid with game
        card sizes that are still clear to see.


### __HTML validator results__

### __CSS validator results__

### __JavaScript validator results__

## _Issues I encountered_

## _Deployment_

## _Credits_
#### _HTML_
- HTML was written by myself.

#### _CSS styling_ 
- [Tania_rascia](https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/)
    - Basic card grid and card rotating styling taking from Tania Rascia and modified by myself.

#### __JavaScript_
- [Tania_rascia](https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/)
    - Followed Tania Rascia instructions to create game and modified by myself to add flips counter and victory popup window.

#### _Images_
- [cityPNG](https://www.citypng.com/photo/4729/red-among-us-character-png)
    - Free to download images of Among us crewmates "Download Among Ug Red Character PNG Free HD and use it as you like for only personal use."

## _Acknowledgments_
- Inspiration for this project was received from:
    - Other code institute students' projects.
    - To create a simple game my 2 young children would enjoy to play.