export const COLORS = {
    ORANGE: '#FF6F00',
    DARK_GREY: '#424242',
    LIGHT_GREY: '#757575',
    WHITE: '#FFFFFF',
}

export const capitalize = text =>
    text.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');