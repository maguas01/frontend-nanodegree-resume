/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Manuel Esteban Aguas");
//var thoughts = "I am manny and I am awesome" ;
//$("#main").append(thoughts.replace("awesome", "fun"));

var name = "Manuel Esteban Aguas";
var role = "Software Engineer";

var formattedName =  HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role)

$("#header").append(formattedName);
$("#header").append(formattedRole);
