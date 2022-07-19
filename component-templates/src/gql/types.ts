export interface IError {
  error: {
    readonly name: string
    readonly message: string
    readonly networkError?: Error
  }
}
