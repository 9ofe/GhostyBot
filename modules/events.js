const fs = require("fs");
const util = require("util");

//Define variubles
const promisify = util.promisify;
const readdir = promisify(fs.readdir);

module.exports = client => {
  readdir(__dirname + "/../events/", (err, files) => {
    if (err) return console.log(err);

    //For each file in the file array run this function
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      const event = require(`../events/${file}`);
      let eventName = file.split(".")[0];

      //When the event name is ran, Run the event files objects
      client.on(eventName, event.bind(null, client));

      //Delete the event cache
      delete require.cache[require.resolve(`../events/${file}`)];

      //Log that the event is loading
      console.log(`[INFO]: Loading event: ${eventName}`);
    });
    console.log();
  });
};
