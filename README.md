# startup
This change is from the local environment!
This change is from GitHub itself.
This conflicting change is from the local environment
This is a conflicting change with VS code.


Although I had previously known about local to GitHub repository work, I somehow wasn't aware you could directly alter the files from GitHub? I knew the README could be edited but I somehow failed to notice you could theoretically code from GitHub itself. It doesn't make it a good idea, but still something I found interesting.



For my idea I want to create an interactive version of checkers that includes a chess-clock which is playable by two different players, or possibly Player vs. AI. The checker pieces will lift up and place down on the board as the user selects them, and when selected will highlight the options they can take. If the user wishes to undo a move they made, they can simply place the checker piece back or hit the interactive UNDO arrow button to reverse their choice. Until they hit the clock on their side, their turn is not over. The other user/AI will notice the changes take effect once the user's turn is completed, and the board is updated. Each checker piece is worth a score, and winning will also provide additional points. At the end of the match, scores will be tallied and available to view later by others playing on a separate page.

Key Features:
  Interactive chess-clock which will tick down over time until time has run out
  Checker pieces will pick up and place down as the user moves them
  Reversal by placing the checker piece back or hitting an interactive UNDO button given on screen
  highlighted squares showing what moves are available for a piece chosen
  Red/Blue crosses (in respect to which player it is) over checker pieces that will be eliminated at the end of the turn
  Tallied scores based on pieces eliminated or victory that can be viewed later by other players (organized by match, not total scores)
  Login page to enter your account and save your scores for bragging rights
![Example1](https://github.com/Hecktomb200/startup/blob/main/20230127_140851.jpg)
![Example2](https://github.com/Hecktomb200/startup/blob/main/20230127_140928.jpg)


# 2/8/23: Simon
When creating (recreating) Simon, I found that although I unfortunately had to use a lot of the same materials as were given to us in the original copy of Simon, there were some key parts I could alter to my own liking without too much difficulty. I also attempted to change the index.html to home.html instead, however unfortunately something with the deployFiles.sh or somewhere else made this difficult for the web environment to process. For now it's been changed back to index.html, however I hope at some point to be able to update this.

# 2/21/23: Simon CSS
While adding the CSS visuals into Simon via Bootstrap, I got to better play with the bootstrap controls built in. Although some controls seem convoluted or even difficult to input, for the most part Bootstrap makes the process rather simplified in adjusting individual and group targets by simply putting everything into separate classes. In short, it feels like you put everything into a separate class so that you can either adjust it apart, or together with other items in other classes. A little tedious in moments, but a great way to make things easier down the road.

# 2/24/23: Startup HTML & CSS
As I began to plan out how to make my startup webpages look, I realized that the model I made when creating the Simon webpage was incredibly similar to my original design (drawing) that I had of the websites layout. Due to that, I took much of my work from my Simon project and began to make adjustments to implement it into my startup. After many adjustments to things I didn't originally like in my Simon project as well as additions of some new content I wanted to incorporate, I'm much happier with this final design of my Startup in comparison to the Simon project.

# 3/6/23: Simon JS
Adding JS into the simon project was by far the best way to actually learn what each part of the javascript did, and yet it felt incredibly difficult to apply. By far my weakest point as of yet, I'll have to figure out how to best apply this to the startup project and spend some time testing prior to actually implementing. Even so, I'm still incredibly pleased to see the Simon game properly working, as well as the login and scoreboard functioning. Overall this has been a blast to apply and see finished.

# 3/10/23: Startup JS
This week has been incredibly busy, which has NOT helped me in the slightest. I had practically no time prior to make or test JS in the startup, meaning the majority of my work actually happened on the last day. Building the play.js file was already hard enough, and incredibly time consuming, but I'm so glad that it worked. I managed to even get the login page to save the username info and port the user directly to play.html. Later I hope to actually add the account system in which can save a username and password to an account for personalized use. By far the most frustrating part in the end was getting the scores page to save and display score information collected from play.js. I don't know of a way to look into the localStorage, so I can't tell if the info is even properly saving itself into scores[]. Either way, the problem lies in there somewhere and I can't seem to find it. This means I'll have to get some help to implement it later as well.
The final point of this project that wasn't the most satisfying was whether or not I wanted the game to be 2-player or player vs. AI, and store each player's win count or just their individual wins. For now I've made the game "2-player" (but not really unless both users are on the same device). Later on this will probably change into player vs. AI. But that's yet another thing I'm going to have to work on later. The list just keeps piling on up.

# 3/22/23: Simon service
Setting up this system was both great and terrible for me, somehow simultaneously. This is partly what I had been grumbling about last time, and getting to do it now both makes me happy and a little frustrated that I tried for so long to get it to work. Either way, I'm excited to apply this to the startup and get the scores to actually save themselves and display for everyone!

# 3/24/23: Simon Database
By far the most difficult part of making a database for Simon was the actual setup of the environment. Getting both production and development environment setup with variables for some reason was difficult only because I couldn't for the life of me remember how to SSH into the server itself. Thankfully when I figured that out it overall became doable. I enjoyed looking over the database.js code, and I'm curious to further look into the new code on the frontend js to see how this applies and what I could do to apply this to my own startup.

# 3/27/23: Simon Login
This was absolutely fascinating to see function and work within the code, and on the server itself. It feels so simple, yet somehow I know I might easily mess this up. In a way it makes sense; a lot of the setup for this to work was done before. I'll have to make some adjustments to my present code, but I'm certain that I can make this work one way or another within my startup.

# 3/29/23: Simon Websocket
For the first time I am genuinely concerned whether or not I will be able to properly implement this into my startup. Applying this system to the checkers game, epsecially if it's 2-player, is going to be rather interesting to accomplish. I know I'll be able to get some help on it, and I know it's possible, but just imagining how much help I'm going to have to get already sounds heavy. With any luck though, it will be a truly fantastic result!

# 4/5/23: Startup Service
Overall, I am satisfied but annoyed with this part of the project. Moreso, I'm getting antsy about the time left. Time seems to be a consistent issue I've been facing, and there's just not enough of it to go around. I knew full well that I was going to need help with this, but it turns out I needed help in another way than I imagined initially. The vast majority of this project (and my time) was put towards trying to even get the dependencies to function properly so the page would load. Nearly 5 hours later I finally got it to work with the help of another, and then begun. In all honesty I really should have asked about the Websocket and gotten help a while back, but other classes that were pressuring me as well ended up taking all of my time. In addition to more easily or properly incorporate Websockets, I'm probably going to have to rewrite a lot if not all of my current JS to something a little cleaner. The good news, in all of this, is that I got the login system to function properly! And some of the Websocket stuff worked out. As long as I prioritize this class over the others for just a few days, I think that I can do it.
