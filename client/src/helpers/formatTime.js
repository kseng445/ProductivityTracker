function formatTime(timeInMinutes) {
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = timeInMinutes % 60;
  let timeString = "";
  if (hours > 0) {
    timeString += `${hours}h`;
  }
  if (minutes > 0) {
    timeString += `${minutes}m`;
  }
  if (timeString === "") {
    timeString = "0m";
  }
  return timeString;
}

export default formatTime;
