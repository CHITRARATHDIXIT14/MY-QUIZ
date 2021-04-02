class Question {

    constructor() {
      this.input = createInput("Enter your name here ....");
      this.input1 = createInput("Enter your correct answer here....");
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.input.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("MY QUIZ GAME");
      title.position(displayWidth/2,0);
    
     var question = createElement('h3')
     question.html("Question :- What starts and end with the letter 'E' , but has only one letter ?")
     question.position(200,200)
     
     var option1 = createElement('h3')
     option1.html("1: Everyone ")
     option1.position(200,220)

     var option2 = createElement('h3')
     option2.html("2: Envelope ")
     option2.position(200,240)

     var option3 = createElement('h3')
     option3.html("3: Estimate ")
     option3.position(200,260)

     var option4 = createElement('h3')
     option4.html("4: Example ")
     option4.position(200,280)


      this.input.position(displayWidth/2, 160);
      this.button.position(displayWidth/2, 200);
    
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2, 100);
      });
  
    }
  }
  