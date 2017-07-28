import { Component, HostListener, OnInit } from '@angular/core';

declare var SC;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  
  Height: number;

  private WidgetFrame: any;
  private Widget: any;

  @HostListener('window:resize', ['$event'])
  onResize(event)
  {
    this.Height = this.GetHeight();
  }  

  public GetHeight(): number
  { 

    return window.innerHeight - 25;

  }

  ngOnInit()
  { 
    this.WidgetFrame = document.getElementById('sc-widget');
    this.Widget = SC.Widget(this.WidgetFrame);

    var eventKey;
      for (eventKey in SC.Widget.Events)
      {

        if (eventKey === 'READY')
        { 
          this.Widget.bind(SC.Widget.Events[eventKey], () =>
          { 
            this.Widget.play();
          })
        }

        if (eventKey === 'PLAY_PROGRESS')
        {
          this.Widget.bind(SC.Widget.Events[eventKey], (data) =>
          {
            //console.log(data);
            this.Widget.getCurrentSound((songData) =>
            {
              document.title = songData.title;
            });
          });
        }

      }

    this.onResize(null);
  }
}
