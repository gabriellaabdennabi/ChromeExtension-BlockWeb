$(function(){
    $("#pomtimer").on('click',function(){
        $("#container__timer").fadeToggle();
    })

    var pomodoro = {
        started: false,
        minutes: 0,
        seconds: 0,
        fillerHeight: 0,
        fillerIncrement: 0,
        interval: null,
        minutesDom: null,
        secondsDom: null,
        fillerDom: null,
        init: function(){
            var self = this;
            this.minutesDom= $("#minutes");
            this.secondsDom=$("#seconds");
            this.fillerDom=$("#filler");
            this.interval = setInterval(function(){
                self.intervalCallback.apply(self);
            },1000);
            
        }
    }

    
})