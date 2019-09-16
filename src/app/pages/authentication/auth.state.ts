import { State, Action, Selector, StateContext } from "@ngxs/store";
import { AuthStateModel, Register, Login, Logout } from './auth.model';
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

  @Action(Register)
  register({ patchState }: StateContext<AuthStateModel>, { body } : Register) {
    this.authService.register(body)
      .subscribe(
        data => {
          patchState({
            token: data.access_token
          })
        }
      )
  }

  @Action(Login)
  login({ patchState }: StateContext<AuthStateModel>, { body } : Login) {
    this.authService.login(body)
      .subscribe(
        data => {
          patchState({
            token: data.access_token
          })
        },
        error => console.warn(error)
      )
  }

  /**
   * Not used atm
   */

  @Action(Logout)
  logout({ setState }: StateContext<AuthStateModel>) {
    this.authService.logout()
      .subscribe(
        () => {
          setState({
            token: null
          })
        }
      )
  }
}

