package ydzhao.weixin.tuisong.util;

import com.alibaba.fastjson.JSONObject;
import me.chanjar.weixin.mp.api.WxMpInMemoryConfigStorage;
import me.chanjar.weixin.mp.api.WxMpService;
import me.chanjar.weixin.mp.api.impl.WxMpServiceImpl;
import me.chanjar.weixin.mp.bean.template.WxMpTemplateData;
import me.chanjar.weixin.mp.bean.template.WxMpTemplateMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

/**
 *@ClassName Pusher
 *@Description TODO
 *@Author ydzhao
 *@Date 2022/8/2 16:03
 */
public class Pusher {

    private static Logger log = LoggerFactory.getLogger(Pusher.class);
    /**
     * 测试号的appId和secret
     */
    private static String appId = "wx65906d528276d23f";
    private static String secret = "a2fa5c44a67722c1477e91470d3b3f62";
    //模版id
    private static String templateId = "0_C-HFtWHsYlcKmSeR6-vfyMHqJ3xeCiPMSo5YWHyTc";

    private static List<String> list = Arrays.asList(
            "静静，早上好呀！(●'◡'●)!" ,
            "家静同学,早早早! (⑅˃◡˂⑅) ",
            "小静, 早上好,早上好,早上好! ('ヮ')",
            "家静,早早早!今天也要元气满满哦! ᕙ(`▿´)ᕗ",
            "早早早啊,家静小朋友! ❛‿˂̵✧" ,
            "叮咚,早安,家静! (*＞◡❛)");


    public static void push(String openId){
        //1，配置
        WxMpInMemoryConfigStorage wxStorage = new WxMpInMemoryConfigStorage();
        wxStorage.setAppId(appId);
        wxStorage.setSecret(secret);
        WxMpService wxMpService = new WxMpServiceImpl();
        wxMpService.setWxMpConfigStorage(wxStorage);
        //2,推送消息
        WxMpTemplateMessage templateMessage = WxMpTemplateMessage.builder()
                .toUser(openId)
                .templateId(templateId)
                //.url("https://30paotui.com/")//点击模版消息要访问的网址
                .build();
        //3,如果是正式版发送模版消息，这里需要配置你的信息
        //        templateMessage.addData(new WxMpTemplateData("name", "value", "#FF00FF"));
        //                templateMessage.addData(new WxMpTemplateData(name2, value2, color2));
        //填写变量信息，比如天气之类的
        JSONObject todayWeather = Tianqi.getNanjiTianqi();
        templateMessage.addData(new WxMpTemplateData("riqi",todayWeather.getString("date") + "  "+ todayWeather.getString("week"),"#00BFFF"));
        templateMessage.addData(new WxMpTemplateData("tianqi",todayWeather.getString("text_day"),"#00FFFF"));
        templateMessage.addData(new WxMpTemplateData("low",todayWeather.getString("low") + "","#173177"));
        templateMessage.addData(new WxMpTemplateData("high",todayWeather.getString("high")+ "","#FF6347" ));
        templateMessage.addData(new WxMpTemplateData("caihongpi",CaiHongPi.getCaiHongPi(),"#FF69B4"));
//        templateMessage.addData(new WxMpTemplateData("lianai",JiNianRi.getLianAi()+"","#FF1493"));
//        templateMessage.addData(new WxMpTemplateData("shengri",JiNianRi.getShengRi()+"","#FFA500"));
        templateMessage.addData(new WxMpTemplateData("jinju",CaiHongPi.getJinJu()+"","#C71585"));
        //templateMessage.addData(new WxMpTemplateData("jiehun",JiNianRi.getJieHun()+""));
//        templateMessage.addData(new WxMpTemplateData("linzhen",JiNianRi.getLinZhen()+"","#FF6347"));
        String beizhu = "";
//        if(JiNianRi.getJieHun() % 365 == 0){
//            beizhu = "今天是结婚纪念日！";
//        }
//        if(JiNianRi.getLianAi() % 365 == 0){
//            beizhu = "今天是恋爱纪念日！";
//        }
//        if(JiNianRi.getLinZhen() % 365 == 0){
//            beizhu = "今天是结婚纪念日！";
//        }

        Random random = new Random();
        int n = random.nextInt(list.size());
        beizhu = list.get(n);
        templateMessage.addData(new WxMpTemplateData("beizhu",beizhu,"#FF0000"));


        try {
            log.info("发送模板：{}",templateMessage.toJson());
            log.info("发送返回id：{}",wxMpService.getTemplateMsgService().sendTemplateMsg(templateMessage));
//            System.out.println(templateMessage.toJson());
//            System.out.println(wxMpService.getTemplateMsgService().sendTemplateMsg(templateMessage));
        } catch (Exception e) {
            log.error("发送失败：{}",e.getMessage());
//            System.out.println("推送失败：" + e.getMessage());
            e.printStackTrace();
        }
    }
}
