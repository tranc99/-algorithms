var linearSearch = function(list, target) {
  var guess = 0;
  for (var guess = 0; guess < list.length; guest++) {
    if (list[guess] === target) {
      console.log("found! at index ", guess);
      return guess;
    }

  }
  return -1;
}

module.exports = {
  search: linearSearch
}
