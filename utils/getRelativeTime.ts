import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

/**
 * Returns the string of relative time from now, using dayjs library and its plugin: RelativeTime.
 */
export const getRelativeTime = (date: string): string => {
  return dayjs(date).fromNow();
};
