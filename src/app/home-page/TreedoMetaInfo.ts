interface ITreedoMetaInfo {
  type: string;
  fileName: string;
  lastEdited: string;
  createdAt: string;
}

export type TreedoMetaInfo = ITreedoMetaInfo | null;
