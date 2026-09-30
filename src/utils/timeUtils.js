export const formatTime = (totalSeconds) =>
{
    return {
        hours : Math.floor(totalSeconds / 3600),
        mins : Math.floor((totalSeconds % 3600) / 60),
        secs : totalSeconds % 60,
    }
}

export const timeToSeconds = (time) =>
{
    return time.hours * 3600 + time.mins * 60 + time.secs;
}