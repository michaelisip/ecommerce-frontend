export class AuthStateModel {
  token: string
}

export class Register {
  static readonly type = '[Auth] Register'
  constructor(public body: Object = {}) {}
}

export class Login {
  static readonly type = '[Auth] Login'
  constructor(public body: Object = {}) {}
}

export class Logout {
  static readonly type = '[Auth ] Logout'
}
