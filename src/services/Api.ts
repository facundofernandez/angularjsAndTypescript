export interface $ApiInterface {
    saludo: Function;
}

export default class $Api implements $ApiInterface {

    static $inject: Array<string> = ["$q", "$http"];

    constructor(
        private $q: ng.IQService,
        private $http: ng.IHttpService
    ) {

    }

    static factory() {
        const instance = (
            $q: ng.IQService,
            $http: ng.IHttpService
        ) => new $Api($q, $http);
        return instance;
    }

    saludo() {
        console.log("hola")
    }

}

