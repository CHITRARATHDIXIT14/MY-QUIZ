class Contestant {
    constructor(){
      this.name=null;
      this.distance=0;
      this.index=null;
    }
  
    getCount(){
      var ConstestantCountRef = database.ref('ContestantCount');
      ConstestantCountRef.on("value",function(data){
        ConstestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        ConstestantCount: count
      });
    }
  
    update(){
      var ConstestantIndex = "Constents/Constestant" + this.index;
      database.ref(ConstestantIndex).set({
        name:this.name 
        
      });
    }
    static getConstestantInfo(){
      var ContestantInfoRef=database.ref('contestant')
      ContestantInfoRef.on("value",(data)=>{
        allContestant=data.val()
        
      })
    }
    }
  
  