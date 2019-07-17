
export default class HomeCtrl {

    static $inject: Array<string> = ['$Api'];

    constructor(private $Api: Services.$ApiInterface) {
        
        this.init();
    }

    init() {
        this.$Api.saludo()
    }

}

