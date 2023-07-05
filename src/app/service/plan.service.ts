import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment/environment";
import {Plan} from "./plan";

@Injectable({
  providedIn: "root"
})
export class PlanService {
  private static currentUrl = (): string => `${environment.planApiUrl}`;

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Plan> {
    const url: string = PlanService.currentUrl();
    return this.httpClient.get<Plan>(url);
  }
}
