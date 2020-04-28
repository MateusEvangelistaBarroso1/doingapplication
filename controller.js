class Controller{
    constructor(){
        this._locale ='pt-br';
        this._timeEl = document.querySelector("#time");
        this.currentDate;
       this.initialize();
    }

        initialize(){
            this.currentDateTime();
            this.mudaElement();
            setInterval(()=>{
                this.currentDateTime();
            }, 1000)
        }
    mudaElement(){
        
        let container = document.querySelector(".container")
        container.addEventListener("click", valueEvent=>{
                 container.style.border = "5px solid #000";
                 container.style.borderRadius = '10px';
                 container.style.borderColor = "red green blue yellow"
                 container.style.width = '150px';
                 container.style.height = '300px';
                 container.style.marginLeft = '100px'
                 container.style.marginTop  = '-10px';
                 container.style.boxShadow = '-20px 20px 10px rgba(0,0,0.5)';    
                 this._timeEl.style.marginTop = '125px'; 
                 this._timeEl.style.color = 'red'  
     
        });
    }
    currentDateTime(){
        this.time = this.currentDate.toLocaleTimeString(this._locale);
    }
    get time(){
        return this._timeEl.innerHTML;
    }

    set time(value){
        this._timeEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }
    set currentDate(value){
        this.currentDate.innerHTML = value;
    }
}