export const getRandomGradient = () => {
    const gradientColors = [
        '#9C27B0, #FF4081',
        '#2196F3, #4CAF50',
        '#FF9800, #FFEB3B',
        '#00BCD4, #9C27B0',
        '#F44336, #FF5722',
        '#FFC107, #FF9800',
        '#212121, #757575',
        '#0D47A1, #388E3C',
        '#8E24AA, #26A69A',
        '#F50057, #D50000',
        '#4CAF50, #FFEB3B',
        '#9C27B0, #3F51B5',
        '#FF7043, #D32F2F',
        '#00BCD4, #D32F2F',
        '#FF80AB, #D32F2F',
    ];

    const directions = [
        'to right',
        'to left',
        'to bottom',
        'to top',
        'to right top',
        'to left top',
        'to bottom left',
        'to top left',
    ]

    const randomColor = gradientColors[Math.floor(Math.random() * gradientColors.length)];
    const randomDirections = directions[Math.floor(Math.random() * directions.length)]

    return `linear-gradient(${randomDirections}, ${randomColor})`;
};