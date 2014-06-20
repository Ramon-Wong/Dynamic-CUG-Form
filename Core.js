var lUSERS        = 4;
var aTables       = 1;




function doGet() {
  
  var app         = UiApp.createApplication();
  var vPanel      = app.createVerticalPanel().setStyleAttributes(style1);
  
  var mLabel      = app.createLabel('CUG Members FORM').setStyleAttributes(Title);
  var table1      = app.createFlexTable().setId('TABLE1').setBorderWidth(1).setTag('1').setWidth(930); 
  var D           = new Date();
  var Months      = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
  var cDate       = D.getDate()+" "+Months[D.getMonth()]+" "+D.getFullYear();
  
  
  
  
  OpenScript();

  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  // this table array holds our + / - buttons
  //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  var table2      = app.createFlexTable().setId('TABLE2');
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  // this table array holds our requester form
  //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var aTables     = Array();
  for(var i = 0; i < 5; i++){
    aTables[i]    = app.createFlexTable().setId('req_TABLE'+i).setTag('inActive');
  }
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  // this table array holds our additional users form
  //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var xTables     = Array();
  for(var i = 0; i < lUSERS; i++){
    xTables[i]    = app.createFlexTable().setId('add_TABLE'+i).setTag('inActive');
  }
    
 
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  // this table array holds our 
  // "Aanvrager"
  // "Phone Numbers" 
  // "Afdeling"
  // "Post paid packages"
  // "Check Box"
  // "Cost Center"
  // "Notes"
  // "Fam"
  // "Fam Phone"
  // "Family"
  //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
  
  CreateTextBoxes( app, 0);
  CreateTextBoxes( app, 1);
  CreateDropBox( app, 2, GetScriptDept());
  CreateDropBox( app, 3, GetScriptPackages());
  
  var aCheck      = Array();
  
  for(var i = 0; i < lUSERS; i++){
    aCheck[i]     = app.createCheckBox().setId(FORM_LIST[4]+i).setName(FORM_LIST[4]+i);
  }    
  
  CreateDropBox( app, 5, GetScriptCost());

  var aNoteBoxes  = Array();
  for(var i = 0; i < lUSERS; i++){
    aNoteBoxes[i]  = app.createTextArea().setId(FORM_LIST[6]+i).setName(FORM_LIST[6]+i).setWidth(200);
  }
  
  CreateTextBoxes( app, 7);
  CreateTextBoxes( app, 8);
  CreateDropBox( app, 9, GetScriptFamilies());

  
  
  
  
  var bButton     = app.createButton("SUBMIT");
  var aButton     = app.createButton("+").setWidth("25").setId("AddOne");
  var mButton     = app.createButton("-").setWidth("25").setId("Remove");
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  // this table array holds extra buttons
  //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var aHandler    = app.createServerHandler("aHandler").addCallbackElement(table1);
  var xButton     = Array();
  for(var i = 0; i < lUSERS; i++){
    xButton[i]    = app.createButton("Extra").setId("Extra"+i).setTag(0);
    xButton[i].addClickHandler(aHandler);
  }
  
  var rButton     = app.createButton("NoAdd").setId("NoAdd");
  
  
  var bHandler    = app.createServerHandler("fHandler").addCallbackElement(table1);

  for( var i = 0; i < lUSERS; i++){
     bHandler.addCallbackElement(xTables[i]).addCallbackElement(aTables[i]);
  }
  

  bButton.addClickHandler(bHandler);
  
  var cHandler    = app.createServerHandler("gHandler")
    .addCallbackElement(table1)
    .addCallbackElement(table2)
    .addCallbackElement(aButton)
    .addCallbackElement(mButton);
  aButton.addClickHandler(cHandler);
  mButton.addClickHandler(cHandler);    
  


  
  
  table2.setText( 0, 0, " Add more users");
  table2.setWidget( 0, 1, aButton);
  table2.setWidget( 0, 2, mButton); 
  
  //table2.setWidget(row, column, app.createTextBox().setId("NameBox"));
      
  table1.setText( 0, 0, "CUG Request Form: "+cDate);
  //table1.setText( 0, 1, "Extra");
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  // adding the first user input row
  //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  table1.setWidget( 1, 0, AddRequesterForm(app, 1));
  AddAdditionalUsers
  // table1.setWidget( 1, 1, AddAdditionalUsers(app, 1));
  
  // table1.setText( 1, 0, "xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxxxxxx");
  // table1.setText( 1, 1, "xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxxxxxx");
  
  
  table1.setWidget( 2, 0, table2);
  
  vPanel.add(mLabel);
  vPanel.add(table1);
  vPanel.add(bButton);
  
  app.add(vPanel);
  
  return app;  
}












