







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// this is the Submit button
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fHandler(e){
  var Source      = e.parameter.source;
  var app         = UiApp.getActiveApplication();
  
  var rTable      = [e.parameter.req_TABLE0_tag, e.parameter.req_TABLE1_tag, e.parameter.req_TABLE2_tag, e.parameter.req_TABLE3_tag, e.parameter.req_TABLE4_tag];
  
  // fetch active tables
  // check data
  // store it in spreadsheet
  
  
  for( var i = 0; i < lUSERS; i++){
    if( rTable[i] == "Active"){
      eval("var namebox = e.parameter."+FORM_LIST[0]+i);
      eval("var Phone   = e.parameter."+FORM_LIST[1]+i);
      eval("var txtBox  = e.parameter."+FORM_LIST[6]+i);
      eval("var Pack    = e.parameter."+FORM_LIST[3]+i);
      eval("var Dept    = e.parameter."+FORM_LIST[2]+i);
      eval("var CostC   = e.parameter."+FORM_LIST[5]+i);
      eval("var charge  = e.parameter."+FORM_LIST[4]+i);
      
      eval("var famName = e.parameter."+FORM_LIST[7]+i);
      eval("var famNumb = e.parameter."+FORM_LIST[8]+i);
      eval("var relate  = e.parameter."+FORM_LIST[9]+i);
      
      //Logger.log(e);
      
      
      Logger.log("eval name: "+namebox);      
      Logger.log("eval Phone: "+Phone); 
      Logger.log("eval txt: "+txtBox);
      
      Logger.log("eval Package: "+Pack);      
      Logger.log("eval Department: "+Dept);      
      Logger.log("eval Cost Center: "+CostC);
      Logger.log("eval Charge to: "+charge);
      
      Logger.log("eval Fam Name: "+famName);
      Logger.log("eval Fam Numb: "+famNumb);
      Logger.log("eval relations to: "+relate);
      
      //Logger.log("GET IT GOING ON"); 
      //Logger.log(rNames[i]);
      
    }
  }
   
  //Logger.log(e);
  
  return app;
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// this is the + / - button
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function gHandler(e){
  var Source      = e.parameter.source;
  var app         = UiApp.getActiveApplication();
  
  var table1      = app.getElementById("TABLE1");
  var tag         = parseInt(e.parameter.TABLE1_tag);
    
  if(Source == "AddOne" && tag < lUSERS){
     tag++;
     aTables++;
    
     table1.setWidget( tag, 0, AddRequesterForm(app, tag));
     //table1.setText( tag, 1, "xxxxxxxxx xxxxxxxxx");
    
     table1.setWidget( tag+1, 0, AddMoreButton(app));  
  }else if(Source == "Remove" && tag > 1){
     Logger.log("Remove");
    
     var aTable      = app.getElementById("req_TABLE"+(tag-1));
     aTable.setTag("inActive"); 
     table1.removeRow(tag);
    

    
     tag--;  
     aTables--;
  }
  
  table1.setTag(tag); 
  return app;
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// this is the Additional button
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function aHandler(e){
  var Source      = e.parameter.source;
  var app         = UiApp.getActiveApplication();
  
  var table1      = app.getElementById("TABLE1");
  var tag         = parseInt(e.parameter.TABLE1_tag);   // < == get button tag
 
  var eButton     = app.getElementById(Source);
    
    switch(Source){
      case "Extra0":
        if(e.parameter.Extra0_tag == 178){
          table1.setWidget( 1, 1, AddAdditionalUsers(app, 1));
          Logger.log("st "+e.parameter.Extra0_tag);
          Logger.log("number 2");
          
          eButton.setText("Remove");
          eButton.setTag(999);    

        }else if(e.parameter.Extra0_tag == 999){
          table1.removeCell( 1, 1);
          eButton.setText("Extra");
          eButton.setTag(178);   
        }
        break;
      case "Extra1":
        if(e.parameter.Extra1_tag == 178){
          table1.setWidget( 2, 1, AddAdditionalUsers(app, 2));
          Logger.log("st "+e.parameter.Extra1_tag);
          Logger.log("number 2");
          
          eButton.setText("Remove");
          eButton.setTag(999);                
        }else if(e.parameter.Extra1_tag == 999){
          table1.removeCell( 2, 1);
          eButton.setText("Extra");
          eButton.setTag(178);        
        }  
      break;
      case "Extra2":
        if(e.parameter.Extra2_tag == 178){
          table1.setWidget( 3, 1, AddAdditionalUsers(app, 3));
          Logger.log("st "+e.parameter.Extra2_tag);
          Logger.log("number 3");
          
          eButton.setText("Remove");
          eButton.setTag(999);
        }else if(e.parameter.Extra2_tag == 999){
          table1.removeCell( 3, 1);
          eButton.setText("Extra");
          eButton.setTag(178);                    
        }  
      break;
      case "Extra3":
        if(e.parameter.Extra3_tag == 178){
          table1.setWidget( 4, 1, AddAdditionalUsers(app, 4));
          Logger.log("st "+e.parameter.Extra3_tag);
          Logger.log("number 4");
          
          eButton.setText("Remove");
          eButton.setTag(999);
        }else if(e.parameter.Extra3_tag == 999){
          table1.removeCell( 4, 1);
          eButton.setText("Extra");
          eButton.setTag(178);                    
        }   
      break;
      case "Extra4":
        if(e.parameter.Extra4_tag == 178){
         table1.setWidget( 5, 1, AddAdditionalUsers(app, 5));
         Logger.log("st "+e.parameter.Extra4_tag);
         Logger.log("number 5");
          
         eButton.setText("Remove");
         eButton.setTag(999);
       }else if(e.parameter.Extra4_tag == 999){
         table1.removeCell( 5, 1);
         eButton.setText("Extra");
         eButton.setTag(178);                    
       }     
          
      break;
      default: 
    }
  
  return app;
}




