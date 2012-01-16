var then =new Date(2011,0,1);
var later=new Date(2011,0,1,17,45,55);

var now=new Date();
var elapsed = now-then;

later.getFullYear();
later.getMonth();
later.getDate();
later.getHours();
later.getMinutes();
later.getSeconds();
later.toString();
later.toISOString(); 

var msg='Hello'+","+" /worlds";
msg.length;
var s='hello, world';
s.charAt(0);
s.substring(2,4);
s.slice(2,4);
s.lastIndexOf('l');
s.split(",");
s.toUpperCase();


secma5="hello, world";
secma5[0];
secma5[secma5.length-1];

var text="testing: 5 8 9";
var pattern=/\d+/g;
pattern.test(text);
text.search(pattern);
text.match(pattern);
text.replace(pattern,'&');
text.split(/\D+/);
pattern.test(text);

var s='test';
	s.len=4;
	var t=s.len;