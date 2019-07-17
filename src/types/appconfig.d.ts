declare module AppConfig {
    interface Route {
        path: string;
        templateUrl: string;
        controller: string;
    }

    interface Client {
        basePath: string;
        html5Mode: boolean,
        routes: Route[];
    }

    export interface Configuration {
        client: Client;
    }
}