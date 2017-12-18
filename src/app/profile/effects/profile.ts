import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as fromProfile from '../reducers'
import * as ProfileActions from '../actions/profile';
import { Store } from '@ngrx/store';
import { ProfileService } from '../services/profile.service';
import * as GlobalActions from '../../shared/actions/global-actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/withLatestFrom';
import * as RouterActions from '../../shared/router/router.actions';

@Injectable()
export class ProfileEffects {

    @Effect()
    profileDetail$ = this.actions$.ofType<ProfileActions.Get>(ProfileActions.GET)
        .switchMap(query => {
            return this.profileService.getProfile()
                .switchMap(data => {
                    return [
                        new ProfileActions.GetSuccess({ data: data })
                    ];
                })
                .catch((error) => {
                    return [
                        new ProfileActions.GetFailed({ error: error })
                    ];
                });
        });

    @Effect()
    profileDetailSave$ = this.actions$.ofType<ProfileActions.Save>(ProfileActions.SAVE)
        .withLatestFrom(this.store)
        .map(([action, state]) => state.profile.detail.profile)
        .switchMap(profile => {
            return this.profileService.saveProfile(profile)
                .switchMap(data => {
                    return [
                        new ProfileActions.SaveSuccess({ data: data }),
                        new GlobalActions.ShowSnackbar('The profile was saved successfully')
                    ];
                })
                .catch((error) => {
                    return [
                        new ProfileActions.SaveFailed({ error: error }),
                        new GlobalActions.ShowSnackbar('An error occurred while saving the profile')
                    ];
                });
        });

    @Effect()
    redirectAfterSuccessfullSave$ = this.actions$.ofType<ProfileActions.SaveSuccess>(ProfileActions.SAVE_SUCCESS)
        .switchMap(() => {
            return [
                new RouterActions.Go({ path: ['/dashboard'] })
            ];
        });

    constructor(private actions$: Actions, private profileService: ProfileService, private store: Store<fromProfile.State>) { }
}
