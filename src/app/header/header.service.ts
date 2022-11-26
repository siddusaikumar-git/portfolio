
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class HeaderService {
    // lightModeEmitter = new Subject<boolean>();
    lightModeEmitter = new BehaviorSubject<boolean>(true);

    
}