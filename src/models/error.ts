export type BaseError = {
  message: string;
};

export type BackendError = {
  status: number;
} & BaseError;

export const isOfTypeBackendError = (error: unknown): error is BackendError => {
  return isOfTypeBackendError(error) && "status" in error;
};
