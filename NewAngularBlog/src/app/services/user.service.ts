import { Injectable } from "@angular/core";
import { ConstHelperService } from "./hostHelper.service";
import { UserSendModel } from "../models/userSendModel";
import { HttpClient } from "@angular/common/http";

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { BehaviorSubject } from 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { CredentialsSendModel } from "../models/credentialsSendModel";

@Injectable()
export class UserService {
         
        constructor(private constHelper: ConstHelperService, private http: HttpClient) {             
        }    
            addUser(user : UserSendModel) {
                const body = { Email: user.email, Name: user.name, Location: user.location,Password:user.password };
                       return this.http.post(this.constHelper.getHost() + 'api/Accounts', body)
                                    
                     }         
          
                }
