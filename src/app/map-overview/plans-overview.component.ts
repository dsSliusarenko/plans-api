import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlanService} from "../service/plan.service";
import {Observable, of, Subscription} from "rxjs";
import {Plan, PlansExtend} from "../service/plan";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-plans-overview',
  templateUrl: './plans-overview.component.html',
  styleUrls: ['./plans-overview.component.scss']
})
export class PlansOverviewComponent implements OnInit, OnDestroy {
  plans$!: Observable<Plan>;

  filters: FormGroup = this.formBuilder.group({});

  subscriptions: Subscription = new Subscription();

  constructor(private planService: PlanService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getAllPlanes()

    this.filters = this.formBuilder.group({
      operations: null,
    })

    this.filters.get('operations')?.valueChanges.subscribe(value => {
      if (value != null) {
        this.subscriptions.add(
          this.planService.getAll().subscribe((response: Plan): void => {
            this.plans$ = of({plans: response.plans.filter((plan: PlansExtend): boolean => plan.operation === value.toLowerCase())});
          })
        )
      } else {
        this.getAllPlanes()
      }
    })
  }

  getAllPlanes(): void {
    this.plans$ = this.planService.getAll();
  }

  resetFilters(): void {
    if (this.filters.get('operations')?.value != null) {
      this.filters.reset();
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
