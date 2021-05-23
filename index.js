function superbowlWin(record) {
  const res = record.find(game => game.result === "W")
  return res ? res.year : res
}