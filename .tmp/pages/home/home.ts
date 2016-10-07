import { Inject, Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    @Inject('AppStore') public appStore: any
    ) {

  }

  testRedux(){
        console.log(this.appStore.getState().increment.counter);
        this.appStore.dispatch((dispatch)=> {
            dispatch({type: 'INCREMENT'});});
        console.log(this.appStore.getState().increment.counter);
    }

}
