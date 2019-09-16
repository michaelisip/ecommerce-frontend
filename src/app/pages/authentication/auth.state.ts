import { State, Action, Selector, StateContext } from "@ngxs/store";
import { AuthStateModel, SetToken, GetToken, RemoveToken } from './auth.model';
import { AuthenticationService } from './authentication.service';

@State<AuthStateModel>({
  name: 'auth'
})

export class AuthState {

  @Selector()
  static token(state: AuthStateModel) {
    return state.token
  }

  constructor(
    private authService: AuthenticationService
  ) {}

  @Action(SetToken)
  setToken({ patchState }: StateContext<AuthStateModel>, { token } : SetToken) {
    patchState({
      token: token
    })
  }

  @Action(GetToken)
  getToken({ getState }: StateContext<AuthStateModel>) {
    const token = getState()
    return token
  }

  @Action(RemoveToken)
  removeToken({ setState }: StateContext<AuthStateModel>) {
    setState({
      token: null
    })
  }
}

