/**
 * @supported 设备 ID
 */

let Cookie = $prefs.valueForKey("xyCookie");
let Referer = $prefs.valueForKey("xyReferer");
let Req = {
  url: Referer+"/checkin",
  method: "POST",
  headers: {
    Cookie: Cookie,
    Referer: Referer,
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36"
  }
};

$task.fetch(Req).then(response => {
  try {
    let doc = JSON.parse(response.body);
    if (doc["ret"] == 1) {
      $notify(
        "讯云",
        "成功",
        `${doc["msg"]}\n已使用流量${doc["trafficInfo"]["lastUsedTraffic"]}\n剩余流量${doc["trafficInfo"]["unUsedTraffic"]}`
      );
    } else {
      $notify("讯云", "成功", doc["msg"]);
    }
  } catch (error) {
    $notify("讯云", "失败", error);
  }
});
