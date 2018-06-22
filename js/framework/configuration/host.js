loadSession();
var host = sessionObj.host;
if (!HAS_LOGIN) {
  host = "https://all2sys.com/lab/admin/api/";
}
