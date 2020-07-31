/**
 * @supported 设备 ID
 */

let Cookie = $prefs.valueForKey("xyCookie");
let link = $prefs.valueForKey("xyLink");
let Req = {
  url: link+"/user/checkin",
  method: "POST",
  headers: {
    Cookie: Cookie,
    Origin: link,
    Referer: link+"/user",
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
