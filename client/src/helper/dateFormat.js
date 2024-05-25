export const formatShortDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Month is zero-indexed, so add 1
  const year = date.getFullYear();

  // Format day and month to have leading zeroes if needed
  const formattedDay = day < 10 ? "0" + day : day;
  const formattedMonth = month < 10 ? "0" + month : month;

  // Construct the short date string in the desired format (e.g., "MM/DD/YYYY")
  return `${formattedMonth}/${formattedDay}/${year}`;
};
