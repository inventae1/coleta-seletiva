<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Action Controller: Exception caught</title>
  <style>
    body {
      background-color: #FAFAFA;
      color: #333;
      margin: 0px;
    }

    body, p, ol, ul, td {
      font-family: helvetica, verdana, arial, sans-serif;
      font-size:   13px;
      line-height: 18px;
    }

    pre {
      font-size: 11px;
      white-space: pre-wrap;
    }

    pre.box {
      border: 1px solid #EEE;
      padding: 10px;
      margin: 0px;
      width: 958px;
    }

    header {
      color: #F0F0F0;
      background: #C52F24;
      padding: 0.5em 1.5em;
    }

    h1 {
      margin: 0.2em 0;
      line-height: 1.1em;
      font-size: 2em;
    }

    h2 {
      color: #C52F24;
      line-height: 25px;
    }

    .details {
      border: 1px solid #D0D0D0;
      border-radius: 4px;
      margin: 1em 0px;
      display: block;
      width: 978px;
    }

    .summary {
      padding: 8px 15px;
      border-bottom: 1px solid #D0D0D0;
      display: block;
    }

    .details pre {
      margin: 5px;
      border: none;
    }

    #container {
      box-sizing: border-box;
      width: 100%;
      padding: 0 1.5em;
    }

    .source * {
      margin: 0px;
      padding: 0px;
    }

    .source {
      border: 1px solid #D9D9D9;
      background: #ECECEC;
      width: 978px;
    }

    .source pre {
      padding: 10px 0px;
      border: none;
    }

    .source .data {
      font-size: 80%;
      overflow: auto;
      background-color: #FFF;
    }

    .info {
      padding: 0.5em;
    }

    .source .data .line_numbers {
      background-color: #ECECEC;
      color: #AAA;
      padding: 1em .5em;
      border-right: 1px solid #DDD;
      text-align: right;
    }

    .line {
      padding-left: 10px;
    }

    .line:hover {
      background-color: #F6F6F6;
    }

    .line.active {
      background-color: #FFCCCC;
    }

    a { color: #980905; }
    a:visited { color: #666; }
    a:hover { color: #C52F24; }

    
  </style>

  <script>
    var toggle = function(id) {
      var s = document.getElementById(id).style;
      s.display = s.display == 'none' ? 'block' : 'none';
      return false;
    }
    var show = function(id) {
      document.getElementById(id).style.display = 'block';
    }
    var hide = function(id) {
      document.getElementById(id).style.display = 'none';
    }
    var toggleTrace = function() {
      return toggle('blame_trace');
    }
    var toggleSessionDump = function() {
      return toggle('session_dump');
    }
    var toggleEnvDump = function() {
      return toggle('env_dump');
    }
  </script>
</head>
<body>

<header>
  <h1>
    ActiveRecord::RecordNotFound
      in CardsController#show
  </h1>
</header>

<div id="container">
  <h2>Couldn&#39;t find Card with id=map</h2>

  <div class="source">
<div class="info">
  Extracted source (around line <strong>#26</strong>):
</div>
<div class="data">
  <table cellpadding="0" cellspacing="0" class="lines">
      <tr>
        <td>
          <pre class="line_numbers">
<span>24</span>
<span>25</span>
<span>26</span>
<span>27</span>
<span>28</span>
<span>29</span>
          </pre>
        </td>
<td width="100%">
<pre>
<div class="line">
</div><div class="line">  def show
</div><div class="line active">    @card = Card.find( params[:id] )
</div><div class="line">    respond_with( @card )
</div><div class="line">  end
</div><div class="line">
</div>
</pre>
</td>
    </tr>
  </table>
</div>
</div>

  
<p><code>Rails.root: /Users/fabiomartins/Projects/coleta-seletiva</code></p>

<div id="traces">
    <a href="#" onclick="hide(&#39;Framework-Trace&#39;);hide(&#39;Full-Trace&#39;);show(&#39;Application-Trace&#39;);; return false;">Application Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace&#39;);hide(&#39;Full-Trace&#39;);show(&#39;Framework-Trace&#39;);; return false;">Framework Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace&#39;);hide(&#39;Framework-Trace&#39;);show(&#39;Full-Trace&#39;);; return false;">Full Trace</a> 

    <div id="Application-Trace" style="display: block;">
      <pre><code>app/controllers/cards_controller.rb:26:in `show&#39;</code></pre>
    </div>
    <div id="Framework-Trace" style="display: none;">
      <pre><code>activerecord (4.0.0) lib/active_record/relation/finder_methods.rb:198:in `raise_record_not_found_exception!&#39;
activerecord (4.0.0) lib/active_record/relation/finder_methods.rb:284:in `find_one&#39;
activerecord (4.0.0) lib/active_record/relation/finder_methods.rb:268:in `find_with_ids&#39;
activerecord (4.0.0) lib/active_record/relation/finder_methods.rb:35:in `find&#39;
activerecord-deprecated_finders (1.0.3) lib/active_record/deprecated_finders/relation.rb:122:in `find&#39;
activerecord (4.0.0) lib/active_record/querying.rb:3:in `find&#39;
actionpack (4.0.0) lib/action_controller/metal/implicit_render.rb:4:in `send_action&#39;
actionpack (4.0.0) lib/abstract_controller/base.rb:189:in `process_action&#39;
actionpack (4.0.0) lib/action_controller/metal/rendering.rb:10:in `process_action&#39;
actionpack (4.0.0) lib/abstract_controller/callbacks.rb:18:in `block in process_action&#39;
activesupport (4.0.0) lib/active_support/callbacks.rb:423:in `_run__1376424059379692382__process_action__callbacks&#39;
activesupport (4.0.0) lib/active_support/callbacks.rb:80:in `run_callbacks&#39;
actionpack (4.0.0) lib/abstract_controller/callbacks.rb:17:in `process_action&#39;
actionpack (4.0.0) lib/action_controller/metal/rescue.rb:29:in `process_action&#39;
actionpack (4.0.0) lib/action_controller/metal/instrumentation.rb:31:in `block in process_action&#39;
activesupport (4.0.0) lib/active_support/notifications.rb:159:in `block in instrument&#39;
activesupport (4.0.0) lib/active_support/notifications/instrumenter.rb:20:in `instrument&#39;
activesupport (4.0.0) lib/active_support/notifications.rb:159:in `instrument&#39;
actionpack (4.0.0) lib/action_controller/metal/instrumentation.rb:30:in `process_action&#39;
actionpack (4.0.0) lib/action_controller/metal/params_wrapper.rb:245:in `process_action&#39;
activerecord (4.0.0) lib/active_record/railties/controller_runtime.rb:18:in `process_action&#39;
actionpack (4.0.0) lib/abstract_controller/base.rb:136:in `process&#39;
actionpack (4.0.0) lib/abstract_controller/rendering.rb:44:in `process&#39;
actionpack (4.0.0) lib/action_controller/metal.rb:195:in `dispatch&#39;
actionpack (4.0.0) lib/action_controller/metal/rack_delegation.rb:13:in `dispatch&#39;
actionpack (4.0.0) lib/action_controller/metal.rb:231:in `block in action&#39;
actionpack (4.0.0) lib/action_dispatch/routing/route_set.rb:80:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/routing/route_set.rb:80:in `dispatch&#39;
actionpack (4.0.0) lib/action_dispatch/routing/route_set.rb:48:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/journey/router.rb:71:in `block in call&#39;
actionpack (4.0.0) lib/action_dispatch/journey/router.rb:59:in `each&#39;
actionpack (4.0.0) lib/action_dispatch/journey/router.rb:59:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/routing/route_set.rb:655:in `call&#39;
warden (1.2.3) lib/warden/manager.rb:35:in `block in call&#39;
warden (1.2.3) lib/warden/manager.rb:34:in `catch&#39;
warden (1.2.3) lib/warden/manager.rb:34:in `call&#39;
rack (1.5.2) lib/rack/etag.rb:23:in `call&#39;
rack (1.5.2) lib/rack/conditionalget.rb:25:in `call&#39;
rack (1.5.2) lib/rack/head.rb:11:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/params_parser.rb:27:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/flash.rb:241:in `call&#39;
rack (1.5.2) lib/rack/session/abstract/id.rb:225:in `context&#39;
rack (1.5.2) lib/rack/session/abstract/id.rb:220:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/cookies.rb:486:in `call&#39;
activerecord (4.0.0) lib/active_record/query_cache.rb:36:in `call&#39;
activerecord (4.0.0) lib/active_record/connection_adapters/abstract/connection_pool.rb:626:in `call&#39;
activerecord (4.0.0) lib/active_record/migration.rb:369:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/callbacks.rb:29:in `block in call&#39;
activesupport (4.0.0) lib/active_support/callbacks.rb:373:in `_run__1706070351438694343__call__callbacks&#39;
activesupport (4.0.0) lib/active_support/callbacks.rb:80:in `run_callbacks&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/callbacks.rb:27:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/reloader.rb:64:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/remote_ip.rb:76:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/debug_exceptions.rb:17:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/show_exceptions.rb:30:in `call&#39;
railties (4.0.0) lib/rails/rack/logger.rb:38:in `call_app&#39;
railties (4.0.0) lib/rails/rack/logger.rb:21:in `block in call&#39;
activesupport (4.0.0) lib/active_support/tagged_logging.rb:67:in `block in tagged&#39;
activesupport (4.0.0) lib/active_support/tagged_logging.rb:25:in `tagged&#39;
activesupport (4.0.0) lib/active_support/tagged_logging.rb:67:in `tagged&#39;
railties (4.0.0) lib/rails/rack/logger.rb:21:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/request_id.rb:21:in `call&#39;
rack (1.5.2) lib/rack/methodoverride.rb:21:in `call&#39;
rack (1.5.2) lib/rack/runtime.rb:17:in `call&#39;
activesupport (4.0.0) lib/active_support/cache/strategy/local_cache.rb:83:in `call&#39;
rack (1.5.2) lib/rack/lock.rb:17:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/static.rb:64:in `call&#39;
railties (4.0.0) lib/rails/engine.rb:511:in `call&#39;
railties (4.0.0) lib/rails/application.rb:97:in `call&#39;
rack (1.5.2) lib/rack/lock.rb:17:in `call&#39;
rack (1.5.2) lib/rack/content_length.rb:14:in `call&#39;
rack (1.5.2) lib/rack/handler/webrick.rb:60:in `service&#39;
/Users/fabiomartins/.rbenv/versions/2.0.0-p247/lib/ruby/2.0.0/webrick/httpserver.rb:138:in `service&#39;
/Users/fabiomartins/.rbenv/versions/2.0.0-p247/lib/ruby/2.0.0/webrick/httpserver.rb:94:in `run&#39;
/Users/fabiomartins/.rbenv/versions/2.0.0-p247/lib/ruby/2.0.0/webrick/server.rb:295:in `block in start_thread&#39;</code></pre>
    </div>
    <div id="Full-Trace" style="display: none;">
      <pre><code>activerecord (4.0.0) lib/active_record/relation/finder_methods.rb:198:in `raise_record_not_found_exception!&#39;
activerecord (4.0.0) lib/active_record/relation/finder_methods.rb:284:in `find_one&#39;
activerecord (4.0.0) lib/active_record/relation/finder_methods.rb:268:in `find_with_ids&#39;
activerecord (4.0.0) lib/active_record/relation/finder_methods.rb:35:in `find&#39;
activerecord-deprecated_finders (1.0.3) lib/active_record/deprecated_finders/relation.rb:122:in `find&#39;
activerecord (4.0.0) lib/active_record/querying.rb:3:in `find&#39;
app/controllers/cards_controller.rb:26:in `show&#39;
actionpack (4.0.0) lib/action_controller/metal/implicit_render.rb:4:in `send_action&#39;
actionpack (4.0.0) lib/abstract_controller/base.rb:189:in `process_action&#39;
actionpack (4.0.0) lib/action_controller/metal/rendering.rb:10:in `process_action&#39;
actionpack (4.0.0) lib/abstract_controller/callbacks.rb:18:in `block in process_action&#39;
activesupport (4.0.0) lib/active_support/callbacks.rb:423:in `_run__1376424059379692382__process_action__callbacks&#39;
activesupport (4.0.0) lib/active_support/callbacks.rb:80:in `run_callbacks&#39;
actionpack (4.0.0) lib/abstract_controller/callbacks.rb:17:in `process_action&#39;
actionpack (4.0.0) lib/action_controller/metal/rescue.rb:29:in `process_action&#39;
actionpack (4.0.0) lib/action_controller/metal/instrumentation.rb:31:in `block in process_action&#39;
activesupport (4.0.0) lib/active_support/notifications.rb:159:in `block in instrument&#39;
activesupport (4.0.0) lib/active_support/notifications/instrumenter.rb:20:in `instrument&#39;
activesupport (4.0.0) lib/active_support/notifications.rb:159:in `instrument&#39;
actionpack (4.0.0) lib/action_controller/metal/instrumentation.rb:30:in `process_action&#39;
actionpack (4.0.0) lib/action_controller/metal/params_wrapper.rb:245:in `process_action&#39;
activerecord (4.0.0) lib/active_record/railties/controller_runtime.rb:18:in `process_action&#39;
actionpack (4.0.0) lib/abstract_controller/base.rb:136:in `process&#39;
actionpack (4.0.0) lib/abstract_controller/rendering.rb:44:in `process&#39;
actionpack (4.0.0) lib/action_controller/metal.rb:195:in `dispatch&#39;
actionpack (4.0.0) lib/action_controller/metal/rack_delegation.rb:13:in `dispatch&#39;
actionpack (4.0.0) lib/action_controller/metal.rb:231:in `block in action&#39;
actionpack (4.0.0) lib/action_dispatch/routing/route_set.rb:80:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/routing/route_set.rb:80:in `dispatch&#39;
actionpack (4.0.0) lib/action_dispatch/routing/route_set.rb:48:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/journey/router.rb:71:in `block in call&#39;
actionpack (4.0.0) lib/action_dispatch/journey/router.rb:59:in `each&#39;
actionpack (4.0.0) lib/action_dispatch/journey/router.rb:59:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/routing/route_set.rb:655:in `call&#39;
warden (1.2.3) lib/warden/manager.rb:35:in `block in call&#39;
warden (1.2.3) lib/warden/manager.rb:34:in `catch&#39;
warden (1.2.3) lib/warden/manager.rb:34:in `call&#39;
rack (1.5.2) lib/rack/etag.rb:23:in `call&#39;
rack (1.5.2) lib/rack/conditionalget.rb:25:in `call&#39;
rack (1.5.2) lib/rack/head.rb:11:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/params_parser.rb:27:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/flash.rb:241:in `call&#39;
rack (1.5.2) lib/rack/session/abstract/id.rb:225:in `context&#39;
rack (1.5.2) lib/rack/session/abstract/id.rb:220:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/cookies.rb:486:in `call&#39;
activerecord (4.0.0) lib/active_record/query_cache.rb:36:in `call&#39;
activerecord (4.0.0) lib/active_record/connection_adapters/abstract/connection_pool.rb:626:in `call&#39;
activerecord (4.0.0) lib/active_record/migration.rb:369:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/callbacks.rb:29:in `block in call&#39;
activesupport (4.0.0) lib/active_support/callbacks.rb:373:in `_run__1706070351438694343__call__callbacks&#39;
activesupport (4.0.0) lib/active_support/callbacks.rb:80:in `run_callbacks&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/callbacks.rb:27:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/reloader.rb:64:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/remote_ip.rb:76:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/debug_exceptions.rb:17:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/show_exceptions.rb:30:in `call&#39;
railties (4.0.0) lib/rails/rack/logger.rb:38:in `call_app&#39;
railties (4.0.0) lib/rails/rack/logger.rb:21:in `block in call&#39;
activesupport (4.0.0) lib/active_support/tagged_logging.rb:67:in `block in tagged&#39;
activesupport (4.0.0) lib/active_support/tagged_logging.rb:25:in `tagged&#39;
activesupport (4.0.0) lib/active_support/tagged_logging.rb:67:in `tagged&#39;
railties (4.0.0) lib/rails/rack/logger.rb:21:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/request_id.rb:21:in `call&#39;
rack (1.5.2) lib/rack/methodoverride.rb:21:in `call&#39;
rack (1.5.2) lib/rack/runtime.rb:17:in `call&#39;
activesupport (4.0.0) lib/active_support/cache/strategy/local_cache.rb:83:in `call&#39;
rack (1.5.2) lib/rack/lock.rb:17:in `call&#39;
actionpack (4.0.0) lib/action_dispatch/middleware/static.rb:64:in `call&#39;
railties (4.0.0) lib/rails/engine.rb:511:in `call&#39;
railties (4.0.0) lib/rails/application.rb:97:in `call&#39;
rack (1.5.2) lib/rack/lock.rb:17:in `call&#39;
rack (1.5.2) lib/rack/content_length.rb:14:in `call&#39;
rack (1.5.2) lib/rack/handler/webrick.rb:60:in `service&#39;
/Users/fabiomartins/.rbenv/versions/2.0.0-p247/lib/ruby/2.0.0/webrick/httpserver.rb:138:in `service&#39;
/Users/fabiomartins/.rbenv/versions/2.0.0-p247/lib/ruby/2.0.0/webrick/httpserver.rb:94:in `run&#39;
/Users/fabiomartins/.rbenv/versions/2.0.0-p247/lib/ruby/2.0.0/webrick/server.rb:295:in `block in start_thread&#39;</code></pre>
    </div>
</div>

  

<h2 style="margin-top: 30px">Request</h2>
<p><b>Parameters</b>:</p> <pre>{&quot;id&quot;=&gt;&quot;map&quot;,
 &quot;format&quot;=&gt;&quot;js&quot;}</pre>

<div class="details">
  <div class="summary"><a href="#" onclick="return toggleSessionDump()">Toggle session dump</a></div>
  <div id="session_dump" style="display:none"><pre>_csrf_token: &quot;3jMPdFj6ONSOqowK0AThHq4qW/GsM6qvZDY+GaRhzcs=&quot;
session_id: &quot;279eda46d5b3621143b7e181b43d3ea2&quot;
warden.user.user.key: [[1], &quot;$2a$10$vKHqvUHmm0OQg/APpVK/f.&quot;]</pre></div>
</div>

<div class="details">
  <div class="summary"><a href="#" onclick="return toggleEnvDump()">Toggle env dump</a></div>
  <div id="env_dump" style="display:none"><pre>GATEWAY_INTERFACE: &quot;CGI/1.1&quot;
HTTP_ACCEPT: &quot;*/*&quot;
HTTP_ACCEPT_ENCODING: &quot;gzip,deflate,sdch&quot;
HTTP_ACCEPT_LANGUAGE: &quot;en-US,en;q=0.8,es;q=0.6,pt;q=0.4&quot;
REMOTE_ADDR: &quot;127.0.0.1&quot;
REMOTE_HOST: &quot;127.0.0.1&quot;
SERVER_NAME: &quot;localhost&quot;
SERVER_PROTOCOL: &quot;HTTP/1.1&quot;</pre></div>
</div>

<h2 style="margin-top: 30px">Response</h2>
<p><b>Headers</b>:</p> <pre>None</pre>

</div>


</body>
</html>
