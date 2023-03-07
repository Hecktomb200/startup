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
