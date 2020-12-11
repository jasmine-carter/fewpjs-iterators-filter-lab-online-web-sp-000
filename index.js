// Code your solution here

function findMatching(drivers, name) {
  let matches = []
  for (let i = 0; i < drivers.length; i++) {
    if (drivers[i].toLowerCase() === name.toLowerCase()) matches.push(drivers[i])
  }
  return matches;
};


function fuzzyMatch(drivers, string) {
  let matches = drivers.filter(n => {
       n.substring(0,2) === string;
  });
  return matches;
};

function matchName(drivers, string) {
  let matches = drivers.filter(n => {
      n.name === string;
      console.log(matches)
  });
    return matches;
};
