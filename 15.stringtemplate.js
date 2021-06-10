const name = 'Hello World!';
const template = `Test : ${name}`;

document.writeln(template);

//paragraf break
document.writeln('<br>');

const name2 = 'Hello World!';
const template2 = `Test : ${name} ${name2}`;

document.writeln(template2);

//paragraf break
document.writeln('<br>');

const nilai = 75;
const template3 = `Name : ${name}, Lulus : ${nilai >= 70}`;

document.writeln(template3);

//paragraf break
document.writeln('<br>');

const multiLine = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, 
unt in culpa qui officia deserunt mollit anim id est laborum.`;

document.writeln('<pre>');
document.writeln(multiLine);
document.writeln('</pre>');