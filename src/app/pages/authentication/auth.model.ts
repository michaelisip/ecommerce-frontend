export class AuthStateModel {
  token: string
}

export class SetToken {
  static readonly type = '[Auth] SetToken'
  constructor(public token: string) {}
}

export class GetToken {
  static readonly type = '[Auth] GetToken'
}

export class RemoveToken {
  static readonly type = '[Auth ] RemoveToken'
}
