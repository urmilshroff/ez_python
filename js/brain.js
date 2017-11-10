function python_org()
{
window.open("https://www.python.org");
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

document.write("If you're seeing this the first time you clicked the button (AFTER INPUTTING YOUR NAME), then let me know!"); //test to check if button works
document.write(fname);

var fname=document.account.fname; //first name
var sname=document.account.sname; //last name
var username=document.account.username; //username
var email=document.account.email; //email
var password=document.account.password; //password

}

function answer_checker(ans)
{

if(document.q1.q==ans)
{
document.write(q1.q.value);
return true;
}

else
{
document.write("Wrong");
return false;
}
