package ydzhao.weixin.tuisong.controller;

/**
 *@ClassName PushController
 *@Description TODO
 *@Author ydzhao
 *@Date 2022/8/2 15:48
 */
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ydzhao.weixin.tuisong.util.Pusher;

@RestController
public class PushController {
    //要推送的用户openid
    //wangkang
    private static String mxp = "oX1bt6myHxlFzUQkCYcXHKiYZXBI";
    private static String zyd = "odbd-6U6ygdSTCwldsJ6qs0kxXeA";

    //通过controller返回html界面
    @RequestMapping("/jj")
    public  String testJumpPage(){
        return "jiajing";
    }

    /**
     * 微信测试账号推送
     *
     */
    @GetMapping("/push")
    public void push() {
        Pusher.push(mxp);
    }

    /**
     * 微信测试账号推送
     * */
    @GetMapping("/push/zyd")
    public void pushZyd() {
        Pusher.push(zyd);
    }


    /**
     * 微信测试账号推送
     * */
    @GetMapping("/push/{id}")
    public void pushId(@PathVariable("id") String id) {
        Pusher.push(id);
    }
}