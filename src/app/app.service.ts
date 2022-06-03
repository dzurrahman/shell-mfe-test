import { ErrorHandler, Injectable, Injector } from "@angular/core";

@Injectable()
export class AppService extends ErrorHandler {

    constructor(private injector: Injector) {

    }
}