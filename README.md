# D3 basic charts

Link to your github pages website: `insert link here`

# Aim of the assignment

In this assignment you will learn how to handle and create new events with d3. You will not have to create any new chart, you will just prove your understanding of how events work.

## Requirements:

In your `index.html` page, an svg has already been defined and it contains a square and a circle.

We want a click on the **square** on the left to cause an event, `changecolor`, to be dispatched. The event `changecolor` will cause the circle on the right to change color to **red**.

Define the event `changecolor`. Assign a proper event listener to the proper shape, and write a proper way to trigger the event.

It is **mandatory** to use **d3-dispatch** to define and use the newly defined event.    
Documentation for d3-dispatch can be found [here](https://github.com/d3/d3-dispatch).

We are aware that the same objective can be obtained by using standard predefined browser events, but learning how to use d3-dispatch will be especially useful to you in your next assignments, where you will start using multiple linked visualizations and you will want your code to be more loosely coupled, and easier to manage.

### Bonus:
Implement the `changecolor2` event, that is caused by a **doubleclick** on the **circle** and causes the square to become **green**. Note that the event `dblclick` is a predefined event in the browser but is not allowed in this submission.

A doubleclick is two clicks in a very short period of time. In order to implement a doubleclick, you will need to use a timer, like this:

```
setTimeout(function, milliseconds);
```

Reference: [Javascript timing events.](https://www.w3schools.com/js/js_timing.asp)

Implementing `changecolor2` successfully will grant 1 bonus point. Points will not be deducted for failing this second step, but make sure that the first step works fine in time for the deadline.


*NOTE: You are welcome to use D3 tutorials or resources as a starting point for your code. However you must cite and reference the resources or sample code you use. Failure to properly cite and attribute code is a breach of academic honesty . Also, per our syllabus, homework is an individual assessment and should be completed alone. You are welcome to ask fellow classmates and students for help and discuss the assignment, but the submission should be your own work.*


## Resources:

*NOTE: there are different versions of d3, so make sure that the tutorials that you are using are up to date.*
https://d3js.org (Links to an external site.)   
https://github.com/d3/d3/wiki/Gallery (Links to an external site.)   
https://github.com/d3/d3/wiki/Tutorials (Links to an external site.)   
https://leanpub.com/D3-Tips-and-Tricks/read (Links to an external site.)   


## Setup

**Under no circumstances should you be editing files via the GitHub user interface.** Do all your edits locally after cloning the repository.

1. Clone this repository to your local machine. E.g., in your terminal / command prompt `CD` to where you want this the folder for this activity to be. Then run `git clone <YOUR_REPO_URL>`

1. `CD` or open a terminal / command prompt window into the cloned folder.

1. Start a simple python webserver. E.g., one of these commands:
    * `python -m http.server 8000`
    * `python3 -m http.server 8000`
    * `py -m http.server 8000`

    If you are using Python 2 you will need to use `python -m SimpleHTTPServer 8000` instead, but please switch to Python 3 as [Python 2 will be sunset on 2020.01.01](https://www.python.org/doc/sunset-python-2/).

1. Wait for the output: `Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/)`

1. Now open your web browser (Firefox or Chrome) and navigate to the URL: http://127.0.0.1:8000

## Instructions

You will be creating a new table that is connected to the existing scatterplot and line chart using brushing and linking.
Make your edits and commit major versions to your git repository.
**Under no circumstances should you be editing files via the GitHub user interface.**

1. In `README.md` (this file) update the URL above with your actual GitHub pages URL.

2. In `index.html` update the GitHub repo URL with the URL of your repository. It is in the span with `id="forkongithub"`.

3. Add code to `js/main.js` to define the events specified in the requirements.


## Submission Instructions

1. Submit a URL to your GitHub repository to [the associated assignment on Canvas](https://canvas.instructure.com/courses/1781732/assignments/13383551).


### ES6 Arrow functions `=>`

Note that this exercise uses the [ES6 Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).
E.g., instead of writing `function(d){ return d.name; }` we write `d => d.name` or `d => { return d.name; }`. We would use the latter version with surrounding `{...}` when we need multiple lines of code vs. just a simple expression.

# Submission instructions:

  - Ensure all visualization and prose required above is present in your webpage.
  - Submit the page on Canvas.
  - Make sure to include the data in your repository.

## Grading

You will receive full marks if:

* Instructions are followed
    * Everything is submitted by the due date following the instructions above.
    * Any folders/files are properly named, located as specified, and contain what is expected.
    * Your web page link is correctly updated at the top of this `README.md` file and in the `Fork me on GitHub` banner.

* Coding was done properly:
    * Your code was regularly committed and not edited via the GitHub user interface online.
    * You have clear, commented, and validated code.
    * Your web page loads properly and looks as expected in the latest Firefox and Chrome browsers.
    * Any code from other sources (modified or copied straight) is acknowledged.

* Your visualization works as required:
    * Your `changecolor` event is implemented properly, following the instructions, using `d3-dispatch`.
    * *Bonus:* Your `changecolor2` event is implemented properly, without using the `dblclick` event.

## Template Repository Setup (For Instructors Only)

### GitHub Pages

It is necessary if using GitHub Classroom to set up GitHub pages for the students, as they do not have admin permissions on their repository. To do this, we need to create and move everything to the `gh-pages` branch and delete the `master` branch.

1. Commit the files to the `master` branch on GitHub.

1. `git branch gh-pages`

1. `git checkout gh-pages`

1. `git branch -D master`

1. `git push origin gh-pages`

1. On GitHub, go to `Settings`->`Branches` and set the default branch to `gh-pages`.

1. `git push origin :master`

### Template Repository

1. On GitHub, go to `Settings` and check the box for `Template repository` at the top. This makes GitHub Classroom copies much faster.
