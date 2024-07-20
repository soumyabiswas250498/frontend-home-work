function convertToIndianFormat(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata',
    };

    return date.toLocaleString('en-IN', options);
}

export { convertToIndianFormat }
