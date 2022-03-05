export const stripsHtmlTag = (html) => {
    if(!html) { return; }
    
    let div = document.createElement("div");
    div.innerHTML = html;

    return div.innerText;
}

export const formatedDate = (date) => {
    let d = new Date(date),
        fullDate = new Intl.DateTimeFormat('en-GB', { weekday: 'short', year: 'numeric', month: 'short', day: "2-digit" }).format(d),
        time = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit' }).format(d);

    return fullDate.replace(',', '') + ' ' + time.replace(':', '.') + ' BST';
}