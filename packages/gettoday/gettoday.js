/**
 * Created by Administrator on 2016/9/20.
 */
GetVisit=new Mogon.Collection('visitdate');
getdata=
{
result:function (num1,num2) {
    var  result=num1+num2;
    var time=new Date();
    return time;
},
savetime:function () {
    var date=new Date();
    GetVisit.insert();
}
};
