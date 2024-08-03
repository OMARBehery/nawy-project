how to run the project :
1) navigate to the server folder and npm install to install all dependencies and node modules
2) run npm app to start the server on localhost 5000
3) navigate to ./client/frontend and run npm install and npm start to start the react app on local host 3000

run it with docker :
navigate to the root directory (containing .yml file) and run : docker-compose up -d


APIs :
1)/apart-list : getting all the apartment from db
2)/apart/:id: getting a single apartment by id
3)/add-apart: posting an apartment to the database

database : 
cloud mongodb (atlas) , model and schema will be found in the server folders /models

front-end :
react app containing 3 main components :
1)apartlist : listing all apartments 
2) apart details : showing the details page of a single apartment
3)add apartment : to make a post request to add an apartment 

