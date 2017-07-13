const qs = (url, obj) => {
    const queryString = Object.keys(obj).map(k => `${k}=${obj[k]}`).join('&');
    const _ = url.indexOf('?') === -1
            ? '?'
            : '&';
    return url + _ + queryString;
};

export default qs;
