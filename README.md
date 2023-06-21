### What I have done so far

1. Create a microservice for notification.
2. Connection to the MongoDB using mongoose.
3. Add a Notification schema and model.
4. Add a create and retrieve operations.
5. using with express-async-handler package which is a middleware for error handling for express.
6. Using dotenv package to store a .env file variables to process.env object.
7. Using nodemon for auto compile when saving.

### What I have not done yet

1. Using a message broker (style RabbitMQ) for communication between the todo microservice and more services if would have.
2. The logic for when to send the notification is not implemented (due to a time restrictions).
   The way I think to implement this is by adding a trigger in MongoDB that will be fired when a notification deadline is coming, then fire an event to the end user.
   To be honest, I did not implement a trigger in MongoDB yet, this is the reason I did not do this yet, I need some time to learn about it :)

### Guidelines

1. Add .env file and set:
   - PORT - for running the api. (in my .env I defined 4000)
   - CONNECTION_STRING - for mongoDB.
2. Run "npm install"
3. Run "npm run start:dev"
