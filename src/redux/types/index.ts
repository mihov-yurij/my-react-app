export const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
} as const;

export type ResponseStatus = (typeof Status)[keyof typeof Status];