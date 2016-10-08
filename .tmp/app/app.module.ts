import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

//Redux - ReduxThunk - rootReducer
import { Store, createStore, applyMiddleware } from 'redux';
import ReduxThunk  from 'redux-thunk';
import { rootReducer } from '../modules/rootReducer';

//Action-creator
//import increment from '../modules/increment-reducer'


// const appStore = createStore(
//   rootReducer,
//   applyMiddleware(ReduxThunk)
// );

export function appStore(): any {
  return createStore(
            rootReducer,
            applyMiddleware(ReduxThunk)
          );
};


// export const rootReducer = combineReducers({
//   increment
// })

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    { provide: 'AppStore', useValue: appStore }
  ]
})
export class AppModule {

  // constructor() {
  //       //appRef.bootstrap(AppComponent)
  //       // const appStore = createStore(
  //       //   rootReducer,
  //       //   applyMiddleware(ReduxThunk)
  //       // );
  //   }

}
