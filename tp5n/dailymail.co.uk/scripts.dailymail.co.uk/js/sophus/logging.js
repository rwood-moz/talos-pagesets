/* Sophus3 logging request. http://www.sophus3.com
 * Copyright (c) Sophus Ltd 2000-2007. All rights reserved. Patent Pending.
 * Change the value of tc_logging_active to switch off logging on the site.
  
  20071128 - tc_loc_path changed - BKo
  20071217 - script activated - BKo
*/

tc_logging_active = true;

if (typeof tc_logging_active == 'undefined') tc_logging_active = false;

tc_site_id = 5;

// required configuration parameters
tc_server_url = "dailymail.sophus3.com";

// Change to match directory location of logging-code.js file from root (start with /) or relativly
tc_log_path = "httpdisabled://scripts.dailymail.co.uk/js/sophus/";

void("<scr"+"ipt language='JavaScript' type='text/javascript' src='"+tc_log_path+"/logging-code.js'></scr"+"ipt>");
