// you work for a professional social network. in this social network, a professional
// can follow other people to see their updates (think Twitter for professionals.)
// write a function that finds the job `title` that shows up most frequently given
// a set of degree of separation from you. count the initial id's own job title in the total

/*
  parameters:
  myId                - number    - the id of the user who is the root node
  getUser             - function - a function that returns a user's object given an ID
  degreesOfSeparation - number   - how many degrees of separation away to look on the graph
*/

/*
  getUser  - function - a function that returns a user's object given an ID

  example

  {
    id: 308,
    name: "Beatrisa Lalor",
    company: "Youtags",
    title: "Office Assistant II",
    connections: [687, 997, 437]
  }
*/
const { getUser } = require("./jobs");

const findMostCommonTitle = (myId, degreesOfSeparation) => {
  let queue = [myId];
  const seen = new Set(queue);
  const jobs = {};

  for (let i = 0; i <= degreesOfSeparation; i++) {
    const newQueue = [];
    while (queue.length) {
      const user = getUser(queue.shift());

      // queue up next iteration of connections
      for (let j = 0; j < user.connections.length; j++) {
        const connection = user.connections[j];
        if (!seen.has(connection)) {
          newQueue.push(connection);
          seen.add(connection);
        }
      }

      // count the job
      jobs[user.title] = jobs[user.title] ? jobs[user.title] + 1 : 1;
    }

    queue = newQueue;
  }

  // find key with the biggest number

  const jobKeys = Object.keys(jobs);

  let biggestNumber = jobs[jobKeys[0]];
  let jobName = jobKeys[0];
  for (let i = 1; i < jobKeys.length; i++) {
    const currentJob = jobKeys[i];
    if (jobs[currentJob] > biggestNumber) {
      jobName = currentJob;
      biggestNumber = jobs[currentJob];
    }
  }

  // see all job titles, sorted
  // jobKeys
  //   .map((id) => [id, jobs[id]])
  //   .sort((a, b) => b[1] - a[1])
  //   .slice(0, 10)
  //   .forEach(([job, num]) => console.log(`${num} – ${job}`));

  // console.log("======");

  return jobName;
};

export { findMostCommonTitle }