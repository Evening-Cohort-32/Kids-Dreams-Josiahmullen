# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
   ```html
   {child name} will be making memories with {celebrity name}, a {celebrity
   sport} star, by {child wish}
   ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?

   > Main.js will, the app's HTML lists kids as <li> elements created by Kids.js. Each <li> includes data attributes: data-id, data-type="child", and data-wish. the main.js installs a document level click handler that runs when any element is clicked, the handler reads event.target, checks "event.target.dataset && event.target.dataset.type === "child" " and if true reads event.target.dataset.wish.
   > after it calls window.alert(wish) to display the child's wish.

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?

   > It must be invoked inside the for..of loop because each kid needs its own celebrity lookup using that kid's celebrityId. Calling it once outside the loop would not produce a per-kid match, instead you'd have the same celebrity for every kid.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > The sport is shown by the delegated click listener in main.js: when a celebrity <li> with data-type="celebrity" is clicked, the listener reads element.dataset.sport and calls window.alert() with that value.
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > It does 4 things:

Gathers pieces, imports 3 helper modules that each make a chunk of HTML (Kids list, Celebrities list, Pairings list)

Builds the page, calls those helpers and stitches all the HTML together into one big template

Puts it on the screen, inserts the finished HTML into the webpage into an #container element

Listens for clicks, sets up click listeners so when someone clicks on a kid or celebrity, something happens
