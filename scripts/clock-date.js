export function giveTime() {
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    return time
}

export function giveDate() {
    const date = new Date().toLocaleDateString('de-DE')
    return date
}

 // https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString