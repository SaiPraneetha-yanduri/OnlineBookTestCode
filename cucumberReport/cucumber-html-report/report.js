$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/OnlineBookStore.feature");
formatter.feature({
  "line": 1,
  "name": "Smoke Testing",
  "description": "",
  "id": "smoke-testing",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "To validate the users in online book application",
  "description": "",
  "id": "smoke-testing;to-validate-the-users-in-online-book-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@displayUsersAPI"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "a user \"\u003cusertype\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "request for users",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "validate the status \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "smoke-testing;to-validate-the-users-in-online-book-application;",
  "rows": [
    {
      "cells": [
        "usertype",
        "status"
      ],
      "line": 23,
      "id": "smoke-testing;to-validate-the-users-in-online-book-application;;1"
    },
    {
      "cells": [
        "usertype",
        "200"
      ],
      "line": 24,
      "id": "smoke-testing;to-validate-the-users-in-online-book-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "set property",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "driver path",
  "keyword": "Given "
});
formatter.match({
  "location": "bookStoreSteps.driver_path()"
});
formatter.result({
  "duration": 341271216,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "To validate the users in online book application",
  "description": "",
  "id": "smoke-testing;to-validate-the-users-in-online-book-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@displayUsersAPI"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "a user \"usertype\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "request for users",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "validate the status \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "usertype",
      "offset": 8
    }
  ],
  "location": "bookStoreSteps.a_user(String)"
});
formatter.result({
  "duration": 4795277,
  "status": "passed"
});
formatter.match({
  "location": "bookStoreSteps.request_for_users()"
});
formatter.result({
  "duration": 21522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "bookStoreSteps.validate_the_status(String)"
});
formatter.result({
  "duration": 4202819094,
  "error_message": "java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:121)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:180)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:326)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:835)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2129)\r\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:494)\r\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:451)\r\n\tat io.restassured.internal.http.HTTPBuilder$request$2.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:149)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1532)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1213)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1022)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1290)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1213)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1022)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:149)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:141)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1732)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1213)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1022)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1738)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1213)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1022)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:810)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:170)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat apis.api.apisbookStore.apisMethod(apisbookStore.java:14)\r\n\tat stepDefination.bookStoreSteps.validate_the_status(bookStoreSteps.java:54)\r\n\tat ✽.Then validate the status \"200\"(src/main/java/features/OnlineBookStore.feature:20)\r\n",
  "status": "failed"
});
});