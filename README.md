# NextJS Iframe Issue

## How to setup

First make sure you're using node `10.16.0` and run yarn

```bash
$ yarn install
```

### iFrame

In order to run the iframe wrapper HTML file you need to serve it.
You can use a node, php or any other server for that:

```bash
# inside ./public/ folder
$ php -S 0.0.0.0:8080
```

### POC

You'll need a different domain for the POC project.
Then you'll have to add that custom domain to your `/etc/hosts` file and or use a proxy of some sort.

```
127.0.0.1 yoursite.domain.com
```

Once you have your custom local domain setup you can change the line below on `iframe.js`:

```js
const setupUrl = () => {
  element.src = `https://yoursite.domain.com:3000`
}
```

In order to run the POC project you can start the development server with

```bash
# inside root folder
$ yarn dev
```

### Running

After running the commands above, access `localhost:8080` to load the `index.html` page that contains the iframe that will load our nextJS application.
