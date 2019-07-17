
var config: AppConfig.Configuration = require("./app.config.json");

export function registerRoutesFor(app: angular.IModule) {

    app.config(($routeProvider: angular.route.IRouteProvider, $locationProvider: angular.ILocationProvider) => {
        $locationProvider.html5Mode(config.client.html5Mode);

        let home = config.client.routes.find(v => v.controller === "HomeCtrl");

        $routeProvider
            .when(home.path, {
                templateUrl: home.templateUrl,
                controller: home.controller
            })
            .otherwise({
                redirectTo: config.client.basePath
            });
    });
}