var ConfigScript  = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
                     
var Dept          = "Afdeling";
var Post          = "Package";
var Cost          = "Cost Center";
var Fam           = "Families";

var Script;

var FORM_LIST     = ["req_NameBox",
                     "req_PhoneNumb",
                     "req_Dept",
                     "req_Pack",
                     "req_Charge2NANA",
                     "req_CostC",
                     "Opt_TxtArea",
                     "fam_NameBox",
                     "fam_PhoneNumb",
                     "fam_List"];


function OpenScript(){
  Script          = SpreadsheetApp.openById(ConfigScript);  
}


function GetScriptDept(){
  return(Script.getSheetByName(Dept).getDataRange().getValues()); 
}


function GetScriptPackages(){
  return(Script.getSheetByName(Post).getDataRange().getValues()); 
}


function GetScriptCost(){
  return(Script.getSheetByName(Cost).getDataRange().getValues()); 
}

function GetScriptFamilies(){
  return(Script.getSheetByName(Fam).getDataRange().getValues()); 
}
