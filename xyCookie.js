/**
 * @supported 设备 ID
 */

let headerCookie = $request.headers["Cookie"];
let headerHost = $request.headers["Host"];
let headerAgent = $request.headers["User-Agent"];
if (headerCookie && headerHost && headerAgent) {
  if ($prefs.valueForKey("xyCookie") != undefined) {
    if ($prefs.valueForKey("xyCookie") != headerCookie) {
      var cookie = $prefs.setValueForKey(headerCookie, "xyCookie");
      if (!cookie) {
        $notify("更新迅云Cookie失败！", "", "");
      } else {
        $notify("更新迅云Cookie成功！", "", "");
      }
    }
    if ($prefs.valueForKey("xyHost") != headerHost) {
      var host = $prefs.setValueForKey(headerHost, "xyHost");
      if (!host) {
        $notify("更新迅云host失败！", "", "");
      } else {
        $notify("更新迅云host成功！", "", "");
      }
    }
    if ($prefs.valueForKey("xyAgent") != headerAgent) {
      var agent = $prefs.setValueForKey(headerAgent, "xyAgent");
      if (!agent) {
        $notify("更新迅云agent失败！", "", "");
      } else {
        $notify("更新迅云agent成功！", "", "");
      }
    }
  } else {
    let cookie = $prefs.setValueForKey(headerCookie, "xyCookie");
    if (!cookie) {
      $notify("首次写入迅云Cookie失败！", "", "");
    } else {
      $notify("首次写入迅云Cookie成功！", "", "");
    }
  }
}
$done({});
