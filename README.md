# GCL South Football Rankings --- Guided Build

## Project Goal

Build a basic web application for tracking the GCL South football
standings.

For the first version, include:

-   Elder Panthers
-   St. Xavier Bombers
-   La Salle Lancers
-   Moeller Crusaders

Each team starts at:

-   Wins: `0`
-   Losses: `0`

Each team should have:

-   **Add 1 Win** button
-   **Add 1 Loss** button

The page should also have an:

-   **Erase Rankings** button

The goal of this project is to practice HTML, CSS, and JavaScript rather
than copy a finished solution.

------------------------------------------------------------------------

# Part 1 --- HTML Structure

## Step 1 --- Page setup

Make sure your HTML has:

-   A `<!doctype html>`
-   `<html>`
-   `<head>`
-   `<body>`
-   A page title
-   A link to `sports-styles.css`
-   A link to `sports-script.js`

### Hint

You already have most of this in the starter file.

------------------------------------------------------------------------

## Step 2 --- Page heading

Your page should have a heading identifying the application.

Current idea:

> GCL South Football Stats

You can leave this as-is.

------------------------------------------------------------------------

## Step 3 --- Create the rankings table

Your table should have four columns:

  Team                   Wins   Losses Actions
  -------------------- ------ -------- ---------
  Elder Panthers            0        0 
  St. Xavier Bombers        0        0 
  La Salle Lancers          0        0 
  Moeller Crusaders         0        0 

### Think about it

A table is structured using:

-   `<table>`
-   `<thead>`
-   `<tr>`
-   `<th>`
-   `<tbody>`
-   `<td>`

### Hint

You already created the four team rows.

------------------------------------------------------------------------

# Part 2 --- CSS

## Step 4 --- Move styling out of HTML

Avoid putting styling directly into the HTML when possible.

Instead of:

``` html
<table border="1" style="border-collapse: collapse">
```

use:

``` html
<table>
```

Then put the styling in `sports-styles.css`.

For example:

``` css
table {
    border: 1px solid black;
    border-collapse: collapse;
}
```

### Challenge

Make the individual `<th>` and `<td>` cells have borders too.

### Hint

CSS allows you to target multiple selectors in one rule.

Think:

``` css
th, td {
    ...
}
```

------------------------------------------------------------------------

# Part 3 --- First Button

## Step 5 --- Add ONE button

Do not create all eight buttons yet.

Start with Elder.

Inside Elder's `Actions` `<td>`, create a button that says:

> Add 1 Win

### Question

What HTML element creates a clickable button?

### Hint

It starts with:

``` html
<button>
```

------------------------------------------------------------------------

# Part 4 --- Make the First Button Work

## Step 6 --- Decide what should happen

When the user clicks Elder's **Add 1 Win** button:

``` text
Elder Wins: 0
       ↓
    click
       ↓
Elder Wins: 1
```

Click again:

``` text
1 → 2
```

Again:

``` text
2 → 3
```

------------------------------------------------------------------------

## Step 7 --- Create something JavaScript can change

Ask yourself:

> How will JavaScript know which HTML element contains Elder's current
> win total?

### Hint

You will probably want to give the win-count `<td>` some way of
identifying it.

One option is an `id`.

For example, conceptually:

``` html
<td id="________">0</td>
```

Choose an ID that makes sense to you.

------------------------------------------------------------------------

## Step 8 --- Select the element in JavaScript

Now JavaScript needs to find that element.

Think about the DOM methods you've learned.

### Hint

One common method is:

``` javascript
document.________("________")
```

Ask yourself:

> "What method selects an element using its ID?"

------------------------------------------------------------------------

# Part 5 --- Increase the Number

## Step 9 --- Create a variable

Once JavaScript can access the Elder wins element, you need to figure
out its current number.

Conceptually:

``` text
current wins
      ↓
increase by 1
      ↓
put new number back on page
```

### Hint

The displayed value is text when you retrieve it from the DOM.

You may need to convert it into a number before doing arithmetic.

Think about:

``` javascript
Number(________)
```

------------------------------------------------------------------------

# Part 6 --- Click Events

## Step 10 --- Listen for the button click

Your button needs an event listener.

The basic structure is:

``` javascript
button.________("________", function () {

});
```

### Fill in the blanks

First blank:

> What method listens for an event?

Second blank:

> What event happens when the user presses the button?

### Hint

The event is:

``` text
click
```

------------------------------------------------------------------------

# Part 7 --- Put the Logic Together

## Step 11 --- Inside the click function

When Elder's win button is clicked, your function should:

1.  Get the current win count.
2.  Convert it to a number if necessary.
3.  Add `1`.
4.  Put the new number back into the HTML.

### Pseudocode

Do NOT copy this directly as JavaScript. Use it to figure out your own
code.

``` text
WHEN button is clicked:

    get current Elder wins

    turn current wins into a number

    add 1

    display the new number
```

------------------------------------------------------------------------

# Part 8 --- Add Elder's Loss Button

## Step 12 --- Repeat the process

Now create:

> Add 1 Loss

For Elder.

You need to figure out:

-   Where the loss number is stored in HTML.
-   How JavaScript selects it.
-   Which button listens for the click.
-   How the number increases.

### Challenge

Try doing this without looking at your previous code.

You should start seeing the pattern.

------------------------------------------------------------------------

# Part 9 --- Add the Other Teams

## Step 13 --- St. Xavier

Add:

-   Add 1 Win
-   Add 1 Loss

Make sure St. Xavier's buttons only change **St. Xavier's** numbers.

### Important question

If you click:

> St. Xavier --- Add 1 Win

Should Elder's record change?

Obviously not.

So JavaScript needs a way to associate each button with the correct
team.

------------------------------------------------------------------------

# Part 10 --- Think About Scaling

At this point, you will have four teams.

Each team has:

-   1 win button
-   1 loss button

That's 8 buttons.

You could manually give every button its own ID and write separate
JavaScript for each one.

That works.

But ask yourself:

> "Would I want to do this if the application eventually had 10, 20, or
> 30 teams?"

Probably not.

This is where you can start learning about:

-   Arrays
-   Objects
-   `data-*` attributes
-   Loops
-   `forEach()`
-   `querySelector()`
-   `querySelectorAll()`
-   Event listeners

### Don't jump ahead yet.

Get the four-team version working first.

Then we can refactor it.

------------------------------------------------------------------------

# Part 11 --- Erase Rankings

## Step 14 --- Add the reset button

Below the table, create:

> Erase Rankings

### Question

What should happen when it is clicked?

Answer:

``` text
Elder       0 - 0
St. Xavier  0 - 0
La Salle    0 - 0
Moeller     0 - 0
```

------------------------------------------------------------------------

## Step 15 --- Reset the numbers

The reset button needs to:

1.  Find every win count.
2.  Set them to `0`.
3.  Find every loss count.
4.  Set them to `0`.

### Beginner-friendly approach

If your current JavaScript uses individual variables/elements, you can
reset them individually first.

Later, once you've learned arrays/objects and loops, we can make the
reset system cleaner.

------------------------------------------------------------------------

# Part 12 --- Test Everything

Before adding new features, test each button.

## Elder

-   [ ] Add 1 Win works
-   [ ] Add 1 Loss works
-   [ ] Multiple clicks work
-   [ ] Win and loss numbers remain independent

## St. Xavier

-   [ ] Add 1 Win works
-   [ ] Add 1 Loss works
-   [ ] Multiple clicks work

## La Salle

-   [ ] Add 1 Win works
-   [ ] Add 1 Loss works
-   [ ] Multiple clicks work

## Moeller

-   [ ] Add 1 Win works
-   [ ] Add 1 Loss works
-   [ ] Multiple clicks work

## Reset

-   [ ] Erase Rankings resets all wins
-   [ ] Erase Rankings resets all losses

------------------------------------------------------------------------

# Part 13 --- Possible Future Features

Once the basic application works, consider adding these one at a time.

## Feature 1 --- Win Percentage

Formula:

``` text
Wins / (Wins + Losses)
```

Example:

``` text
6 wins
2 losses

6 / (6 + 2)
= 0.75
= 75%
```

------------------------------------------------------------------------

## Feature 2 --- Automatic Rankings

Instead of displaying the teams in a fixed order, have JavaScript sort
them based on their records.

Questions to consider:

-   What happens if two teams have the same record?
-   Should winning percentage matter?
-   Should head-to-head results matter?

------------------------------------------------------------------------

## Feature 3 --- Save Rankings

Currently, refreshing the page would normally reset the application.

Later you can investigate:

``` text
localStorage
```

This could allow the rankings to survive a page refresh.

------------------------------------------------------------------------

## Feature 4 --- Multiple Conferences

Eventually you could have:

``` text
GCL South
    Elder
    St. Xavier
    La Salle
    Moeller

GCL Co-Ed
    ...

GCL All-Girls
    ...
```

You could potentially use different sections, pages, or a dropdown to
switch conferences.

------------------------------------------------------------------------

# How I Will Tutor You

Don't worry if you get stuck.

When you're stuck, send me:

1.  What you're trying to accomplish.
2.  What you tried.
3.  What happened.
4.  Your current code.

I will normally give you a **hint first**, rather than immediately
giving you the answer.

If the hint doesn't get you there, I'll give you a stronger hint.

If you're completely stuck, I'll explain the solution and why it works.

## The goal

The goal isn't:

> "Get the application finished as quickly as possible."

The goal is:

> "Understand why the application works well enough that you could build
> something similar again."

------------------------------------------------------------------------

# Current Milestone

### You are currently here:

-   [x] Basic HTML page
-   [x] CSS file linked
-   [x] JavaScript file linked
-   [x] GCL South table
-   [x] Four teams
-   [x] Starting records of 0--0
-   [x] Table styling moved toward CSS
-   [x] Elder "Add 1 Win" button
-   [x] Elder "Add 1 Loss" button
-   [x] St. Xavier buttons
-   [x] La Salle buttons
-   [x] Moeller buttons
-   [ ] Erase Rankings button
-   [ ] Test entire application
-   [ ] Refactor JavaScript
-   [ ] Optional localStorage
-   [ ] Optional conference expansion

## Your immediate next task

**Only work on Elder's "Add 1 Win" button.**

Don't build the entire application yet.

Once that one button works, we'll use what you learned to build the
rest.
