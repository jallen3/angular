import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root'})
export class LoggingService {
    lastLog: string;

    printLog(message: string) {
        console.log('NEW message: ' + message);
        console.log('PREV message: ' + this.lastLog);
        this.lastLog = message;
    }
}