# metropolia-sssf-socket
Socket app for week 4 assignment of Server-side Scripting Frameworks TX00CR77-3005 course at Metropolia UAS

### What are namespaces in Socket.io? How they are different from rooms?

* From socket.io docs: "A Namespace is a communication channel that allows you to split the logic of your application over a single shared connection (also called “multiplexing”)".
* A namespace will be created by default when calling:
    ```
    const io = require('socket.io')();
    ```
* Custom namespaces can be created:
    ```
    io.of("/music").on("connection", (socket) => { //... });
    io.of("/movies").on("connection", (socket) => { //... });
    ```
* Rooms are different from namespaces: they are arbitrary channel that sockets can join and leave and they are created under a specific namespace.

### Let us know how you could utilize websockets in your project.

* My project is about video games review forum. Websockets can be applied to implement a real time review feed at the home page, where the newest reviews will be automatically added to the top of the feed.