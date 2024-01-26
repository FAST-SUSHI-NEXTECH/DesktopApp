DesktopApp for administror or more !
The DesktopApp work with electron.
You need to install node.js to run electron

To see and run the whole work you can just clone all the repo and then in the terminal you have 2 command to do : 
npm init -y (you can let the default settings) and npm i --save-dev electron

The first command generate a file "package.json". If you want to use npm-script you can add one or more scripts in the file "package.json". 

For example to run electron with npm-script we used the script : "start": "electron ." <-- (this is the exact syntax, yes the quotes are include in it)

    When you put this into your file "package.json". You can run your project later with "npm start"

The second one create the folder "node_modules".

If you use VsCODE you will probably need some extensions to run everything like the npm script.