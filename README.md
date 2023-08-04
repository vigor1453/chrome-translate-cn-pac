# chrome-translate-cn-pac

通过浏览器启动参数 --proxy-pac-url 让google浏览器的翻译使用本地的代理

1. 编写pac文件 chrome.pac
2. 进行base64编码
   ```
   以下为powershell脚本,可用其他凡是获得
   $proxyPacURL = ".\chrome.pac";
   $proxyPacBytes = (Invoke-webrequest -URI $proxyPacURL).Content;
   $proxyPacBase64 = [Convert]::ToBase64String($proxyPacBytes);
   echo $proxyPacBase64>.\chrome-base64_decode.pac;
   ```
3. 修改chrome启动参数
   ```
   "C:\Program Files\Google\Chrome\Application\chrome.exe" --proxy-pac-url="data:application/x-javascript-config;base64,ZnVuY3Rpb24gRmluZFByb3h5Rm9yVVJMKHVybCwgaG9zdCkgew0KICAgIC8vY2hyb21lIOa1j+iniOWZqOiwg+eUqOe/u+ivkWFwaeaXtizkvb/nlKjku6PnkIYNCiAgICBpZiAoc2hFeHBNYXRjaCh1cmwsICIqdHJhbnNsYXRlLmdvb2dsZWFwaXMuY29tKiIpKSB7DQogICAgICAgIHJldHVybiAnU09DS1M1IDEyNy4wLjAuMToyMDgxJzsNCiAgICB9DQogICAgcmV0dXJuICdESVJFQ1QnOw0KfQ=="
   ```
4. 重启chrome浏览器

bat
```bat
@echo off 
if "%1" == "h" goto begin 
mshta vbscript:createobject("wscript.shell").run("""%~nx0"" h",0)(window.close)&&exit 
:begin 
"C:\Program Files\Google\Chrome\Application\chrome.exe" --proxy-pac-url="data:application/x-javascript-config;base64,ZnVuY3Rpb24gRmluZFByb3h5Rm9yVVJMKHVybCwgaG9zdCkgew0KICAgIC8vY2hyb21lIOa1j+iniOWZqOiwg+eUqOe/u+ivkWFwaeaXtizkvb/nlKjku6PnkIYNCiAgICBpZiAoc2hFeHBNYXRjaCh1cmwsICIqdHJhbnNsYXRlLmdvb2dsZWFwaXMuY29tKiIpKSB7DQogICAgICAgIHJldHVybiAnU09DS1M1IDEyNy4wLjAuMToyMDgxJzsNCiAgICB9DQogICAgcmV0dXJuICdESVJFQ1QnOw0KfQ=="



```
