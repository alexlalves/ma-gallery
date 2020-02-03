export enum ActionTypes {
  UpdateDirectoryFiles,
  UpdateCurrentFile
}

interface UpdateDirectoryFilesAction {
  type: ActionTypes.UpdateDirectoryFiles
  images: string[]
}

interface UpdateCurrentAction {
  type: ActionTypes.UpdateCurrentFile
  image: string
}

export type Actions =
  | UpdateCurrentAction
  | UpdateDirectoryFilesAction;

export const updateAvailableImages = (images: string[]): UpdateDirectoryFilesAction => ({
  type: ActionTypes.UpdateDirectoryFiles,
  images,
});

export const updateCurrentImage = (image: string): UpdateCurrentAction => ({
  type: ActionTypes.UpdateCurrentFile,
  image,
});
