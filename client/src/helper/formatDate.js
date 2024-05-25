export const formatDate = (inputDate) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const parts = inputDate.split(" ");
  const monthIndex = months.indexOf(parts[1]);
  const day = parts[2];
  const month = monthIndex + 1;
  const today = new Date();
  const year = today.getFullYear();

  return `${year}-${month.toString().padStart(2, "0")}-${day.padStart(2, "0")}`;
};
