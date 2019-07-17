
import { module } from "angular";
import 'angular-material';
import 'angular-route';
import 'angular-messages';
import 'angular-aria';

const dependencias = ['ngMaterial', 'ngMessages', 'ngRoute'];

let app = module("MyApp", dependencias);

export {app};

