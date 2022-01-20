import { DateTime } from "luxon";
import moment from "moment";
import { addLeadingZero } from "./formatters";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export const toUSLongDate = (date: string | Date): string => {

  const dateObject = new Date(date);
  const month = MONTH_NAMES[dateObject.getMonth()];
  const formattedStr = `${month} ${dateObject.getDate()}, ${dateObject.getFullYear()}`;
  return formattedStr;

};

export const toUKLongDate = (date: string | Date): string => {

  const dateObject = new Date(date);
  const month = MONTH_NAMES[dateObject.getMonth()];
  const formattedStr = `${dateObject.getDate()} ${month} ${dateObject.getFullYear()}`;
  return formattedStr;

};

export const relativeDateTime = (timestamp: any): string => {

  // Print datetime return Today else print the date
  const datetime = timestamp && timestamp.toDate();
  const days = moment().diff(datetime, "days");
  const midnight = new Date();
  midnight.setHours(0, 0, 0, 0);
  const yesterdayMidnight = new Date();
  yesterdayMidnight.setDate(yesterdayMidnight.getDate() - 1);
  yesterdayMidnight.setHours(0, 0, 0, 0);
  if (days === 0 && midnight < datetime) {

    return "Today";

  } else if (
    (days === 1 && yesterdayMidnight < datetime) ||
      (days === 0 && midnight > datetime)) {

    return "Yesterday";

  }

  return DateTime.fromJSDate(datetime).toFormat("dd LLL yyyy");

};

export const todayString = () => (
  `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
);

export const todayDateAndTimeString = (): string => {

  const now = new Date();
  return `${addLeadingZero(now.getDate())}/${addLeadingZero(now.getMonth() + 1)}
/${now.getFullYear()} - ${addLeadingZero(now.getHours())}:
${addLeadingZero(now.getMinutes())}:${addLeadingZero(now.getSeconds())}
:${new Date().getMilliseconds()}`;

};
