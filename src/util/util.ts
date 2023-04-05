const mapCounterLabel = (num: number): string =>
  num < 10 ? `0${num}` : `${num}`;

export const millisecondsToStr = (milli: number): string => {
  return mapCounterLabel((milli % 1000) / 10);
};

export const millisecondsToSecondsToStr = (milli: number): string => {
  return mapCounterLabel(Math.floor((milli % 60000) / 1000));
};

export const millisecondsToMinutesToStr = (milli: number): string => {
  return `${Math.floor(milli / 60000)}`;
};

export const millisecondsToTimeStr = (milli: number): string => {
  return `${millisecondsToMinutesToStr(milli)}:${millisecondsToSecondsToStr(
    milli
  )}:${millisecondsToStr(milli)}`;
};
