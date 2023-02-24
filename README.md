# JavaScript-Practice

This Contains Javascript Files

## Reason for not executing JS File, prompt command

- prompt() is a method of the Global window object found in browsers. It's not part of the JavaScript language.
- window object is not defined in this environment.
- Step 1: npm init

  Step 2: npm install prompt-sync
  
  Step 3: Open the js file (name.js) in which you want to use prompt and import the prompt-sync as given below. (on line 1)
  
  eg: const prompt = require("prompt-sync")();


