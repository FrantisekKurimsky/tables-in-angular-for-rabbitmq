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
  displayedColumns: string[] = ['type', 'departure', 'arrival', 'delay', 'platform'];
  displayedColumns2: string[] = ['type', 'departure', 'arrival', 'delay'];
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
        this.platforms2 = [
          [{    }],
          [{    }],
          [{    }],
          [{    }],
          [{    }]
        ];
        this.platforms = res.data
        for (let i = 0; i < 5; i++) {
          this.platforms2[i]=res.data.filter((x: any) => x.platform == i+1);
          // console.log(res.data.filter((x: any) => x.platform == i+1))
        }

        // console.log(res)
      })

    }, 2000)

  }
}
