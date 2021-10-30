import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.css']
})
export class ColorCardComponent implements OnInit {

  colorData: any;

  para = {
    'color':'white',
    'font-size':'30px'  
  }

  hex1 : any;
  hex2 : any;
  hex3 : any;
  hex4 : any;

  changeColor1 : any;
  changeColor2 : any;
  changeColor3 : any;
  changeColor4 : any;

  constructor(private color : ColorService){

    this.randomColor();
    
  }

  ngOnInit() : void {

  }

  randomColor() {
   
                  // const models = [];
                
                  // const randModel = models[Math.floor(Math.random() * models.length)];
  
                  
                  const randModel = [];
                  
                  this.color.getColor(randModel).subscribe(data =>{
                      console.log("After result: ", data);
                      this.colorData = data;
                      // console.log("ColorData: ", this.colorData.result);

                    const hexValue1 =  this.rgbToHex(this.colorData.result[0]);

                    console.log(this.colorData.result[0]);

                    this.hex1 = hexValue1;
                    this.changeColor1 = {
                      'background-color': `#${hexValue1}`
                    }
                    const hexValue2 =  this.rgbToHex(this.colorData.result[1]);

                    // console.log(this.colorData.result[1]);

                    this.hex2 = hexValue2;
                    this.changeColor2 = {
                      'background-color': `#${hexValue2}`
                    }
                    const hexValue3 =  this.rgbToHex(this.colorData.result[2]);
                    this.hex3 = hexValue3;
                    this.changeColor3 = {
                      'background-color': `#${hexValue3}`
                    }
                    const hexValue4 =  this.rgbToHex(this.colorData.result[3]);
                    this.hex4 = hexValue4;
                    this.changeColor4 = {
                      'background-color': `#${hexValue4}`
                    }

                    });
              
}
// convert no. rgb to Hex :-
            rgbToHex(rgb) {
              const hex = rgb.map(x => {
                  let value = x > 0 ? x.toString(16) : 0;
                  if (value.length === 1) {
                    value = '0' + value;
                  }
                  return value;
              
                }).join('').toUpperCase();

                  return `${hex}`;
                console.log(hex); // hex code
            }


// For Spacebar
 @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === ' ') {
      this.randomColor();
    }
  }
  
// Copy Text To Clipboard

  copyTextToClipboard(text) {
      const txtArea = document.createElement('textarea');
      txtArea.style.opacity = '0';
      txtArea.value = text;
      document.body.appendChild(txtArea);
      
      txtArea.select();

      const success = document.execCommand('copy');

      const message = success ? 'successful' : 'unsuccessful';

      console.log('Copying the Color Code ' + message);

      console.log("Successfully Copy the Color Code #"+text);

      alert("Successfully Copy the Color Code #"+text);
     
  }
}
