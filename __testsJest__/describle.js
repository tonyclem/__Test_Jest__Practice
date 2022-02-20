const isBefore = (firstDate, secondDate) => {
  if (firstDate.getTime() <= secondDate.getTime()) {
    return false;
  } else {
    return true;
  }
};

module.exports = isBefore;
