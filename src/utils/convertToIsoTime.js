export const convertToISO = (rawDate, endOfDay = false) => {
    const [day, month, year] = rawDate.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    if (endOfDay) {
        date.setHours(23, 59, 59, 999);
    }
    return date.toISOString();
};