require("dotenv").config();
const token = process.env.TOKEN;
const { ShardingManager } = require("discord.js");
const manager = new ShardingManager("./index.js", {
  token: token
});

manager.spawn(3);
manager.on("launch", shard => console.log(`Launched shard ${shard.id}`));
manager.on("shardCreate", shard => {
  console.log(`Launched shard ${shard.id}`);
});
