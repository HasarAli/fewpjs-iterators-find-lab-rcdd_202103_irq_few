const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"},
]

function superbowlWin(record) {
  const res = record.find(game => game.result === "W")
  return res ? res.year : res
}

console.log(superbowlWin(record))
