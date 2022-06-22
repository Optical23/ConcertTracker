### MERN Concert tracking app

## Installation 

Clone the Repository locally make sure you have Node.js and mongodb installed

https://www.mongodb.com/try/download/community

https://nodejs.org/en/

Then run "npm install" || "npm i" concurrently node package with install all node packages for the server and client. 

Next go into /server then /utils

create a file called key.js the file should hold 

const keySecret = '(put something here)';
module.exports = keySecret;

The .gitignore file will make sure you only save that locally for when the repo is launched publicly the key or past key for authentication wont be saved.