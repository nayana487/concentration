# concentration

User Stories

1. As a user, I should be able to select two cards to see if they match.
2. As a user, I want two matching cards to be displayed for good so I know not to select again and that I got that match.
3. As a user, I want non-matching cards to go back to being hidden so I know that I got the wrong answer and can continue playing.
4. As a user, I want my information organized in a grid so it's easier for me to understand the game.
5. As a user, I want to have the cards randomized so I can play new games.

---

Approach

1. I started off by finding a version of concentration online that is similar to the game I wanted to create. I played it several times to get a sense of all the moves I needed to make.
http://diply.com/thatjusthappened/rick-grimes-dad-jokes-bad-good-hilarious/154051

2. I primarily used jquery to write my code. I also decided to tackle the js first and do the styling afterwards to make sure I at least had a working site before investing effort elsewhere. I started with the base structure I had for my tic tac toe game.

3. One issue I had was using the setTimeout method. It took me a while to realize that because of the delay, the next line of code completed first instead of the whole script being put on hold, which impacted the result of the code above it.

4. Another issue was figuring out how to randomize the deck. I found something on stackoverflow about the Fischer-Yates shuffle for JS. It worked but I don't fully understand it.
http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

5. I would have liked to style this more, but I ran short on time.


Access site using this link:http://nayana487.github.io/concentration/concentration.html
