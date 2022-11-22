# HandsOnJogoLucasJS

web pack - babel - vite:
são transpiladores, processam os scriptas, imports etc e geram um
arquivo único (a build) que transpila (traduz) o código dentro dele,
então o navegador consegue entender o formato traduzido.

instalando o web pack:
$ `npm init` // pars criar o aruqivo package.json
$ npm install -D webpack // instalar a pependencia de dev webpack

- configurar o web pack:

criar um script "build" em `package.json` >
` "scripts": { "build": "webpack build", "test": "echo \"Error: no test specified\" && exit 1" },`
ir na documentação do webpack e procurar o código para criar um "entry point (ponto de entrada)"
https://webpack.js.org/concepts/#output
criar um entry poins:
criar arquivo `weebpack.config.js` > colar o código da doc
de output (caminho de entrada (`script.js`) e onde será
o arquivo do código transpilado `dist > bundle`
é possível pedir para o webpack trasnpilar Typescriptm ou SAR CSS
apenas acrescentando plug ins nesse arquivo

o comando `... start` serve para rodar o transpilador (rx. Babel)
ou o super set/transpilador (Vite, webpack)
