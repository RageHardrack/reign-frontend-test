import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

/**
 * Returns the string of relative time from now, using dayjs library and its plugin: RelativeTime.
 * @param {string} date The date to get the relative time that has passed between then and today.
 * @return {string} String to indicate the exact time that has passed.
 */
export const getRelativeTime = (date: string): string => {
  return dayjs(date).fromNow();
};
