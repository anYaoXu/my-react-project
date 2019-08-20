
import $ from 'jquery';

const UtilService = {
    getLoginInfo() {
        return {
            username: $.cookie('username'),
            userid: $.cookie('userid'),
            loginname: $.cookie('loginname'),
            mobile: $.cookie('mobile'),
            token: $.cookie('token'),
            headimg: $.cookie('headimg'),
        }   
    },
    deleteLoginInfo() {
        $.cookie('username', '');
        $.cookie('userid', '');
        $.cookie('loginname', '');
        $.cookie('mobile', '');
        $.cookie('token', '');
        $.cookie('headimg', '');
    },
    saveLoginInfo(data:any, callback?:any) {
        this.deleteLoginInfo();
        this.getToday((time:any)=>{
            const cookieConfig = { expires: new Date(Date.now() + 60 * 1000*5)};
            this.setLoginInfoOfCookie(data,cookieConfig);
            if (callback) {
                callback();
            }
        })
        
    },
    setLoginInfoOfCookie(user:any,cookieConfig?:any){
        if(cookieConfig){
            $.cookie('username', user.username, cookieConfig);
            $.cookie('userid', user.id, cookieConfig);
            $.cookie('loginname', user.loginname, cookieConfig);
            $.cookie('mobile', user.mobile, cookieConfig);
            $.cookie('token', user.token, cookieConfig);
            $.cookie('headimg', user.headimg);
        }else{
            $.cookie('username', user.username);
            $.cookie('userid', user.id);
            $.cookie('loginname', user.loginname);
            $.cookie('mobile', user.mobile);
            $.cookie('token', user.token);
            $.cookie('headimg', user.headimg);
        }
    },
    getToday(callback:any){
        // 返回当前时间戳  应该返回服务器时间
        callback(new Date().getTime());
    }
}

export default UtilService;
