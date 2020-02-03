export enum ActionTypes {
  DecrementFileIndex,
  IncrementFileIndex,
  UpdateDirectoryFiles,
  UpdateCurrentFile,
}

interface DecrementIndexAction {
  type: ActionTypes.DecrementFileIndex
}

interface IncrementIndexAction {
  type: ActionTypes.IncrementFileIndex
}

interface UpdateDirectoryFilesAction {
  type: ActionTypes.UpdateDirectoryFiles
  images: string[]
}

interface UpdateCurrentFileAction {
  type: ActionTypes.UpdateCurrentFile
  image: string
}

export type FilesActions =
  | DecrementIndexAction
  | IncrementIndexAction
  | UpdateCurrentFileAction
  | UpdateDirectoryFilesAction;

export const updateAvailableImages = (
  images: string[],
): UpdateDirectoryFilesAction => ({
  type: ActionTypes.UpdateDirectoryFiles,
  images,
});

export const updateCurrentImage = (
  image: string,
): UpdateCurrentFileAction => ({
  type: ActionTypes.UpdateCurrentFile,
  image,
});

export const previousImage = () => ({ type: ActionTypes.DecrementFileIndex });
export const nextImage = () => ({ type: ActionTypes.IncrementFileIndex });
