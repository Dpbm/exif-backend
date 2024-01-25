#!/bin/bash

wget https://github.com/Dpbm/exif-frontend/releases/download/exif-12.74/exiftool.tar.gz && \
  tar -xvf exiftool.tar.gz && \
  rm -rf *.tar.gz && \
  mv Image-ExifTool-12.74 exiftool

