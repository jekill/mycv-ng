export function elementPosition(el:HTMLElement) {
    const box = el.getBoundingClientRect();
    const body = document.body;
    const docElem = document.documentElement;
    const scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    const scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    const clientTop = docElem.clientTop || body.clientTop || 0;
    const clientLeft = docElem.clientLeft || body.clientLeft || 0;


    const top = box.top + scrollTop - clientTop;
    const left = box.left + scrollLeft - clientLeft;
    return [Math.round(top), Math.round(left)]
}

/**
 * needs for <a target=_blank ...
 */
export function mkNoopenerRelAttributeValue(rel?:string) {
    if (!rel) {
        return "noopener noreferrer";
    }
    if (!rel.includes('noopener')) {
        rel += ' noopener';
    }
    if (!rel.includes('noreferrer')) {
        rel += ' noreferrer';
    }
    return rel;
}