import Api from './Api';

export function registerServices(app: angular.IModule) {

    app.factory(Api.name, [...Api.$inject,Api.factory()])

}