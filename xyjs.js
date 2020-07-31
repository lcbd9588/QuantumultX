/**
 * @supported 设备 ID
 */

let Cookie = $prefs.valueForKey("xyCookie");
let Host = $prefs.valueForKey("xyHost");
let Agent = $prefs.valueForKey("xyAgent");
console.log("Host:"+ Host);
let Req = {
  url: Referer+"/checkin",
  method: "POST",
  headers: {
    Cookie: Cookie,
    Referer: '${Host}/user',
    "User-Agent": Agent
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
