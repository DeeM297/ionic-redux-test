import { Inject, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
export var HomePage = (function () {
    function HomePage(navCtrl, appStore) {
        this.navCtrl = navCtrl;
        this.appStore = appStore;
    }
    HomePage.prototype.testRedux = function () {
        console.log(this.appStore.getState().increment.counter);
        this.appStore.dispatch(function (dispatch) {
            dispatch({ type: 'INCREMENT' });
        });
        //this.appStore.dispatch({type: 'INCREMENT'});
        console.log(this.appStore.getState().increment.counter);
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
        { type: undefined, decorators: [{ type: Inject, args: ['AppStore',] },] },
    ];
    return HomePage;
}());
