/**
 * Created by Administrator on 2016/9/20.
 */
Package.describe({
    name:"gettoday",
    version:"1.0.0",
    summary:"GetToday",
});
Package.onUse(function (api) {
    api.versionsFrom('1.2.1')
    api.use(['minimongo','templating'],'client');
    api.addFiles(['gettoday.js'],['client','server']);


    if(api.export)
    {
        api.export('getdata')
    }
});