# Exif-Backend

This is the backend part of the exif-remover website.

This is a express/nodejs based backend that gets a file as input and return a medatada cleaned file, using [exiftool](https://exiftool.org/) for it.

## requirements
to run this project you'll need:

* [nodejs](https://nodejs.org/en)
* [npm](https://www.npmjs.com/) [or similar, like yarn and pnpm]
* [wget](https://www.gnu.org/software/wget/)
* [bash](https://www.gnu.org/software/bash/)
* [tar](https://www.gnu.org/software/tar/)
* [a linux distro](https://en.wikipedia.org/wiki/Linux_distribution)

## run as dev

to run as dev, first get the exiftool binary by running:

```bash
chmod +x ./setup.sh
./setup.sh
```

then run:

```bash
npm install && npm run dev
```

## build the project

to build the project, first get the exiftool binary by running:

```bash
chmod +x ./setup.sh
./setup.sh
```

then run:

```bash
npm install && npm run build
```

and finally start using:

```bash
npm run start
```

## getting cleaned files

With all seted up and running send a file to `localhost:3333/files` 

```bash

#example with curl
curl -i -X POST -H "Content-Type: multipart/form-data" -F "data=@file/path.jpeg" localhost:3333/files

```
then it may return a json array containing the cleaned files in base64 format.

