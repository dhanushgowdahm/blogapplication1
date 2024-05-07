npm init
npm i express
npm i ejs

create index.js and write general code
create model,views and controller
create home.ejs and add general code, 
go to getbootstrap and copy and pase the cdn css code inside head and script tag inside the body

now create 2 more ejs files with name head and scripts 
cut and paste the bootstrap codes
<%- include('./partials/head') %>
 <%- include('./partials/scripts') %>

 npm i nodemon -D    >> it creates a json with "devDependencies": {
    "nodemon": "^3.1.0"    which means this is only for development environment and not for production deployment so,our project size is minimized.

"scripts": {
    "start":"node index.js",
    "dev": "nodemon index.js"

    npm run dev for development 
    npm run start for production

create a database model export the model
go to mongoosesavepre documentation and under pre copy and implement the code

>now go to built in function known as crypto hash nodejs documentio save password
under crypto copy paste first line (const { createHmac, randomBytes } = require('crypto');)
https://nodejs.org/api/crypto.html
code which hashes is [userSchema.pre('save', function(next)  {
    const user = this;

    if(!user.isModified("password")) return;
    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac('sha256', salt)
    .update(user.password)
    .digest("hex");

    this.salt = salt;
    this.password = hashedPassword;
});]


>>>>>database was not creating when i run>>>>the error was i didnt import models to router/user.js which handles post request coming from action of form and which creates data in mongod.....


>>signup data is stored in mongodb under users collections, password is hashed using salt where even we cannot see the actual password..
while login we have to check the hashed password with password that is entered in login page, for this we need a virtual funciton.
go to mongoose virtual functions.  [https://mongoosejs.com/docs/tutorials/virtuals.html]
{In Mongoose, a virtual is a property that is not stored in MongoDB. Virtuals are typically used for computed properties on documents.}
using static in that documention [https://mongoosejs.com/docs/guide.html#statics]





