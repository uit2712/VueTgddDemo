function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

export function formatCurrencyFilter(number) {
    if (number === null || number === undefined || String(number) === '') {
        return '';
    }

    let minimumFractionDigits = 0;
    if (isFloat(number) === true) {
        minimumFractionDigits = 2; 
    }

    return number.toLocaleString('it-IT', {
        minimumFractionDigits,
        maximumFractionDigits: 2,
    }) + '₫';
}

export function formatPercentFilter(number) {
    if (number === null || number === undefined || String(number) === '') {
        return '';
    }

    return number + '%';
}