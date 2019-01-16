# [Home Management Web Application](http://18.224.80.50:3001/)
#### Angular - NodeJs - MongoDB

An SPA (Single Page Application) that was created in order to organize various tasks in the home per family member.   
Each family member has the ability to add a task and assosiate it either to themselves or to another family member. 

The project is written using:

  - Client side:
    - Angular
  - Server side:
    - NodeJs 
  - DataBase:
    - MongoDB

#### Extras
- The database includes: 
  - A "collection" (table of content) which presents each family member and their details: 
    - ID
    - Name
    - Nickname
    - Role
  - A "collection" which presents the various tasks and their details:
    - ID
    - Task description
    - Date the task was created
    - ID of the family member which the task is associated with
- API created with NodeJs Express that presents:
  -  Family members
  -  List of tasks (and which family member each task is associated with)
  -  The ability to add a task
- Client side application using Angular that is used for the interaction between the family members: 
  - Homepage that presents existing tasks
  - Second page (that can be reached from the homepage using routing) that allows the users to add a task

#### Installation:

This project requires a source code editor, I used [Visual Studio Code](https://code.visualstudio.com/), to run the following: 
- [Angular](https://angular.io/): 
> "A JavaScript-based open-source front-end web application framework...for developing single-page applications." 
- [NodeJs](https://nodejs.org/):
> "An open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser."
- Before running the project, make sure to install (though a command prompt of your choice):
```sh
npm install @angular/cli -g
```
- Be sure to install the node_modules that are missing or need to be updated (both for client side as well as server side):
```sh
npm install
``` 
- When running the client side project (I ran the client side on "localhost: 4200", a default port):
```sh
ng serve
``` 
- When running the server side (I ran the server side on "localhost: 3000", a default port):
```sh
npm install -g nodemon
nodemon start
```
- In order to run both ports simultaniously, I used Chrome plug-in [Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)

- For the database, I used [MongoDB and Compass](https://www.mongodb.com/products/compass).  
After the download, make sure to install MongoDB (though a command prompt of your choice):
```sh
npm install mongodb --save
```
Then, install [Express Application Generator](https://expressjs.com/en/starter/generator.html) (*"An application generator tool to quickly create an application skeleton"*):
```sh
npm install express-generator -g
```
Be sure to also install [Mongoose](https://mongoosejs.com/) (*"a MongoDB object modeling tool designed to work in an asynchronous environment."*):
```sh
npm install mongoose
```
You will notice in the "app.js" file, a "mongoose.connect('...')" line with the database's name.  

Now, open a folder in your C:\ drive for the database to connect to (I called mine "mongodata") and write in the following command line (according to your downloaded version of MongoDB):
```sh
"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\mongodata"
```
Leave it running in the background.

In order to view an already-in-use example of the project, please upload the following to the Compass database:
  - Database name: "toDos"
  - Collection "members.json"
  - Collection "tasks.json"


 
