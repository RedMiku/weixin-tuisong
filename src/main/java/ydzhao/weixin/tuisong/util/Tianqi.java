package ydzhao.weixin.tuisong.util;


import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

/**
 * @ClassName Tianqi
 * @Description TODO
 * @Author ydzhao
 * @Date 2022/8/2 16:45
 */
public class Tianqi {
    private static String ak = "RDnIGZ93LAuApqfVF2SnA4VO2FyEEjlu";
    //合肥市 合肥市
    private static String district_id = "340100";

    public static JSONObject getNanjiTianqi() {
        String result = null;
        String sn ="118f1cbb6d1942cdf47c8ea281f57999";
        JSONObject today = new JSONObject();
        try {
            result = HttpUtil.getUrl("https://api.map.baidu.com/weather/v1/?district_id=" + district_id + "&data_type=all&ak=" + ak +"&sn=" + sn);
            JSONObject jsonObject = JSONObject.parseObject(result);
            if (jsonObject.getString("message").equals("success")) {
                JSONArray arr = jsonObject.getJSONObject("result").getJSONArray("forecasts");
                today = arr.getJSONObject(0);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return today;
    }

    public static void main(String[] args) {
        System.out.println(getNanjiTianqi());
    }
}
