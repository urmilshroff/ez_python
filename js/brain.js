function python_org()
{
window.open("https://www.python.org");
}

function init_zero()
{
var marks=0;
}

function execute_online()
{
window.open("https://www.tutorialspoint.com/execute_python_online.php");
}

function mouse_over()
{
document.write("onmouseover() called");
}

function button_click()
{
document.write("A button was clicked");
}

function account_validator() //validates login page
{

var fname=document.formname.fname.value; //first name
var sname=document.account.sname; //last name
var username=document.account.username; //username
var email=document.account.email; //email
var password=document.account.password; //password

if(fname=="")
{
document.write("Please enter your first name!");
fname.focus();
return false;
}

if(sname.value=="")
{
window.alert("Please enter your surname!");
sname.focus();
return false;
}

if(username.value=="")
{
window.alert("Please enter your username!");
username.focus();
return false;
}
return true;
}

function answer_checker(input,ans)
{
if(input==ans)
{
window.alert("Yay, you are correct!");
}
else
{
window.alert("Sorry, that's the wrong answer!");
}
}
