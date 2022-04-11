# phase-1-final
Phase 1 final project

# Goals
For this project, you're going build a Single Page Application (SPA). Building this application will be challenging because it will integrate everything you've learned up to this point. Your frontend will be built with HTML, CSS, and JavaScript and will communicate with a public API.

Project Requirements
Your app must be a HTML/CSS/JS frontend that accesses data from a public API. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format.

Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.

Your app needs to incorporate at least 3 separate event listeners (DOMContentLoaded, click, change, submit, etc).

Some interactivity is required. This could be as simple as adding a "like" button or adding comments. These interactions do not need to persist after reloading the page.

Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.

# Pitch
## Project Story
My friends, family and I are all gamers. Recently, we’ve been playing a game called Final Fantasy XIV. I want to create a party manager that uses the public Final Fantasy XIV API to search for players and add them to an adventuring party for a session.

## Core Features
The project will utilize a search function to find players from a server and add them to a party list. The window will be separated into 2 areas, the party area and the character information area.

The characters in the party will be represented by cards in the party area, and will at first be blank. Clicking on one of the cards will prompt a user with a search form, which will find players based on name and server.

Searching for a player will produce a list of results. Clicking on an image or name from the list will show a full profile with the ability to add that player to the party. Upon adding the player to the party, their image will replace the blank image on the card. Clicking on that player’s card will again show their full profile, but in an extended view, with the ability to take them out of the party.

## API Data
The public API data from https://xivapi.com will be my main source. Search requests will be sent to ‘https://xivapi.com/character/search?name=[name]&server=[server]’ while profile requests will be sent to ‘https://xivapi.com/character/[ID]’

## Expected Challenges
- Layout
    - CSS isn’t my best styling isn’t my strong suit, so I’ll have to be careful to create a layout that’s visually appealing
    - Parsing the response data for the relevant information

## How I’m meeting the requirements of the project
- Scheduling
    - Monday
        - Design the app, how I want it to look and function
        - Write pseudocode to figure out what main functionality I’d have to build
    - Tuesday
        - Research CSS Styling
        - Get MVP running with prototype styling/layout/images
    - Wednesday - Friday
        - Refine MVP
        - Design finished graphics
    - Saturday
        - Write blog post
        - Write video walkthrough script
        - Bugfix
    - Sunday
        - Edit/Post blog
        - Final Bugfix
        - Film video walkthrough of the app
    - Monday
        - Presentation
- Extra research into CSS
- Study the API documentation and log relevant information
