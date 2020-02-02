export enum actionTypes {
  UPDATE_FILES = 'UPDATE_FILES'
}

export const updateAvailableImages = (files: string[]) => ({
  type: actionTypes.UPDATE_FILES,
  files,
});
