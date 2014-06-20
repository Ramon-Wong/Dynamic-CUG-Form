

function CreateTextBoxes(app, type){
  var a           = Array();
  
  for(var i = 0; i < lUSERS; i++){
    a             = app.createTextBox().setId(FORM_LIST[type]+i).setName(FORM_LIST[type]+i).setWidth(200).setStyleAttributes({margin: "0 20 0 0"});
  }

  return a;
}


function CreateDropBox(app, type, list){
  var a           = Array();
  
  for(var i = 0; i < lUSERS; i++){
    a[i]          = app.createListBox().setId(FORM_LIST[type]+i).setName(FORM_LIST[type]+i).setWidth('120px');
    
    for(var u = 0; u < list.length; u++){
      a[i].addItem(list[u]);  
    }    
  }   
  
  return a;
}





function AddAdditionalUsers(app, tag){
  var t = tag - 1;
  var xTable      = app.getElementById("add_TABLE"+t);
  
  var fName       = app.getElementById("fam_NameBox"+t);
  var fPhone      = app.getElementById("fam_PhoneNumb"+t);
  var fType       = app.getElementById("fam_List"+t);  
  
  xTable.setText(   0, 0, " Additional Members");
  xTable.setText(   1, 0, " Name: ");      xTable.setWidget( 1, 1, fName);
  xTable.setText(   2, 0, " Phone:");      xTable.setWidget( 2, 1, fPhone);
  xTable.setText(   3, 0, " Relatives:");  xTable.setWidget( 3, 1, fType);

  
  return xTable;
}



function AddRequesterForm(app, tag){
  
  var t = tag - 1;
  var aTable      = app.getElementById("req_TABLE"+t);
  aTable.setTag("Active");
  
  Logger.log(aTable.getId());
  
  var TextBox     = app.getElementById( FORM_LIST[0]+t);
  var PhoneNumb   = app.getElementById( FORM_LIST[1]+t);
  var xButton     = app.getElementById("Extra"+t);
  var aNoteBox    = app.getElementById( FORM_LIST[6]+t);
  
  var DeptDrop    = app.getElementById( FORM_LIST[2]+t);
  var DigiPDrop   = app.getElementById( FORM_LIST[3]+t);
  var CostCenter  = app.getElementById( FORM_LIST[5]+t);
  var CheckB      = app.getElementById( FORM_LIST[4]+t);
    
  aTable.setText(   0, 0, "Request form #"+tag);
  aTable.setText(   1, 0, "Aanvrager: ");
  aTable.setWidget( 1, 1, TextBox);
  
  aTable.setText(   1, 2, "Afdeling");
  aTable.setWidget( 1, 3, DeptDrop);
  
  aTable.setText(   2, 0, "Nummer: ");
  aTable.setWidget( 2, 1, PhoneNumb);
  
  aTable.setText(   2, 2, "Post/Pre");
  aTable.setWidget( 2, 3, DigiPDrop);
  
  aTable.setText(   3, 0, "Charge to NANA");
  aTable.setWidget( 3, 1, CheckB);
  
  aTable.setText(   3, 2, "Cost Center");
  aTable.setWidget( 3, 3, CostCenter);    
  
  aTable.setText(   4, 0, "Notes");
  aTable.setWidget( 4, 1, aNoteBox);


  
  aTable.setText(   5, 0, "Additional members: ");
  aTable.setWidget( 5, 1, xButton);
  
  return aTable;
}



function AddMoreButton(app){
  var aButton     = app.getElementById("AddOne");
  var mButton     = app.getElementById("Remove"); 
  var table2      = app.getElementById("TABLE2");
    
  table2.setText(   0, 0, " Add more users");
  table2.setWidget( 0, 1, aButton);
  table2.setWidget( 0, 2, mButton);   
  
  return table2;
}



function AddAdditional(app, tag){
  
  var t = tag - 1;
  var xTable      = app.getElementById("add_TABLE"+t);  
  
  xTable.setText(   0, 0, "Additional users #"+tag);
  xTable.setText(   1, 0, "User Name: ");
  xTable.setText(   1, 1, "XXXXXXXXXXXXXXXXXXXXXX");
  
  return xTable
}


