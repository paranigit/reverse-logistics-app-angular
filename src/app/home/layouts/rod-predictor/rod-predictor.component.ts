import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { RodPredictor } from 'src/app/core/models/rod-predictor';
import { AppConfigService } from 'src/app/core/services/app-config.service';

export interface Response {
  message: string,
  error: string,
  return_prob_yes: number,
  return_prob_no: number
}

@Component({
  selector: 'app-rod-predictor',
  templateUrl: './rod-predictor.component.html',
  styleUrls: ['./rod-predictor.component.scss']
})
export class RodPredictorComponent implements OnInit {

  public isLoading = false;
  public form!: FormGroup;
  public categories = [
    {
        'category': 'Electronics', 
        'products': ['Apple : iPhone', 'Samsung : Galaxy S21 Ultra', 'LG : G8S ThinQ']
    },
    {
        'category': 'Clothing', 
        'products': ['Nike : Shoe', 'American Eagle : t-shirt', 'Adidas : track']
    },
    {
        'category': 'Automotive', 
        'sellers': ['Steelbird', 'Godrej', 'Portronics'],
        'products': ['helmet', 'air freshener', 'mobile holder']
    },
    {
        'category': 'Health/Beauty', 
        'products': ['Dove : soap', 'Aveeno : shanpoo', 'Pacifica : deodorant']
    },
    {
        'category': 'Home/Kitchen', 
        'products': ['Etekcity : Kitchen Scale', 'Dash : Sandwich Maker', 'Keurig: Coffee Brewer']
    }
  ];
  public predictor = new RodPredictor();
  public categoryFilter = { category: this.predictor.category }
  public cities = ['Lakewood', 'Passaic', 'Union City', 'Bayonne', 'Jersey City', 'West New York', 'Toms River', 'North Bergen', 'New Brunswick', 'Piscataway'];
  public rodProb = 0;
  private config: any;

  constructor(
    private http: HttpClient,
    private configService: AppConfigService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'category': new FormControl(null, {
        validators: [Validators.required]
      }),
      'product': new FormControl(null, {
        validators: [Validators.required]
      }),
      'city': new FormControl(null, {
        validators: [Validators.required]
      }),
      'mop': new FormControl(null, {
        validators: [Validators.required]
      }),
      'mod': new FormControl(null, {
        validators: [Validators.required]
      }),
    });
    this.config = this.configService.getConfig();
  }

  get rodFields() { return this.form.controls; };

  onWriterChange() {
    console.log('changed');
    this.predictor.seller = this.rodFields['product'].value.split(':')[0].trim();
    this.predictor.product = this.rodFields['product'].value.split(':')[1].trim();
  }

  onSubmit() {
    if (this.form.valid) {
      this.isLoading = true;
      const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
      // const headers = { 'content-type': 'application/json'}  
      console.log(this.predictor);
      const body=JSON.stringify({
        values: [
          this.predictor.category, 
          this.predictor.seller, 
          this.predictor.product, 
          this.predictor.city, 
          this.predictor.mop,
          this.predictor.mod,
          5,
          4
        ]
      });
      this.http.post<Response>(this.config["API_ROD_PRED_URL"], body, {headers: headers, responseType: 'json'})
      .pipe(map(res => res))
      .subscribe(res => {
        if (res.message == 'success') {
          this.rodProb = res.return_prob_yes;
        }
        this.isLoading = false;
      })
    }
  }

}
