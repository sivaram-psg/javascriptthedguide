var s='test';
s.len=4;
var t=s.len;

var o={x:1};
o.x=2;
o.y=3;

var a=[1,2,3];
a[0]=5;
a[3]=8;

var  p={x:1},q={x:1};
p===q;

var a=[1],b=[1];
a===b;


var a=[];
var b=a;
b[0]=1;
a[0];
a===b;