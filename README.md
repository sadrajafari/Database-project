Database project: working with Express.js and MongoDB.
-----------------------------------------------------------------
#### For testing project install:

* `npm i express`
* `npm i mongoose`
>*The version I used for mongoose is 5.0.1*<br/>


You have to install **mongoDB** on your system.<br/>
On Command Line run `mongod`, and then on another Command Line navigate to project path and then run `node server`.<br/>

`get`, `post`, `put` and `delete` methods are used in this code.<br/>
<br/>
<br/>
<br/>


In Postman to add member you should use `post` method and inside body and raw option select JSON and inside that, the parameters are `name`, `lName` and `balance`.<br/>
To get the info of members inside Database use `get` method and if you want to get the info of an specific person use the id at the end of the url.<br/>
For updating information use id at the end of url in `put` method.<br/>
For deleting an item use id at the end of url in `delete` method.
