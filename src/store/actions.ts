export enum ActionTypes {
  UpdateDirectoryFiles,
  UpdateCurrentFile
}

interface UpdateDirectoryFilesAction {
  type: ActionTypes.UpdateDirectoryFiles
  files: string[]
}

interface UpdateCurrentAction {
  type: ActionTypes.UpdateCurrentFile
  file: string
}

export type Actions =
  | UpdateCurrentAction
  | UpdateDirectoryFilesAction;

export const updateAvailableImages = (files: string[]): UpdateDirectoryFilesAction => ({
  type: ActionTypes.UpdateDirectoryFiles,
  files,
});

export const updateCurrentImage = (image: string): UpdateCurrentAction => ({
  type: ActionTypes.UpdateCurrentFile,
  file: image,
});
