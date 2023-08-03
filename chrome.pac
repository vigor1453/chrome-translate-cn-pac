function FindProxyForURL(url, host) {
    //chrome 浏览器调用翻译api时,使用代理
    if (shExpMatch(url, "*translate.googleapis.com*")) {
        return 'SOCKS5 127.0.0.1:2081';
    }
    return 'DIRECT';
}