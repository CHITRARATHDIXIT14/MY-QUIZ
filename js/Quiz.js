class Quiz {

    constructor(){}
    
    getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState = data.val();
     })
    }
    
    update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
    
      async start(){
        if(gameState === 0){
          constestant = new Contestant();
          var constestantsCountRef = await database.ref('contestantCount').once("value");
          if(constestantsCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
          }
          question = new Question()
          question.display();
        }
      }
    
    
    
    }