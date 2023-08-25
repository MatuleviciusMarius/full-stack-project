export function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export function getDayFromDate(dateStr) {
  try {
    const dateObj = new Date(dateStr);
    const day = dateObj.getUTCDate();
    return day;
  } catch (error) {
    return null;
  }
}
