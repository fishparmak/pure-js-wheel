(function(global, factory){
    'use strict';
   
    global.Progress = factory;
   })(this, function () {
       return new Progress(parentNode = [], state = 'normal', prm = '');
       function Progress(parentNode= [], state = 'normal', prm = '') {
           this.state = state;
           this.prm;
           this.value;
           this.parentNode = parentNode;
           var progressRunner;
           var progressBlock;

           this.drawChart = function (rad=9) {
               var circumference = 2*Math.PI*rad;
               var strokeLength = (this.value*circumference)/100;
               this.parentNode[0].innerHTML = '<svg class="progress" viewbox="0 0 20 20" width="200" height="200">' +
               '<circle class="progress__field" stroke="#bfbfbf" stroke-width="1" fill="none" cx="10" cy="10" r='+rad+' />' +
               '<circle class="progress__runner" stroke="#fce112" stroke-width="1" stroke-dasharray="' + strokeLength +',' + circumference + '" stroke-linecap="round" fill="none" cx="10" cy="10" r='+rad+' /></svg>';
               var child = this.parentNode[0].childNodes[0];
                if(child.className.baseVal=='progress'){
                    progressRunner = child.childNodes[1];
                    progressBlock = child;
                }
                animate();
               return this;
           }
           this.setMod = function (state, prm) {
               state = state.toLowerCase();
               this.prm = prm.toLocaleLowerCase();
              switch(state){
                  case 'animated':
                      progressBlock.style.display = 'inline-block';
                      if(this.prm=='yes'){
                          this.state = state;
                          this.drawChart();
                        }
                        else {
                            progressBlock.style.display = 'inline-block';
                            this.state='normal'
                        }
                        break;
                  case 'hidden':
                      if(this.prm=='yes') {
                        progressBlock.style.display = 'none';
                        this.state = state;
                      }
                      else {
                        progressBlock.style.display = 'inline-block';
                      }
                      break;
                  default: throw('Error');
              }
               return this;
           }
           this.setValue = function (value) {
               if(this.state != 'normal') {
                   throw('Value can be changed only in the Normal state.')
                   return this;
               }
               if(value>=0 && value<=100) {
                    this.value = value;
                    this.drawChart();
               }
                return this;
           }
           var animate = function() {
               progressRunner.classList.add('progress__runner_animated');
               
           }
           var hideAnimation = function () {
               progressRunner.classList.remove('progress__runner_animated');
           }
       }
   })
   
