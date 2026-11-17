@echo off
set "F=%~dp0index.html"
set "U=file:///%F:\=/%"
set "PF86=%ProgramFiles(x86)%"
set "PF=%ProgramFiles%"
if exist "%PF86%\Microsoft\Edge\Application\msedge.exe" start "" "%PF86%\Microsoft\Edge\Application\msedge.exe" --app="%U%" --start-maximized && exit /b
if exist "%PF%\Microsoft\Edge\Application\msedge.exe" start "" "%PF%\Microsoft\Edge\Application\msedge.exe" --app="%U%" --start-maximized && exit /b
if exist "%PF%\Google\Chrome\Application\chrome.exe" start "" "%PF%\Google\Chrome\Application\chrome.exe" --app="%U%" --start-maximized && exit /b
if exist "%PF86%\Google\Chrome\Application\chrome.exe" start "" "%PF86%\Google\Chrome\Application\chrome.exe" --app="%U%" --start-maximized && exit /b
start "" "%F%"
