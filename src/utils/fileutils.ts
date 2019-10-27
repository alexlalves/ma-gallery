import * as path from 'path';

const allowedExtensions = [
  '.apng',
  '.png',
  '.bmp',
  '.gif',
  '.ico',
  '.cur',
  '.jpg',
  '.jpeg',
  '.jfif',
  '.pjpeg',
  '.pjp',
  '.svg',
  '.tif',
  '.tiff',
  '.webp',
];

function isAllowedFileExtension(filename: string) {
  return allowedExtensions.includes(path.extname(filename).toLowerCase());
}

function filterFileExtensions(filenames: string[]) {
  return (filenames.filter((file) => isAllowedFileExtension(file)));
}

export {
  allowedExtensions,
  isAllowedFileExtension,
  filterFileExtensions,
};
