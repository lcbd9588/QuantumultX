/**
 * @supported 设备 ID
 */

let headerCookie = $request.headers["Cookie"];
let headereferer = "https://xunyun.us/user";
let obj = JSON.stringify($request.headers);
 $notify(obj, "", obj);
console.log(headereferer);
if (headerCookie && headereferer) {
  if ($prefs.valueForKey("xyCookie") != undefined) {
    if ($prefs.valueForKey("xyCookie") != headerCookie) {
      var cookie = $prefs.setValueForKey(headerCookie, "xyCookie");
      if (!cookie) {
        $notify("更新迅云Cookie失败！", "", "");
      } else {
        $notify("更新迅云Cookie成功！", "", "");
      }
    }
    if ($prefs.valueForKey("xyReferer") != headereferer) {
      var referer = $prefs.setValueForKey(headereferer, "xyReferer");
      if (!referer) {
        $notify("更新迅云referer失败！", "", "");
      } else {
        $notify("更新迅云referer成功！", "", "");
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
