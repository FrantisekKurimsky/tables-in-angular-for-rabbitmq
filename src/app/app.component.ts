import {Component} from '@angular/core';
import axios, {AxiosResponse} from "axios";
import {Router, NavigationEnd,ActivatedRoute} from '@angular/router';
// import * as Stomp from 'stompjs';
// import * as SockJS from 'sockjs-client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  platforms = [{},{},{},{},{}];
  platforms2 = [
    [{    }],
    [{    }],
    [{    }],
    [{    }],
    [{    }]
  ];
  trains = [];
  displayedColumns: string[] = ['type', 'departure', 'arrival', 'destination', 'delay', 'platform'];
  displayedColumns2: string[] = ['type', 'departure', 'arrival', 'destination', 'delay'];
  title = 'table';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    setInterval(() => {
      axios.get('http://localhost:8000/all').then((res) => {
        this.trains = res.data
        // console.log(res)
      })
      axios.get('http://localhost:8000/platforms').then((res) => {
        this.platforms = res.data
        // for (let i = 0; i < 5; i++) {
        //   this.platforms2[i]=res.data.filter((x: any) => x.platform == i+1);
        //   // console.log(res.data.filter((x: any) => x.platform == i+1))
        // }

        // console.log(res)
      })
      axios.get('http://localhost:8000/platform1').then((res) => {
        this.platforms2[0]=res.data
      })
      axios.get('http://localhost:8000/platform2').then((res) => {
        this.platforms2[1]=res.data
      })
      axios.get('http://localhost:8000/platform3').then((res) => {
        this.platforms2[2]=res.data
      })
      axios.get('http://localhost:8000/platform4').then((res) => {
        this.platforms2[3]=res.data
      })
      axios.get('http://localhost:8000/platform5').then((res) => {
        this.platforms2[4]=res.data
      })

    }, 2000)

  }
}
