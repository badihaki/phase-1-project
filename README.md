# Phase 1 Project - MMO Party Maker

# Goals
For this project, I'm going build a Single Page Application (SPA). Building this application will be challenging because it will integrate everything I've learned up to this point. My frontend will be built with HTML, CSS, and JavaScript and will communicate with a public API.

# Pitch
## Project Story
My friends, family and I are all gamers. Recently, we’ve been playing a game called Final Fantasy XIV. I wanted to create a player search tool that uses the public Final Fantasy XIV API to look up lists of players and select a player from the list in order to view more detailed information.

## Core Features
Users will be able to search for a player by first or last name, the API doesn't differentiate when hitting the 'player search' endpoint. The app will show all matching players in the window. Selecting a player will show the user that player's name, current job, current job's level, and a full view of their character.

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
