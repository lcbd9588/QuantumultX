/**
 * @supported 设备 ID
 */

let headerCookie = $request.headers["Cookie"];
let headereferer = $request.headers["Referer"];
if (headerCookie && headereferer) {
  if ($prefs.valueForKey("xyCookie") != undefined && $prefs.valueForKey("xyReferer") != undefined) {
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
    let referer = $prefs.setValueForKey(headereferer, "xyReferer");
    if (!cookie) {
      $notify("首次写入迅云Cookie失败！", "", "");
    } else {
      $notify("首次写入迅云Cookie成功！", "", "");
    }
    if (!referer) {
      $notify("首次写入迅云Referer失败！", "", "");
    } else {
      $notify("首次写入迅云Referer失败！", "", "");
    }
  }
}
$done({});
