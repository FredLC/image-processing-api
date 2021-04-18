# Image processing API

## How to use:

This API only implements image resizing at the moment and only supports jpeg format.
You can drop your images in the _src/images_ folder. When hitting the endpoint, the output image file will be named the same, but with "-thumb" tacked to the end.

Example: _fjord.jpg --> fjord-thumb.jpg_

**Endpoint:** /api/images?filename=your-file&width=width&height=height

Enter filename **_without_** the extension, and provide width and height as numbers, without quotes.

Example: _/api/images?filename=fjord&width=200&height=200_

## Get started

```
npm install
```

```
npm run start
```
