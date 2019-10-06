const colors1 = ['red', 'blue', 'orange'];
const colors2 = ['green', 'pink', 'black'];


function SliderMethods () {

    this.next = function() {
        
        this.index ++;

        if(this.index > this.dataLength){
            this.index = 0;
        }

        this.wrap.style.backgroundColor = this.data[this.index];
    }

    this.prev = function() {
        this.index --;

        if(this.index < 0){
            this.index = this.dataLength;
        }
        
        this.wrap.style.backgroundColor = this.data[this.index];
    }

    this.render = function () {

        this.btnRight.onclick = this.next.bind(this);
        this.btnLeft.onclick = this.prev.bind(this);

        this.wrap.style.backgroundColor = this.data[this.index];

        this.wrap.append(
            this.btnLeft,
            this.btnRight
        );

        this.container.appendChild(this.wrap);
    }
}

Slider.prototype = new SliderMethods();

function Slider (data, containerId, defaultIndex = 0) {
    this.wrap = document.createElement('div');
    this.wrap.className = 'slider';

    this.btnLeft = document.createElement('button');
    this.btnRight = document.createElement('button');
    this.btnLeft.innerHTML = 'Prev';
    this.btnRight.innerHTML = 'Next';
    
    this.container = document.querySelector(containerId);
    this.index = defaultIndex;
    this.data = data;

    this.dataLength = data.length -1;
}

const slider1 = new Slider(colors1, '#slider-1', 1);

slider1.render();