<h1 align="center">
  <img
    src="https://user-images.githubusercontent.com/30939389/68344767-987fd980-00ce-11ea-86b1-a5e82b4e981c.png"
    alt="Ma Gallery Logo"
  />
  <br/>
  Ma Gallery
  <br/>
  <br/>
  <img
    src="https://user-images.githubusercontent.com/30939389/68344948-fd3b3400-00ce-11ea-8f58-e619e5b09ca7.png"
    alt="Preview"
  />
</h1>

Ma Gallery is a cross-platform image viewer built with Electron and React. Ma Gallery aims to be simple image browser focused firstly on displaying content.

## Features

* Nice blurred background behind images

## Starting Ma Gallery

Before building or running Ma Gallery, first install the projects dependencies running `yarn` and then compile the app's entrypoint with `yarn compile`.

### Development

Start up the webserver and Electron in two separate terminals with
```
yarn server
yarn start
```

Alternatively, you can setup both at once with
```
yarn concurrent-start
```

## Build

:lady_beetle: **Bug**: Production Ma Gallery is currently crashing when opened on its own. To use Ma Gallery, select an image and choose "Open with Ma Gallery".

```
yarn build
```

## Testing

```
yarn test
```
