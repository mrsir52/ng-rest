import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  results = '';
  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    // Replace "FetchToken" with "GetData" to run http get
    interface FetchToken {
      token: string;

    }
    // HTTP get ( comment out this.http.post..... and uncomment the code below)
    // You will also need to replace the url with the deisired url
    // this.http.get<GetData>('url').subscribe(data => {
    //   console.log("User Token: " + data.token);
    // });
    this.http.post<FetchToken>('url', {
      'movie': 'blah',
      'params': {
        'email': 'email',
        'phone': '(555) 555-5555',
        'name': 'name',
        'logo': 'www.logo'
      })
      .subscribe(data => {
        console.log('User Token: ' + data.token);
      });
      // comment out to the line above to run http get
  }
}

