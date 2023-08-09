export function myAge(): number {
    const { floor } = Math;
    const { day, month, year } = { day: 11, month: 11, year: 2004 };
    const currentDate = new Date();
    const inputDate = new Date(year, month - 1, day);
    const timeDiff = currentDate.getTime() - inputDate.getTime();
    const yearDiff = floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));

    return yearDiff;
}