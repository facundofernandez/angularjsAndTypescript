import HomeCtrl from './homeCtrl';

export function registerControllerFor(app: angular.IModule) {

    app.controller(HomeCtrl.name, [...HomeCtrl.$inject,HomeCtrl])
}