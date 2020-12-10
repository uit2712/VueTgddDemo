/* eslint-disable */
export function toBeautifulJSON(value) {
    return syntaxHighlight(JSON.stringify(value, null, 2)); // Indented 2 spaces
}

export function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

export function getAllCssFrom() {
    return [...document.styleSheets]
        .map((styleSheet) => {
            try {
                return [...styleSheet.cssRules]
                    .map((rule) => rule.cssText)
                    .join('');
            } catch (e) {
                console.log(
                    'Access to stylesheet %s is denied. Ignoring...',
                    styleSheet.href
                );
            }
        })
        .filter(Boolean)
        .join('\n');
}

export function isNullOrUndefined(value) {
    return [null, undefined].indexOf(value) !== -1;
}

export function isEmptyOrNil(value) {
    return ['', null, undefined].indexOf(value) !== -1;
}

export function getQueryParamFromUrl(paramName) {
    if (isEmptyOrNil(paramName) === true) {
        return '';
    }

    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    return params.get(paramName);
}