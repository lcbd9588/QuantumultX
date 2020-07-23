/**
 * @supported 设备 ID
 */

let headerCookie = $request.headers["Cookie"];

if (headerCookie) {
  if ($prefs.valueForKey("xyCookie") != undefined) {
    if ($prefs.valueForKey("xyCookie") != headerCookie) {
      var cookie = $prefs.setValueForKey(headerCookie, "xyCookie");
      if (!cookie) {
        $notify("更新迅云Cookie失败！", "", "");
      } else {
        $notify("更新迅云Cookie成功！", "", "");
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