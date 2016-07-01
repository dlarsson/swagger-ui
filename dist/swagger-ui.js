/**
 * swagger-ui - Swagger UI is a dependency-free collection of HTML, JavaScript, and CSS assets that dynamically generate beautiful documentation from a Swagger-compliant API
 * @version v2.1.405
 * @link http://swagger.io
 * @license Apache-2.0
 */
(function(){this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["apikey_auth"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <span class=\"key_auth__value\">"
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"3":function(depth0,helpers,partials,data) {
  return "                <input placeholder=\"api_key\" class=\"auth_input input_apiKey_entry\" name=\"apiKey\" type=\"text\"/>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"key_input_container\">\n    <h3 class=\"auth__title\">Api key authorization</h3>\n    <div class=\"auth__description\">"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n    <div>\n        <div class=\"key_auth__field\">\n            <span class=\"key_auth__label\">name:</span>\n            <span class=\"key_auth__value\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n        </div>\n        <div class=\"key_auth__field\">\n            <span class=\"key_auth__label\">in:</span>\n            <span class=\"key_auth__value\">"
    + escapeExpression(((helper = (helper = helpers['in'] || (depth0 != null ? depth0['in'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"in","hash":{},"data":data}) : helper)))
    + "</span>\n        </div>\n        <div class=\"key_auth__field\">\n            <span class=\"key_auth__label\">value:</span>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isLogout : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n    </div>\n</div>\n";
},"useData":true});
this["Handlebars"]["templates"]["auth_button"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<a class='authorize__btn' href=\"#\">Authorize</a>\n";
  },"useData":true});
this["Handlebars"]["templates"]["auth_button_operation"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "        authorize__btn_operation_login\n";
  },"3":function(depth0,helpers,partials,data) {
  return "        authorize__btn_operation_logout\n";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "        <ul class=\"authorize-scopes\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.scopes : depth0), {"name":"each","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </ul>\n";
},"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <li class=\"authorize__scope\" title=\""
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.scope || (depth0 != null ? depth0.scope : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"scope","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"authorize__btn authorize__btn_operation\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isLogout : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.scopes : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"useData":true});
this["Handlebars"]["templates"]["auth_view"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "            <button type=\"button\" class=\"auth__button auth_submit__button\" data-sw-translate>Authorize</button>\n";
  },"3":function(depth0,helpers,partials,data) {
  return "            <button type=\"button\" class=\"auth__button auth_logout__button\" data-sw-translate>Logout</button>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"auth_container\">\n\n    <div class=\"auth_inner\"></div>\n    <div class=\"auth_submit\">\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.isLogout : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isAuthorized : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n\n</div>\n";
},"useData":true});
this["Handlebars"]["templates"]["basic_auth"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " - authorized";
  },"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <span class=\"basic_auth__value\">"
    + escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"5":function(depth0,helpers,partials,data) {
  return "                <input required placeholder=\"username\" class=\"basic_auth__username auth_input\" name=\"username\" type=\"text\"/>\n";
  },"7":function(depth0,helpers,partials,data) {
  return "            <div class=\"auth_label\">\n                <span class=\"basic_auth__label\" data-sw-translate>password:</span>\n                <input required placeholder=\"password\" class=\"basic_auth__password auth_input\" name=\"password\" type=\"password\"/></label>\n            </div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class='basic_auth_container'>\n    <h3 class=\"auth__title\">Basic authentication";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isLogout : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</h3>\n    <form class=\"basic_input_container\">\n        <div class=\"auth__description\">"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n        <div class=\"auth_label\">\n            <span class=\"basic_auth__label\" data-sw-translate>username:</span>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isLogout : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.isLogout : depth0), {"name":"unless","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </form>\n</div>\n";
},"useData":true});
this["Handlebars"]["templates"]["content_type"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.produces : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "	<option value=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\">"
    + escapeExpression(lambda(depth0, depth0))
    + "</option>\n";
},"4":function(depth0,helpers,partials,data) {
  return "  <option value=\"application/json\">application/json</option>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<label data-sw-translate for=\""
    + escapeExpression(((helper = (helper = helpers.contentTypeId || (depth0 != null ? depth0.contentTypeId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"contentTypeId","hash":{},"data":data}) : helper)))
    + "\">Response Content Type</label>\n<select name=\"contentType\" id=\""
    + escapeExpression(((helper = (helper = helpers.contentTypeId || (depth0 != null ? depth0.contentTypeId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"contentTypeId","hash":{},"data":data}) : helper)))
    + "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.produces : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</select>\n";
},"useData":true});
this["Handlebars"]["templates"]["main"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "  <div class=\"info_title\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.title : stack1), depth0))
    + "</div>\n  <div class=\"info_description markdown\">";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.description : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.externalDocs : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.termsOfServiceUrl : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.name : stack1), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.url : stack1), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.email : stack1), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.license : stack1), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "  <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.externalDocs : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>\n  <a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.externalDocs : depth0)) != null ? stack1.url : stack1), depth0))
    + "\" target=\"_blank\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.externalDocs : depth0)) != null ? stack1.url : stack1), depth0))
    + "</a>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"info_tos\"><a target=\"_blank\" href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.termsOfServiceUrl : stack1), depth0))
    + "\" data-sw-translate>Terms of service</a></div>";
},"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class='info_name' data-sw-translate>Created by "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.name : stack1), depth0))
    + "</div>";
},"8":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class='info_url' data-sw-translate>See more at <a href=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.url : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.url : stack1), depth0))
    + "</a></div>";
},"10":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class='info_email'><a target=\"_parent\" href=\"mailto:"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.contact : stack1)) != null ? stack1.email : stack1), depth0))
    + "?subject="
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" data-sw-translate>Contact the developer</a></div>";
},"12":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class='info_license'><a target=\"_blank\" href='"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.license : stack1)) != null ? stack1.url : stack1), depth0))
    + "'>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.license : stack1)) != null ? stack1.name : stack1), depth0))
    + "</a></div>";
},"14":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "  , <span style=\"font-variant: small-caps\" data-sw-translate>api version</span>: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.version : stack1), depth0))
    + "\n    ";
},"16":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <span style=\"float:right\"><a target=\"_blank\" href=\""
    + escapeExpression(((helper = (helper = helpers.validatorUrl || (depth0 != null ? depth0.validatorUrl : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"validatorUrl","hash":{},"data":data}) : helper)))
    + "/debug?url="
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\"><img id=\"validator\" src=\""
    + escapeExpression(((helper = (helper = helpers.validatorUrl || (depth0 != null ? depth0.validatorUrl : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"validatorUrl","hash":{},"data":data}) : helper)))
    + "?url="
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\"></a>\n    </span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class='info' id='api_info'>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.info : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n<div class='container' id='resources_container'>\n  <div class='authorize-wrapper'></div>\n\n  <ul id='resources'></ul>\n\n  <div class=\"footer\">\n    <h4 style=\"color: #999\">[ <span style=\"font-variant: small-caps\">base url</span>: "
    + escapeExpression(((helper = (helper = helpers.basePath || (depth0 != null ? depth0.basePath : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"basePath","hash":{},"data":data}) : helper)))
    + "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.version : stack1), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "]\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.validatorUrl : depth0), {"name":"if","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </h4>\n    </div>\n</div>\n";
},"useData":true});
this["Handlebars"]["templates"]["oauth2"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "            <li>\n                <input class=\"oauth-scope\" type=\"checkbox\" data-scope=\""
    + escapeExpression(((helper = (helper = helpers.scope || (depth0 != null ? depth0.scope : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"scope","hash":{},"data":data}) : helper)))
    + "\" oauthtype=\""
    + escapeExpression(((helper = (helper = helpers.OAuthSchemeKey || (depth0 != null ? depth0.OAuthSchemeKey : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"OAuthSchemeKey","hash":{},"data":data}) : helper)))
    + "\"/>\n                <label>"
    + escapeExpression(((helper = (helper = helpers.scope || (depth0 != null ? depth0.scope : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"scope","hash":{},"data":data}) : helper)))
    + "</label><br/>\n                <span class=\"api-scope-desc\">"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.OAuthSchemeKey : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </span>\n            </li>\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                        ("
    + escapeExpression(((helper = (helper = helpers.OAuthSchemeKey || (depth0 != null ? depth0.OAuthSchemeKey : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"OAuthSchemeKey","hash":{},"data":data}) : helper)))
    + ")\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div>\n    <h3 class=\"auth__title\">Select OAuth2.0 Scopes</h3>\n    <p>"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n    <p>Scopes are used to grant an application different levels of access to data on behalf of the end user. Each API may declare one or more scopes.\n        <a href=\"#\">Learn how to use</a>\n    </p>\n    <p><strong> "
    + escapeExpression(((helper = (helper = helpers.appName || (depth0 != null ? depth0.appName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"appName","hash":{},"data":data}) : helper)))
    + " </strong> API requires the following scopes. Select which ones you want to grant to Swagger UI.</p>\n    <p>Authorization URL: "
    + escapeExpression(((helper = (helper = helpers.authorizationUrl || (depth0 != null ? depth0.authorizationUrl : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"authorizationUrl","hash":{},"data":data}) : helper)))
    + "</p>\n    <p>flow: "
    + escapeExpression(((helper = (helper = helpers.flow || (depth0 != null ? depth0.flow : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"flow","hash":{},"data":data}) : helper)))
    + "</p>\n    <ul class=\"api-popup-scopes\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.scopes : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </ul>\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["operation"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "deprecated";
  },"3":function(depth0,helpers,partials,data) {
  return "            <h4><span data-sw-translate>Warning: Deprecated</span></h4>\n";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "        <h4><span data-sw-translate>Implementation Notes</span></h4>\n        <div class=\"markdown\">";
  stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"7":function(depth0,helpers,partials,data) {
  return "            <div class='authorize-wrapper authorize-wrapper_operation'></div>\n";
  },"9":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "          <div class=\"response-class\">\n            <h4><span data-sw-translate>Response Class</span> (<span data-sw-translate>Status</span> "
    + escapeExpression(((helper = (helper = helpers.successCode || (depth0 != null ? depth0.successCode : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"successCode","hash":{},"data":data}) : helper)))
    + ")</h4>\n              ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.successDescription : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            <p><span class=\"model-signature\" /></p>\n            <br/>\n            <div class=\"response-content-type\" />\n            </div>\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"markdown\">";
  stack1 = ((helper = (helper = helpers.successDescription || (depth0 != null ? depth0.successDescription : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"successDescription","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"12":function(depth0,helpers,partials,data) {
  var stack1, buffer = "          <h4 data-sw-translate>Headers</h4>\n          <table class=\"headers\">\n            <thead>\n              <tr>\n                <th style=\"width: 100px; max-width: 100px\" data-sw-translate>Header</th>\n                <th style=\"width: 310px; max-width: 310px\" data-sw-translate>Description</th>\n                <th style=\"width: 200px; max-width: 200px\" data-sw-translate>Type</th>\n                <th style=\"width: 320px; max-width: 320px\" data-sw-translate>Other</th>\n              </tr>\n            </thead>\n            <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.headers : depth0), {"name":"each","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </tbody>\n          </table>\n";
},"13":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "              <tr>\n                <td>"
    + escapeExpression(lambda((data && data.key), depth0))
    + "</td>\n                <td>"
    + escapeExpression(lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</td>\n                <td>"
    + escapeExpression(lambda((depth0 != null ? depth0.type : depth0), depth0))
    + "</td>\n                <td>"
    + escapeExpression(lambda((depth0 != null ? depth0.other : depth0), depth0))
    + "</td>\n              </tr>\n";
},"15":function(depth0,helpers,partials,data) {
  return "          <h4 data-sw-translate>Parameters</h4>\n          <table class='fullwidth parameters'>\n          <thead>\n            <tr>\n            <th style=\"width: 100px; max-width: 100px\" data-sw-translate>Parameter</th>\n            <th style=\"width: 310px; max-width: 310px\" data-sw-translate>Value</th>\n            <th style=\"width: 200px; max-width: 200px\" data-sw-translate>Description</th>\n            <th style=\"width: 100px; max-width: 100px\" data-sw-translate>Parameter Type</th>\n            <th style=\"width: 220px; max-width: 230px\" data-sw-translate>Data Type</th>\n            </tr>\n          </thead>\n          <tbody class=\"operation-params\">\n\n          </tbody>\n          </table>\n";
  },"17":function(depth0,helpers,partials,data) {
  return "          <div style='margin:0;padding:0;display:inline'></div>\n          <h4 data-sw-translate>Response Messages</h4>\n          <table class='fullwidth response-messages'>\n            <thead>\n            <tr>\n              <th data-sw-translate>HTTP Status Code</th>\n              <th data-sw-translate>Reason</th>\n              <th data-sw-translate>Response Model</th>\n              <th data-sw-translate>Headers</th>\n            </tr>\n            </thead>\n            <tbody class=\"operation-status\">\n            </tbody>\n          </table>\n";
  },"19":function(depth0,helpers,partials,data) {
  return "";
},"21":function(depth0,helpers,partials,data) {
  return "          <div class='sandbox_header'>\n            <input class='submit' type='submit' value='Try it out!' data-sw-translate/>\n            <a href='#' class='response_hider' style='display:none' data-sw-translate>Hide Response</a>\n            <span class='response_throbber' style='display:none'></span>\n          </div>\n";
  },"23":function(depth0,helpers,partials,data) {
  return "          <h4 data-sw-translate>Request Headers</h4>\n          <div class='block request_headers'></div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "  <ul class='operations' >\n    <li class='"
    + escapeExpression(((helper = (helper = helpers.method || (depth0 != null ? depth0.method : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"method","hash":{},"data":data}) : helper)))
    + " operation' id='"
    + escapeExpression(((helper = (helper = helpers.parentId || (depth0 != null ? depth0.parentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"parentId","hash":{},"data":data}) : helper)))
    + "_"
    + escapeExpression(((helper = (helper = helpers.nickname || (depth0 != null ? depth0.nickname : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nickname","hash":{},"data":data}) : helper)))
    + "'>\n      <div class='heading'>\n        <h3>\n          <span class='http_method'>\n          <a href='#!/"
    + escapeExpression(((helper = (helper = helpers.encodedParentId || (depth0 != null ? depth0.encodedParentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"encodedParentId","hash":{},"data":data}) : helper)))
    + "/"
    + escapeExpression(((helper = (helper = helpers.nickname || (depth0 != null ? depth0.nickname : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nickname","hash":{},"data":data}) : helper)))
    + "' class=\"toggleOperation\">"
    + escapeExpression(((helper = (helper = helpers.method || (depth0 != null ? depth0.method : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"method","hash":{},"data":data}) : helper)))
    + "</a>\n          </span>\n          <span class='path'>\n          <a href='#!/"
    + escapeExpression(((helper = (helper = helpers.encodedParentId || (depth0 != null ? depth0.encodedParentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"encodedParentId","hash":{},"data":data}) : helper)))
    + "/"
    + escapeExpression(((helper = (helper = helpers.nickname || (depth0 != null ? depth0.nickname : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nickname","hash":{},"data":data}) : helper)))
    + "' class=\"toggleOperation ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.deprecated : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">"
    + escapeExpression(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"path","hash":{},"data":data}) : helper)))
    + "</a>\n          </span>\n        </h3>\n        <ul class='options'>\n          <li>\n          <a href='#!/"
    + escapeExpression(((helper = (helper = helpers.encodedParentId || (depth0 != null ? depth0.encodedParentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"encodedParentId","hash":{},"data":data}) : helper)))
    + "/"
    + escapeExpression(((helper = (helper = helpers.nickname || (depth0 != null ? depth0.nickname : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nickname","hash":{},"data":data}) : helper)))
    + "' class=\"toggleOperation\">";
  stack1 = ((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"summary","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</a>\n          </li>\n        </ul>\n      </div>\n      <div class='content' id='"
    + escapeExpression(((helper = (helper = helpers.parentId || (depth0 != null ? depth0.parentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"parentId","hash":{},"data":data}) : helper)))
    + "_"
    + escapeExpression(((helper = (helper = helpers.nickname || (depth0 != null ? depth0.nickname : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nickname","hash":{},"data":data}) : helper)))
    + "_content' style='display:none'>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.deprecated : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.description : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.security : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.type : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.headers : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n        <form accept-charset='UTF-8' class='sandbox'>\n          <div style='margin:0;padding:0;display:inline'></div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.parameters : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.responseMessages : depth0), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isReadOnly : depth0), {"name":"if","hash":{},"fn":this.program(19, data),"inverse":this.program(21, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </form>\n        <div class='response' style='display:none'>\n          <h4 class='curl'>Curl</h4>\n          <div class='block curl'></div>\n          <h4 data-sw-translate>Request URL</h4>\n          <div class='block request_url'></div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showRequestHeaders : depth0), {"name":"if","hash":{},"fn":this.program(23, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "          <h4 data-sw-translate>Response Body</h4>\n          <div class='block response_body'></div>\n          <h4 data-sw-translate>Response Code</h4>\n          <div class='block response_code'></div>\n          <h4 data-sw-translate>Response Headers</h4>\n          <div class='block response_headers'></div>\n        </div>\n      </div>\n    </li>\n  </ul>\n";
},"useData":true});
this["Handlebars"]["templates"]["param"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isFile : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "			<input type=\"file\" name='"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "' id='"
    + escapeExpression(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"valueId","hash":{},"data":data}) : helper)))
    + "'/>\n			<div class=\"parameter-content-type\" />\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['default'] : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<div class=\"editor_holder\"></div>\n				<textarea class='body-textarea' name='"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "' id='"
    + escapeExpression(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"valueId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(((helper = (helper = helpers['default'] || (depth0 != null ? depth0['default'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"default","hash":{},"data":data}) : helper)))
    + "</textarea>\n        <br />\n        <div class=\"parameter-content-type\" />\n";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<textarea class='body-textarea' name='"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "' id='"
    + escapeExpression(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"valueId","hash":{},"data":data}) : helper)))
    + "'></textarea>\n				<div class=\"editor_holder\"></div>\n				<br />\n				<div class=\"parameter-content-type\" />\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isFile : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.renderTextParam || (depth0 && depth0.renderTextParam) || helperMissing).call(depth0, depth0, {"name":"renderTextParam","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"11":function(depth0,helpers,partials,data) {
  return "";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<td class='code'><label for='"
    + escapeExpression(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"valueId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</label></td>\n<td>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isBody : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n</td>\n<td class=\"markdown\">";
  stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</td>\n<td>";
  stack1 = ((helper = (helper = helpers.paramType || (depth0 != null ? depth0.paramType : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"paramType","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\n<td>\n	<span class=\"model-signature\"></span>\n</td>\n";
},"useData":true});
this["Handlebars"]["templates"]["param_list"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " required";
  },"3":function(depth0,helpers,partials,data) {
  return " multiple=\"multiple\"";
  },"5":function(depth0,helpers,partials,data) {
  return " required ";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = "      <option ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.hasDefault : depth0), {"name":"unless","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " value=''></option>\n";
},"8":function(depth0,helpers,partials,data) {
  return "  selected=\"\" ";
  },"10":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n      <option ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isDefault : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "  value='"
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "'> "
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isDefault : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </option>\n\n";
},"11":function(depth0,helpers,partials,data) {
  return " selected=\"\"  ";
  },"13":function(depth0,helpers,partials,data) {
  return " (default) ";
  },"15":function(depth0,helpers,partials,data) {
  return "<strong>";
  },"17":function(depth0,helpers,partials,data) {
  return "</strong>";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<td class='code";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.required : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "'><label for='"
    + escapeExpression(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"valueId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</label></td>\n<td>\n  <select ";
  stack1 = ((helpers.isArray || (depth0 && depth0.isArray) || helperMissing).call(depth0, depth0, {"name":"isArray","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += " class=\"parameter ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.required : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + escapeExpression(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"valueId","hash":{},"data":data}) : helper)))
    + "\">\n\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.required : depth0), {"name":"unless","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.allowableValues : depth0)) != null ? stack1.descriptiveValues : stack1), {"name":"each","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  </select>\n</td>\n<td class=\"markdown\">";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.required : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.required : depth0), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</td>\n<td>";
  stack1 = ((helper = (helper = helpers.paramType || (depth0 != null ? depth0.paramType : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"paramType","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\n<td><span class=\"model-signature\"></span></td>\n";
},"useData":true});
this["Handlebars"]["templates"]["param_readonly"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <textarea class='body-textarea' readonly='readonly' name='"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "' id='"
    + escapeExpression(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"valueId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(((helper = (helper = helpers['default'] || (depth0 != null ? depth0['default'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"default","hash":{},"data":data}) : helper)))
    + "</textarea>\n        <div class=\"parameter-content-type\" />\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['default'] : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            "
    + escapeExpression(((helper = (helper = helpers['default'] || (depth0 != null ? depth0['default'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"default","hash":{},"data":data}) : helper)))
    + "\n";
},"6":function(depth0,helpers,partials,data) {
  return "            (empty)\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<td class='code'><label for='"
    + escapeExpression(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"valueId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</label></td>\n<td>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isBody : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</td>\n<td class=\"markdown\">";
  stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</td>\n<td>";
  stack1 = ((helper = (helper = helpers.paramType || (depth0 != null ? depth0.paramType : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"paramType","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\n<td><span class=\"model-signature\"></span></td>\n";
},"useData":true});
this["Handlebars"]["templates"]["param_readonly_required"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <textarea class='body-textarea' readonly='readonly' placeholder='(required)' name='"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "' id='"
    + escapeExpression(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"valueId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(((helper = (helper = helpers['default'] || (depth0 != null ? depth0['default'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"default","hash":{},"data":data}) : helper)))
    + "</textarea>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['default'] : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            "
    + escapeExpression(((helper = (helper = helpers['default'] || (depth0 != null ? depth0['default'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"default","hash":{},"data":data}) : helper)))
    + "\n";
},"6":function(depth0,helpers,partials,data) {
  return "            (empty)\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<td class='code required'><label for='"
    + escapeExpression(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"valueId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</label></td>\n<td>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isBody : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</td>\n<td class=\"markdown\">";
  stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</td>\n<td>";
  stack1 = ((helper = (helper = helpers.paramType || (depth0 != null ? depth0.paramType : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"paramType","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\n<td><span class=\"model-signature\"></span></td>\n";
},"useData":true});
this["Handlebars"]["templates"]["param_required"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isFile : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "			<input type=\"file\" name='"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "' id='"
    + escapeExpression(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"valueId","hash":{},"data":data}) : helper)))
    + "'/>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0['default'] : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<div class=\"editor_holder\"></div>\n				<textarea class='body-textarea required' placeholder='(required)' name='"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "' id=\""
    + escapeExpression(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"valueId","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers['default'] || (depth0 != null ? depth0['default'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"default","hash":{},"data":data}) : helper)))
    + "</textarea>\n        <br />\n        <div class=\"parameter-content-type\" />\n";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "				<textarea class='body-textarea required' placeholder='(required)' name='"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "' id='"
    + escapeExpression(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"valueId","hash":{},"data":data}) : helper)))
    + "'></textarea>\n				<div class=\"editor_holder\"></div>\n				<br />\n				<div class=\"parameter-content-type\" />\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isFile : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.program(12, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "			<input class='parameter' class='required' type='file' name='"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "' id='"
    + escapeExpression(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"valueId","hash":{},"data":data}) : helper)))
    + "'/>\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.renderTextParam || (depth0 && depth0.renderTextParam) || helperMissing).call(depth0, depth0, {"name":"renderTextParam","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"13":function(depth0,helpers,partials,data) {
  return "";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<td class='code required'><label for='"
    + escapeExpression(((helper = (helper = helpers.valueId || (depth0 != null ? depth0.valueId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"valueId","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</label></td>\n<td>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isBody : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</td>\n<td>\n	<strong><span class=\"markdown\">";
  stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</span></strong>\n</td>\n<td>";
  stack1 = ((helper = (helper = helpers.paramType || (depth0 != null ? depth0.paramType : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"paramType","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\n<td><span class=\"model-signature\"></span></td>\n";
},"useData":true});
this["Handlebars"]["templates"]["parameter_content_type"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.consumes : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "  <option value=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\">"
    + escapeExpression(lambda(depth0, depth0))
    + "</option>\n";
},"4":function(depth0,helpers,partials,data) {
  return "  <option value=\"application/json\">application/json</option>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<label for=\""
    + escapeExpression(((helper = (helper = helpers.parameterContentTypeId || (depth0 != null ? depth0.parameterContentTypeId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"parameterContentTypeId","hash":{},"data":data}) : helper)))
    + "\" data-sw-translate>Parameter content type:</label>\n<select name=\"parameterContentType\" id=\""
    + escapeExpression(((helper = (helper = helpers.parameterContentTypeId || (depth0 != null ? depth0.parameterContentTypeId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"parameterContentTypeId","hash":{},"data":data}) : helper)))
    + "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.consumes : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</select>\n";
},"useData":true});
this["Handlebars"]["templates"]["popup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"api-popup-dialog-wrapper\">\n    <div class=\"api-popup-title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"api-popup-content\"></div>\n    <p class=\"error-msg\"></p>\n    <div class=\"api-popup-actions\">\n        <button class=\"api-popup-cancel api-button gray\" type=\"button\">Cancel</button>\n    </div>\n</div>\n<div class=\"api-popup-dialog-shadow\"></div>";
},"useData":true});
this["Handlebars"]["templates"]["resource"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " : ";
  },"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <li>\n      <a href='"
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "' data-sw-translate>Raw</a>\n    </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing, buffer = "<div class='heading'>\n  <h2>\n    <a href='#!/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "' class=\"toggleEndpointList\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a> ";
  stack1 = ((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : helperMissing),(options={"name":"summary","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.summary) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"summary","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  </h2>\n  <ul class='options'>\n    <li>\n      <a href='#!/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "' id='endpointListTogger_"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "' class=\"toggleEndpointList\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-sw-translate>Show/Hide</a>\n    </li>\n    <li>\n      <a href='#' class=\"collapseResource\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-sw-translate>\n        List Operations\n      </a>\n    </li>\n    <li>\n      <a href='#' class=\"expandResource\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-sw-translate>\n        Expand Operations\n      </a>\n    </li>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.url : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </ul>\n</div>\n<ul class='endpoints' id='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "_endpoint_list' style='display:none'>\n\n</ul>\n";
},"useData":true});
this["Handlebars"]["templates"]["response_content_type"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.produces : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "  <option value=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\">"
    + escapeExpression(lambda(depth0, depth0))
    + "</option>\n";
},"4":function(depth0,helpers,partials,data) {
  return "  <option value=\"application/json\">application/json</option>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<label data-sw-translate for=\""
    + escapeExpression(((helper = (helper = helpers.responseContentTypeId || (depth0 != null ? depth0.responseContentTypeId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"responseContentTypeId","hash":{},"data":data}) : helper)))
    + "\">Response Content Type</label>\n<select name=\"responseContentType\" id=\""
    + escapeExpression(((helper = (helper = helpers.responseContentTypeId || (depth0 != null ? depth0.responseContentTypeId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"responseContentTypeId","hash":{},"data":data}) : helper)))
    + "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.produces : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</select>\n";
},"useData":true});
this["Handlebars"]["templates"]["signature"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "\n<div>\n<ul class=\"signature-nav\">\n  <li><a class=\"description-link\" href=\"#\" data-sw-translate>Model</a></li>\n  <li><a class=\"snippet-link\" href=\"#\" data-sw-translate>Example Value</a></li>\n</ul>\n<div>\n\n<div class=\"signature-container\">\n  <div class=\"description\">\n    ";
  stack1 = ((helper = (helper = helpers.signature || (depth0 != null ? depth0.signature : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"signature","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  </div>\n\n  <div class=\"snippet\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.sampleJSON : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.sampleXML : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n</div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "      <div class=\"snippet_json\">\n        <pre><code>"
    + escapeExpression(((helper = (helper = helpers.sampleJSON || (depth0 != null ? depth0.sampleJSON : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sampleJSON","hash":{},"data":data}) : helper)))
    + "</code></pre>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isParam : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n      </div>\n";
},"3":function(depth0,helpers,partials,data) {
  return "<small class=\"notice\" data-sw-translate></small>";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "    <div class=\"snippet_xml\">\n      <pre><code>"
    + escapeExpression(((helper = (helper = helpers.sampleXML || (depth0 != null ? depth0.sampleXML : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sampleXML","hash":{},"data":data}) : helper)))
    + "</code></pre>\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isParam : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n    </div>\n";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    "
    + escapeExpression(((helper = (helper = helpers.signature || (depth0 != null ? depth0.signature : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"signature","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing).call(depth0, (depth0 != null ? depth0.sampleJSON : depth0), "||", (depth0 != null ? depth0.sampleXML : depth0), {"name":"ifCond","hash":{},"fn":this.program(1, data),"inverse":this.program(7, data),"data":data}));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
this["Handlebars"]["templates"]["status_code"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "      <tr>\n        <td>"
    + escapeExpression(lambda((data && data.key), depth0))
    + "</td>\n        <td>"
    + escapeExpression(lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</td>\n        <td>"
    + escapeExpression(lambda((depth0 != null ? depth0.type : depth0), depth0))
    + "</td>\n      </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<td width='15%' class='code'>"
    + escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"code","hash":{},"data":data}) : helper)))
    + "</td>\n<td class=\"markdown\">";
  stack1 = ((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</td>\n<td width='50%'><span class=\"model-signature\" /></td>\n<td class=\"headers\">\n  <table>\n    <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.headers : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </tbody>\n  </table>\n</td>";
},"useData":true});
 /*global JSONEditor*/
'use strict';

window.SwaggerUi = Backbone.Router.extend({

  dom_id: 'swagger_ui',

  // Attributes
  options: null,
  api: null,
  headerView: null,
  mainView: null,

  // SwaggerUi accepts all the same options as SwaggerApi
  initialize: function(options) {
    options = options || {};

    if (options.defaultModelRendering !== 'model') {
      options.defaultModelRendering = 'schema';
    }

    if (!options.highlightSizeThreshold) {
      options.highlightSizeThreshold = 100000;
    }

    // Allow dom_id to be overridden
    if (options.dom_id) {
      this.dom_id = options.dom_id;
      delete options.dom_id;
    }

    if (!options.supportedSubmitMethods){
      options.supportedSubmitMethods = [
        'get',
        'put',
        'post',
        'delete',
        'head',
        'options',
        'patch'
      ];
    }

    if (typeof options.oauth2RedirectUrl === 'string') {
      window.oAuthRedirectUrl = options.redirectUrl;
    }

    // Create an empty div which contains the dom_id
    if (! $('#' + this.dom_id).length){
      $('body').append('<div id="' + this.dom_id + '"></div>') ;
    }

    this.options = options;

    // set marked options
    marked.setOptions({gfm: true});

    // Set the callbacks
    var that = this;
    this.options.success = function() { return that.render(); };
    this.options.progress = function(d) { return that.showMessage(d); };
    this.options.failure = function(d) { return that.onLoadFailure(d); };

    // Create view to handle the header inputs
    this.headerView = new SwaggerUi.Views.HeaderView({el: $('#header')});

    // Event handler for when the baseUrl/apiKey is entered by user
    this.headerView.on('update-swagger-ui', function(data) {
      return that.updateSwaggerUi(data);
    });

    // JSon Editor custom theming
     JSONEditor.defaults.iconlibs.swagger = JSONEditor.AbstractIconLib.extend({
      mapping: {
        collapse: 'collapse',
        expand: 'expand'
        },
      icon_prefix: 'swagger-'
      });

  },

  // Set an option after initializing
  setOption: function(option, value) {
    this.options[option] = value;
  },

  // Get the value of a previously set option
  getOption: function(option) {
    return this.options[option];
  },

  // Event handler for when url/key is received from user
  updateSwaggerUi: function(data){
    this.options.url = data.url;
    this.load();
  },

  // Create an api and render
  load: function(){
    // Initialize the API object
    if (this.mainView) {
      this.mainView.clear();
    }

    if (this.authView) {
      this.authView.remove();
    }
    var url = this.options.url;
    if (url && url.indexOf('http') !== 0) {
      url = this.buildUrl(window.location.href.toString(), url);
    }
    if(this.api) {
      this.options.authorizations = this.api.clientAuthorizations.authz;
    }
    this.options.url = url;
    this.headerView.update(url);

    this.api = new SwaggerClient(this.options);
  },

  // collapse all sections
  collapseAll: function(){
    Docs.collapseEndpointListForResource('');
  },

  // list operations for all sections
  listAll: function(){
    Docs.collapseOperationsForResource('');
  },

  // expand operations for all sections
  expandAll: function(){
    Docs.expandOperationsForResource('');
  },

  // This is bound to success handler for SwaggerApi
  //  so it gets called when SwaggerApi completes loading
  render: function(){
    var authsModel;
    this.showMessage('Finished Loading Resource Information. Rendering Swagger UI...');
    this.mainView = new SwaggerUi.Views.MainView({
      model: this.api,
      el: $('#' + this.dom_id),
      swaggerOptions: this.options,
      router: this
    }).render();
    if (!_.isEmpty(this.api.securityDefinitions)){
      authsModel = _.map(this.api.securityDefinitions, function (auth, name) {
        var result = {};
        result[name] = auth;
        return result;
      });
      this.authView = new SwaggerUi.Views.AuthButtonView({
        data: SwaggerUi.utils.parseSecurityDefinitions(authsModel),
        router: this
      });
      $('#auth_container').append(this.authView.render().el);
    }
    this.showMessage();
    switch (this.options.docExpansion) {
      case 'full':
        this.expandAll(); break;
      case 'list':
        this.listAll(); break;
      default:
        break;
    }
    this.renderGFM();

    if (this.options.onComplete){
      this.options.onComplete(this.api, this);
    }

    setTimeout(Docs.shebang.bind(this), 100);
  },

  buildUrl: function(base, url){
    if (url.indexOf('/') === 0) {
      var parts = base.split('/');
      base = parts[0] + '//' + parts[2];
      return base + url;
    } else {
      var endOfPath = base.length;

      if (base.indexOf('?') > -1){
        endOfPath = Math.min(endOfPath, base.indexOf('?'));
      }

      if (base.indexOf('#') > -1){
        endOfPath = Math.min(endOfPath, base.indexOf('#'));
      }

      base = base.substring(0, endOfPath);

      if (base.indexOf('/', base.length - 1 ) !== -1){
        return base + url;
      }

      return base + '/' + url;
    }
  },

  // Shows message on topbar of the ui
  showMessage: function(data){
    if (data === undefined) {
      data = '';
    }
    var $msgbar = $('#message-bar');
    $msgbar.removeClass('message-fail');
    $msgbar.addClass('message-success');
    $msgbar.text(data);
    if(window.SwaggerTranslator) {
      window.SwaggerTranslator.translate($msgbar);
    }
  },

  // shows message in red
  onLoadFailure: function(data){
    if (data === undefined) {
      data = '';
    }
    $('#message-bar').removeClass('message-success');
    $('#message-bar').addClass('message-fail');

    var val = $('#message-bar').text(data);

    if (this.options.onFailure) {
      this.options.onFailure(data);
    }

    return val;
  },

  // Renders GFM for elements with 'markdown' class
  renderGFM: function(){
    $('.markdown').each(function(){
      $(this).html(marked($(this).html()));
    });

    $('.propDesc', '.model-signature .description').each(function () {
      $(this).html(marked($(this).html())).addClass('markdown');
    });
  }

});

window.SwaggerUi.Views = {};
window.SwaggerUi.Models = {};
window.SwaggerUi.Collections = {};
window.SwaggerUi.partials = {};
window.SwaggerUi.utils = {};

// don't break backward compatibility with previous versions and warn users to upgrade their code
(function(){
  window.authorizations = {
    add: function() {
      warn('Using window.authorizations is deprecated. Please use SwaggerUi.api.clientAuthorizations.add().');

      if (typeof window.swaggerUi === 'undefined') {
        throw new TypeError('window.swaggerUi is not defined');
      }

      if (window.swaggerUi instanceof SwaggerUi) {
        window.swaggerUi.api.clientAuthorizations.add.apply(window.swaggerUi.api.clientAuthorizations, arguments);
      }
    }
  };

  window.ApiKeyAuthorization = function() {
    warn('window.ApiKeyAuthorization is deprecated. Please use SwaggerClient.ApiKeyAuthorization.');
    SwaggerClient.ApiKeyAuthorization.apply(window, arguments);
  };

  window.PasswordAuthorization = function() {
    warn('window.PasswordAuthorization is deprecated. Please use SwaggerClient.PasswordAuthorization.');
    SwaggerClient.PasswordAuthorization.apply(window, arguments);
  };

  function warn(message) {
    if ('console' in window && typeof window.console.warn === 'function') {
      console.warn(message);
    }
  }
})();


// UMD
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['b'], function (b) {
            return (root.SwaggerUi = factory(b));
        });
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('b'));
    } else {
        // Browser globals
        root.SwaggerUi = factory(root.b);
    }
}(this, function () {
    return SwaggerUi;
}));

'use strict';


$(function() {

	// Helper function for vertically aligning DOM elements
	// http://www.seodenver.com/simple-vertical-align-plugin-for-jquery/
	$.fn.vAlign = function() {
		return this.each(function(){
			var ah = $(this).height();
			var ph = $(this).parent().height();
			var mh = (ph - ah) / 2;
			$(this).css('margin-top', mh);
		});
	};

	$.fn.stretchFormtasticInputWidthToParent = function() {
		return this.each(function(){
			var p_width = $(this).closest("form").innerWidth();
			var p_padding = parseInt($(this).closest("form").css('padding-left') ,10) + parseInt($(this).closest('form').css('padding-right'), 10);
			var this_padding = parseInt($(this).css('padding-left'), 10) + parseInt($(this).css('padding-right'), 10);
			$(this).css('width', p_width - p_padding - this_padding);
		});
	};

	$('form.formtastic li.string input, form.formtastic textarea').stretchFormtasticInputWidthToParent();

	// Vertically center these paragraphs
	// Parent may need a min-height for this to work..
	$('ul.downplayed li div.content p').vAlign();

	// When a sandbox form is submitted..
	$("form.sandbox").submit(function(){

		var error_free = true;

		// Cycle through the forms required inputs
 		$(this).find("input.required").each(function() {

			// Remove any existing error styles from the input
			$(this).removeClass('error');

			// Tack the error style on if the input is empty..
			if ($(this).val() === '') {
				$(this).addClass('error');
				$(this).wiggle();
				error_free = false;
			}

		});

		return error_free;
	});

});

function clippyCopiedCallback() {
  $('#api_key_copied').fadeIn().delay(1000).fadeOut();

  // var b = $("#clippy_tooltip_" + a);
  // b.length != 0 && (b.attr("title", "copied!").trigger("tipsy.reload"), setTimeout(function() {
  //   b.attr("title", "copy to clipboard")
  // },
  // 500))
}

// Logging function that accounts for browsers that don't have window.console
function log(){
  log.history = log.history || [];
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments)[0] );
  }
}

// Handle browsers that do console incorrectly (IE9 and below, see http://stackoverflow.com/a/5539378/7913)
if (Function.prototype.bind && console && typeof console.log === "object") {
    [
      "log","info","warn","error","assert","dir","clear","profile","profileEnd"
    ].forEach(function (method) {
        console[method] = this.bind(console[method], console);
    }, Function.prototype.call);
}

window.Docs = {

	shebang: function() {

		// If shebang has an operation nickname in it..
		// e.g. /docs/#!/words/get_search
		var fragments = $.param.fragment().split('/');
		fragments.shift(); // get rid of the bang

		switch (fragments.length) {
			case 1:
        if (fragments[0].length > 0) { // prevent matching "#/"
          // Expand all operations for the resource and scroll to it
          var dom_id = 'resource_' + fragments[0];

          Docs.expandEndpointListForResource(fragments[0]);
          $("#"+dom_id).slideto({highlight: false});
        }
				break;
			case 2:
				// Refer to the endpoint DOM element, e.g. #words_get_search

        // Expand Resource
        Docs.expandEndpointListForResource(fragments[0]);
        $("#"+dom_id).slideto({highlight: false});

            // Expand operation
            var li_dom_id = fragments.join('_');
            var li_content_dom_id = li_dom_id + "_content";


            Docs.expandOperation($('#'+li_content_dom_id));
            $('#'+li_dom_id).slideto({highlight: false});
            break;
		}
	},

	toggleEndpointListForResource: function(resource) {
		var elem = $('li#resource_' + Docs.escapeResourceName(resource) + ' ul.endpoints');
		if (elem.is(':visible')) {
			$.bbq.pushState('#/', 2);
			Docs.collapseEndpointListForResource(resource);
		} else {
            $.bbq.pushState('#/' + resource, 2);
			Docs.expandEndpointListForResource(resource);
		}
	},

	// Expand resource
	expandEndpointListForResource: function(resource) {
		var resource = Docs.escapeResourceName(resource);
		if (resource == '') {
			$('.resource ul.endpoints').slideDown();
			return;
		}

		$('li#resource_' + resource).addClass('active');

		var elem = $('li#resource_' + resource + ' ul.endpoints');
		elem.slideDown();
	},

	// Collapse resource and mark as explicitly closed
	collapseEndpointListForResource: function(resource) {
		var resource = Docs.escapeResourceName(resource);
		if (resource == '') {
			$('.resource ul.endpoints').slideUp();
			return;
		}

		$('li#resource_' + resource).removeClass('active');

		var elem = $('li#resource_' + resource + ' ul.endpoints');
		elem.slideUp();
	},

	expandOperationsForResource: function(resource) {
		// Make sure the resource container is open..
		Docs.expandEndpointListForResource(resource);

		if (resource == '') {
			$('.resource ul.endpoints li.operation div.content').slideDown();
			return;
		}

		$('li#resource_' + Docs.escapeResourceName(resource) + ' li.operation div.content').each(function() {
			Docs.expandOperation($(this));
		});
	},

	collapseOperationsForResource: function(resource) {
		// Make sure the resource container is open..
		Docs.expandEndpointListForResource(resource);

		if (resource == '') {
			$('.resource ul.endpoints li.operation div.content').slideUp();
			return;
		}

		$('li#resource_' + Docs.escapeResourceName(resource) + ' li.operation div.content').each(function() {
			Docs.collapseOperation($(this));
		});
	},

	escapeResourceName: function(resource) {
		return resource.replace(/[!"#$%&'()*+,.\/:;<=>?@\[\\\]\^`{|}~]/g, "\\$&");
	},

	expandOperation: function(elem) {
		elem.slideDown();
	},

	collapseOperation: function(elem) {
		elem.slideUp();
	}
};

'use strict';
/*jslint eqeq: true*/

Handlebars.registerHelper('sanitize', function(html) {
    // Strip the script tags from the html, and return it as a Handlebars.SafeString
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    return new Handlebars.SafeString(html);
});

Handlebars.registerHelper('renderTextParam', function(param) {
    var result, type = 'text', idAtt = '';
    var paramType = param.type || param.schema.type || '';
    var isArray = paramType.toLowerCase() === 'array' || param.allowMultiple;
    var defaultValue = isArray && Array.isArray(param.default) ? param.default.join('\n') : param.default;

    var dataVendorExtensions = Object.keys(param).filter(function(property) {
        // filter X-data- properties
        return property.match(/^X-data-/i) !== null;
    }).reduce(function(result, property) {
        // remove X- from property name, so it results in html attributes like data-foo='bar'
        return result += ' ' + property.substring(2, property.length) + '=\'' + param[property] + '\'';
    }, '');

    if (typeof defaultValue === 'undefined') {
        defaultValue = '';
    }

    if(param.format && param.format === 'password') {
        type = 'password';
    }

    if(param.valueId) {
        idAtt = ' id=\'' + param.valueId + '\'';
    }

    if (typeof defaultValue === 'string' || defaultValue instanceof String) {
        defaultValue = defaultValue.replace(/'/g,'&apos;');
    }

    if(isArray) {
        result = '<textarea class=\'body-textarea' + (param.required ? ' required' : '') + '\' name=\'' + param.name + '\'' + idAtt + dataVendorExtensions;
        result += ' placeholder=\'Provide multiple values in new lines' + (param.required ? ' (at least one required).' : '.') + '\'>';
        result += defaultValue + '</textarea>';
    } else {
        var parameterClass = 'parameter';
        if(param.required) {
          parameterClass += ' required';
        }
        result = '<input class=\'' + parameterClass + '\' minlength=\'' + (param.required ? 1 : 0) + '\'';
        result += ' name=\'' + param.name +'\' placeholder=\'' + (param.required ? '(required)' : '') + '\'' + idAtt + dataVendorExtensions;
        result += ' type=\'' + type + '\' value=\'' + defaultValue + '\'/>';
    }
    return new Handlebars.SafeString(result);
});

Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});
'use strict';

window.SwaggerUi.utils = {
    parseSecurityDefinitions: function (security) {
        var auths = Object.assign({}, window.swaggerUi.api.authSchemes || window.swaggerUi.api.securityDefinitions);
        var oauth2Arr = [];
        var authsArr = [];
        var scopes = [];
        var utils = window.SwaggerUi.utils;

        if (!Array.isArray(security)) { return null; }

        security.forEach(function (item) {
            var singleSecurity = {};
            var singleOauth2Security = {};

            for (var key in item) {
                if (Array.isArray(item[key])) {
                    if (!auths[key]) { continue; }
                    auths[key] = auths[key] || {};
                    if (auths[key].type === 'oauth2') {
                        singleOauth2Security[key] = Object.assign({}, auths[key]);
                        for (var i in singleOauth2Security[key].scopes) {
                            if (item[key].indexOf(i) < 0) {
                                delete singleOauth2Security[key].scopes[i];
                            }
                        }
                        singleOauth2Security[key].scopes = utils.parseOauth2Scopes(singleOauth2Security[key].scopes);
                        scopes = _.merge(scopes, singleOauth2Security[key].scopes);
                    } else {
                        singleSecurity[key] = Object.assign({}, auths[key]);
                    }
                } else {
                    if (item[key].type === 'oauth2') {
                        singleOauth2Security[key] = Object.assign({}, item[key]);
                        singleOauth2Security[key].scopes = utils.parseOauth2Scopes(singleOauth2Security[key].scopes);
                        scopes = _.merge(scopes, singleOauth2Security[key].scopes);
                    } else {
                        singleSecurity[key] = item[key];
                    }
                }
            }

            if (!_.isEmpty(singleSecurity)) {
                authsArr.push(singleSecurity);
            }

            if (!_.isEmpty(singleOauth2Security)){
                oauth2Arr.push(singleOauth2Security);
            }
        });

        return {
            auths : authsArr,
            oauth2: oauth2Arr,
            scopes: scopes
        };
    },

    parseOauth2Scopes: function (data) {
        var scopes = Object.assign({}, data);
        var result = [];
        var key;

        for (key in scopes) {
            result.push({scope: key, description: scopes[key]});
        }

        return result;
    }
};
'use strict';

SwaggerUi.Models.ApiKeyAuthModel = Backbone.Model.extend({
    defaults: {
        'in': '',
        name: '',
        title: '',
        value: ''
    },

    initialize: function () {
        this.on('change', this.validate);
    },

    validate: function () {
        var valid = !!this.get('value');

        this.set('valid', valid);

        return valid;
    }
});
'use strict';

SwaggerUi.Views.ApiKeyAuthView = Backbone.View.extend({ // TODO: append this to global SwaggerUi

    events: {
        'change .input_apiKey_entry': 'apiKeyChange'
    },

    selectors: {
        apikeyInput: '.input_apiKey_entry'
    },

    template: Handlebars.templates.apikey_auth,

    initialize: function(opts) {
        this.options = opts || {};
        this.router = this.options.router;
    },

    render: function (){
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    apiKeyChange: function (e) {
        var val = $(e.target).val();
        if (val) {
            this.$(this.selectors.apikeyInput).removeClass('error');
        }

        this.model.set('value', val);
    },

    isValid: function () {
        return this.model.validate();
    },

    highlightInvalid: function () {
        if (!this.isValid()) {
            this.$(this.selectors.apikeyInput).addClass('error');
        }
    }

});
'use strict';

SwaggerUi.Views.AuthButtonView = Backbone.View.extend({
    events: {
        'click .authorize__btn': 'authorizeBtnClick'
    },

    tpls: {
        popup: Handlebars.templates.popup,
        authBtn: Handlebars.templates.auth_button,
        authBtnOperation: Handlebars.templates.auth_button_operation
    },

    initialize: function(opts) {
        this.options = opts || {};
        this.options.data = this.options.data || {};
        this.isOperation = this.options.isOperation;
        this.model = this.model || {};
        this.router = this.options.router;
        this.auths = this.options.data.oauth2.concat(this.options.data.auths);
    },

    render: function () {
        var tplName = this.isOperation ? 'authBtnOperation' : 'authBtn';

        this.$authEl = this.renderAuths(this.auths);
        this.$el.html(this.tpls[tplName](this.model));

        return this;
    },

    authorizeBtnClick: function (e) {
        var authsModel;

        e.preventDefault();

        authsModel = {
            title: 'Available authorizations',
            content: this.$authEl
        };

        this.popup = new SwaggerUi.Views.PopupView({model: authsModel});
        this.popup.render();
    },

    renderAuths: function (auths) {
        var $el = $('<div>');
        var isLogout = false;

        auths.forEach(function (auth) {
            var authView = new SwaggerUi.Views.AuthView({data: auth, router: this.router});
            var authEl = authView.render().el;
            $el.append(authEl);
            if (authView.isLogout) {
                isLogout = true;
            }
        }, this);

        this.model.isLogout = isLogout;

        return $el;
    }

});

'use strict';

/* global redirect_uri */
/* global clientId */
/* global scopeSeparator */
/* global additionalQueryStringParams */
/* global clientSecret */
/* global onOAuthComplete */
/* global realm */
/*jshint unused:false*/

SwaggerUi.Views.AuthView = Backbone.View.extend({
    events: {
        'click .auth_submit__button': 'authorizeClick',
        'click .auth_logout__button': 'logoutClick'
    },

    tpls: {
        main: Handlebars.templates.auth_view
    },

    selectors: {
        innerEl: '.auth_inner',
        authBtn: '.auth_submit__button'
    },

    initialize: function(opts) {
        this.options = opts || {};
        opts.data = opts.data || {};
        this.router = this.options.router;

        this.authsCollectionView = new SwaggerUi.Views.AuthsCollectionView({data: opts.data});

        this.$el.html(this.tpls.main({
            isLogout: this.authsCollectionView.collection.isAuthorized(),
            isAuthorized: this.authsCollectionView.collection.isPartiallyAuthorized()
        }));
        this.$innerEl = this.$(this.selectors.innerEl);
        this.isLogout = this.authsCollectionView.collection.isPartiallyAuthorized();
    },

    render: function () {
        this.$innerEl.html(this.authsCollectionView.render().el);

        return this;
    },

    authorizeClick: function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (this.authsCollectionView.collection.isValid()) {
            this.authorize();
        } else {
            this.authsCollectionView.highlightInvalid();
        }
    },

    authorize: function () {
        this.authsCollectionView.collection.forEach(function (auth) {
            var keyAuth, basicAuth;
            var type = auth.get('type');

            if (type === 'apiKey') {
                keyAuth = new SwaggerClient.ApiKeyAuthorization(
                    auth.get('name'),
                    auth.get('value'),
                    auth.get('in')
                );

                this.router.api.clientAuthorizations.add(auth.get('title'), keyAuth);
            } else if (type === 'basic') {
                basicAuth = new SwaggerClient.PasswordAuthorization(auth.get('username'), auth.get('password'));
                this.router.api.clientAuthorizations.add(auth.get('title'), basicAuth);
            } else if (type === 'oauth2') {
                this.handleOauth2Login(auth);
            }
        }, this);

        this.router.load();
    },

    logoutClick: function (e) {
        e.preventDefault();

        this.authsCollectionView.collection.forEach(function (auth) {
            window.swaggerUi.api.clientAuthorizations.remove(auth.get('title'));
        });

        this.router.load();
    },

    // taken from lib/swagger-oauth.js
    handleOauth2Login: function (auth) {
        var host = window.location;
        var pathname = location.pathname.substring(0, location.pathname.lastIndexOf('/'));
        var defaultRedirectUrl = host.protocol + '//' + host.host + pathname + '/o2c.html';
        var redirectUrl = window.oAuthRedirectUrl || defaultRedirectUrl;
        var url = null;
        var scopes = _.map(auth.get('scopes'), function (scope) {
            return scope.scope;
        });
        var state, dets, ep;
        window.OAuthSchemeKey = auth.get('title');

        window.enabledScopes = scopes;
        var flow = auth.get('flow');

        if(auth.get('type') === 'oauth2' && flow && (flow === 'implicit' || flow === 'accessCode')) {
            dets = auth.attributes;
            url = dets.authorizationUrl + '?response_type=' + (flow === 'implicit' ? 'token' : 'code');
            window.swaggerUi.tokenName = dets.tokenName || 'access_token';
            window.swaggerUi.tokenUrl = (flow === 'accessCode' ? dets.tokenUrl : null);
            state = window.OAuthSchemeKey;
        }
        else if(auth.get('type') === 'oauth2' && flow && (flow === 'application')) {
            dets = auth.attributes;
            window.swaggerUi.tokenName = dets.tokenName || 'access_token';
            this.clientCredentialsFlow(scopes, dets.tokenUrl, window.OAuthSchemeKey);
            return;
        }
        else if(auth.get('grantTypes')) {
            // 1.2 support
            var o = auth.get('grantTypes');
            for(var t in o) {
                if(o.hasOwnProperty(t) && t === 'implicit') {
                    dets = o[t];
                    ep = dets.loginEndpoint.url;
                    url = dets.loginEndpoint.url + '?response_type=token';
                    window.swaggerUi.tokenName = dets.tokenName;
                }
                else if (o.hasOwnProperty(t) && t === 'accessCode') {
                    dets = o[t];
                    ep = dets.tokenRequestEndpoint.url;
                    url = dets.tokenRequestEndpoint.url + '?response_type=code';
                    window.swaggerUi.tokenName = dets.tokenName;
                }
            }
        }

        var redirect_uri = redirectUrl;

        url += '&redirect_uri=' + encodeURIComponent(redirectUrl);
        url += '&realm=' + encodeURIComponent(realm);
        url += '&client_id=' + encodeURIComponent(clientId);
        url += '&scope=' + encodeURIComponent(scopes.join(scopeSeparator));
        url += '&state=' + encodeURIComponent(state);
        for (var key in additionalQueryStringParams) {
            url += '&' + key + '=' + encodeURIComponent(additionalQueryStringParams[key]);
        }

        window.open(url);
    },

    // taken from lib/swagger-oauth.js
    clientCredentialsFlow: function (scopes, tokenUrl, OAuthSchemeKey) {
        var params = {
            'client_id': clientId,
            'client_secret': clientSecret,
            'scope': scopes.join(' '),
            'grant_type': 'client_credentials'
        };
        $.ajax({
            url : tokenUrl,
            type: 'POST',
            data: params,
            success: function (data)
            {
                onOAuthComplete(data, OAuthSchemeKey);
            },
            error: function ()
            {
                onOAuthComplete('');
            }
        });
    }

});

'use strict';

SwaggerUi.Collections.AuthsCollection = Backbone.Collection.extend({
    constructor: function() {
        var args = Array.prototype.slice.call(arguments);

        args[0] = this.parse(args[0]);

        Backbone.Collection.apply(this, args);
    },

    add: function (model) {
        var args = Array.prototype.slice.call(arguments);

        if (Array.isArray(model)) {
            args[0] = _.map(model, function(val) {
                return this.handleOne(val);
            }, this);
        } else {
            args[0] = this.handleOne(model);
        }

        Backbone.Collection.prototype.add.apply(this, args);
    },

    handleOne: function (model) {
        var result = model;

        if (! (model instanceof Backbone.Model) ) {
            switch (model.type) {
                case 'oauth2':
                    result = new SwaggerUi.Models.Oauth2Model(model);
                    break;
                case 'basic':
                    result = new SwaggerUi.Models.BasicAuthModel(model);
                    break;
                case 'apiKey':
                    result = new SwaggerUi.Models.ApiKeyAuthModel(model);
                    break;
                default:
                    result = new Backbone.Model(model);
            }
        }

        return result;
    },

    isValid: function () {
        var valid = true;

        this.models.forEach(function(model) {
            if (!model.validate()) {
                valid = false;
            }
        });

        return valid;
    },

    isAuthorized: function () {
        return this.length === this.where({ isLogout: true }).length;
    },

    isPartiallyAuthorized: function () {
        return this.where({ isLogout: true }).length > 0;
    },

    parse: function (data) {
        var authz = Object.assign({}, window.swaggerUi.api.clientAuthorizations.authz);

        return _.map(data, function (auth, name) {
            var isBasic = authz[name] && auth.type === 'basic' && authz[name].username && authz[name].password;

            _.extend(auth, {
                title: name
            });

            if (authz[name] || isBasic) {
                _.extend(auth, {
                    isLogout: true,
                    value: isBasic ? undefined : authz[name].value,
                    username: isBasic ? authz[name].username : undefined,
                    password: isBasic ? authz[name].password : undefined,
                    valid: true
                });
            }

            return auth;
        });
    }
});
'use strict';

SwaggerUi.Views.AuthsCollectionView = Backbone.View.extend({

    initialize: function(opts) {
        this.options = opts || {};
        this.options.data = this.options.data || {};
        this.router = this.options.router;

        this.collection = new SwaggerUi.Collections.AuthsCollection(opts.data);

        this.$innerEl = $('<div>');
        this.authViews = [];
    },

    render: function () {
        this.collection.each(function (auth) {
            this.renderOneAuth(auth);
        }, this);

        this.$el.html(this.$innerEl.html() ? this.$innerEl : '');

        return this;
    },

    renderOneAuth: function (authModel) {
        var authViewEl, authView, authViewName;
        var type = authModel.get('type');

        if (type === 'apiKey') {
            authViewName = 'ApiKeyAuthView';
        } else if (type === 'basic' && this.$innerEl.find('.basic_auth_container').length === 0) {
            authViewName = 'BasicAuthView';
        } else if (type === 'oauth2') {
            authViewName = 'Oauth2View';
        }

        if (authViewName) {
            authView = new SwaggerUi.Views[authViewName]({model: authModel, router: this.router});
            authViewEl = authView.render().el;
            this.authViews.push(authView);
        }

        this.$innerEl.append(authViewEl);
    },

    highlightInvalid: function () {
        this.authViews.forEach(function (view) {
            view.highlightInvalid();
        }, this);
    }

});

'use strict';

SwaggerUi.Models.BasicAuthModel = Backbone.Model.extend({
    defaults: {
        username: '',
        password: '',
        title: 'basic'
    },

    initialize: function () {
        this.on('change', this.validate);
    },

    validate: function () {
        var valid = !!this.get('password') && !!this.get('username');

        this.set('valid', valid);

        return valid;
    }
});
'use strict';

SwaggerUi.Views.BasicAuthView = Backbone.View.extend({

    initialize: function (opts) {
        this.options = opts || {};
        this.router = this.options.router;
    },

    events: {
        'change .auth_input': 'inputChange'
    },

    selectors: {
        usernameInput: '.basic_auth__username',
        passwordInput: '.basic_auth__password'
    },

    cls: {
        error: 'error'
    },

    template: Handlebars.templates.basic_auth,

    render: function(){
        $(this.el).html(this.template(this.model.toJSON()));

        return this;
    },

    inputChange: function (e) {
        var $el = $(e.target);
        var val = $el.val();
        var attr = $el.prop('name');

        if (val) {
            $el.removeClass(this.cls.error);
        }

        this.model.set(attr, val);
    },

    isValid: function () {
        return this.model.validate();
    },

    highlightInvalid: function () {
        if (!this.model.get('username')) {
            this.$(this.selectors.usernameInput).addClass(this.cls.error);
        }
    }
});

'use strict';

SwaggerUi.Views.ContentTypeView = Backbone.View.extend({
  initialize: function() {},

  render: function(){
  	this.model.contentTypeId = 'ct' + Math.random();
    $(this.el).html(Handlebars.templates.content_type(this.model));
    return this;
  }
});
'use strict';

SwaggerUi.Views.HeaderView = Backbone.View.extend({
  events: {
    'click #show-pet-store-icon'    : 'showPetStore',
    'click #explore'                : 'showCustom',
    'keyup #input_baseUrl'          : 'showCustomOnKeyup',
    'keyup #input_apiKey'           : 'showCustomOnKeyup'
  },

  initialize: function(){},

  showPetStore: function(){
    this.trigger('update-swagger-ui', {
      url:'http://petstore.swagger.io/v2/swagger.json'
    });
  },

  showCustomOnKeyup: function(e){
    if (e.keyCode === 13) {
      this.showCustom();
    }
  },

  showCustom: function(e){
    if (e) {
      e.preventDefault();
    }

    this.trigger('update-swagger-ui', {
      url: $('#input_baseUrl').val()
    });
  },

  update: function(url, apiKey, trigger){
    if (trigger === undefined) {
      trigger = false;
    }

    $('#input_baseUrl').val(url);

    if (trigger) {
      this.trigger('update-swagger-ui', {url:url});
    }
  }
});

'use strict';

SwaggerUi.Views.MainView = Backbone.View.extend({
  apisSorter : {
    alpha   : function(a,b){ return a.name.localeCompare(b.name); }
  },
  operationsSorters : {
    alpha   : function(a,b){ return a.path.localeCompare(b.path); },
    method  : function(a,b){ return a.method.localeCompare(b.method); }
  },
  initialize: function(opts){
    var sorterOption, sorterFn, key, value;
    opts = opts || {};

    this.router = opts.router;

    // Sort APIs
    if (opts.swaggerOptions.apisSorter) {
      sorterOption = opts.swaggerOptions.apisSorter;
      if (_.isFunction(sorterOption)) {
        sorterFn = sorterOption;
      } else {
        sorterFn = this.apisSorter[sorterOption];
      }
      if (_.isFunction(sorterFn)) {
        this.model.apisArray.sort(sorterFn);
      }
    }
    // Sort operations of each API
    if (opts.swaggerOptions.operationsSorter) {
      sorterOption = opts.swaggerOptions.operationsSorter;
      if (_.isFunction(sorterOption)) {
        sorterFn = sorterOption;
      } else {
        sorterFn = this.operationsSorters[sorterOption];
      }
      if (_.isFunction(sorterFn)) {
        for (key in this.model.apisArray) {
          this.model.apisArray[key].operationsArray.sort(sorterFn);
        }
      }
    }

    // set up the UI for input
    this.model.auths = [];

    for (key in this.model.securityDefinitions) {
      value = this.model.securityDefinitions[key];

      this.model.auths.push({
        name: key,
        type: value.type,
        value: value
      });
    }

    if ('validatorUrl' in opts.swaggerOptions) {
      // Validator URL specified explicitly
      this.model.validatorUrl = opts.swaggerOptions.validatorUrl;
    } else if (this.model.url.indexOf('localhost') > 0 || this.model.url.indexOf('127.0.0.1') > 0) {
      // Localhost override
      this.model.validatorUrl = null;
    } else {
      // Default validator
      if(window.location.protocol === 'https:') {
        this.model.validatorUrl = 'https://online.swagger.io/validator';
      }
      else {
        this.model.validatorUrl = 'http://online.swagger.io/validator';
      }
    }

    // JSonEditor requires type='object' to be present on defined types, we add it if it's missing
    // is there any valid case were it should not be added ?
    var def;
    for(def in this.model.definitions){
      if (!this.model.definitions[def].type){
        this.model.definitions[def].type = 'object';
      }
    }

  },

  render: function () {
    $(this.el).html(Handlebars.templates.main(this.model));
    this.info = this.$('.info')[0];

    if (this.info) {
      this.info.addEventListener('click', this.onLinkClick, true);
    }

    this.model.securityDefinitions = this.model.securityDefinitions || {};

    // Render each resource

    var resources = {};
    var counter = 0;
    for (var i = 0; i < this.model.apisArray.length; i++) {
      var resource = this.model.apisArray[i];
      var id = resource.name;
      while (typeof resources[id] !== 'undefined') {
        id = id + '_' + counter;
        counter += 1;
      }
      resource.id = id;
      resources[id] = resource;
      this.addResource(resource, this.model.auths);
    }

    $('.propWrap').hover(function onHover(){
      $('.optionsWrapper', $(this)).show();
    }, function offhover(){
      $('.optionsWrapper', $(this)).hide();
    });
    return this;
  },

  addResource: function(resource, auths){
    // Render a resource and add it to resources li
    resource.id = resource.id.replace(/\s/g, '_');

    // Make all definitions available at the root of the resource so that they can
    // be loaded by the JSonEditor
    resource.definitions = this.model.definitions;

    var resourceView = new SwaggerUi.Views.ResourceView({
      model: resource,
      router: this.router,
      tagName: 'li',
      id: 'resource_' + resource.id,
      className: 'resource',
      auths: auths,
      swaggerOptions: this.options.swaggerOptions
    });
    $('#resources', this.el).append(resourceView.render().el);
  },

  clear: function(){
    $(this.el).html('');
  },

  onLinkClick: function (e) {
    var el = e.target;

    if (el.tagName === 'A' && el.href && !el.target) {
        e.preventDefault();
        window.open(el.href, '_blank');
    }
  }
});

'use strict';

SwaggerUi.Models.Oauth2Model = Backbone.Model.extend({
    defaults: {
        scopes: {}
    },

    initialize: function () {
        this.on('change', this.validate);
    },

    setScopes: function (name, val) {
        var auth = _.extend({}, this.attributes);
        var index = _.findIndex(auth.scopes, function(o) {
            return o.scope === name;
        });
        auth.scopes[index].checked = val;

        this.set(auth);
        this.validate();
    },

    validate: function () {
      var valid = false;
      var scp = this.get('scopes');
      var idx =  _.findIndex(scp, function (o) {
         return o.checked === true;
      });

      if(scp.length > 0 && idx >= 0) {
          valid = true;
      }

      if(scp.length === 0) {
          valid = true;
      }

      this.set('valid', valid);

      return valid;
    }
});

'use strict';

SwaggerUi.Views.Oauth2View = Backbone.View.extend({
    events: {
        'change .oauth-scope': 'scopeChange'
    },

    template: Handlebars.templates.oauth2,

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    scopeChange: function (e) {
        var val = $(e.target).prop('checked');
        var scope = $(e.target).data('scope');

        this.model.setScopes(scope, val);
    }
});
'use strict';

SwaggerUi.Views.OperationView = Backbone.View.extend({
  invocationUrl: null,

  events: {
    'submit .sandbox'         : 'submitOperation',
    'click .submit'           : 'submitOperation',
    'click .response_hider'   : 'hideResponse',
    'click .toggleOperation'  : 'toggleOperationContent',
    'mouseenter .api-ic'      : 'mouseEnter',
    'dblclick .curl'          : 'selectText',
    'change [name=responseContentType]' : 'showSnippet'
  },

  initialize: function(opts) {
    opts = opts || {};
    this.router = opts.router;
    this.auths = opts.auths;
    this.parentId = this.model.parentId;
    this.nickname = this.model.nickname;
    this.model.encodedParentId = encodeURIComponent(this.parentId);

    if (opts.swaggerOptions) {
      this.model.defaultRendering = opts.swaggerOptions.defaultModelRendering;

      if (opts.swaggerOptions.showRequestHeaders) {
        this.model.showRequestHeaders = true;
      }
    }
    return this;
  },

  selectText: function(event) {
    var doc = document,
        text = event.target.firstChild,
        range,
        selection;
    if (doc.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  },

  mouseEnter: function(e) {
    var elem = $(this.el).find('.content');
    var x = e.pageX;
    var y = e.pageY;
    var scX = $(window).scrollLeft();
    var scY = $(window).scrollTop();
    var scMaxX = scX + $(window).width();
    var scMaxY = scY + $(window).height();
    var wd = elem.width();
    var hgh = elem.height();

    if (x + wd > scMaxX) {
      x = scMaxX - wd;
    }

    if (x < scX) {
      x = scX;
    }

    if (y + hgh > scMaxY) {
      y = scMaxY - hgh;
    }

    if (y < scY) {
      y = scY;
    }

    var pos = {};
    pos.top = y;
    pos.left = x;
    elem.css(pos);
  },

  // Note: copied from CoffeeScript compiled file
  // TODO: redactor
  render: function() {
    var a, auth, auths, code, contentTypeModel, isMethodSubmissionSupported, k, key, l, len, len1, len2, len3, len4, m, modelAuths, n, o, p, param, q, ref, ref1, ref2, ref3, ref4, ref5, responseContentTypeView, responseSignatureView, schema, schemaObj, scopeIndex, signatureModel, statusCode, successResponse, type, v, value, produces, isXML, isJSON;
    isMethodSubmissionSupported = jQuery.inArray(this.model.method, this.model.supportedSubmitMethods()) >= 0;
    if (!isMethodSubmissionSupported) {
      this.model.isReadOnly = true;
    }
    this.model.description = this.model.description || this.model.notes;
    this.model.oauth = null;
    modelAuths = this.model.authorizations || this.model.security;
    if (modelAuths) {
      if (Array.isArray(modelAuths)) {
        for (l = 0, len = modelAuths.length; l < len; l++) {
          auths = modelAuths[l];
          for (key in auths) {
            for (a in this.auths) {
              auth = this.auths[a];
              if (key === auth.name) {
                if (auth.type === 'oauth2') {
                  this.model.oauth = {};
                  this.model.oauth.scopes = [];
                  ref1 = auth.value.scopes;
                  for (k in ref1) {
                    v = ref1[k];
                    scopeIndex = auths[key].indexOf(k);
                    if (scopeIndex >= 0) {
                      o = {
                        scope: k,
                        description: v
                      };
                      this.model.oauth.scopes.push(o);
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        for (k in modelAuths) {
          v = modelAuths[k];
          if (k === 'oauth2') {
            if (this.model.oauth === null) {
              this.model.oauth = {};
            }
            if (this.model.oauth.scopes === void 0) {
              this.model.oauth.scopes = [];
            }
            for (m = 0, len1 = v.length; m < len1; m++) {
              o = v[m];
              this.model.oauth.scopes.push(o);
            }
          }
        }
      }
    }
    if (typeof this.model.responses !== 'undefined') {
      this.model.responseMessages = [];
      ref2 = this.model.responses;
      for (code in ref2) {
        value = ref2[code];
        schema = null;
        schemaObj = this.model.responses[code].schema;
        if (schemaObj && schemaObj.$ref) {
          schema = schemaObj.$ref;
          if (schema.indexOf('#/definitions/') !== -1) {
            schema = schema.replace(/^.*#\/definitions\//, '');
          }
        }
        this.model.responseMessages.push({
          code: code,
          message: value.description,
          responseModel: schema,
          headers: value.headers,
          schema: schemaObj
        });
      }
    }
    if (typeof this.model.responseMessages === 'undefined') {
      this.model.responseMessages = [];
    }
    signatureModel = null;
    produces = this.model.produces;
    isXML = this.contains(produces, 'xml');
    isJSON = isXML ? this.contains(produces, 'json') : true;

    if (this.model.successResponse) {
      successResponse = this.model.successResponse;
      for (key in successResponse) {
        value = successResponse[key];
        this.model.successCode = key;
        if (typeof value === 'object' && typeof value.createJSONSample === 'function') {
          this.model.successDescription = value.description;
          this.model.headers = this.parseResponseHeaders(value.headers);
          signatureModel = {
            sampleJSON: isJSON ? JSON.stringify(SwaggerUi.partials.signature.createJSONSample(value), void 0, 2) : false,
            isParam: false,
            sampleXML: isXML ? SwaggerUi.partials.signature.createXMLSample(value.name, value.definition, value.models) : false,
            signature: SwaggerUi.partials.signature.getModelSignature(value.name, value.definition, value.models, value.modelPropertyMacro)
          };
        } else {
          signatureModel = {
            signature: SwaggerUi.partials.signature.getPrimitiveSignature(value)
          };
        }
      }
    } else if (this.model.responseClassSignature && this.model.responseClassSignature !== 'string') {
      signatureModel = {
        sampleJSON: this.model.responseSampleJSON,
        isParam: false,
        signature: this.model.responseClassSignature
      };
    }
    $(this.el).html(Handlebars.templates.operation(this.model));
    if (signatureModel) {
      signatureModel.defaultRendering = this.model.defaultRendering;
      responseSignatureView = new SwaggerUi.Views.SignatureView({
        model: signatureModel,
        router: this.router,
        tagName: 'div'
      });
      $('.model-signature', $(this.el)).append(responseSignatureView.render().el);
    } else {
      this.model.responseClassSignature = 'string';
      $('.model-signature', $(this.el)).html(this.model.type);
    }
    contentTypeModel = {
      isParam: false
    };
    contentTypeModel.consumes = this.model.consumes;
    contentTypeModel.produces = this.model.produces;
    ref3 = this.model.parameters;
    for (n = 0, len2 = ref3.length; n < len2; n++) {
      param = ref3[n];
      type = param.type || param.dataType || '';
      if (typeof type === 'undefined') {
        schema = param.schema;
        if (schema && schema.$ref) {
          ref = schema.$ref;
          if (ref.indexOf('#/definitions/') === 0) {
            type = ref.substring('#/definitions/'.length);
          } else {
            type = ref;
          }
        }
      }
      if (type && type.toLowerCase() === 'file') {
        if (!contentTypeModel.consumes) {
          contentTypeModel.consumes = 'multipart/form-data';
        }
      }
      param.type = type;
    }
    responseContentTypeView = new SwaggerUi.Views.ResponseContentTypeView({
      model: contentTypeModel,
      router: this.router
    });
    $('.response-content-type', $(this.el)).append(responseContentTypeView.render().el);
    ref4 = this.model.parameters;
    for (p = 0, len3 = ref4.length; p < len3; p++) {
      param = ref4[p];
      this.addParameter(param, contentTypeModel.consumes);
    }
    ref5 = this.model.responseMessages;
    for (q = 0, len4 = ref5.length; q < len4; q++) {
      statusCode = ref5[q];
      statusCode.isXML = isXML;
      statusCode.isJSON = isJSON;
      if (!_.isUndefined(statusCode.headers)) {
        statusCode.headers = this.parseHeadersType(statusCode.headers);
      }
      this.addStatusCode(statusCode);
    }

    if (Array.isArray(this.model.security)) {
      var authsModel = SwaggerUi.utils.parseSecurityDefinitions(this.model.security);

      authsModel.isLogout = !_.isEmpty(window.swaggerUi.api.clientAuthorizations.authz);
      this.authView = new SwaggerUi.Views.AuthButtonView({
        data: authsModel,
        router: this.router,
        isOperation: true,
        model: {
          scopes: authsModel.scopes
        }
      });
      this.$('.authorize-wrapper').append(this.authView.render().el);
    }

    this.showSnippet();
    return this;
  },

  parseHeadersType: function (headers) {
    var map = {
      'string': {
        'date-time': 'dateTime',
        'date'     : 'date'
      }
    };

    _.forEach(headers, function (header) {
      var value;
      header = header || {};
      value = map[header.type] && map[header.type][header.format];
      if (!_.isUndefined(value)) {
        header.type = value;
      }
    });

    return headers;
  },

  contains: function (produces, type) {
    return produces.filter(function (val) {
      if (val.indexOf(type) > -1) {
        return true;
      }
    }).length;
  },

  parseResponseHeaders: function (data) {
    var HEADERS_SEPARATOR = '; ';
    var headers = _.clone(data);

    _.forEach(headers, function (header) {
      var other = [];
      _.forEach(header, function (value, key) {
        var properties = ['type', 'description'];
        if (properties.indexOf(key.toLowerCase()) === -1) {
          other.push(key + ': ' + value);
        }
      });

      other.join(HEADERS_SEPARATOR);
      header.other = other;
    });

    return headers;
  },

  addParameter: function(param, consumes) {
    // Render a parameter
    param.consumes = consumes;
    param.defaultRendering = this.model.defaultRendering;

    // Copy this param JSON spec so that it will be available for JsonEditor
    if(param.schema){
      $.extend(true, param.schema, this.model.definitions[param.type]);
      param.schema.definitions = this.model.definitions;
      // This is required for JsonEditor to display the root properly
      if(!param.schema.type){
        param.schema.type = 'object';
      }
      // This is the title that will be used by JsonEditor for the root
      // Since we already display the parameter's name in the Parameter column
      // We set this to space, we can't set it to null or space otherwise JsonEditor
      // will replace it with the text "root" which won't look good on screen
      if(!param.schema.title){
        param.schema.title = ' ';
      }
    }

    var paramView = new SwaggerUi.Views.ParameterView({
      model: param,
      tagName: 'tr',
      readOnly: this.model.isReadOnly,
      swaggerOptions: this.options.swaggerOptions
    });
    $('.operation-params', $(this.el)).append(paramView.render().el);
  },

  addStatusCode: function(statusCode) {
    // Render status codes
    statusCode.defaultRendering = this.model.defaultRendering;
    var statusCodeView = new SwaggerUi.Views.StatusCodeView({
      model: statusCode,
      tagName: 'tr',
      router: this.router
    });
    $('.operation-status', $(this.el)).append(statusCodeView.render().el);
  },

  // Note: copied from CoffeeScript compiled file
  // TODO: redactor
  submitOperation: function(e) {
    var error_free, form, isFileUpload, map, opts;
    if (e !== null) {
      e.preventDefault();
    }
    form = $('.sandbox', $(this.el));
    error_free = true;
    form.find('input.required').each(function() {
      $(this).removeClass('error');
      if (jQuery.trim($(this).val()) === '') {
        $(this).addClass('error');
        $(this).wiggle({
          callback: (function(_this) {
            return function() {
              $(_this).focus();
            };
          })(this)
        });
        error_free = false;
      }
    });
    form.find('textarea.required:visible').each(function() {
      $(this).removeClass('error');
      if (jQuery.trim($(this).val()) === '') {
        $(this).addClass('error');
        $(this).wiggle({
          callback: (function(_this) {
            return function() {
              return $(_this).focus();
            };
          })(this)
        });
        error_free = false;
      }
    });
    form.find('select.required').each(function() {
      $(this).removeClass('error');
      if (this.selectedIndex === -1) {
        $(this).addClass('error');
        $(this).wiggle({
          callback: (function(_this) {
            return function() {
              $(_this).focus();
            };
          })(this)
        });
        error_free = false;
      }
    });
    if (error_free) {
      map = this.getInputMap(form);
      isFileUpload = this.isFileUpload(form);
      opts = {
        parent: this
      };
      if (this.options.swaggerOptions) {
        for(var key in this.options.swaggerOptions) {
          opts[key] = this.options.swaggerOptions[key];
        }
      }

      var pi;
      for(pi = 0; pi < this.model.parameters.length; pi++){
        var p = this.model.parameters[pi];
        if( p.jsonEditor && p.jsonEditor.isEnabled()){
          var json = p.jsonEditor.getValue();
          map[p.name] = JSON.stringify(json);
        }
      }

      opts.responseContentType = $('div select[name=responseContentType]', $(this.el)).val();
      opts.requestContentType = $('div select[name=parameterContentType]', $(this.el)).val();
      $('.response_throbber', $(this.el)).show();
      if (isFileUpload) {
        $('.request_url', $(this.el)).html('<pre></pre>');
        $('.request_url pre', $(this.el)).text(this.invocationUrl);

        opts.useJQuery = true;
        map.parameterContentType = 'multipart/form-data';
        this.map = map;
        return this.model.execute(map, opts, this.showCompleteStatus, this.showErrorStatus, this);
      } else {
        this.map = map;
        return this.model.execute(map, opts, this.showCompleteStatus, this.showErrorStatus, this);
      }
    }
  },

  getInputMap: function (form) {
    var map, ref1, l, len, o, ref2, m, len1, val, ref3, n, len2;
    map = {};
    ref1 = form.find('input');
    for (l = 0, len = ref1.length; l < len; l++) {
      o = ref1[l];
      if ((o.value !== null) && jQuery.trim(o.value).length > 0) {
        map[o.name] = o.value;
      }
      if (o.type === 'file') {
        map[o.name] = o.files[0];
      }
    }
    ref2 = form.find('textarea');
    for (m = 0, len1 = ref2.length; m < len1; m++) {
      o = ref2[m];
      val = this.getTextAreaValue(o);
      if ((val !== null) && jQuery.trim(val).length > 0) {
        map[o.name] = val;
      }
    }
    ref3 = form.find('select');
    for (n = 0, len2 = ref3.length; n < len2; n++) {
      o = ref3[n];
      val = this.getSelectedValue(o);
      if ((val !== null) && jQuery.trim(val).length > 0) {
        map[o.name] = val;
      }
    }
    return map;
  },

  isFileUpload: function (form) {
    var ref1, l, len, o;
    var isFileUpload = false;
    ref1 = form.find('input');
    for (l = 0, len = ref1.length; l < len; l++) {
      o = ref1[l];
      if (o.type === 'file') {
        isFileUpload = true;
      }
    }
    return isFileUpload;
  },

  success: function(response, parent) {
    parent.showCompleteStatus(response);
  },

  // wraps a jquery response as a shred response
  wrap: function(data) {
    var h, headerArray, headers, i, l, len, o;
    headers = {};
    headerArray = data.getAllResponseHeaders().split('\r');
    for (l = 0, len = headerArray.length; l < len; l++) {
      i = headerArray[l];
      h = i.match(/^([^:]*?):(.*)$/);
      if (!h) {
        h = [];
      }
      h.shift();
      if (h[0] !== void 0 && h[1] !== void 0) {
        headers[h[0].trim()] = h[1].trim();
      }
    }
    o = {};
    o.content = {};
    o.content.data = data.responseText;
    o.headers = headers;
    o.request = {};
    o.request.url = this.invocationUrl;
    o.status = data.status;
    return o;
  },

  getSelectedValue: function(select) {
    if (!select.multiple) {
      return select.value;
    } else {
      var options = [];
      for (var l = 0, len = select.options.length; l < len; l++) {
        var opt = select.options[l];
        if (opt.selected) {
          options.push(opt.value);
        }
      }
      if (options.length > 0) {
        return options;
      } else {
        return null;
      }
    }
  },

  // handler for hide response link
  hideResponse: function(e) {
    if (e) { e.preventDefault(); }
    $('.response', $(this.el)).slideUp();
    $('.response_hider', $(this.el)).fadeOut();
  },

  // Show response from server
  showResponse: function(response) {
    var prettyJson = JSON.stringify(response, null, '\t').replace(/\n/g, '<br>');
    $('.response_body', $(this.el)).html(_.escape(prettyJson));
  },

  // Show error from server
  showErrorStatus: function(data, parent) {
    parent.showStatus(data);
  },

  // show the status codes
  showCompleteStatus: function(data, parent){
    parent.showStatus(data);
  },

  // Adapted from http://stackoverflow.com/a/2893259/454004
  // Note: directly ported from CoffeeScript
  // TODO: Cleanup CoffeeScript artifacts
  formatXml: function(xml) {
    var contexp, fn, formatted, indent, l, lastType, len, lines, ln, pad, reg, transitions, wsexp;
    reg = /(>)(<)(\/*)/g;
    wsexp = /[ ]*(.*)[ ]+\n/g;
    contexp = /(<.+>)(.+\n)/g;
    xml = xml.replace(/\r\n/g, '\n').replace(reg, '$1\n$2$3').replace(wsexp, '$1\n').replace(contexp, '$1\n$2');
    pad = 0;
    formatted = '';
    lines = xml.split('\n');
    indent = 0;
    lastType = 'other';
    transitions = {
      'single->single': 0,
      'single->closing': -1,
      'single->opening': 0,
      'single->other': 0,
      'closing->single': 0,
      'closing->closing': -1,
      'closing->opening': 0,
      'closing->other': 0,
      'opening->single': 1,
      'opening->closing': 0,
      'opening->opening': 1,
      'opening->other': 1,
      'other->single': 0,
      'other->closing': -1,
      'other->opening': 0,
      'other->other': 0
    };
    fn = function(ln) {
      var fromTo, j, key, padding, type, types, value;
      types = {
        single: Boolean(ln.match(/<.+\/>/)),
        closing: Boolean(ln.match(/<\/.+>/)),
        opening: Boolean(ln.match(/<[^!?].*>/))
      };
      type = ((function() {
        var results;
        results = [];
        for (key in types) {
          value = types[key];
          if (value) {
            results.push(key);
          }
        }
        return results;
      })())[0];
      type = type === void 0 ? 'other' : type;
      fromTo = lastType + '->' + type;
      lastType = type;
      padding = '';
      indent += transitions[fromTo];
      padding = ((function() {
        var m, ref1, results;
        results = [];
        for (j = m = 0, ref1 = indent; 0 <= ref1 ? m < ref1 : m > ref1; j = 0 <= ref1 ? ++m : --m) {
          results.push('  ');
        }
        return results;
      })()).join('');
      if (fromTo === 'opening->closing') {
        formatted = formatted.substr(0, formatted.length - 1) + ln + '\n';
      } else {
        formatted += padding + ln + '\n';
      }
    };
    for (l = 0, len = lines.length; l < len; l++) {
      ln = lines[l];
      fn(ln);
    }
    return formatted;
  },

  // puts the response data in UI
  showStatus: function(response) {
    var url, content;
    if (response.content === undefined) {
      content = response.data;
      url = response.url;
    } else {
      content = response.content.data;
      url = response.request.url;
    }
    var headers = response.headers;
    content = jQuery.trim(content);

    // if server is nice, and sends content-type back, we can use it
    var contentType = null;
    if (headers) {
      contentType = headers['Content-Type'] || headers['content-type'];
      if (contentType) {
        contentType = contentType.split(';')[0].trim();
      }
    }
    $('.response_body', $(this.el)).removeClass('json');
    $('.response_body', $(this.el)).removeClass('xml');

    var supportsAudioPlayback = function(contentType){
      var audioElement = document.createElement('audio');
      return !!(audioElement.canPlayType && audioElement.canPlayType(contentType).replace(/no/, ''));
    };

    var pre;
    var code;
    if (!content) {
      code = $('<code />').text('no content');
      pre = $('<pre class="json" />').append(code);

      // JSON
    } else if (contentType === 'application/json' || /\+json$/.test(contentType)) {
      var json = null;
      try {
        json = JSON.stringify(JSON.parse(content), null, '  ');
      } catch (_error) {
        json = 'can\'t parse JSON.  Raw result:\n\n' + content;
      }
      code = $('<code />').text(json);
      pre = $('<pre class="json" />').append(code);

      // XML
    } else if (contentType === 'application/xml' || /\+xml$/.test(contentType)) {
      code = $('<code />').text(this.formatXml(content));
      pre = $('<pre class="xml" />').append(code);

      // HTML
    } else if (contentType === 'text/html') {
      code = $('<code />').html(_.escape(content));
      pre = $('<pre class="xml" />').append(code);

      // Plain Text
    } else if (/text\/plain/.test(contentType)) {
      code = $('<code />').text(content);
      pre = $('<pre class="plain" />').append(code);


      // Image
    } else if (/^image\//.test(contentType)) {
      pre = $('<img>').attr('src', url);

      // Audio
    } else if (/^audio\//.test(contentType) && supportsAudioPlayback(contentType)) {
      pre = $('<audio controls>').append($('<source>').attr('src', url).attr('type', contentType));

      // Download
    } else if (headers['Content-Disposition'] && (/attachment/).test(headers['Content-Disposition']) ||
        headers['content-disposition'] && (/attachment/).test(headers['content-disposition']) ||
        headers['Content-Description'] && (/File Transfer/).test(headers['Content-Description']) ||
        headers['content-description'] && (/File Transfer/).test(headers['content-description'])) {

      if ('Blob' in window) {
        var type = contentType || 'text/html';
        var blob = new Blob([content], {type: type});
        var a = document.createElement('a');
        var href = window.URL.createObjectURL(blob);
        var fileName = response.url.substr(response.url.lastIndexOf('/') + 1);
        var download = [type, fileName, href].join(':');

        // Use filename from response header
        var disposition = headers['content-disposition'] || headers['Content-Disposition'];
        if(typeof disposition !== 'undefined') {
          var responseFilename = /filename=([^;]*);?/.exec(disposition);
          if(responseFilename !== null && responseFilename.length > 1) {
            download = responseFilename[1];
          }
        }

        a.setAttribute('href', href);
        a.setAttribute('download', download);
        a.innerText = 'Download ' + fileName;

        pre = $('<div/>').append(a);
      } else {
        pre = $('<pre class="json" />').append('Download headers detected but your browser does not support downloading binary via XHR (Blob).');
      }

      // Location header based redirect download
    } else if(headers.location || headers.Location) {
      window.location = response.url;

      // Anything else (CORS)
    } else {
      code = $('<code />').text(content);
      pre = $('<pre class="json" />').append(code);
    }
    var response_body = pre;
    $('.request_url', $(this.el)).html('<pre></pre>');
    $('.request_url pre', $(this.el)).text(url);
    $('.response_code', $(this.el)).html('<pre>' + response.status + '</pre>');
    $('.response_body', $(this.el)).html(response_body);
    $('.response_headers', $(this.el)).html('<pre>' + _.escape(JSON.stringify(response.headers, null, '  ')).replace(/\n/g, '<br>') + '</pre>');
    $('.response', $(this.el)).slideDown();
    $('.response_hider', $(this.el)).show();
    $('.response_throbber', $(this.el)).hide();


    // adds curl output
    var curlCommand = this.model.asCurl(this.map, {responseContentType: contentType});
    curlCommand = curlCommand.replace('!', '&#33;');
    $( 'div.curl', $(this.el)).html('<pre>' + _.escape(curlCommand) + '</pre>');

    // only highlight the response if response is less than threshold, default state is highlight response
    var opts = this.options.swaggerOptions;

    if (opts.showRequestHeaders) {
      var form = $('.sandbox', $(this.el)),
          map = this.getInputMap(form),
          requestHeaders = this.model.getHeaderParams(map);
      delete requestHeaders['Content-Type'];
      $('.request_headers', $(this.el)).html('<pre>' + _.escape(JSON.stringify(requestHeaders, null, '  ')).replace(/\n/g, '<br>') + '</pre>');
    }

    var response_body_el = $('.response_body', $(this.el))[0];
    // only highlight the response if response is less than threshold, default state is highlight response
    if (opts.highlightSizeThreshold && typeof response.data !== 'undefined' && response.data.length > opts.highlightSizeThreshold) {
      return response_body_el;
    } else {
      return hljs.highlightBlock(response_body_el);
    }
  },

  toggleOperationContent: function (event) {
    var elem = $('#' + Docs.escapeResourceName(this.parentId + '_' + this.nickname + '_content'));
    if (elem.is(':visible')){
      $.bbq.pushState('#/', 2);
      event.preventDefault();
      Docs.collapseOperation(elem);
    } else {
      Docs.expandOperation(elem);
    }
  },

  getTextAreaValue: function(textArea) {
    var param, parsed, result, i;
    if (textArea.value === null || jQuery.trim(textArea.value).length === 0) {
      return null;
    }
    param = this.getParamByName(textArea.name);
    if (param && param.type && param.type.toLowerCase() === 'array') {
      parsed = textArea.value.split('\n');
      result = [];
      for (i = 0; i < parsed.length; i++) {
        if (parsed[i] !== null && jQuery.trim(parsed[i]).length > 0) {
          result.push(parsed[i]);
        }
      }
      return result.length > 0 ? result : null;
    } else {
      return textArea.value;
    }
  },

  showSnippet: function () {
    var contentTypeEl = this.$('[name=responseContentType]');
    var xmlSnippetEl = this.$('.operation-status .snippet_xml, .response-class .snippet_xml');
    var jsonSnippetEl = this.$('.operation-status .snippet_json, .response-class .snippet_json');
    var contentType;

    if (!contentTypeEl.length) { return; }
    contentType = contentTypeEl.val();

    if (contentType.indexOf('xml') > -1) {
      xmlSnippetEl.show();
      jsonSnippetEl.hide();
    } else {
      jsonSnippetEl.show();
      xmlSnippetEl.hide();
    }
  },

  getParamByName: function(name) {
    var i;
    if (this.model.parameters) {
      for(i = 0; i < this.model.parameters.length; i++) {
        if (this.model.parameters[i].name === name) {
          return this.model.parameters[i];
        }
      }
    }
    return null;
  }

});

'use strict';

SwaggerUi.Views.ParameterContentTypeView = Backbone.View.extend({
  initialize: function  () {},

  render: function(){
    this.model.parameterContentTypeId = 'pct' + Math.random();
    $(this.el).html(Handlebars.templates.parameter_content_type(this.model));
    return this;
  }

});
'use strict';

SwaggerUi.Views.ParameterView = Backbone.View.extend({
  events: {
    'change [name=parameterContentType]' : 'toggleParameterSnippet'
  },

  initialize: function(){
    Handlebars.registerHelper('isArray', function(param, opts) {
      var paramType = param.type && param.type.toLowerCase();
      if (paramType === 'array' || param.allowMultiple) {
        return opts.fn(this);
      } else {
        return opts.inverse(this);
      }
    });
  },

  render: function() {
    var type = this.model.type || this.model.dataType;
    var modelType = this.model.modelSignature.type;
    var modelDefinitions = this.model.modelSignature.definitions;
    var schema = this.model.schema || {};
    var consumes = this.model.consumes || [];
    var sampleJSON, signatureView;


    if (typeof type === 'undefined') {
      if (schema.$ref) {
        var ref = schema.$ref;
        if (ref.indexOf('#/definitions/') === 0) {
          type = ref.substring('#/definitions/'.length);
        } else {
          type = ref;
        }
      }
    }

    this.model.type = type;
    this.model.paramType = this.model.in || this.model.paramType;
    this.model.isBody = this.model.paramType === 'body' || this.model.in === 'body';
    this.model.isFile = type && type.toLowerCase() === 'file';

    // Allow for default === false
    if(typeof this.model.default === 'undefined') {
      this.model.default = this.model.defaultValue;
    }

    this.model.hasDefault = (typeof this.model.default !== 'undefined');
    this.model.valueId = 'm' + this.model.name + Math.random();

    if (this.model.allowableValues) {
      this.model.isList = true;
    }

    var isXML = this.contains(consumes, 'xml');
    var isJSON = isXML ? this.contains(consumes, 'json') : true;
    sampleJSON = SwaggerUi.partials.signature.createParameterJSONSample(modelType, modelDefinitions);

    var template = this.template();
    $(this.el).html(template(this.model));

    var signatureModel = {
      sampleJSON: isJSON ? sampleJSON : false,
      sampleXML: sampleJSON && isXML ? SwaggerUi.partials.signature.createXMLSample('', schema, modelDefinitions, true) : false,
      isParam: true,
      signature: SwaggerUi.partials.signature.getParameterModelSignature(modelType, modelDefinitions),
      defaultRendering: this.model.defaultRendering
    };

    if (sampleJSON) {
      signatureView = new SwaggerUi.Views.SignatureView({model: signatureModel, tagName: 'div'});
      $('.model-signature', $(this.el)).append(signatureView.render().el);
    }
    else {
      $('.model-signature', $(this.el)).html(this.model.signature);
    }

    var isParam = false;

    if( this.options.swaggerOptions.jsonEditor && this.model.isBody && this.model.schema){
      var $self = $(this.el);
      this.model.jsonEditor =
        /* global JSONEditor */
        new JSONEditor($('.editor_holder', $self)[0],
                       {schema: this.model.schema, startval : this.model.default,
                        ajax:true,
                        disable_properties:true,
                        disable_edit_json:true,
                        iconlib: 'swagger' });
      // This is so that the signature can send back the sample to the json editor
      // TODO: SignatureView should expose an event "onSampleClicked" instead
      signatureModel.jsonEditor = this.model.jsonEditor;
      $('.body-textarea', $self).hide();
      $('.editor_holder', $self).show();
      $('.parameter-content-type', $self)
        .change(function(e){
            if(e.target.value === 'application/xml'){
              $('.body-textarea', $self).show();
              $('.editor_holder', $self).hide();
              this.model.jsonEditor.disable();
            }
            else {
              $('.body-textarea', $self).hide();
              $('.editor_holder', $self).show();
              this.model.jsonEditor.enable();
            }
        });
      }


    if (this.model.isBody) {
      isParam = true;
    }

    var contentTypeModel = {
      isParam: isParam
    };

    contentTypeModel.consumes = this.model.consumes;

    if (isParam) {
      var parameterContentTypeView = new SwaggerUi.Views.ParameterContentTypeView({model: contentTypeModel});
      $('.parameter-content-type', $(this.el)).append(parameterContentTypeView.render().el);
      this.toggleParameterSnippet();
    }

    else {
      var responseContentTypeView = new SwaggerUi.Views.ResponseContentTypeView({model: contentTypeModel});
      $('.response-content-type', $(this.el)).append(responseContentTypeView.render().el);
      this.toggleResponseSnippet();
    }

    return this;
  },

  contains: function (consumes, type) {
    return consumes.filter(function (val) {
      if (val.indexOf(type) > -1) {
        return true;
      }
    }).length;
  },

  toggleParameterSnippet: function () {
    var contentType = this.$('[name=parameterContentType]').val();

    this.toggleSnippet(contentType);
  },

  toggleResponseSnippet: function () {
    var contentEl = this.$('[name=responseContentType]');

    if (!contentEl.length) { return; }

    this.toggleSnippet(contentEl.val());
  },

  toggleSnippet: function (type) {
    type = type || '';
    if (type.indexOf('xml') > -1) {
      this.$('.snippet_xml').show();
      this.$('.snippet_json').hide();
    } else {
      this.$('.snippet_json').show();
      this.$('.snippet_xml').hide();
    }
  },

  // Return an appropriate template based on if the parameter is a list, readonly, required
  template: function(){
    if (this.model.isList) {
      return Handlebars.templates.param_list;
    } else {
      if (this.options.readOnly) {
        if (this.model.required) {
          return Handlebars.templates.param_readonly_required;
        } else {
          return Handlebars.templates.param_readonly;
        }
      } else {
        if (this.model.required) {
          return Handlebars.templates.param_required;
        } else {
          return Handlebars.templates.param;
        }
      }
    }
  }
});

'use strict';

SwaggerUi.Views.PopupView = Backbone.View.extend({
    events: {
        'click .api-popup-cancel': 'cancelClick'
    },

    template: Handlebars.templates.popup,
    className: 'api-popup-dialog',

    selectors: {
        content: '.api-popup-content',
        main   : '#swagger-ui-container'
    },

    initialize: function(){
        this.$el.html(this.template(this.model));
    },

    render: function () {
        this.$(this.selectors.content).append(this.model.content);
        $(this.selectors.main).first().append(this.el);
        this.showPopup();

        return this;
    },

    showPopup: function () {
        this.$el.show();
    },

    cancelClick: function () {
        this.remove();
    }

});

'use strict';

SwaggerUi.Views.ResourceView = Backbone.View.extend({
  initialize: function(opts) {
    opts = opts || {};
    this.router = opts.router;
    this.auths = opts.auths;
    if ('' === this.model.description) {
      this.model.description = null;
    }
    if (this.model.description) {
      this.model.summary = this.model.description;
    }
  },

  render: function(){
    var methods = {};


    $(this.el).html(Handlebars.templates.resource(this.model));

    // Render each operation
    for (var i = 0; i < this.model.operationsArray.length; i++) {
      var operation = this.model.operationsArray[i];
      var counter = 0;
      var id = operation.nickname;

      while (typeof methods[id] !== 'undefined') {
        id = id + '_' + counter;
        counter += 1;
      }

      methods[id] = operation;

      operation.nickname = id;
      operation.parentId = this.model.id;
      operation.definitions = this.model.definitions; // make Json Schema available for JSonEditor in this operation
      this.addOperation(operation);
    }

    $('.toggleEndpointList', this.el).click(this.callDocs.bind(this, 'toggleEndpointListForResource'));
    $('.collapseResource', this.el).click(this.callDocs.bind(this, 'collapseOperationsForResource'));
    $('.expandResource', this.el).click(this.callDocs.bind(this, 'expandOperationsForResource'));

    return this;
  },

  addOperation: function(operation) {

    operation.number = this.number;

    // Render an operation and add it to operations li
    var operationView = new SwaggerUi.Views.OperationView({
      model: operation,
      router: this.router,
      tagName: 'li',
      className: 'endpoint',
      swaggerOptions: this.options.swaggerOptions,
      auths: this.auths
    });

    $('.endpoints', $(this.el)).append(operationView.render().el);

    this.number++;

  },
  // Generic Event handler (`Docs` is global)


  callDocs: function(fnName, e) {
    e.preventDefault();
    Docs[fnName](e.currentTarget.getAttribute('data-id'));
  }
});
'use strict';

SwaggerUi.Views.ResponseContentTypeView = Backbone.View.extend({
  initialize: function(){},

  render: function(){
    this.model.responseContentTypeId = 'rct' + Math.random();
    $(this.el).html(Handlebars.templates.response_content_type(this.model));
    return this;
  }
});
'use strict';

SwaggerUi.Views.SignatureView = Backbone.View.extend({
  events: {
    'click a.description-link'       : 'switchToDescription',
    'click a.snippet-link'           : 'switchToSnippet',
    'mousedown .snippet_json'          : 'jsonSnippetMouseDown',
    'mousedown .snippet_xml'          : 'xmlSnippetMouseDown'
  },

  initialize: function () {
  },

  render: function(){

    $(this.el).html(Handlebars.templates.signature(this.model));

    if (this.model.defaultRendering === 'model') {
      this.switchToDescription();
    } else {
      this.switchToSnippet();
    }

    return this;
  },

  // handler for show signature
  switchToDescription: function(e){
    if (e) { e.preventDefault(); }

    $('.snippet', $(this.el)).hide();
    $('.description', $(this.el)).show();
    $('.description-link', $(this.el)).addClass('selected');
    $('.snippet-link', $(this.el)).removeClass('selected');
  },

  // handler for show sample
  switchToSnippet: function(e){
    if (e) { e.preventDefault(); }

    $('.snippet', $(this.el)).show();
    $('.description', $(this.el)).hide();
    $('.snippet-link', $(this.el)).addClass('selected');
    $('.description-link', $(this.el)).removeClass('selected');
  },

  // handler for snippet to text area
  snippetToTextArea: function(val) {
    var textArea = $('textarea', $(this.el.parentNode.parentNode.parentNode));

    // Fix for bug in IE 10/11 which causes placeholder text to be copied to "value"
    if ($.trim(textArea.val()) === '' || textArea.prop('placeholder') === textArea.val()) {
      textArea.val(val);
      // TODO move this code outside of the view and expose an event instead
      if( this.model.jsonEditor && this.model.jsonEditor.isEnabled()){
        this.model.jsonEditor.setValue(JSON.parse(this.model.sampleJSON));
      }
    }
  },

  jsonSnippetMouseDown: function (e) {
    if (this.model.isParam) {
      if (e) { e.preventDefault(); }

      this.snippetToTextArea(this.model.sampleJSON);
    }
  },

  xmlSnippetMouseDown: function (e) {
    if (this.model.isParam) {
      if (e) { e.preventDefault(); }

      this.snippetToTextArea(this.model.sampleXML);
    }
  }
});
'use strict';

SwaggerUi.Views.StatusCodeView = Backbone.View.extend({
  initialize: function (opts) {
    this.options = opts || {};
    this.router = this.options.router;
  },

  render: function(){
    var responseModel, responseModelView;
    var value = this.router.api.models[this.model.responseModel];
    $(this.el).html(Handlebars.templates.status_code(this.model));

    if (this.router.api.models.hasOwnProperty(this.model.responseModel)) {
      responseModel = {
        sampleJSON: JSON.stringify(SwaggerUi.partials.signature.createJSONSample(value), void 0, 2),
        sampleXML: this.model.isXML ? SwaggerUi.partials.signature.createXMLSample('', this.model.schema, this.router.api.models) : false,
        isParam: false,
        signature: SwaggerUi.partials.signature.getModelSignature(this.model.responseModel, value, this.router.api.models),
        defaultRendering: this.model.defaultRendering
      };
    } else {
      responseModel = {
        signature: SwaggerUi.partials.signature.getPrimitiveSignature(this.model.schema)
      };
    }

    responseModelView = new SwaggerUi.Views.SignatureView({model: responseModel, tagName: 'div'});
    $('.model-signature', this.$el).append(responseModelView.render().el);
    return this;
  }
});
'use strict';

/* jshint -W122 */
SwaggerUi.partials.signature = (function () {
  // copy-pasted from swagger-js
  var resolveSchema = function (schema) {
    if (_.isPlainObject(schema.schema)) {
      schema = resolveSchema(schema.schema);
    }

    return schema;
  };

  // copy-pasted from swagger-js
  var simpleRef = function (name) {
    if (typeof name === 'undefined') {
      return null;
    }

    if (name.indexOf('#/definitions/') === 0) {
      return name.substring('#/definitions/'.length);
    } else {
      return name;
    }
  };

  // copy-pasted from swagger-js
  var getInlineModel = function(inlineStr) {
    if(/^Inline Model \d+$/.test(inlineStr) && this.inlineModels) {
      var id = parseInt(inlineStr.substr('Inline Model'.length).trim(),10); //
      var model = this.inlineModels[id];
      return model;
    }
    // I'm returning null here, should I rather throw an error?
    return null;
  };

  // copy-pasted from swagger-js
  var formatXml = function(xml) {
    var contexp, fn, formatted, indent, l, lastType, len, lines, ln, pad, reg, transitions, wsexp;
    reg = /(>)(<)(\/*)/g;
    wsexp = /[ ]*(.*)[ ]+\n/g;
    contexp = /(<.+>)(.+\n)/g;
    xml = xml.replace(reg, '$1\n$2$3').replace(wsexp, '$1\n').replace(contexp, '$1\n$2');
    pad = 0;
    formatted = '';
    lines = xml.split('\n');
    indent = 0;
    lastType = 'other';
    transitions = {
      'single->single': 0,
      'single->closing': -1,
      'single->opening': 0,
      'single->other': 0,
      'closing->single': 0,
      'closing->closing': -1,
      'closing->opening': 0,
      'closing->other': 0,
      'opening->single': 1,
      'opening->closing': 0,
      'opening->opening': 1,
      'opening->other': 1,
      'other->single': 0,
      'other->closing': -1,
      'other->opening': 0,
      'other->other': 0
    };
    fn = function(ln) {
      var fromTo, j, key, padding, type, types, value;
      types = {
        single: Boolean(ln.match(/<.+\/>/)),
        closing: Boolean(ln.match(/<\/.+>/)),
        opening: Boolean(ln.match(/<[^!?].*>/))
      };
      type = ((function() {
        var results;
        results = [];
        for (key in types) {
          value = types[key];
          if (value) {
            results.push(key);
          }
        }
        return results;
      })())[0];
      type = type === void 0 ? 'other' : type;
      fromTo = lastType + '->' + type;
      lastType = type;
      padding = '';
      indent += transitions[fromTo];
      padding = ((function() {
        var m, ref1, results;
        results = [];
        for (j = m = 0, ref1 = indent; 0 <= ref1 ? m < ref1 : m > ref1; j = 0 <= ref1 ? ++m : --m) {
          results.push('  ');
        }
        return results;
      })()).join('');
      if (fromTo === 'opening->closing') {
        formatted = formatted.substr(0, formatted.length - 1) + ln + '\n';
      } else {
        formatted += padding + ln + '\n';
      }
    };
    for (l = 0, len = lines.length; l < len; l++) {
      ln = lines[l];
      fn(ln);
    }
    return formatted;
  };

  // copy-pasted from swagger-js
  var getModelSignature = function (name, schema, models, modelPropertyMacro) {
    var strongOpen = '<span class="strong">';
    var strongClose = '</span>';

    var optionHtml = function (label, value) {
      return '<tr><td class="optionName">' + label + ':</td><td>' + value + '</td></tr>';
    };


    // Allow for ignoring the 'name' argument.... shifting the rest
    if(_.isObject(arguments[0])) {
      name = void 0;
      schema = arguments[0];
      models = arguments[1];
      modelPropertyMacro = arguments[2];
    }

    models = models || {};

    // Resolve the schema (Handle nested schemas)
    schema = resolveSchema(schema);

    // Return for empty object
    if(_.isEmpty(schema)) {
      return strongOpen + 'Empty' + strongClose;
    }

    // Dereference $ref from 'models'
    if(typeof schema.$ref === 'string') {
      name = simpleRef(schema.$ref);
      schema = models[name];
      if(typeof schema === 'undefined')
      {
        return strongOpen + name + ' is not defined!' + strongClose;
      }
    }

    if(typeof name !== 'string') {
      name = schema.title || 'Inline Model';
    }

    // If we are a Model object... adjust accordingly
    if(schema.definition) {
      schema = schema.definition;
    }

    if(typeof modelPropertyMacro !== 'function') {
      modelPropertyMacro = function(prop){
        return (prop || {}).default;
      };
    }

    var references = {};
    var seenModels = [];
    var inlineModels = 0;

    // Generate current HTML
    var html = processModel(schema, name);

    // Generate references HTML
    while (_.keys(references).length > 0) {
      /* jshint ignore:start */
      _.forEach(references, function (schema, name) {
        var seenModel = _.indexOf(seenModels, name) > -1;

        delete references[name];

        if (!seenModel) {
          seenModels.push(name);

          html += '<br />' + processModel(schema, name);
        }
      });
      /* jshint ignore:end */
    }

    return html;


    function addReference(schema, name, skipRef) {
      var modelName = name;
      var model;

      if (schema.$ref) {
        modelName = schema.title || simpleRef(schema.$ref);
        model = models[simpleRef(schema.$ref)];
      } else if (_.isUndefined(name)) {
        modelName = schema.title || 'Inline Model ' + (++inlineModels);
        model = {definition: schema};
      }

      if (skipRef !== true) {
        references[modelName] = _.isUndefined(model) ? {} : model.definition;
      }

      return modelName;
    }

    function primitiveToHTML(schema) {
      var html = '<span class="propType">';
      var type = schema.type || 'object';

      if (schema.$ref) {
        html += addReference(schema, simpleRef(schema.$ref));
      } else if (type === 'object') {
        if (!_.isUndefined(schema.properties)) {
          html += addReference(schema);
        } else {
          html += 'object';
        }
      } else if (type === 'array') {
        html += 'Array[';

        if (_.isArray(schema.items)) {
          html += _.map(schema.items, addReference).join(',');
        } else if (_.isPlainObject(schema.items)) {
          if (_.isUndefined(schema.items.$ref)) {
            if (!_.isUndefined(schema.items.type) && _.indexOf(['array', 'object'], schema.items.type) === -1) {
              html += schema.items.type;
            } else {
              html += addReference(schema.items);
            }
          } else {
            html += addReference(schema.items, simpleRef(schema.items.$ref));
          }
        } else {
          console.log('Array type\'s \'items\' schema is not an array or an object, cannot process');
          html += 'object';
        }

        html += ']';
      } else {
        html += schema.type;
      }

      html += '</span>';

      return html;
    }

    function primitiveToOptionsHTML(schema, html) {
      var options = '';
      var type = schema.type || 'object';
      var isArray = type === 'array';

      if (!_.isUndefined(schema.description)) {
        html += ': ' + '<span class="propDesc">' + schema.description + '</span>';
      }

      if (schema.enum) {
        html += ' = <span class="propVals">[\'' + schema.enum.join('\', \'') + '\']</span>';
      }

      if (isArray) {
        if (_.isPlainObject(schema.items) && !_.isUndefined(schema.items.type)) {
          type = schema.items.type;
        } else {
          type = 'object';
        }
      }

      if (!_.isUndefined(schema.default)) {
        options += optionHtml('Default', schema.default);
      }

      switch (type) {
      case 'string':
        if (schema.minLength) {
          options += optionHtml('Min. Length', schema.minLength);
        }

        if (schema.maxLength) {
          options += optionHtml('Max. Length', schema.maxLength);
        }

        if (schema.pattern) {
          options += optionHtml('Reg. Exp.', schema.pattern);
        }
        break;
      case 'integer':
      case 'number':
        if (schema.minimum) {
          options += optionHtml('Min. Value', schema.minimum);
        }

        if (schema.exclusiveMinimum) {
          options += optionHtml('Exclusive Min.', 'true');
        }

        if (schema.maximum) {
          options += optionHtml('Max. Value', schema.maximum);
        }

        if (schema.exclusiveMaximum) {
          options += optionHtml('Exclusive Max.', 'true');
        }

        if (schema.multipleOf) {
          options += optionHtml('Multiple Of', schema.multipleOf);
        }

        break;
      }

      if (isArray) {
        if (schema.minItems) {
          options += optionHtml('Min. Items', schema.minItems);
        }

        if (schema.maxItems) {
          options += optionHtml('Max. Items', schema.maxItems);
        }

        if (schema.uniqueItems) {
          options += optionHtml('Unique Items', 'true');
        }

        if (schema.collectionFormat) {
          options += optionHtml('Coll. Format', schema.collectionFormat);
        }
      }

      if (_.isUndefined(schema.items)) {
        if (_.isArray(schema.enum)) {
          var enumString;

          if (type === 'number' || type === 'integer') {
            enumString = schema.enum.join(', ');
          } else {
            enumString = '"' + schema.enum.join('", "') + '"';
          }

          options += optionHtml('Enum', enumString);
        }
      }

      if (options.length > 0) {
        html = '<span class="propWrap">' + html + '<table class="optionsWrapper"><tr><th colspan="2">' + type + '</th></tr>' + options + '</table></span>';
      }

      return html;
    }

    function processModel(schema, name) {
      var type = schema.type || 'object';
      var isArray = schema.type === 'array';
      var html = strongOpen + name + ' ' + (isArray ? '[' : '{') + strongClose;
      var contents;

      if (name) {
        seenModels.push(name);
      }

      if (isArray) {
        if (_.isArray(schema.items)) {
          html += '<div>' + _.map(schema.items, function (item) {
            var type = item.type || 'object';

            if (_.isUndefined(item.$ref)) {
              if (_.indexOf(['array', 'object'], type) > -1) {
                if (type === 'object' && _.isUndefined(item.properties)) {
                  return 'object';
                } else {
                  return addReference(item);
                }
              } else {
                return primitiveToOptionsHTML(item, type);
              }
            } else {
              return addReference(item, simpleRef(item.$ref));
            }
          }).join(',</div><div>');
        } else if (_.isPlainObject(schema.items)) {
          if (_.isUndefined(schema.items.$ref)) {
            if (_.indexOf(['array', 'object'], schema.items.type || 'object') > -1) {
              if ((_.isUndefined(schema.items.type) || schema.items.type === 'object') && _.isUndefined(schema.items.properties)) {
                html += '<div>object</div>';
              } else {
                html += '<div>' + addReference(schema.items) + '</div>';
              }
            } else {
              html += '<div>' + primitiveToOptionsHTML(schema.items, schema.items.type) + '</div>';
            }
          } else {
            html += '<div>' + addReference(schema.items, simpleRef(schema.items.$ref)) + '</div>';
          }
        } else {
          console.log('Array type\'s \'items\' property is not an array or an object, cannot process');
          html += '<div>object</div>';
        }
      } else {
        if (schema.$ref) {
          html += '<div>' + addReference(schema, name) + '</div>';
        } else if (type === 'object') {
          if (_.isPlainObject(schema.properties)) {
            contents = _.map(schema.properties, function (property, name) {
              var propertyIsRequired = (_.indexOf(schema.required, name) >= 0);
              var cProperty = _.cloneDeep(property);

              var requiredClass = propertyIsRequired ? 'required' : '';
              var html = '<span class="propName ' + requiredClass + '">' + name + '</span> (';
              var model;

              // Allow macro to set the default value
              cProperty.default = modelPropertyMacro(cProperty);

              // Resolve the schema (Handle nested schemas)
              cProperty = resolveSchema(cProperty);

              // We need to handle property references to primitives (Issue 339)
              if (!_.isUndefined(cProperty.$ref)) {
                model = models[simpleRef(cProperty.$ref)];

                if (!_.isUndefined(model) && _.indexOf([undefined, 'array', 'object'], model.definition.type) === -1) {
                  // Use referenced schema
                  cProperty = resolveSchema(model.definition);
                }
              }

              html += primitiveToHTML(cProperty);

              if(!propertyIsRequired) {
                html += ', <span class="propOptKey">optional</span>';
              }

              if(property.readOnly) {
                  html += ', <span class="propReadOnly">read only</span>';
              }

              html += ')';

              return '<div' + (property.readOnly ? ' class="readOnly"' : '') + '>' + primitiveToOptionsHTML(cProperty, html);
            }).join(',</div>');
          }

          if (contents) {
            html += contents + '</div>';
          }
        } else {
          html += '<div>' + primitiveToOptionsHTML(schema, type) + '</div>';
        }
      }

      return html + strongOpen + (isArray ? ']' : '}') + strongClose;
    }

  };

  // copy-pasted from swagger-js
  var schemaToJSON = function (schema, models, modelsToIgnore, modelPropertyMacro) {
    // Resolve the schema (Handle nested schemas)
    schema = resolveSchema(schema);

    if(typeof modelPropertyMacro !== 'function') {
      modelPropertyMacro = function(prop){
        return (prop || {}).default;
      };
    }

    modelsToIgnore= modelsToIgnore || {};

    var type = schema.type || 'object';
    var format = schema.format;
    var model;
    var output;

    if (!_.isUndefined(schema.example)) {
      output = schema.example;
    } else if (_.isUndefined(schema.items) && _.isArray(schema.enum)) {
      output = schema.enum[0];
    }

    if (_.isUndefined(output)) {
      if (schema.$ref) {
        model = models[simpleRef(schema.$ref)];

        if (!_.isUndefined(model)) {
          if (_.isUndefined(modelsToIgnore[model.name])) {
            modelsToIgnore[model.name] = model;
            output = schemaToJSON(model.definition, models, modelsToIgnore, modelPropertyMacro);
            delete modelsToIgnore[model.name];
          } else {
            if (model.type === 'array') {
              output = [];
            } else {
              output = {};
            }
          }
        }
      } else if (!_.isUndefined(schema.default)) {
        output = schema.default;
      } else if (type === 'string') {
        if (format === 'date-time') {
          output = new Date().toISOString();
        } else if (format === 'date') {
          output = new Date().toISOString().split('T')[0];
        } else {
          output = 'string';
        }
      } else if (type === 'integer') {
        output = 0;
      } else if (type === 'number') {
        output = 0.0;
      } else if (type === 'boolean') {
        output = true;
      } else if (type === 'object') {
        output = {};

        _.forEach(schema.properties, function (property, name) {
          var cProperty = _.cloneDeep(property);

          // Allow macro to set the default value
          cProperty.default = modelPropertyMacro(property);

          output[name] = schemaToJSON(cProperty, models, modelsToIgnore, modelPropertyMacro);
        });
      } else if (type === 'array') {
        output = [];

        if (_.isArray(schema.items)) {
          _.forEach(schema.items, function (item) {
            output.push(schemaToJSON(item, models, modelsToIgnore, modelPropertyMacro));
          });
        } else if (_.isPlainObject(schema.items)) {
          output.push(schemaToJSON(schema.items, models, modelsToIgnore, modelPropertyMacro));
        } else if (_.isUndefined(schema.items)) {
          output.push({});
        } else {
          console.log('Array type\'s \'items\' property is not an array or an object, cannot process');
        }
      }
    }

    return output;
  };

  // copy-pasted from swagger-js
  var createJSONSample = function (value, modelsToIgnore) {
    modelsToIgnore = modelsToIgnore || {};

    modelsToIgnore[value.name] = value;

    // Response support
    if (value.examples && _.isPlainObject(value.examples) && value.examples['application/json']) {
      value.definition.example = value.examples['application/json'];

      if (_.isString(value.definition.example)) {
        value.definition.example = jsyaml.safeLoad(value.definition.example);
      }
    } else if (!value.definition.example) {
      value.definition.example = value.examples;
    }

    return schemaToJSON(value.definition, value.models, modelsToIgnore, value.modelPropertyMacro);
  };

  // copy-pasted from swagger-js
  var getParameterModelSignature = function (type, definitions) {
      var isPrimitive, listType;

      if (type instanceof Array) {
        listType = true;
        type = type[0];
      }

      // Convert undefined to string of 'undefined'
      if (typeof type === 'undefined') {
        type = 'undefined';
        isPrimitive = true;

      } else if (definitions[type]){
        // a model def exists?
        type = definitions[type]; /* Model */
        isPrimitive = false;

      } else if (getInlineModel(type)) {
        type = getInlineModel(type); /* Model */
        isPrimitive = false;

      } else {
        // We default to primitive
        isPrimitive = true;
      }

      if (isPrimitive) {
        if (listType) {
          return 'Array[' + type + ']';
        } else {
          return type.toString();
        }
      } else {
        if (listType) {
          return 'Array[' + getModelSignature(type.name, type.definition, type.models, type.modelPropertyMacro) + ']';
        } else {
          return getModelSignature(type.name, type.definition, type.models, type.modelPropertyMacro);
        }
      }
  };

  // copy-pasted from swagger-js
  var createParameterJSONSample = function (type, models) {
    var listType, sampleJson, innerType;
    models = models || {};

    listType = (type instanceof Array);
    innerType = listType ? type[0] : type;

    if(models[innerType]) {
      sampleJson = createJSONSample(models[innerType]);
    } else if (getInlineModel(innerType)){
      sampleJson = createJSONSample(getInlineModel(innerType)); // may return null, if type isn't correct
    }


    if (sampleJson) {
      sampleJson = listType ? [sampleJson] : sampleJson;

      if (typeof sampleJson === 'string') {
        return sampleJson;
      } else if (_.isObject(sampleJson)) {
        var t = sampleJson;

        if (sampleJson instanceof Array && sampleJson.length > 0) {
          t = sampleJson[0];
        }

        if (t.nodeName && typeof t === 'Node') {
          var xmlString = new XMLSerializer().serializeToString(t);

          return formatXml(xmlString);
        } else {
          return JSON.stringify(sampleJson, null, 2);
        }
      } else {
        return sampleJson;
      }
    }
  };

  var wrapTag = function (name, value, attrs) {
    var str, attributes;

    attrs = attrs || [];

    attributes = attrs.map(function (attr) {
      return ' ' + attr.name + '="' + attr.value + '"';
    }).join('');

    if (!name) {
      return getErrorMessage('Node name is not provided');
    }

    str = [
      '<', name,
      attributes,
      '>',
      value,
      '</', name, '>'
    ];

    return str.join('');
  };

  var getName = function (name, xml) {
    var result = name || '';

    xml = xml || {};

    if (xml.name) {
      result = xml.name;
    }

    if (xml.prefix) {
      result = xml.prefix + ':' + result;
    }

    return result;
  };

  var getNamespace = function (xml) {
    var namespace = '';
    var name = 'xmlns';

    xml = xml || {};

    if (xml.namespace) {
      namespace = xml.namespace;
    } else {
      return namespace;
    }

    if (xml.prefix) {
      name += ':' + xml.prefix;
    }

    return {
      name: name,
      value: namespace
    };
  };

  var createArrayXML = function (descriptor) {
    var name = descriptor.name;
    var config = descriptor.config;
    var definition = descriptor.definition;
    var models = descriptor.models;
    var value;
    var items = definition.items;
    var xml = definition.xml || {};
    var namespace = getNamespace(xml);
    var attributes = [];

    if (!items) { return getErrorMessage(); }

    value = createSchemaXML(name, items, models, config);

    if (namespace) {
      attributes.push(namespace);
    }

    if (xml.wrapped) {
      value = wrapTag(name, value, attributes);
    }

    return value;
  };

  var getPrimitiveSignature = function (schema) {
    var type, items;

    schema = schema || {};
    items = schema.items || {};
    type = schema.type || '';

    switch (type) {
      case 'object': return 'Object is not a primitive';
      case 'array' : return 'Array[' + (items.format || items.type) + ']';
      default: return schema.format || type;
    }
  };

  var createPrimitiveXML = function (descriptor) {
    var name = descriptor.name;
    var definition = descriptor.definition;
    var primitivesMap = {
      'string': {
        'date': new Date(1).toISOString().split('T')[0],
        'date-time' : new Date(1).toISOString(),
        'default': 'string'
      },
      'integer': {
        'default': 1
      },
      'number': {
        'default': 1.1
      },
      'boolean': {
        'default': true
      }
    };
    var type = definition.type;
    var format = definition.format;
    var xml = definition.xml || {};
    var namespace = getNamespace(xml);
    var attributes = [];
    var value;

    if (_.keys(primitivesMap).indexOf(type) < 0) { return getErrorMessage(); }

    if (_.isArray(definition.enum)){
      value = definition.enum[0];
    } else {
      value = definition.example || primitivesMap[type][format] || primitivesMap[type].default;
    }

    if (xml.attribute) {
      return {name: name, value: value};
    }

    if (namespace) {
      attributes.push(namespace);
    }

    return wrapTag(name, value, attributes);
  };

  function createObjectXML (descriptor) {
    var name = descriptor.name;
    var definition = descriptor.definition;
    var config = descriptor.config;
    var models = descriptor.models;
    var isParam = descriptor.config.isParam;
    var serializedProperties;
    var attrs = [];
    var properties = definition.properties;
    var additionalProperties = definition.additionalProperties;
    var xml = definition.xml;
    var namespace = getNamespace(xml);

    if (namespace) {
      attrs.push(namespace);
    }

    if (!properties && !additionalProperties) { return getErrorMessage(); }

    properties = properties || {};

    serializedProperties = _.map(properties, function (prop, key) {
      var xml, result;

      if (isParam && prop.readOnly) {
        return '';
      }

      xml = prop.xml || {};
      result = createSchemaXML(key, prop, models, config);

      if (xml.attribute) {
        attrs.push(result);
        return '';
      }

      return result;
    }).join('');

    if (additionalProperties) {
      serializedProperties += '<!-- additional elements allowed -->';
    }

    return wrapTag(name, serializedProperties, attrs);
  }

  function getInfiniteLoopMessage (name) {
    return '<!-- Infinite loop $ref:' + name + ' -->';
  }

  function getErrorMessage (details) {
    details = details ? ': ' + details : '';
    return '<!-- invalid XML' + details + ' -->';
  }

  function createSchemaXML (name, definition, models, config) {
    var $ref = _.isObject(definition) ? definition.$ref : null;
    var output, index;
    config = config || {};
    config.modelsToIgnore = config.modelsToIgnore || [];
    var descriptor = _.isString($ref) ? getDescriptorByRef($ref, name, models, config)
        : getDescriptor(name, definition, models, config);

    if (!descriptor) {
      return getErrorMessage();
    }

    switch (descriptor.type) {
      case 'array':
        output = createArrayXML(descriptor); break;
      case 'object':
        output = createObjectXML(descriptor); break;
      case 'loop':
        output = getInfiniteLoopMessage(descriptor.name); break;
      default:
        output = createPrimitiveXML(descriptor);
    }

    if ($ref) {
      index = config.modelsToIgnore.indexOf($ref);
      if (index > -1) {
        config.modelsToIgnore.splice(index, 1);
      }
    }

    return output;
  }

  function Descriptor (name, type, definition, models, config) {
    if (arguments.length < 4) {
      throw new Error();
    }

    this.config = config || {};
    this.config.modelsToIgnore = this.config.modelsToIgnore || [];
    this.name = getName(name, definition.xml);
    this.definition = definition;
    this.models = models;
    this.type = type;
  }

  function getDescriptorByRef($ref, name, models, config) {
    var modelType = simpleRef($ref);
    var model = models[modelType] || {};
    var type = model.definition && model.definition.type ? model.definition.type : 'object';
    name = name || model.name;

    if (config.modelsToIgnore.indexOf($ref) > -1) {
      type = 'loop';
      name = modelType;
    } else {
      config.modelsToIgnore.push($ref);
    }

    if (!model.definition) {
      return null;
    }

    return new Descriptor(name, type, model.definition, models, config);
  }

  function getDescriptor (name, definition, models, config){
    var type = definition.type || 'object';

    if (!definition) {
      return null;
    }

    return new Descriptor(name, type, definition, models, config);
  }

  function createXMLSample (name, definition, models, isParam) {
    var prolog = '<?xml version="1.0"?>';

    return formatXml(prolog + createSchemaXML(name, definition, models, { isParam: isParam } ));
  }

  return {
      getModelSignature: getModelSignature,
      createJSONSample: createJSONSample,
      getParameterModelSignature: getParameterModelSignature,
      createParameterJSONSample: createParameterJSONSample,
      createSchemaXML: createSchemaXML,
      createXMLSample: createXMLSample,
      getPrimitiveSignature: getPrimitiveSignature
  };

})();

/**
 * swagger-client - swagger-client is a javascript client for use with swaggering APIs.
 * @version v2.1.15
 * @link http://swagger.io
 * @license Apache-2.0
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SwaggerClient = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var auth = require('./lib/auth');
var helpers = require('./lib/helpers');
var SwaggerClient = require('./lib/client');
var deprecationWrapper = function (url, options) {
  helpers.log('This is deprecated, use "new SwaggerClient" instead.');

  return new SwaggerClient(url, options);
};

/* Here for IE8 Support */
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(obj, start) {
    for (var i = (start || 0), j = this.length; i < j; i++) {
      if (this[i] === obj) { return i; }
    }
    return -1;
  };
}

/* Here for IE8 Support */
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
  };
}

/* Here for node 10.x support */
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };
}

module.exports = SwaggerClient;

SwaggerClient.ApiKeyAuthorization = auth.ApiKeyAuthorization;
SwaggerClient.PasswordAuthorization = auth.PasswordAuthorization;
SwaggerClient.CookieAuthorization = auth.CookieAuthorization;
SwaggerClient.SwaggerApi = deprecationWrapper;
SwaggerClient.SwaggerClient = deprecationWrapper;
SwaggerClient.SchemaMarkup = require('./lib/schema-markup');

},{"./lib/auth":2,"./lib/client":3,"./lib/helpers":4,"./lib/schema-markup":7}],2:[function(require,module,exports){
'use strict';

var helpers = require('./helpers');
var btoa = require('btoa'); // jshint ignore:line
var CookieJar = require('cookiejar').CookieJar;
var _ = {
  each: require('lodash-compat/collection/each'),
  includes: require('lodash-compat/collection/includes'),
  isObject: require('lodash-compat/lang/isObject'),
  isArray: require('lodash-compat/lang/isArray')
};

/**
 * SwaggerAuthorizations applys the correct authorization to an operation being executed
 */
var SwaggerAuthorizations = module.exports.SwaggerAuthorizations = function (authz) {
  this.authz = authz || {};
};

/**
 * Add auths to the hash
 * Will overwrite any existing
 *
 */
SwaggerAuthorizations.prototype.add = function (name, auth) {
  if(_.isObject(name)) {
    for (var key in name) {
      this.authz[key] = name[key];
    }
  } else if(typeof name === 'string' ){
    this.authz[name] = auth;
  }

  return auth;
};

SwaggerAuthorizations.prototype.remove = function (name) {
  return delete this.authz[name];
};

SwaggerAuthorizations.prototype.apply = function (obj, securities) {
  var status = true;
  var applyAll = !securities;
  var flattenedSecurities = [];

  // favor the object-level authorizations over global
  var authz = obj.clientAuthorizations || this.authz;

  // Securities could be [ {} ]
  _.each(securities, function (obj, key) {

    // Make sure we account for securities being [ str ]
    if(typeof key === 'string') {
      flattenedSecurities.push(key);
    }

    // Flatten keys in to our array
    _.each(obj, function (val, key) {
      flattenedSecurities.push(key);
    });
  });

  _.each(authz, function (auth, authName) {
    if(applyAll || _.includes(flattenedSecurities, authName)) {
      var newStatus = auth.apply(obj);
      status = status && !!newStatus; // logical ORs regarding status
    }
  });

  return status;
};

/**
 * ApiKeyAuthorization allows a query param or header to be injected
 */
var ApiKeyAuthorization = module.exports.ApiKeyAuthorization = function (name, value, type) {
  this.name = name;
  this.value = value;
  this.type = type;
};

ApiKeyAuthorization.prototype.apply = function (obj) {
  if (this.type === 'query') {
    // see if already applied.  If so, don't do it again

    var qp;
    if (obj.url.indexOf('?') > 0) {
      qp = obj.url.substring(obj.url.indexOf('?') + 1);
      var parts = qp.split('&');
      if(parts && parts.length > 0) {
        for(var i = 0; i < parts.length; i++) {
          var kv = parts[i].split('=');
          if(kv && kv.length > 0) {
            if (kv[0] === this.name) {
              // skip it
              return false;
            }
          }
        }
      }
    }

    if (obj.url.indexOf('?') > 0) {
      obj.url = obj.url + '&' + this.name + '=' + this.value;
    } else {
      obj.url = obj.url + '?' + this.name + '=' + this.value;
    }

    return true;
  } else if (this.type === 'header') {
    if(typeof obj.headers[this.name] === 'undefined') {
      obj.headers[this.name] = this.value;
    }

    return true;
  }
};

var CookieAuthorization = module.exports.CookieAuthorization = function (cookie) {
  this.cookie = cookie;
};

CookieAuthorization.prototype.apply = function (obj) {
  obj.cookieJar = obj.cookieJar || new CookieJar();
  obj.cookieJar.setCookie(this.cookie);

  return true;
};

/**
 * Password Authorization is a basic auth implementation
 */
var PasswordAuthorization = module.exports.PasswordAuthorization = function (username, password) {
  if (arguments.length === 3) {
    helpers.log('PasswordAuthorization: the \'name\' argument has been removed, pass only username and password');
    username = arguments[1];
    password = arguments[2];
  }
  this.username = username;
  this.password = password;
};

PasswordAuthorization.prototype.apply = function (obj) {
  if(typeof obj.headers.Authorization === 'undefined') {
    obj.headers.Authorization = 'Basic ' + btoa(this.username + ':' + this.password);
  }

  return true;
};

},{"./helpers":4,"btoa":13,"cookiejar":18,"lodash-compat/collection/each":52,"lodash-compat/collection/includes":55,"lodash-compat/lang/isArray":140,"lodash-compat/lang/isObject":144}],3:[function(require,module,exports){
'use strict';

var _ = {
  bind: require('lodash-compat/function/bind'),
  cloneDeep: require('lodash-compat/lang/cloneDeep'),
  find: require('lodash-compat/collection/find'),
  forEach: require('lodash-compat/collection/forEach'),
  indexOf: require('lodash-compat/array/indexOf'),
  isArray: require('lodash-compat/lang/isArray'),
  isObject: require('lodash-compat/lang/isObject'),
  isFunction: require('lodash-compat/lang/isFunction'),
  isPlainObject: require('lodash-compat/lang/isPlainObject'),
  isUndefined: require('lodash-compat/lang/isUndefined')
};
var auth = require('./auth');
var helpers = require('./helpers');
var Model = require('./types/model');
var Operation = require('./types/operation');
var OperationGroup = require('./types/operationGroup');
var Resolver = require('./resolver');
var SwaggerHttp = require('./http');
var SwaggerSpecConverter = require('./spec-converter');
var Q = require('q');

// We have to keep track of the function/property names to avoid collisions for tag names which are used to allow the
// following usage: 'client.{tagName}'
var reservedClientTags = [
  'apis',
  'authorizationScheme',
  'authorizations',
  'basePath',
  'build',
  'buildFrom1_1Spec',
  'buildFrom1_2Spec',
  'buildFromSpec',
  'clientAuthorizations',
  'convertInfo',
  'debug',
  'defaultErrorCallback',
  'defaultSuccessCallback',
  'enableCookies',
  'fail',
  'failure',
  'finish',
  'help',
  'host',
  'idFromOp',
  'info',
  'initialize',
  'isBuilt',
  'isValid',
  'modelPropertyMacro',
  'models',
  'modelsArray',
  'options',
  'parameterMacro',
  'parseUri',
  'progress',
  'resourceCount',
  'sampleModels',
  'selfReflect',
  'setConsolidatedModels',
  'spec',
  'supportedSubmitMethods',
  'swaggerRequestHeaders',
  'tagFromLabel',
  'title',
  'url',
  'useJQuery',
  'jqueryAjaxCache'
];
// We have to keep track of the function/property names to avoid collisions for tag names which are used to allow the
// following usage: 'client.apis.{tagName}'
var reservedApiTags = [
  'apis',
  'asCurl',
  'description',
  'externalDocs',
  'help',
  'label',
  'name',
  'operation',
  'operations',
  'operationsArray',
  'path',
  'tag'
];
var supportedOperationMethods = ['delete', 'get', 'head', 'options', 'patch', 'post', 'put'];
var SwaggerClient = module.exports = function (url, options) {
  this.authorizations = null;
  this.authorizationScheme = null;
  this.basePath = null;
  this.debug = false;
  this.enableCookies = false;
  this.info = null;
  this.isBuilt = false;
  this.isValid = false;
  this.modelsArray = [];
  this.resourceCount = 0;
  this.url = null;
  this.useJQuery = false;
  this.jqueryAjaxCache = false;
  this.swaggerObject = {};
  this.deferredClient = undefined;

  this.clientAuthorizations = new auth.SwaggerAuthorizations();

  if (typeof url !== 'undefined') {
    return this.initialize(url, options);
  } else {
    return this;
  }
};

SwaggerClient.prototype.initialize = function (url, options) {
  this.models = {};
  this.sampleModels = {};

  if (typeof url === 'string') {
    this.url = url;
  } else if (_.isObject(url)) {
    options = url;
    this.url = options.url;
  }

  if(this.url && this.url.indexOf('http') === -1) {
    // no protocol, so we can only use window if it exists
    if(window && window.location) {
      this.url = window.location.origin + this.url;
    }
  }

  options = options || {};
  this.clientAuthorizations.add(options.authorizations);
  this.swaggerRequestHeaders = options.swaggerRequestHeaders || 'application/json;charset=utf-8,*/*';
  this.defaultSuccessCallback = options.defaultSuccessCallback || null;
  this.defaultErrorCallback = options.defaultErrorCallback || null;
  this.modelPropertyMacro = options.modelPropertyMacro || null;
  this.parameterMacro = options.parameterMacro || null;
  this.usePromise = options.usePromise || null;


  if(this.usePromise) {
    this.deferredClient = Q.defer();
  }

  if (typeof options.success === 'function') {
    this.success = options.success;
  }
  if (options.useJQuery) {
    this.useJQuery = options.useJQuery;
  }

  if (options.jqueryAjaxCache) {
    this.jqueryAjaxCache = options.jqueryAjaxCache;
  }

  if (options.enableCookies) {
    this.enableCookies = options.enableCookies;
  }

  this.options = options || {};

  this.supportedSubmitMethods = options.supportedSubmitMethods || [];
  this.failure = options.failure || function (err) { throw err; };
  this.progress = options.progress || function () {};
  this.spec = _.cloneDeep(options.spec); // Clone so we do not alter the provided document

  if (options.scheme) {
    this.scheme = options.scheme;
  }

  if (this.usePromise || typeof options.success === 'function') {
    this.ready = true;
    return this.build();
  }
};

SwaggerClient.prototype.build = function (mock) {
  if (this.isBuilt) {
    return this;
  }

  var self = this;

  this.progress('fetching resource list: ' + this.url + '; Please wait.');

  var obj = {
    useJQuery: this.useJQuery,
    jqueryAjaxCache: this.jqueryAjaxCache,
    url: this.url,
    method: 'get',
    headers: {
      accept: this.swaggerRequestHeaders
    },
    on: {
      error: function (response) {
        if (self.url.substring(0, 4) !== 'http') {
          return self.fail('Please specify the protocol for ' + self.url);
        } else if (response.status === 0) {
          return self.fail('Can\'t read from server.  It may not have the appropriate access-control-origin settings.');
        } else if (response.status === 404) {
          return self.fail('Can\'t read swagger JSON from ' + self.url);
        } else {
          return self.fail(response.status + ' : ' + response.statusText + ' ' + self.url);
        }
      },
      response: function (resp) {

        var responseObj = resp.obj;
        if(!responseObj) {
          return self.fail('failed to parse JSON/YAML response');
        }

        self.swaggerVersion = responseObj.swaggerVersion;
        self.swaggerObject = responseObj;

        if (responseObj.swagger && parseInt(responseObj.swagger) === 2) {
          self.swaggerVersion = responseObj.swagger;

          new Resolver().resolve(responseObj, self.url, self.buildFromSpec, self);

          self.isValid = true;
        } else {
          var converter = new SwaggerSpecConverter();
          self.oldSwaggerObject = self.swaggerObject;

          converter.setDocumentationLocation(self.url);
          converter.convert(responseObj, self.clientAuthorizations, self.options, function(spec) {
            self.swaggerObject = spec;
            new Resolver().resolve(spec, self.url, self.buildFromSpec, self);
            self.isValid = true;
          });
        }
      }
    }
  };

  if (this.spec) {
    self.swaggerObject = this.spec;
    setTimeout(function () {
      new Resolver().resolve(self.spec, self.url, self.buildFromSpec, self);
    }, 10);
  } else {
    this.clientAuthorizations.apply(obj);

    if (mock) {
      return obj;
    }

    new SwaggerHttp().execute(obj, this.options);
  }

  return (this.usePromise) ? this.deferredClient.promise : this;
};

SwaggerClient.prototype.buildFromSpec = function (response) {
  if (this.isBuilt) {
    return this;
  }

  this.apis = {};
  this.apisArray = [];
  this.basePath = response.basePath || '';
  this.consumes = response.consumes;
  this.host = response.host || '';
  this.info = response.info || {};
  this.produces = response.produces;
  this.schemes = response.schemes || [];
  this.securityDefinitions = response.securityDefinitions;
  this.security = response.security;
  this.title = response.title || '';

  if (response.externalDocs) {
    this.externalDocs = response.externalDocs;
  }

  // legacy support
  this.authSchemes = response.securityDefinitions;

  var definedTags = {};
  var k;

  if (Array.isArray(response.tags)) {
    definedTags = {};

    for (k = 0; k < response.tags.length; k++) {
      var t = response.tags[k];
      definedTags[t.name] = t;
    }
  }

  var location;

  if (typeof this.url === 'string') {
    location = this.parseUri(this.url);
    if (typeof this.scheme === 'undefined' && typeof this.schemes === 'undefined' || this.schemes.length === 0) {
      this.scheme = location.scheme || 'http';
    } else if (typeof this.scheme === 'undefined') {
      this.scheme = this.schemes[0] || location.scheme;
    }

    if (typeof this.host === 'undefined' || this.host === '') {
      this.host = location.host;

      if (location.port) {
        this.host = this.host + ':' + location.port;
      }
    }
  }
  else {
    if (typeof this.schemes === 'undefined' || this.schemes.length === 0) {
      this.scheme = 'http';
    }
    else if (typeof this.scheme === 'undefined') {
      this.scheme = this.schemes[0];
    }
  }

  this.definitions = response.definitions;

  var key;

  for (key in this.definitions) {
    var model = new Model(key, this.definitions[key], this.models, this.modelPropertyMacro);

    if (model) {
      this.models[key] = model;
    }
  }

  // get paths, create functions for each operationId
  var self = this;

  // Bind help to 'client.apis'
  self.apis.help = _.bind(self.help, self);

  _.forEach(response.paths, function (pathObj, path) {
    // Only process a path if it's an object
    if (!_.isPlainObject(pathObj)) {
      return;
    }

    _.forEach(supportedOperationMethods, function (method) {
      var operation = pathObj[method];

      if (_.isUndefined(operation)) {
        // Operation does not exist
        return;
      } else if (!_.isPlainObject(operation)) {
        // Operation exists but it is not an Operation Object.  Since this is invalid, log it.
        helpers.log('The \'' + method + '\' operation for \'' + path + '\' path is not an Operation Object');

        return;
      }

      var tags = operation.tags;

      if (_.isUndefined(tags) || !_.isArray(tags) || tags.length === 0) {
        tags = operation.tags = [ 'default' ];
      }

      var operationId = self.idFromOp(path, method, operation);

      var operationObject = new Operation(self,
        operation.scheme,
        operationId,
        method,
        path,
        operation,
        self.definitions,
        self.models,
        self.clientAuthorizations);

      // bind self operation's execute command to the api
      _.forEach(tags, function (tag) {
        var clientProperty = _.indexOf(reservedClientTags, tag) > -1 ? '_' + tag : tag;
        var apiProperty = _.indexOf(reservedApiTags, tag) > -1 ? '_' + tag : tag;
        var operationGroup = self[clientProperty];

        if (clientProperty !== tag) {
          helpers.log('The \'' + tag + '\' tag conflicts with a SwaggerClient function/property name.  Use \'client.' +
                      clientProperty + '\' or \'client.apis.' + tag + '\' instead of \'client.' + tag + '\'.');
        }

        if (apiProperty !== tag) {
          helpers.log('The \'' + tag + '\' tag conflicts with a SwaggerClient operation function/property name.  Use ' +
                      '\'client.apis.' + apiProperty + '\' instead of \'client.apis.' + tag + '\'.');
        }

        if (_.indexOf(reservedApiTags, operationId) > -1) {
          helpers.log('The \'' + operationId + '\' operationId conflicts with a SwaggerClient operation ' +
                      'function/property name.  Use \'client.apis.' + apiProperty + '._' + operationId +
                      '\' instead of \'client.apis.' + apiProperty + '.' + operationId + '\'.');

          operationId = '_' + operationId;
          operationObject.nickname = operationId; // So 'client.apis.[tag].operationId.help() works properly
        }

        if (_.isUndefined(operationGroup)) {
          operationGroup = self[clientProperty] = self.apis[apiProperty] = {};

          operationGroup.operations = {};
          operationGroup.label = apiProperty;
          operationGroup.apis = {};

          var tagDef = definedTags[tag];

          if (!_.isUndefined(tagDef)) {
            operationGroup.description = tagDef.description;
            operationGroup.externalDocs = tagDef.externalDocs;
          }

          self[clientProperty].help = _.bind(self.help, operationGroup);
          self.apisArray.push(new OperationGroup(tag, operationGroup.description, operationGroup.externalDocs, operationObject));
        }

        operationId = self.makeUniqueOperationId(operationId, self.apis[apiProperty]);

        // Bind tag help
        if (!_.isFunction(operationGroup.help)) {
          operationGroup.help = _.bind(self.help, operationGroup);
        }

        // bind to the apis object
        self.apis[apiProperty][operationId] = operationGroup[operationId] = _.bind(operationObject.execute,
                                                                                  operationObject);
        self.apis[apiProperty][operationId].help = operationGroup[operationId].help = _.bind(operationObject.help,
                                                                                             operationObject);
        self.apis[apiProperty][operationId].asCurl = operationGroup[operationId].asCurl = _.bind(operationObject.asCurl,
                                                                                                 operationObject);

        operationGroup.apis[operationId] = operationGroup.operations[operationId] = operationObject;

        // legacy UI feature
        var api = _.find(self.apisArray, function (api) {
          return api.tag === tag;
        });

        if (api) {
          api.operationsArray.push(operationObject);
        }
      });
    });
  });

  // sort the apisArray according to the tags
  var sortedApis = [];
  _.forEach(Object.keys(definedTags), function (tag) {
    var _apiToAdd;
    var pos;
    for(pos in self.apisArray) {
      var _api = self.apisArray[pos];
      if(_api && tag === _api.name) {
        sortedApis.push(_api);
        self.apisArray[pos] = null;
      }
    }
  });
  // add anything left
  _.forEach(self.apisArray, function (api) {
    if(api) {
      sortedApis.push(api);
    }
  });
  self.apisArray = sortedApis;

  _.forEach(response.definitions, function (definitionObj, definition) {
    definitionObj['id'] = definition.toLowerCase();
    definitionObj['name'] = definition;
    self.modelsArray.push(definitionObj);
  });

  this.isBuilt = true;

  if (this.usePromise) {
    this.isValid = true;
    this.isBuilt = true;
    this.deferredClient.resolve(this);

    return this.deferredClient.promise;
  }

  if (this.success) {
    this.success();
  }

  return this;
};

SwaggerClient.prototype.makeUniqueOperationId = function(operationId, api) {
  var count = 0;
  var name = operationId;

  // make unique across this operation group
  while(true) {
    var matched = false;
    _.forEach(api.operations, function (operation) {
      if(operation.nickname === name) {
        matched = true;
      }
    });
    if(!matched) {
      return name;
    }
    name = operationId + '_' + count;
    count ++;
  }

  return operationId;
};

SwaggerClient.prototype.parseUri = function (uri) {
  var urlParseRE = /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/;
  var parts = urlParseRE.exec(uri);

  return {
    scheme: parts[4] ? parts[4].replace(':','') : undefined,
    host: parts[11],
    port: parts[12],
    path: parts[15]
  };
};

SwaggerClient.prototype.help = function (dontPrint) {
  var output = '';

  if (this instanceof SwaggerClient) {
    _.forEach(this.apis, function (api, name) {
      if (_.isPlainObject(api)) {
        output += 'operations for the \'' + name + '\' tag\n';

        _.forEach(api.operations, function (operation, name) {
          output += '  * ' + name + ': ' + operation.summary + '\n';
        });
      }
    });
  } else if (this instanceof OperationGroup || _.isPlainObject(this)) {
    output += 'operations for the \'' + this.label + '\' tag\n';

    _.forEach(this.apis, function (operation, name) {
      output += '  * ' + name + ': ' + operation.summary + '\n';
    });
  }

  if (dontPrint) {
    return output;
  } else {
    helpers.log(output);

    return output;
  }
};

SwaggerClient.prototype.tagFromLabel = function (label) {
  return label;
};

SwaggerClient.prototype.idFromOp = function (path, httpMethod, op) {
  if(!op || !op.operationId) {
    op = op || {};
    op.operationId = httpMethod + '_' + path;
  }
  var opId = op.operationId.replace(/[\s!@#$%^&*()_+=\[{\]};:<>|.\/?,\\'""-]/g, '_') || (path.substring(1) + '_' + httpMethod);

  opId = opId.replace(/((_){2,})/g, '_');
  opId = opId.replace(/^(_)*/g, '');
  opId = opId.replace(/([_])*$/g, '');

  return opId;
};

SwaggerClient.prototype.setHost = function (host) {
  this.host = host;

  if(this.apis) {
    _.forEach(this.apis, function(api) {
      if(api.operations) {
        _.forEach(api.operations, function(operation) {
          operation.host = host;
        });
      }
    });
  }
};

SwaggerClient.prototype.setBasePath = function (basePath) {
  this.basePath = basePath;

  if(this.apis) {
    _.forEach(this.apis, function(api) {
      if(api.operations) {
        _.forEach(api.operations, function(operation) {
          operation.basePath = basePath;
        });
      }
    });
  }
};

SwaggerClient.prototype.setSchemes = function (schemes) {
  this.schemes = schemes;

  if(schemes && schemes.length > 0) {
    if(this.apis) {
      _.forEach(this.apis, function (api) {
        if (api.operations) {
          _.forEach(api.operations, function (operation) {
            operation.scheme = schemes[0];
          });
        }
      });
    }
  }
};


SwaggerClient.prototype.fail = function (message) {
  if (this.usePromise) {
    this.deferredClient.reject(message);
    return this.deferredClient.promise;
  } else {
    if (this.failure) {
      this.failure(message);
    }
    else {
      this.failure(message);
    }
  }
};

},{"./auth":2,"./helpers":4,"./http":5,"./resolver":6,"./spec-converter":8,"./types/model":9,"./types/operation":10,"./types/operationGroup":11,"lodash-compat/array/indexOf":49,"lodash-compat/collection/find":53,"lodash-compat/collection/forEach":54,"lodash-compat/function/bind":58,"lodash-compat/lang/cloneDeep":138,"lodash-compat/lang/isArray":140,"lodash-compat/lang/isFunction":142,"lodash-compat/lang/isObject":144,"lodash-compat/lang/isPlainObject":145,"lodash-compat/lang/isUndefined":148,"q":157}],4:[function(require,module,exports){
(function (process){
'use strict';

var _ = {
  isPlainObject: require('lodash-compat/lang/isPlainObject'),
  indexOf: require('lodash-compat/array/indexOf')
};

module.exports.__bind = function (fn, me) {
  return function(){
    return fn.apply(me, arguments);
  };
};

var log = module.exports.log = function() {
  // Only log if available and we're not testing
  if (console && process.env.NODE_ENV !== 'test') {
    console.log(Array.prototype.slice.call(arguments)[0]);
  }
};

module.exports.fail = function (message) {
  log(message);
};

var optionHtml = module.exports.optionHtml = function (label, value) {
  return '<tr><td class="optionName">' + label + ':</td><td>' + value + '</td></tr>';
};

var resolveSchema = module.exports.resolveSchema = function (schema) {
  if (_.isPlainObject(schema.schema)) {
    schema = resolveSchema(schema.schema);
  }

  return schema;
};

var simpleRef = module.exports.simpleRef = function (name) {
  if (typeof name === 'undefined') {
    return null;
  }

  if (name.indexOf('#/definitions/') === 0) {
    return name.substring('#/definitions/'.length);
  } else {
    return name;
  }
};


}).call(this,require('_process'))
},{"_process":12,"lodash-compat/array/indexOf":49,"lodash-compat/lang/isPlainObject":145}],5:[function(require,module,exports){
'use strict';

var helpers = require('./helpers');
var request = require('superagent');
var jsyaml = require('js-yaml');
var _ = {
  isObject: require('lodash-compat/lang/isObject')
};

/*
 * JQueryHttpClient is a light-weight, node or browser HTTP client
 */
var JQueryHttpClient = function () {
  this.type = 'JQueryHttpClient';
};

/*
 * SuperagentHttpClient is a light-weight, node or browser HTTP client
 */
var SuperagentHttpClient = function () {
  this.type = 'SuperagentHttpClient';
};

/**
 * SwaggerHttp is a wrapper for executing requests
 */
var SwaggerHttp = module.exports = function () {};

SwaggerHttp.prototype.execute = function (obj, opts) {
  var client;

  if(opts && opts.client) {
    client = opts.client;
  }
  else {
    client = new SuperagentHttpClient(opts);
  }
  client.opts = opts || {};

  // legacy support
  var hasJQuery = false;
  if(typeof window !== 'undefined') {
    if(typeof window.jQuery !== 'undefined') {
      hasJQuery = true;
    }
  }
  // OPTIONS support
  if(obj.method.toLowerCase() === 'options' && client.type === 'SuperagentHttpClient') {
    log('forcing jQuery as OPTIONS are not supported by SuperAgent');
    obj.useJQuery = true;
  }
  if(this.isInternetExplorer() && (obj.useJQuery === false || !hasJQuery )) {
    throw new Error('Unsupported configuration! JQuery is required but not available');
  }
  if ((obj && obj.useJQuery === true) || this.isInternetExplorer() && hasJQuery) {
    client = new JQueryHttpClient(opts);
  }

  var success = obj.on.response;
  var error = obj.on.error;

  var requestInterceptor = function(data) {
    if(opts && opts.requestInterceptor) {
      data = opts.requestInterceptor.apply(data);
    }
    return data;
  };

  var responseInterceptor = function(data) {
    if(opts && opts.responseInterceptor) {
      data = opts.responseInterceptor.apply(data);
    }
    return success(data);
  };

  var errorInterceptor = function(data) {
    if(opts && opts.responseInterceptor) {
      data = opts.responseInterceptor.apply(data);
    }
    error(data);
  };

  obj.on.error = function(data) {
    errorInterceptor(data);
  };

  obj.on.response = function(data) {
    responseInterceptor(data);
  };

  if (_.isObject(obj) && _.isObject(obj.body)) {
    // special processing for file uploads via jquery
    if (obj.body.type && obj.body.type === 'formData'){
      if(opts.useJQuery) {
        obj.contentType = false;
        obj.processData = false;
        delete obj.headers['Content-Type'];
      }
    }
  }

  obj = requestInterceptor(obj) || obj;
  if (obj.beforeSend) {
    obj.beforeSend(function(_obj) {
      client.execute(_obj || obj);
    });
  } else {
    client.execute(obj);
  }

  return (obj.deferred) ? obj.deferred.promise : obj;
};

SwaggerHttp.prototype.isInternetExplorer = function () {
  var detectedIE = false;

  if (typeof navigator !== 'undefined' && navigator.userAgent) {
    var nav = navigator.userAgent.toLowerCase();

    if (nav.indexOf('msie') !== -1) {
      var version = parseInt(nav.split('msie')[1]);

      if (version <= 8) {
        detectedIE = true;
      }
    }
  }

  return detectedIE;
};

JQueryHttpClient.prototype.execute = function (obj) {
  var jq = this.jQuery || (typeof window !== 'undefined' && window.jQuery);
  var cb = obj.on;
  var request = obj;

  if(typeof jq === 'undefined' || jq === false) {
    throw new Error('Unsupported configuration! JQuery is required but not available');
  }

  obj.type = obj.method;
  obj.cache = obj.jqueryAjaxCache;
  obj.data = obj.body;
  delete obj.jqueryAjaxCache;
  delete obj.useJQuery;
  delete obj.body;

  obj.complete = function (response) {
    var headers = {};
    var headerArray = response.getAllResponseHeaders().split('\n');

    for (var i = 0; i < headerArray.length; i++) {
      var toSplit = headerArray[i].trim();

      if (toSplit.length === 0) {
        continue;
      }

      var separator = toSplit.indexOf(':');

      if (separator === -1) {
        // Name but no value in the header
        headers[toSplit] = null;

        continue;
      }

      var name = toSplit.substring(0, separator).trim();
      var value = toSplit.substring(separator + 1).trim();

      headers[name] = value;
    }

    var out = {
      url: request.url,
      method: request.method,
      status: response.status,
      statusText: response.statusText,
      data: response.responseText,
      headers: headers
    };

    try {
      var possibleObj =  response.responseJSON || jsyaml.safeLoad(response.responseText);
      out.obj = (typeof possibleObj === 'string') ? {} : possibleObj;
    } catch (ex) {
      // do not set out.obj
      helpers.log('unable to parse JSON/YAML content');
    }

    // I can throw, or parse null?
    out.obj = out.obj || null;

    if (response.status >= 200 && response.status < 300) {
      cb.response(out);
    } else if (response.status === 0 || (response.status >= 400 && response.status < 599)) {
      cb.error(out);
    } else {
      return cb.response(out);
    }
  };

  jq.support.cors = true;

  return jq.ajax(obj);
};

SuperagentHttpClient.prototype.execute = function (obj) {
  var method = obj.method.toLowerCase();

  if (method === 'delete') {
    method = 'del';
  }
  var headers = obj.headers || {};
  var r = request[method](obj.url);

  if (obj.enableCookies) {
    r.withCredentials();
  }

  if(obj.body) {
    if(_.isObject(obj.body)) {
      var contentType = obj.headers['Content-Type'] || '';
      if (contentType.indexOf('multipart/form-data') === 0) {
        delete headers['Content-Type'];
        if({}.toString.apply(obj.body) === '[object FormData]') {
          var itr = obj.body.keys();
          while(true) {
            var v = itr.next();
            if(v.done) {
              break;
            }
            var key = v.value;
            var value = obj.body.get(key);
            console.log({}.toString.apply(value));
            if({}.toString.apply(value) === '[object File]') {
              r.attach(key, value);
            }
            else {
              r.field(key, value);
            }
          }
        }
        else {
          var keyname;
          for (var keyname in obj.body) {
            var value = obj.body[keyname];
            r.field(keyname, value);
          }
        }
      }
      else if (_.isObject(obj.body)) {
        obj.body = JSON.stringify(obj.body);
        r.send(obj.body);
      }
    }
    else {
      r.send(obj.body);
    }
  }

  var name;
  for (name in headers) {
    r.set(name, headers[name]);
  }

  if(typeof r.buffer === 'function') {
    r.buffer(); // force superagent to populate res.text with the raw response data
  }

  r.end(function (err, res) {
    res = res || {
      status: 0,
      headers: {error: 'no response from server'}
    };
    var response = {
      url: obj.url,
      method: obj.method,
      headers: res.headers
    };
    var cb;

    if (!err && res.error) {
      err = res.error;
    }

    if (err && obj.on && obj.on.error) {
      response.errObj = err;
      response.status = res ? res.status : 500;
      response.statusText = res ? res.text : err.message;
      if(res.headers && res.headers['content-type']) {
        if(res.headers['content-type'].indexOf('application/json') >= 0) {
          try {
            response.obj = JSON.parse(response.statusText);
          }
          catch (e) {
            response.obj = null;
          }
        }
      }
      cb = obj.on.error;
    } else if (res && obj.on && obj.on.response) {
      var possibleObj;

      // Already parsed by by superagent?
      if(res.body && Object.keys(res.body).length > 0) {
        possibleObj = res.body;
      } else {
          try {
            possibleObj = jsyaml.safeLoad(res.text);
            // can parse into a string... which we don't need running around in the system
            possibleObj = (typeof possibleObj === 'string') ? null : possibleObj;
          } catch(e) {
            helpers.log('cannot parse JSON/YAML content');
          }
      }

      // null means we can't parse into object
      response.obj = (typeof possibleObj === 'object') ? possibleObj : null;

      response.status = res.status;
      response.statusText = res.text;
      cb = obj.on.response;
    }
    response.data = response.statusText;

    if (cb) {
      cb(response);
    }
  });
};

},{"./helpers":4,"js-yaml":19,"lodash-compat/lang/isObject":144,"superagent":158}],6:[function(require,module,exports){
'use strict';

var SwaggerHttp = require('./http');
var _ = {
  isObject: require('lodash-compat/lang/isObject'),
  cloneDeep: require('lodash-compat/lang/cloneDeep'),
  isArray: require('lodash-compat/lang/isArray')
};


/**
 * Resolves a spec's remote references
 */
var Resolver = module.exports = function () {
  this.failedUrls = [];
};

Resolver.prototype.processAllOf = function(root, name, definition, resolutionTable, unresolvedRefs, spec) {
  var i, location, property;

  definition['x-resolved-from'] = [ '#/definitions/' + name ];
  var allOf = definition.allOf;
  // the refs go first
  allOf.sort(function(a, b) {
    if(a.$ref && b.$ref) { return 0; }
    else if(a.$ref) { return -1; }
    else { return 1; }
  });
  for (i = 0; i < allOf.length; i++) {
    property = allOf[i];
    location = '/definitions/' + name + '/allOf';
    this.resolveInline(root, spec, property, resolutionTable, unresolvedRefs, location);
  }
};

Resolver.prototype.resolve = function (spec, arg1, arg2, arg3) {
  this.spec = spec;
  var root = arg1, callback = arg2, scope = arg3, opts = {}, location, i;
  if(typeof arg1 === 'function') {
    root = null;
    callback = arg1;
    scope = arg2;
  }
  var _root = root;
  this.scope = (scope || this);
  this.iteration = this.iteration || 0;

  if(this.scope.options && this.scope.options.requestInterceptor){
    opts.requestInterceptor = this.scope.options.requestInterceptor;
  }

  if(this.scope.options && this.scope.options.responseInterceptor){
    opts.responseInterceptor = this.scope.options.responseInterceptor;
  }

  var name, path, property, propertyName;
  var processedCalls = 0, resolvedRefs = {}, unresolvedRefs = {};
  var resolutionTable = []; // store objects for dereferencing

  spec.definitions = spec.definitions || {};
  // definitions
  for (name in spec.definitions) {
    var definition = spec.definitions[name];
    if(definition['$ref']) {
      this.resolveInline(root, spec, definition, resolutionTable, unresolvedRefs, definition);
    }
    else {
      for (propertyName in definition.properties) {
        property = definition.properties[propertyName];
        if (_.isArray(property.allOf)) {
          this.processAllOf(root, name, property, resolutionTable, unresolvedRefs, spec);
        }
        else {
          this.resolveTo(root, property, resolutionTable, '/definitions');
        }
      }

      if (definition.allOf) {
        this.processAllOf(root, name, definition, resolutionTable, unresolvedRefs, spec);
      }
    }
  }

  // shared parameters
  spec.parameters = spec.parameters || {};
  for(name in spec.parameters) {
    var parameter = spec.parameters[name];
    if (parameter.in === 'body' && parameter.schema) {
      if(_.isArray(parameter.schema.allOf)) {
        // move to a definition
        var modelName = 'inline_model';
        var name = modelName;
        var done = false; var counter = 0;
        while(!done) {
          if(typeof spec.definitions[name] === 'undefined') {
            done = true;
            break;
          }
          name = modelName + '_' + counter;
          counter ++;
        }
        spec.definitions[name] = { allOf: parameter.schema.allOf };
        delete parameter.schema.allOf;
        parameter.schema.$ref = '#/definitions/' + name;
        this.processAllOf(root, name, spec.definitions[name], resolutionTable, unresolvedRefs, spec);
      }
      else {
        this.resolveTo(root, parameter.schema, resolutionTable, location);
      }
    }

    if (parameter.$ref) {
      // parameter reference
      this.resolveInline(root, spec, parameter, resolutionTable, unresolvedRefs, parameter.$ref);
    }
  }

  // operations
  for (name in spec.paths) {
    var method, operation, responseCode;
    path = spec.paths[name];

    for (method in path) {
      // operation reference
      if(method === '$ref') {
        // location = path[method];
        location = '/paths' + name;
        this.resolveInline(root, spec, path, resolutionTable, unresolvedRefs, location);
      }
      else {
        operation = path[method];
        var sharedParameters = path.parameters || [];
        var parameters = operation.parameters || [];

        for (i in sharedParameters) {
          var parameter = sharedParameters[i];
          parameters.unshift(parameter);
        }
        if(method !== 'parameters' && _.isObject(operation)) {
          operation.parameters = operation.parameters || parameters;
        }

        for (i in parameters) {
          var parameter = parameters[i];
          location = '/paths' + name + '/' + method + '/parameters';

          if (parameter.in === 'body' && parameter.schema) {
            if(_.isArray(parameter.schema.allOf)) {
              // move to a definition
              var modelName = 'inline_model';
              var name = modelName;
              var done = false; var counter = 0;
              while(!done) {
                if(typeof spec.definitions[name] === 'undefined') {
                  done = true;
                  break;
                }
                name = modelName + '_' + counter;
                counter ++;
              }
              spec.definitions[name] = { allOf: parameter.schema.allOf };
              delete parameter.schema.allOf;
              parameter.schema.$ref = '#/definitions/' + name;
              this.processAllOf(root, name, spec.definitions[name], resolutionTable, unresolvedRefs, spec);
            }
            else {
              this.resolveTo(root, parameter.schema, resolutionTable, location);
            }
          }

          if (parameter.$ref) {
            // parameter reference
            this.resolveInline(root, spec, parameter, resolutionTable, unresolvedRefs, parameter.$ref);
          }
        }

        for (responseCode in operation.responses) {
          var response = operation.responses[responseCode];
          location = '/paths' + name + '/' + method + '/responses/' + responseCode;

          if(_.isObject(response)) {
            if(response.$ref) {
              // response reference
              this.resolveInline(root, spec, response, resolutionTable, unresolvedRefs, location);
            }
            if (response.schema) {
              var responseObj = response;
              if(_.isArray(responseObj.schema.allOf)) {
                // move to a definition
                var modelName = 'inline_model';
                var name = modelName;
                var done = false; var counter = 0;
                while(!done) {
                  if(typeof spec.definitions[name] === 'undefined') {
                    done = true;
                    break;
                  }
                  name = modelName + '_' + counter;
                  counter ++;
                }
                spec.definitions[name] = { allOf: responseObj.schema.allOf };
                delete responseObj.schema.allOf;
                delete responseObj.schema.type;
                responseObj.schema.$ref = '#/definitions/' + name;
                this.processAllOf(root, name, spec.definitions[name], resolutionTable, unresolvedRefs, spec);
              }
              else if('array' === responseObj.schema.type) {
                if(responseObj.schema.items && responseObj.schema.items.$ref) {
                  // response reference
                  this.resolveInline(root, spec, responseObj.schema.items, resolutionTable, unresolvedRefs, location);
                }
              }
              else {
                this.resolveTo(root, response.schema, resolutionTable, location);
              }
            }
          }
        }
      }
    }
    // clear them out to avoid multiple resolutions
    path.parameters = [];
  }

  var expectedCalls = 0, toResolve = [];
  // if the root is same as obj[i].root we can resolve locally
  var all = resolutionTable;

  var parts;
  for(i = 0; i < all.length; i++) {
    var a = all[i];
    if(root === a.root) {
      if(a.resolveAs === 'ref') {
        // resolve any path walking
        var joined = ((a.root || '') + '/' + a.key).split('/');
        var normalized = [];
        var url = '';
        var k;

        if(a.key.indexOf('../') >= 0) {
          for(var j = 0; j < joined.length; j++) {
            if(joined[j] === '..') {
              normalized = normalized.slice(0, normalized.length-1);
            }
            else {
              normalized.push(joined[j]);
            }
          }
          for(k = 0; k < normalized.length; k ++) {
            if(k > 0) {
              url += '/';
            }
            url += normalized[k];
          }
          // we now have to remote resolve this because the path has changed
          a.root = url;
          toResolve.push(a);
        }
        else {
          parts = a.key.split('#');
          if(parts.length === 2) {
            if(parts[0].indexOf('http://') === 0 || parts[0].indexOf('https://') === 0) {
              a.root = parts[0];
            }
            location = parts[1].split('/');
            var r;
            var s = spec;
            for(k = 0; k < location.length; k++) {
              var part = location[k];
              if(part !== '') {
                s = s[part];
                if(typeof s !== 'undefined') {
                  r = s;
                }
                else {
                  r = null;
                  break;
                }
              }
            }
            if(r === null) {
              // must resolve this too
              toResolve.push(a);
            }
          }
        }
      }
      else {
        if (a.resolveAs === 'inline') {
          if(a.key && a.key.indexOf('#') === -1 && a.key.charAt(0) !== '/') {
            // handle relative schema
            parts = a.root.split('/');
            location = '';
            for(i = 0; i < parts.length - 1; i++) {
              location += parts[i] + '/';
            }
            location += a.key;
            a.root = location;
            a.location = '';
          }
          toResolve.push(a);
        }
      }
    }
    else {
      toResolve.push(a);
    }
  }
  expectedCalls = toResolve.length;

  // resolve anything that is local
  for(var ii = 0; ii < toResolve.length; ii++) {
    (function(item, spec, self) {
      // NOTE: this used to be item.root === null, but I (@ponelat) have added a guard against .split, which means item.root can be ''
      if(!item.root || item.root === root) {
        // local resolve
        self.resolveItem(spec, _root, resolutionTable, resolvedRefs, unresolvedRefs, item);
        processedCalls += 1;

        if(processedCalls === expectedCalls) {
          self.finish(spec, root, resolutionTable, resolvedRefs, unresolvedRefs, callback, true);
        }
      }
      else if(self.failedUrls.indexOf(item.root) === -1) {
        var obj = {
          useJQuery: false,  // TODO
          url: item.root,
          method: 'get',
          headers: {
            accept: self.scope.swaggerRequestHeaders || 'application/json'
          },
          on: {
            error: function (error) {
              processedCalls += 1;
              console.log('failed url: ' + obj.url);
              self.failedUrls.push(obj.url);
              unresolvedRefs[item.key] = {
                root: item.root,
                location: item.location
              };

              if (processedCalls === expectedCalls) {
                self.finish(spec, _root, resolutionTable, resolvedRefs, unresolvedRefs, callback);
              }
            },  // jshint ignore:line
            response: function (response) {
              var swagger = response.obj;
              self.resolveItem(swagger, item.root, resolutionTable, resolvedRefs, unresolvedRefs, item);
              processedCalls += 1;

              if (processedCalls === expectedCalls) {
                self.finish(spec, _root, resolutionTable, resolvedRefs, unresolvedRefs, callback);
              }
            }
          } // jshint ignore:line
        };

        if (scope && scope.clientAuthorizations) {
          scope.clientAuthorizations.apply(obj);
        }

        new SwaggerHttp().execute(obj, opts);
      }
      else {
        processedCalls += 1;
        unresolvedRefs[item.key] = {
          root: item.root,
          location: item.location
        };
        if (processedCalls === expectedCalls) {
          self.finish(spec, _root, resolutionTable, resolvedRefs, unresolvedRefs, callback);
        }
      }
    }(toResolve[ii], spec, this));
  }

  if (Object.keys(toResolve).length === 0) {
    this.finish(spec, _root, resolutionTable, resolvedRefs, unresolvedRefs, callback);
  }
};

Resolver.prototype.resolveItem = function(spec, root, resolutionTable, resolvedRefs, unresolvedRefs, item) {
  var path = item.location;
  var location = spec, parts = path.split('/');
  if(path !== '') {
    for (var j = 0; j < parts.length; j++) {
      var segment = parts[j];
      if (segment.indexOf('~1') !== -1) {
        segment = parts[j].replace(/~0/g, '~').replace(/~1/g, '/');
        if (segment.charAt(0) !== '/') {
          segment = '/' + segment;
        }
      }
      if (typeof location === 'undefined' || location === null) {
        break;
      }
      if (segment === '' && j === (parts.length - 1) && parts.length > 1) {
        location = null;
        break;
      }
      if (segment.length > 0) {
        location = location[segment];
      }
    }
  }
  var resolved = item.key;
  parts = item.key.split('/');
  var resolvedName = parts[parts.length-1];

  if(resolvedName.indexOf('#') >= 0) {
    resolvedName = resolvedName.split('#')[1];
  }

  if (location !== null && typeof location !== 'undefined') {
    resolvedRefs[resolved] = {
      name: resolvedName,
      obj: location,
      key: item.key,
      root: item.root
    };
  } else {
    unresolvedRefs[resolved] = {
      root: item.root,
      location: item.location
    };
  }
};

Resolver.prototype.finish = function (spec, root, resolutionTable, resolvedRefs, unresolvedRefs, callback, localResolve) {
  // walk resolution table and replace with resolved refs
  var ref;
  for (ref in resolutionTable) {
    var item = resolutionTable[ref];

    var key = item.key;
    var resolvedTo = resolvedRefs[key];
    if (resolvedTo) {
      spec.definitions = spec.definitions || {};
      if (item.resolveAs === 'ref') {
        if (localResolve !== true) {
          // don't retain root for local definitions
          for (key in resolvedTo.obj) {
            var abs = this.retainRoot(resolvedTo.obj[key], item.root);
          }
        }
        spec.definitions[resolvedTo.name] = resolvedTo.obj;
        item.obj.$ref = '#/definitions/' + resolvedTo.name;
      } else if (item.resolveAs === 'inline') {
        var targetObj = item.obj;
        targetObj['x-resolved-from'] = [ item.key ];
        delete targetObj.$ref;

        for (key in resolvedTo.obj) {
          var abs = resolvedTo.obj[key];
          
          if (localResolve !== true) {
            // don't retain root for local definitions
            abs = this.retainRoot(resolvedTo.obj[key], item.root);
          }
          targetObj[key] = abs;
        }
      }
    }
  }
  var existingUnresolved = this.countUnresolvedRefs(spec);

  if(existingUnresolved === 0 || this.iteration > 5) {
    this.resolveAllOf(spec.definitions);
    callback.call(this.scope, spec, unresolvedRefs);
  }
  else {
    this.iteration += 1;
    this.resolve(spec, root, callback, this.scope);
  }
};

Resolver.prototype.countUnresolvedRefs = function(spec) {
  var i;
  var refs = this.getRefs(spec);
  var keys = [];
  var unresolvedKeys = [];
  for(i in refs) {
    if(i.indexOf('#') === 0) {
      keys.push(i.substring(1));
    }
    else {
      unresolvedKeys.push(i);
    }
  }

  // verify possible keys
  for (i = 0; i < keys.length; i++) {
    var part = keys[i];
    var parts = part.split('/');
    var obj = spec;

    for (var k = 0; k < parts.length; k++) {
      var key = parts[k];
      if(key !== '') {
        obj = obj[key];
        if(typeof obj === 'undefined') {
          unresolvedKeys.push(part);
          break;
        }
      }
    }
  }
  return unresolvedKeys.length;
};

Resolver.prototype.getRefs = function(spec, obj) {
  obj = obj || spec;
  var output = {};
  for(var key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    var item = obj[key];
    if(key === '$ref' && typeof item === 'string') {
      output[item] = null;
    }
    else if(_.isObject(item)) {
      var o = this.getRefs(item);
      for(var k in o) {
        output[k] = null;
      }
    }
  }
  return output;
};

Resolver.prototype.retainRoot = function(obj, root) {
  // walk object and look for relative $refs
  for(var key in obj) {
    var item = obj[key];
    if(key === '$ref' && typeof item === 'string') {
      // stop and inspect
      if(item.indexOf('http://') !== 0 && item.indexOf('https://') !== 0) {
        // TODO: check if root ends in '/'.  If not, AND item has no protocol, make relative
        var appendHash = true;
        var oldRoot = root;
        if(root) {
          var lastChar = root.slice(-1);
          if(lastChar !== '/' && (item.indexOf('#') !== 0 && item.indexOf('http://') !== 0 && item.indexOf('https://'))) {
            appendHash = false;
            var parts = root.split('\/');
            parts = parts.splice(0, parts.length - 1);
            root = '';
            for(var i = 0; i < parts.length; i++) {
              root += parts[i] + '/';
            }
          }
        }
        if(item.indexOf('#') !== 0 && appendHash) {
          item = '#' + item;
        }

        item = (root || '') + item;
        obj[key] = item;
      }
    }
    else if(_.isObject(item)) {
      this.retainRoot(item, root);
    }
  }
  return obj;
};

/**
 * immediately in-lines local refs, queues remote refs
 * for inline resolution
 */
Resolver.prototype.resolveInline = function (root, spec, property, resolutionTable, unresolvedRefs, location) {
  var key = property.$ref, ref = property.$ref, i, p, p2, rs;
  var rootTrimmed = false;

  root = root || '' // Guard against .split. @fehguy, you'll need to check if this logic fits
  // More imporantly is how do we gracefully handle relative urls, when provided just a 'spec', not a 'url' ?

  if (ref) {
    if(ref.indexOf('../') === 0) {
      // reset root
      p = ref.split('../');
      p2 = root.split('/');
      ref = '';
      for(i = 0; i < p.length; i++) {
        if(p[i] === '') {
          p2 = p2.slice(0, p2.length-1);
        }
        else {
          ref += p[i];
        }
      }
      root = '';
      for(i = 0; i < p2.length - 1; i++) {
        if(i > 0) { root += '/'; }
        root += p2[i];
      }
      rootTrimmed = true;
    }
    if(ref.indexOf('#') >= 0) {
      if(ref.indexOf('/') === 0) {
        rs = ref.split('#');
        p  = root.split('//');
        p2 = p[1].split('/');
        root = p[0] + '//' + p2[0] + rs[0];
        location = rs[1];
      }
      else {
        rs = ref.split('#');
        if(rs[0] !== '') {
          p2 = root.split('/');
          p2 = p2.slice(0, p2.length - 1);
          if(!rootTrimmed) {
            root = '';
            for (var k = 0; k < p2.length; k++) {
              if(k > 0) { root += '/'; }
              root += p2[k];
            }
          }
          root += '/' + ref.split('#')[0];
        }
        location = rs[1];
      }
    }
    if (ref.indexOf('http') === 0) {
      if(ref.indexOf('#') >= 0) {
        root = ref.split('#')[0];
        location = ref.split('#')[1];
      }
      else {
        root = ref;
        location = '';
      }
      resolutionTable.push({obj: property, resolveAs: 'inline', root: root, key: key, location: location});
    } else if (ref.indexOf('#') === 0) {
      location = ref.split('#')[1];
      resolutionTable.push({obj: property, resolveAs: 'inline', root: root, key: key, location: location});
    } else if (ref.indexOf('/') === 0 && ref.indexOf('#') === -1) {
      location = ref;
      var matches = root.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
      if(matches) {
        root = matches[0] + ref.substring(1);
        location = '';
      }
      resolutionTable.push({obj: property, resolveAs: 'inline', root: root, key: key, location: location});
    }
    else {
      resolutionTable.push({obj: property, resolveAs: 'inline', root: root, key: key, location: location});
    }
  }
  else if (property.type === 'array') {
    this.resolveTo(root, property.items, resolutionTable, location);
  }
};

Resolver.prototype.resolveTo = function (root, property, resolutionTable, location) {
  var sp, i;
  var ref = property.$ref;
  var lroot = root;
  if ((typeof ref !== 'undefined') && (ref !== null)) {
    if(ref.indexOf('#') >= 0) {
      var parts = ref.split('#');

      // #/definitions/foo
      // foo.json#/bar
      if(parts[0] && ref.indexOf('/') === 0) {

      }
      else if(parts[0] && parts[0].indexOf('http') === 0) {
        lroot = parts[0];
        ref = parts[1];
      }
      else if(parts[0] && parts[0].length > 0) {
        // relative file
        sp = root.split('/');
        lroot = '';
        for(i = 0; i < sp.length - 1; i++) {
          lroot += sp[i] + '/';
        }
        lroot += parts[0];
      }
      else {

      }

      location = parts[1];
    }
    else if (ref.indexOf('http://') === 0 || ref.indexOf('https://') === 0) {
      lroot = ref;
      location = '';
    }
    else {
      // relative file
      sp = root.split('/');
      lroot = '';
      for(i = 0; i < sp.length - 1; i++) {
        lroot += sp[i] + '/';
      }
      lroot += ref;
      location = '';
    }
    resolutionTable.push({
      obj: property, resolveAs: 'ref', root: lroot, key: ref, location: location
    });
  } else if (property.type === 'array') {
    var items = property.items;
    this.resolveTo(root, items, resolutionTable, location);
  } else {
    if(property && property.properties) {
      var name = this.uniqueName('inline_model');
      if (property.title) {
        name = this.uniqueName(property.title);
      }
      delete property.title;
      this.spec.definitions[name] = _.cloneDeep(property);
      property['$ref'] = '#/definitions/' + name;
      delete property.type;
      delete property.properties;
    }
  }
};

Resolver.prototype.uniqueName = function(base) {
  var name = base;
  var count = 0;
  while(true) {
    if(!_.isObject(this.spec.definitions[name])) {
      return name;
    }
    name = base + '_' + count;
    count++;
  }
};

Resolver.prototype.resolveAllOf = function(spec, obj, depth) {
  depth = depth || 0;
  obj = obj || spec;
  var name;
  for(var key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    var item = obj[key];
    if(item === null) {
      throw new TypeError('Swagger 2.0 does not support null types (' + obj + ').  See https://github.com/swagger-api/swagger-spec/issues/229.');
    }
    if(typeof item === 'object') {
      this.resolveAllOf(spec, item, depth + 1);
    }
    if(item && typeof item.allOf !== 'undefined') {
      var allOf = item.allOf;
      if(_.isArray(allOf)) {
        var output = _.cloneDeep(item);
        delete output.allOf;

        output['x-composed'] = true;
        if (typeof item['x-resolved-from'] !== 'undefined') {
          output['x-resolved-from'] = item['x-resolved-from'];
        }

        for(var i = 0; i < allOf.length; i++) {
          var component = allOf[i];
          var source = 'self';
          if(typeof component['x-resolved-from'] !== 'undefined') {
            source = component['x-resolved-from'][0];
          }

          for(var part in component) {
            if(!output.hasOwnProperty(part)) {
              output[part] = _.cloneDeep(component[part]);
              if(part === 'properties') {
                for(name in output[part]) {
                  output[part][name]['x-resolved-from'] = source;
                }
              }
            }
            else {
              if(part === 'properties') {
                var properties = component[part];
                for(name in properties) {
                  output.properties[name] = _.cloneDeep(properties[name]);
                  var resolvedFrom = properties[name]['x-resolved-from'];
                  if (typeof resolvedFrom === 'undefined' || resolvedFrom === 'self') {
                    resolvedFrom = source;
                  }
                  output.properties[name]['x-resolved-from'] = resolvedFrom;
                }
              }
              else if(part === 'required') {
                // merge & dedup the required array
                var a = output.required.concat(component[part]);
                for(var k = 0; k < a.length; ++k) {
                  for(var j = k + 1; j < a.length; ++j) {
                    if(a[k] === a[j]) { a.splice(j--, 1); }
                  }
                }
                output.required = a;
              }
              else if(part === 'x-resolved-from') {
                output['x-resolved-from'].push(source);
              }
              else {
                // TODO: need to merge this property
                // console.log('what to do with ' + part)
              }
            }
          }
        }
        obj[key] = output;
      }
    }
  }
};

},{"./http":5,"lodash-compat/lang/cloneDeep":138,"lodash-compat/lang/isArray":140,"lodash-compat/lang/isObject":144}],7:[function(require,module,exports){
'use strict';

var Helpers = require('./helpers');

var _ = {
  isPlainObject: require('lodash-compat/lang/isPlainObject'),
  isUndefined: require('lodash-compat/lang/isUndefined'),
  isArray: require('lodash-compat/lang/isArray'),
  isObject: require('lodash-compat/lang/isObject'),
  isEmpty: require('lodash-compat/lang/isEmpty'),
  map: require('lodash-compat/collection/map'),
  indexOf: require('lodash-compat/array/indexOf'),
  cloneDeep: require('lodash-compat/lang/cloneDeep'),
  keys: require('lodash-compat/object/keys'),
  forEach: require('lodash-compat/collection/forEach')
};

module.exports.optionHtml = optionHtml;
module.exports.typeFromJsonSchema = typeFromJsonSchema;
module.exports.getStringSignature = getStringSignature;
module.exports.schemaToHTML = schemaToHTML;
module.exports.schemaToJSON = schemaToJSON;

function optionHtml(label, value) {
  return '<tr><td class="optionName">' + label + ':</td><td>' + value + '</td></tr>';
}

function typeFromJsonSchema(type, format) {
  var str;

  if (type === 'integer' && format === 'int32') {
    str = 'integer';
  } else if (type === 'integer' && format === 'int64') {
    str = 'long';
  } else if (type === 'integer' && typeof format === 'undefined') {
    str = 'long';
  } else if (type === 'string' && format === 'date-time') {
    str = 'date-time';
  } else if (type === 'string' && format === 'date') {
    str = 'date';
  } else if (type === 'number' && format === 'float') {
    str = 'float';
  } else if (type === 'number' && format === 'double') {
    str = 'double';
  } else if (type === 'number' && typeof format === 'undefined') {
    str = 'double';
  } else if (type === 'boolean') {
    str = 'boolean';
  } else if (type === 'string') {
    str = 'string';
  }

  return str;
}

function getStringSignature(obj, baseComponent) {
  var str = '';

  if (typeof obj.$ref !== 'undefined') {
    str += Helpers.simpleRef(obj.$ref);
  } else if (typeof obj.type === 'undefined') {
    str += 'object';
  } else if (obj.type === 'array') {
    if (baseComponent) {
      str += getStringSignature((obj.items || obj.$ref || {}));
    } else {
      str += 'Array[';
      str += getStringSignature((obj.items || obj.$ref || {}));
      str += ']';
    }
  } else if (obj.type === 'integer' && obj.format === 'int32') {
    str += 'integer';
  } else if (obj.type === 'integer' && obj.format === 'int64') {
    str += 'long';
  } else if (obj.type === 'integer' && typeof obj.format === 'undefined') {
    str += 'long';
  } else if (obj.type === 'string' && obj.format === 'date-time') {
    str += 'date-time';
  } else if (obj.type === 'string' && obj.format === 'date') {
    str += 'date';
  } else if (obj.type === 'string' && typeof obj.format === 'undefined') {
    str += 'string';
  } else if (obj.type === 'number' && obj.format === 'float') {
    str += 'float';
  } else if (obj.type === 'number' && obj.format === 'double') {
    str += 'double';
  } else if (obj.type === 'number' && typeof obj.format === 'undefined') {
    str += 'double';
  } else if (obj.type === 'boolean') {
    str += 'boolean';
  } else if (obj.$ref) {
    str += Helpers.simpleRef(obj.$ref);
  } else {
    str += obj.type;
  }

  return str;
}

function schemaToJSON(schema, models, modelsToIgnore, modelPropertyMacro) {
  // Resolve the schema (Handle nested schemas)
  schema = Helpers.resolveSchema(schema);

  if(typeof modelPropertyMacro !== 'function') {
    modelPropertyMacro = function(prop){
      return (prop || {}).default;
    };
  }

  modelsToIgnore= modelsToIgnore || {};

  var type = schema.type || 'object';
  var format = schema.format;
  var model;
  var output;

  if (!_.isUndefined(schema.example)) {
    output = schema.example;
  } else if (_.isUndefined(schema.items) && _.isArray(schema.enum)) {
    output = schema.enum[0];
  }

  if (_.isUndefined(output)) {
    if (schema.$ref) {
      model = models[Helpers.simpleRef(schema.$ref)];

      if (!_.isUndefined(model)) {
        if (_.isUndefined(modelsToIgnore[model.name])) {
          modelsToIgnore[model.name] = model;
          output = schemaToJSON(model.definition, models, modelsToIgnore, modelPropertyMacro);
          delete modelsToIgnore[model.name];
        } else {
          if (model.type === 'array') {
            output = [];
          } else {
            output = {};
          }
        }
      }
    } else if (!_.isUndefined(schema.default)) {
      output = schema.default;
    } else if (type === 'string') {
      if (format === 'date-time') {
        output = new Date().toISOString();
      } else if (format === 'date') {
        output = new Date().toISOString().split('T')[0];
      } else {
        output = 'string';
      }
    } else if (type === 'integer') {
      output = 0;
    } else if (type === 'number') {
      output = 0.0;
    } else if (type === 'boolean') {
      output = true;
    } else if (type === 'object') {
      output = {};

      _.forEach(schema.properties, function (property, name) {
        var cProperty = _.cloneDeep(property);

        // Allow macro to set the default value
        cProperty.default = modelPropertyMacro(property);

        output[name] = schemaToJSON(cProperty, models, modelsToIgnore, modelPropertyMacro);
      });
    } else if (type === 'array') {
      output = [];

      if (_.isArray(schema.items)) {
        _.forEach(schema.items, function (item) {
          output.push(schemaToJSON(item, models, modelsToIgnore, modelPropertyMacro));
        });
      } else if (_.isPlainObject(schema.items)) {
        output.push(schemaToJSON(schema.items, models, modelsToIgnore, modelPropertyMacro));
      } else if (_.isUndefined(schema.items)) {
        output.push({});
      } else {
        Helpers.log('Array type\'s \'items\' property is not an array or an object, cannot process');
      }
    }
  }

  return output;
}

function schemaToHTML(name, schema, models, modelPropertyMacro) {

  var strongOpen = '<span class="strong">';
  var strongClose = '</span>';

  // Allow for ignoring the 'name' argument.... shifting the rest
  if(_.isObject(arguments[0])) {
    name = void 0;
    schema = arguments[0];
    models = arguments[1];
    modelPropertyMacro = arguments[2];
  }

  models = models || {};

  // Resolve the schema (Handle nested schemas)
  schema = Helpers.resolveSchema(schema);

  // Return for empty object
  if(_.isEmpty(schema)) {
    return strongOpen + 'Empty' + strongClose;
  }

  // Dereference $ref from 'models'
  if(typeof schema.$ref === 'string') {
    name = Helpers.simpleRef(schema.$ref);
    schema = models[name];
    if(typeof schema === 'undefined')
    {
      return strongOpen + name + ' is not defined!' + strongClose;
    }
  }

  if(typeof name !== 'string') {
    name = schema.title || 'Inline Model';
  }

  // If we are a Model object... adjust accordingly
  if(schema.definition) {
    schema = schema.definition;
  }

  if(typeof modelPropertyMacro !== 'function') {
    modelPropertyMacro = function(prop){
      return (prop || {}).default;
    };
  }

  var references = {};
  var seenModels = [];
  var inlineModels = 0;



  // Generate current HTML
  var html = processModel(schema, name);

  // Generate references HTML
  while (_.keys(references).length > 0) {
    /* jshint ignore:start */
    _.forEach(references, function (schema, name) {
      var seenModel = _.indexOf(seenModels, name) > -1;

      delete references[name];

      if (!seenModel) {
        seenModels.push(name);

        html += '<br />' + processModel(schema, name);
      }
    });
    /* jshint ignore:end */
  }

  return html;

  /////////////////////////////////

  function addReference(schema, name, skipRef) {
    var modelName = name;
    var model;

    if (schema.$ref) {
      modelName = schema.title || Helpers.simpleRef(schema.$ref);
      model = models[modelName];
    } else if (_.isUndefined(name)) {
      modelName = schema.title || 'Inline Model ' + (++inlineModels);
      model = {definition: schema};
    }

    if (skipRef !== true) {
      references[modelName] = _.isUndefined(model) ? {} : model.definition;
    }

    return modelName;
  }

  function primitiveToHTML(schema) {
    var html = '<span class="propType">';
    var type = schema.type || 'object';

    if (schema.$ref) {
      html += addReference(schema, Helpers.simpleRef(schema.$ref));
    } else if (type === 'object') {
      if (!_.isUndefined(schema.properties)) {
        html += addReference(schema);
      } else {
        html += 'object';
      }
    } else if (type === 'array') {
      html += 'Array[';

      if (_.isArray(schema.items)) {
        html += _.map(schema.items, addReference).join(',');
      } else if (_.isPlainObject(schema.items)) {
        if (_.isUndefined(schema.items.$ref)) {
          if (!_.isUndefined(schema.items.type) && _.indexOf(['array', 'object'], schema.items.type) === -1) {
            html += schema.items.type;
          } else {
            html += addReference(schema.items);
          }
        } else {
          html += addReference(schema.items, Helpers.simpleRef(schema.items.$ref));
        }
      } else {
        Helpers.log('Array type\'s \'items\' schema is not an array or an object, cannot process');
        html += 'object';
      }

      html += ']';
    } else {
      html += schema.type;
    }

    html += '</span>';

    return html;
  }

  function primitiveToOptionsHTML(schema, html) {
    var options = '';
    var type = schema.type || 'object';
    var isArray = type === 'array';

    if (isArray) {
      if (_.isPlainObject(schema.items) && !_.isUndefined(schema.items.type)) {
        type = schema.items.type;
      } else {
        type = 'object';
      }
    }

    if (!_.isUndefined(schema.default)) {
      options += optionHtml('Default', schema.default);
    }

    switch (type) {
    case 'string':
      if (schema.minLength) {
        options += optionHtml('Min. Length', schema.minLength);
      }

      if (schema.maxLength) {
        options += optionHtml('Max. Length', schema.maxLength);
      }

      if (schema.pattern) {
        options += optionHtml('Reg. Exp.', schema.pattern);
      }
      break;
    case 'integer':
    case 'number':
      if (schema.minimum) {
        options += optionHtml('Min. Value', schema.minimum);
      }

      if (schema.exclusiveMinimum) {
        options += optionHtml('Exclusive Min.', 'true');
      }

      if (schema.maximum) {
        options += optionHtml('Max. Value', schema.maximum);
      }

      if (schema.exclusiveMaximum) {
        options += optionHtml('Exclusive Max.', 'true');
      }

      if (schema.multipleOf) {
        options += optionHtml('Multiple Of', schema.multipleOf);
      }

      break;
    }

    if (isArray) {
      if (schema.minItems) {
        options += optionHtml('Min. Items', schema.minItems);
      }

      if (schema.maxItems) {
        options += optionHtml('Max. Items', schema.maxItems);
      }

      if (schema.uniqueItems) {
        options += optionHtml('Unique Items', 'true');
      }

      if (schema.collectionFormat) {
        options += optionHtml('Coll. Format', schema.collectionFormat);
      }
    }

    if (_.isUndefined(schema.items)) {
      if (_.isArray(schema.enum)) {
        var enumString;

        if (type === 'number' || type === 'integer') {
          enumString = schema.enum.join(', ');
        } else {
          enumString = '"' + schema.enum.join('", "') + '"';
        }

        options += optionHtml('Enum', enumString);
      }
    }

    if (options.length > 0) {
      html = '<span class="propWrap">' + html + '<table class="optionsWrapper"><tr><th colspan="2">' + type + '</th></tr>' + options + '</table></span>';
    }

    return html;
  }

  function processModel(schema, name) {
    var type = schema.type || 'object';
    var isArray = schema.type === 'array';
    var html = strongOpen + name + ' ' + (isArray ? '[' : '{') + strongClose;

    if (name) {
      seenModels.push(name);
    }

    if (isArray) {
      if (_.isArray(schema.items)) {
        html += '<div>' + _.map(schema.items, function (item) {
          var type = item.type || 'object';

          if (_.isUndefined(item.$ref)) {
            if (_.indexOf(['array', 'object'], type) > -1) {
              if (type === 'object' && _.isUndefined(item.properties)) {
                return 'object';
              } else {
                return addReference(item);
              }
            } else {
              return primitiveToOptionsHTML(item, type);
            }
          } else {
            return addReference(item, Helpers.simpleRef(item.$ref));
          }
        }).join(',</div><div>');
      } else if (_.isPlainObject(schema.items)) {
        if (_.isUndefined(schema.items.$ref)) {
          if (_.indexOf(['array', 'object'], schema.items.type || 'object') > -1) {
            if ((_.isUndefined(schema.items.type) || schema.items.type === 'object') && _.isUndefined(schema.items.properties)) {
              html += '<div>object</div>';
            } else {
              html += '<div>' + addReference(schema.items) + '</div>';
            }
          } else {
            html += '<div>' + primitiveToOptionsHTML(schema.items, schema.items.type) + '</div>';
          }
        } else {
          html += '<div>' + addReference(schema.items, Helpers.simpleRef(schema.items.$ref)) + '</div>';
        }
      } else {
        Helpers.log('Array type\'s \'items\' property is not an array or an object, cannot process');
        html += '<div>object</div>';
      }
    } else {
      if (schema.$ref) {
        html += '<div>' + addReference(schema, name) + '</div>';
      } else if (type === 'object') {
        if (_.isPlainObject(schema.properties)) {
          var contents = _.map(schema.properties, function (property, name) {
            var propertyIsRequired = (_.indexOf(schema.required, name) >= 0);
            var cProperty = _.cloneDeep(property);

            var requiredClass = propertyIsRequired ? 'required' : '';
            var html = '<span class="propName ' + requiredClass + '">' + name + '</span> (';
            var model;
            var propDescription;

            // Allow macro to set the default value
            cProperty.default = modelPropertyMacro(cProperty);

            // Resolve the schema (Handle nested schemas)
            cProperty = Helpers.resolveSchema(cProperty);

            propDescription = property.description || cProperty.description;

            // We need to handle property references to primitives (Issue 339)
            if (!_.isUndefined(cProperty.$ref)) {
              model = models[Helpers.simpleRef(cProperty.$ref)];

              if (!_.isUndefined(model) && _.indexOf([undefined, 'array', 'object'], model.definition.type) === -1) {
                // Use referenced schema
                cProperty = Helpers.resolveSchema(model.definition);
              }
            }

            html += primitiveToHTML(cProperty);

            if(!propertyIsRequired) {
              html += ', <span class="propOptKey">optional</span>';
            }

            if(property.readOnly) {
                html += ', <span class="propReadOnly">read only</span>';
            }

            html += ')';

            if (!_.isUndefined(propDescription)) {
              html += ': ' + '<span class="propDesc">' + propDescription + '</span>';
            }

            if (cProperty.enum) {
              html += ' = <span class="propVals">[\'' + cProperty.enum.join('\', \'') + '\']</span>';
            }

            return '<div' + (property.readOnly ? ' class="readOnly"' : '') + '>' + primitiveToOptionsHTML(cProperty, html);
          }).join(',</div>');

          if (contents) {
            html += contents + '</div>';
          }
        }
      } else {
        html += '<div>' + primitiveToOptionsHTML(schema, type) + '</div>';
      }
    }

    return html + strongOpen + (isArray ? ']' : '}') + strongClose;
  }
}

},{"./helpers":4,"lodash-compat/array/indexOf":49,"lodash-compat/collection/forEach":54,"lodash-compat/collection/map":56,"lodash-compat/lang/cloneDeep":138,"lodash-compat/lang/isArray":140,"lodash-compat/lang/isEmpty":141,"lodash-compat/lang/isObject":144,"lodash-compat/lang/isPlainObject":145,"lodash-compat/lang/isUndefined":148,"lodash-compat/object/keys":149}],8:[function(require,module,exports){
'use strict';

var SwaggerHttp = require('./http');
var _ = {
  isObject: require('lodash-compat/lang/isObject')
};

var SwaggerSpecConverter = module.exports = function () {
  this.errors = [];
  this.warnings = [];
  this.modelMap = {};
};

SwaggerSpecConverter.prototype.setDocumentationLocation = function (location) {
  this.docLocation = location;
};

/**
 * converts a resource listing OR api declaration
 **/
SwaggerSpecConverter.prototype.convert = function (obj, clientAuthorizations, opts, callback) {
  // not a valid spec
  if(!obj || !Array.isArray(obj.apis)) {
    return this.finish(callback, null);
  }
  this.clientAuthorizations = clientAuthorizations;

  // create a new swagger object to return
  var swagger = { swagger: '2.0' };

  swagger.originalVersion = obj.swaggerVersion;

  // add the info
  this.apiInfo(obj, swagger);

  // add security definitions
  this.securityDefinitions(obj, swagger);

  // take basePath into account
  if (obj.basePath) {
    this.setDocumentationLocation(obj.basePath);
  }

  // see if this is a single-file swagger definition
  var isSingleFileSwagger = false;
  var i;
  for(i = 0; i < obj.apis.length; i++) {
    var api = obj.apis[i];
    if(Array.isArray(api.operations)) {
      isSingleFileSwagger = true;
    }
  }
  if(isSingleFileSwagger) {
    this.declaration(obj, swagger);
    this.finish(callback, swagger);
  }
  else {
    this.resourceListing(obj, swagger, opts, callback);
  }
};

SwaggerSpecConverter.prototype.declaration = function(obj, swagger) {
  var name, i, p, pos;
  if(!obj.apis) {
    return;
  }

  if (obj.basePath.indexOf('http://') === 0) {
    p = obj.basePath.substring('http://'.length);
    pos = p.indexOf('/');
    if (pos > 0) {
      swagger.host = p.substring(0, pos);
      swagger.basePath = p.substring(pos);
    }
    else {
      swagger.host = p;
      swagger.basePath = '/';
    }
  } else if (obj.basePath.indexOf('https://') === 0) {
    p = obj.basePath.substring('https://'.length);
    pos = p.indexOf('/');
    if (pos > 0) {
      swagger.host = p.substring(0, pos);
      swagger.basePath = p.substring(pos);
    }
    else {
      swagger.host = p;
      swagger.basePath = '/';
    }
  } else {
    swagger.basePath = obj.basePath;
  }

  var resourceLevelAuth;
  if(obj.authorizations) {
    resourceLevelAuth = obj.authorizations;
  }
  if(obj.consumes) {
    swagger.consumes = obj.consumes;
  }
  if(obj.produces) {
    swagger.produces = obj.produces;
  }

  // build a mapping of id to name for 1.0 model resolutions
  if(_.isObject(obj)) {
    for(name in obj.models) {
      var existingModel = obj.models[name];
      var key = (existingModel.id || name);
      this.modelMap[key] = name;
    }
  }

  for(i = 0; i < obj.apis.length; i++) {
    var api = obj.apis[i];
    var path = api.path;
    var operations = api.operations;
    this.operations(path, obj.resourcePath, operations, resourceLevelAuth, swagger);
  }

  var models = obj.models || {};
  this.models(models, swagger);
};

SwaggerSpecConverter.prototype.models = function(obj, swagger) {
  if(!_.isObject(obj)) {
    return;
  }
  var name;

  swagger.definitions = swagger.definitions || {};
  for(name in obj) {
    var existingModel = obj[name];
    var _required = [];
    var schema = { properties: {}};
    var propertyName;
    for(propertyName in existingModel.properties) {
      var existingProperty = existingModel.properties[propertyName];
      var property = {};
      this.dataType(existingProperty, property);
      if(existingProperty.description) {
        property.description = existingProperty.description;
      }
      if(existingProperty['enum']) {
        property['enum'] = existingProperty['enum'];
      }
      if(typeof existingProperty.required === 'boolean' && existingProperty.required === true) {
        _required.push(propertyName);
      }
      if(typeof existingProperty.required === 'string' && existingProperty.required === 'true') {
        _required.push(propertyName);
      }
      schema.properties[propertyName] = property;
    }
    if(_required.length > 0) {
      schema.required = _required;
    } else {
      schema.required = existingModel.required;
    }
    swagger.definitions[name] = schema;
  }
};

SwaggerSpecConverter.prototype.extractTag = function(resourcePath) {
  var pathString = resourcePath || 'default';
  if(pathString.indexOf('http:') === 0 || pathString.indexOf('https:') === 0) {
    pathString = pathString.split(['/']);
    pathString = pathString[pathString.length -1].substring();
  }
  if(pathString.endsWith('.json')) {
    pathString = pathString.substring(0, pathString.length - '.json'.length);
  }
  return pathString.replace('/','');
};

SwaggerSpecConverter.prototype.operations = function(path, resourcePath, obj, resourceLevelAuth, swagger) {
  if(!Array.isArray(obj)) {
    return;
  }
  var i;

  if(!swagger.paths) {
    swagger.paths = {};
  }

  var pathObj = swagger.paths[path] || {};
  var tag = this.extractTag(resourcePath);
  swagger.tags = swagger.tags || [];
  var matched = false;
  for(i = 0; i < swagger.tags.length; i++) {
    var tagObject = swagger.tags[i];
    if(tagObject.name === tag) {
      matched = true;
    }
  }
  if(!matched) {
    swagger.tags.push({name: tag});
  }

  for(i = 0; i < obj.length; i++) {
    var existingOperation = obj[i];
    var method = (existingOperation.method || existingOperation.httpMethod).toLowerCase();
    var operation = {tags: [tag]};
    var existingAuthorizations = existingOperation.authorizations;

    if(existingAuthorizations && Object.keys(existingAuthorizations).length === 0) {
      existingAuthorizations = resourceLevelAuth;
    }

    if(typeof existingAuthorizations !== 'undefined') {
      var scopesObject;
      for(var key in existingAuthorizations) {
        operation.security = operation.security || [];
        var scopes = existingAuthorizations[key];
        if(scopes) {
          var securityScopes = [];
          for(var j in scopes) {
            securityScopes.push(scopes[j].scope);
          }
          scopesObject = {};
          scopesObject[key] = securityScopes;
          operation.security.push(scopesObject);
        }
        else {
          scopesObject = {};
          scopesObject[key] = [];
          operation.security.push(scopesObject);
        }
      }
    }

    if(existingOperation.consumes) {
      operation.consumes = existingOperation.consumes;
    }
    else if(swagger.consumes) {
      operation.consumes = swagger.consumes;
    }
    if(existingOperation.produces) {
      operation.produces = existingOperation.produces;
    }
    else if(swagger.produces) {
      operation.produces = swagger.produces;
    }
    if(existingOperation.summary) {
      operation.summary = existingOperation.summary;
    }
    if(existingOperation.notes) {
      operation.description = existingOperation.notes;
    }
    if(existingOperation.nickname) {
      operation.operationId = existingOperation.nickname;
    }
    if(existingOperation.deprecated) {
      operation.deprecated = existingOperation.deprecated;
    }

    this.authorizations(existingAuthorizations, swagger);
    this.parameters(operation, existingOperation.parameters, swagger);
    this.responseMessages(operation, existingOperation, swagger);

    pathObj[method] = operation;
  }

  swagger.paths[path] = pathObj;
};

SwaggerSpecConverter.prototype.responseMessages = function(operation, existingOperation) {
  if(!_.isObject(existingOperation)) {
    return;
  }
  // build default response from the operation (1.x)
  var defaultResponse = {};
  this.dataType(existingOperation, defaultResponse);
  // TODO: look into the real problem of rendering responses in swagger-ui
  // ....should reponseType have an implicit schema?
  if(!defaultResponse.schema && defaultResponse.type) {
    defaultResponse = {schema: defaultResponse};
  }

  operation.responses = operation.responses || {};

  // grab from responseMessages (1.2)
  var has200 = false;
  if(Array.isArray(existingOperation.responseMessages)) {
    var i;
    var existingResponses = existingOperation.responseMessages;
    for(i = 0; i < existingResponses.length; i++) {
      var existingResponse = existingResponses[i];
      var response = { description: existingResponse.message };
      if(existingResponse.code === 200) {
        has200 = true;
      }
      // Convert responseModel -> schema{$ref: responseModel}
      if(existingResponse.responseModel) {
        response.schema = {'$ref': '#/definitions/' + existingResponse.responseModel};
      }
      operation.responses['' + existingResponse.code] = response;
    }
  }

  if(has200) {
    operation.responses['default'] = defaultResponse;
  }
  else {
    operation.responses['200'] = defaultResponse;
  }
};

SwaggerSpecConverter.prototype.authorizations = function(obj) {
  // TODO
  if(!_.isObject(obj)) {
    return;
  }
};

SwaggerSpecConverter.prototype.parameters = function(operation, obj) {
  if(!Array.isArray(obj)) {
    return;
  }
  var i;
  for(i = 0; i < obj.length; i++) {
    var existingParameter = obj[i];
    var parameter = {};
    parameter.name = existingParameter.name;
    parameter.description = existingParameter.description;
    parameter.required = existingParameter.required;
    parameter.in = existingParameter.paramType;

    // per #168
    if(parameter.in === 'body') {
      parameter.name = 'body';
    }
    if(parameter.in === 'form') {
      parameter.in = 'formData';
    }

    if(existingParameter.enum) {
      parameter.enum = existingParameter.enum;
    }

    if(existingParameter.allowMultiple === true || existingParameter.allowMultiple === 'true') {
      var innerType = {};
      this.dataType(existingParameter, innerType);
      parameter.type = 'array';
      parameter.items = innerType;

      if(existingParameter.allowableValues) {
        var av = existingParameter.allowableValues;
        if(av.valueType === 'LIST') {
          parameter['enum'] = av.values;
        }
      }
    }
    else {
      this.dataType(existingParameter, parameter);
    }
    if(typeof existingParameter.defaultValue !== 'undefined') {
      parameter.default = existingParameter.defaultValue;
    }

    operation.parameters = operation.parameters || [];
    operation.parameters.push(parameter);
  }
};

SwaggerSpecConverter.prototype.dataType = function(source, target) {
  if(!_.isObject(source)) {
    return;
  }

  if(source.minimum) {
    target.minimum = source.minimum;
  }
  if(source.maximum) {
    target.maximum = source.maximum;
  }
  if (source.format) {
    target.format = source.format;
  }

  // default can be 'false'
  if(typeof source.defaultValue !== 'undefined') {
    target.default = source.defaultValue;
  }

  var jsonSchemaType = this.toJsonSchema(source);
  if(jsonSchemaType) {
    target = target || {};
    if(jsonSchemaType.type) {
      target.type = jsonSchemaType.type;
    }
    if(jsonSchemaType.format) {
      target.format = jsonSchemaType.format;
    }
    if(jsonSchemaType.$ref) {
      target.schema = {$ref: jsonSchemaType.$ref};
    }
    if(jsonSchemaType.items) {
      target.items = jsonSchemaType.items;
    }
  }
};

SwaggerSpecConverter.prototype.toJsonSchema = function(source) {
  if(!source) {
    return 'object';
  }
  var detectedType = (source.type || source.dataType || source.responseClass || '');
  var lcType = detectedType.toLowerCase();
  var format = (source.format || '').toLowerCase();

  if(lcType.indexOf('list[') === 0) {
    var innerType = detectedType.substring(5, detectedType.length - 1);
    var jsonType = this.toJsonSchema({type: innerType});
    return {type: 'array', items: jsonType};
  } else if(lcType === 'int' || (lcType === 'integer' && format === 'int32')) {
    {return {type: 'integer', format: 'int32'};}
  } else if(lcType === 'long' || (lcType === 'integer' && format === 'int64')) {
    {return {type: 'integer', format: 'int64'};}
  } else if(lcType === 'integer') {
    {return {type: 'integer', format: 'int64'};}
  } else if(lcType === 'float' || (lcType === 'number' && format === 'float')) {
    {return {type: 'number', format: 'float'};}
  } else if(lcType === 'double' || (lcType === 'number' && format === 'double')) {
    {return {type: 'number', format: 'double'};}
  } else if((lcType === 'string' && format === 'date-time') || (lcType === 'date')) {
    {return {type: 'string', format: 'date-time'};}
  } else if(lcType === 'string') {
    {return {type: 'string'};}
  } else if(lcType === 'file') {
    {return {type: 'file'};}
  } else if(lcType === 'boolean') {
    {return {type: 'boolean'};}
  } else if(lcType === 'boolean') {
    {return {type: 'boolean'};}
  } else if(lcType === 'array' || lcType === 'list') {
    if(source.items) {
      var it = this.toJsonSchema(source.items);
      return {type: 'array', items: it};
    }
    else {
      return {type: 'array', items: {type: 'object'}};
    }
  } else if(source.$ref) {
    return {$ref: this.modelMap[source.$ref] ? '#/definitions/' + this.modelMap[source.$ref] : source.$ref};
  } else if(lcType === 'void' || lcType === '') {
    {return {};}
  } else if (this.modelMap[source.type]) {
    // If this a model using `type` instead of `$ref`, that's fine.
    return {$ref: '#/definitions/' + this.modelMap[source.type]};
  } else {
    // Unknown model type or 'object', pass it along.
    return {type: source.type};
  }
};

SwaggerSpecConverter.prototype.resourceListing = function(obj, swagger, opts, callback) {
  var i;
  var processedCount = 0;   // jshint ignore:line
  var self = this;          // jshint ignore:line
  var expectedCount = obj.apis.length;
  var _swagger = swagger;   // jshint ignore:line
  var _opts = {};

  if(opts && opts.requestInterceptor){
    _opts.requestInterceptor = opts.requestInterceptor;
  }

  if(opts && opts.responseInterceptor){
    _opts.responseInterceptor = opts.responseInterceptor;
  }

  var swaggerRequestHeaders = 'application/json';

  if(opts && opts.swaggerRequestHeaders) {
    swaggerRequestHeaders = opts.swaggerRequestHeaders;
  }

  if(expectedCount === 0) {
    this.finish(callback, swagger);
  }

  for(i = 0; i < expectedCount; i++) {
    var api = obj.apis[i];
    var path = api.path;
    var absolutePath = this.getAbsolutePath(obj.swaggerVersion, this.docLocation, path);

    if(api.description) {
      swagger.tags = swagger.tags || [];
      swagger.tags.push({
        name : this.extractTag(api.path),
        description : api.description || ''
      });
    }
    var http = {
      url: absolutePath,
      headers: { accept: swaggerRequestHeaders },
      on: {},
      method: 'get'
    };
    /* jshint ignore:start */
    http.on.response = function(data) {
      processedCount += 1;
      var obj = data.obj;
      if(obj) {
        self.declaration(obj, _swagger);
      }
      if(processedCount === expectedCount) {
        self.finish(callback, _swagger);
      }
    };
    http.on.error = function(data) {
      console.error(data);
      processedCount += 1;
      if(processedCount === expectedCount) {
        self.finish(callback, _swagger);
      }
    };
    /* jshint ignore:end */

    if(this.clientAuthorizations && typeof this.clientAuthorizations.apply === 'function') {
      this.clientAuthorizations.apply(http);
    }

    new SwaggerHttp().execute(http, _opts);
  }
};

SwaggerSpecConverter.prototype.getAbsolutePath = function(version, docLocation, path)  {
  if(version === '1.0') {
    if(docLocation.endsWith('.json')) {
      // get root path
      var pos = docLocation.lastIndexOf('/');
      if(pos > 0) {
        docLocation = docLocation.substring(0, pos);
      }
    }
  }

  var location = docLocation;
  if(path.indexOf('http://') === 0 || path.indexOf('https://') === 0) {
    location = path;
  }
  else {
    if(docLocation.endsWith('/')) {
      location = docLocation.substring(0, docLocation.length - 1);
    }
    location += path;
  }
  location = location.replace('{format}', 'json');
  return location;
};

SwaggerSpecConverter.prototype.securityDefinitions = function(obj, swagger) {
  if(obj.authorizations) {
    var name;
    for(name in obj.authorizations) {
      var isValid = false;
      var securityDefinition = {};
      var definition = obj.authorizations[name];
      if(definition.type === 'apiKey') {
        securityDefinition.type = 'apiKey';
        securityDefinition.in = definition.passAs;
        securityDefinition.name = definition.keyname || name;
        isValid = true;
      }
      else if(definition.type === 'basicAuth') {
        securityDefinition.type = 'basicAuth';
        isValid = true;
      }
      else if(definition.type === 'oauth2') {
        var existingScopes = definition.scopes || [];
        var scopes = {};
        var i;
        for(i in existingScopes) {
          var scope = existingScopes[i];
          scopes[scope.scope] = scope.description;
        }
        securityDefinition.type = 'oauth2';
        if(i > 0) {
          securityDefinition.scopes = scopes;
        }
        if(definition.grantTypes) {
          if(definition.grantTypes.implicit) {
            var implicit = definition.grantTypes.implicit;
            securityDefinition.flow = 'implicit';
            securityDefinition.authorizationUrl = implicit.loginEndpoint;
            isValid = true;
          }
          /* jshint ignore:start */
          if(definition.grantTypes['authorization_code']) {
            if(!securityDefinition.flow) {
              // cannot set if flow is already defined
              var authCode = definition.grantTypes['authorization_code'];
              securityDefinition.flow = 'accessCode';
              securityDefinition.authorizationUrl = authCode.tokenRequestEndpoint.url;
              securityDefinition.tokenUrl = authCode.tokenEndpoint.url;
              isValid = true;
            }
          }
          /* jshint ignore:end */
        }
      }
      if(isValid) {
        swagger.securityDefinitions = swagger.securityDefinitions || {};
        swagger.securityDefinitions[name] = securityDefinition;
      }
    }
  }
};

SwaggerSpecConverter.prototype.apiInfo = function(obj, swagger) {
  // info section
  if(obj.info) {
    var info = obj.info;
    swagger.info = {};

    if(info.contact) {
      swagger.info.contact = {};
      swagger.info.contact.email = info.contact;
    }
    if(info.description) {
      swagger.info.description = info.description;
    }
    if(info.title) {
      swagger.info.title = info.title;
    }
    if(info.termsOfServiceUrl) {
      swagger.info.termsOfService = info.termsOfServiceUrl;
    }
    if(info.license || info.licenseUrl) {
      swagger.license = {};
      if(info.license) {
        swagger.license.name = info.license;
      }
      if(info.licenseUrl) {
        swagger.license.url = info.licenseUrl;
      }
    }
  }
  else {
    this.warnings.push('missing info section');
  }
};

SwaggerSpecConverter.prototype.finish = function (callback, obj) {
  callback(obj);
};

},{"./http":5,"lodash-compat/lang/isObject":144}],9:[function(require,module,exports){
'use strict';

var log = require('../helpers').log;
var _ = {
  isPlainObject: require('lodash-compat/lang/isPlainObject'),
  isString: require('lodash-compat/lang/isString'),
};

var SchemaMarkup = require('../schema-markup.js');
var jsyaml = require('js-yaml');

var Model = module.exports = function (name, definition, models, modelPropertyMacro) {
  this.definition = definition || {};
  this.isArray = definition.type === 'array';
  this.models = models || {};
  this.name = name || definition.title || 'Inline Model';
  this.modelPropertyMacro = modelPropertyMacro || function (property) {
    return property.default;
  };

  return this;
};

// Note!  This function will be removed in 2.2.x!
Model.prototype.createJSONSample = Model.prototype.getSampleValue = function (modelsToIgnore) {
  modelsToIgnore = modelsToIgnore || {};

  modelsToIgnore[this.name] = this;

  // Response support
  if (this.examples && _.isPlainObject(this.examples) && this.examples['application/json']) {
    this.definition.example = this.examples['application/json'];

    if (_.isString(this.definition.example)) {
      this.definition.example = jsyaml.safeLoad(this.definition.example);
    }
  } else if (!this.definition.example) {
    this.definition.example = this.examples;
  }

  return SchemaMarkup.schemaToJSON(this.definition, this.models, modelsToIgnore, this.modelPropertyMacro);
};

Model.prototype.getMockSignature = function () {
  return SchemaMarkup.schemaToHTML(this.name, this.definition, this.models, this.modelPropertyMacro);
};

},{"../helpers":4,"../schema-markup.js":7,"js-yaml":19,"lodash-compat/lang/isPlainObject":145,"lodash-compat/lang/isString":146}],10:[function(require,module,exports){
'use strict';

var _ = {
  cloneDeep: require('lodash-compat/lang/cloneDeep'),
  isUndefined: require('lodash-compat/lang/isUndefined'),
  isEmpty: require('lodash-compat/lang/isEmpty'),
  isObject: require('lodash-compat/lang/isObject')
};
var helpers = require('../helpers');
var Model = require('./model');
var SwaggerHttp = require('../http');
var Q = require('q');

var Operation = module.exports = function (parent, scheme, operationId, httpMethod, path, args, definitions, models, clientAuthorizations) {
  var errors = [];

  parent = parent || {};
  args = args || {};

  if(parent && parent.options) {
    this.client = parent.options.client || null;
    this.requestInterceptor = parent.options.requestInterceptor || null;
    this.responseInterceptor = parent.options.responseInterceptor || null;
  }
  this.authorizations = args.security;
  this.basePath = parent.basePath || '/';
  this.clientAuthorizations = clientAuthorizations;
  this.consumes = args.consumes || parent.consumes || ['application/json'];
  this.produces = args.produces || parent.produces || ['application/json'];
  this.deprecated = args.deprecated;
  this.description = args.description;
  this.host = parent.host || 'localhost';
  this.method = (httpMethod || errors.push('Operation ' + operationId + ' is missing method.'));
  this.models = models || {};
  this.nickname = (operationId || errors.push('Operations must have a nickname.'));
  this.operation = args;
  this.operations = {};
  this.parameters = args !== null ? (args.parameters || []) : {};
  this.parent = parent;
  this.path = (path || errors.push('Operation ' + this.nickname + ' is missing path.'));
  this.responses = (args.responses || {});
  this.scheme = scheme || parent.scheme || 'http';
  this.schemes = args.schemes || parent.schemes;
  this.security = args.security || parent.security;
  this.summary = args.summary || '';
  this.type = null;
  this.useJQuery = parent.useJQuery;
  this.jqueryAjaxCache = parent.jqueryAjaxCache;
  this.enableCookies = parent.enableCookies;
  this.parameterMacro = parent.parameterMacro || function (operation, parameter) {
    return parameter.default;
  };

  this.inlineModels = [];

  if(this.basePath !== '/' && this.basePath.slice(-1) == '/') {
    this.basePath = this.basePath.slice(0, -1);
  }

  if (typeof this.deprecated === 'string') {
    switch(this.deprecated.toLowerCase()) {
      case 'true': case 'yes': case '1': {
        this.deprecated = true;
        break;
      }

      case 'false': case 'no': case '0': case null: {
        this.deprecated = false;
        break;
      }

      default: this.deprecated = Boolean(this.deprecated);
    }
  }

  var i, model;

  if (definitions) {
    // add to global models
    var key;

    for (key in definitions) {
      model = new Model(key, definitions[key], this.models, parent.modelPropertyMacro);

      if (model) {
        this.models[key] = model;
      }
    }
  }
  else {
    definitions = {};
  }

  for (i = 0; i < this.parameters.length; i++) {
    var param = this.parameters[i];

    // Allow macro to set the default value
    param.default = this.parameterMacro(this, param);

    if (param.type === 'array') {
      param.isList = true;
      param.allowMultiple = true;
      // the enum can be defined at the items level
      //if (param.items && param.items.enum) {
      //  param['enum'] = param.items.enum;
      //}
    }

    var innerType = this.getType(param);

    if (innerType && innerType.toString().toLowerCase() === 'boolean') {
      param.allowableValues = {};
      param.isList = true;
      param['enum'] = [true, false]; // use actual primitives
    }

    if(typeof param['x-example'] !== 'undefined') {
      var d = param['x-example'];
      param.default = d;
    }
    if(param['x-examples']) {
      var d = param['x-examples'].default;
      if(typeof d !== 'undefined') {
        param.default = d;
      }
    }

    var enumValues = param['enum'] || (param.items && param.items['enum']);

    if (typeof enumValues !== 'undefined') {
      var id;

      param.allowableValues = {};
      param.allowableValues.values = [];
      param.allowableValues.descriptiveValues = [];

      for (id = 0; id < enumValues.length; id++) {
        var value = enumValues[id];
        var isDefault = (value === param.default || value+'' === param.default);

        param.allowableValues.values.push(value);
        // Always have string for descriptive values....
        param.allowableValues.descriptiveValues.push({value : value+'', isDefault: isDefault});
      }
    }

    if (param.type === 'array') {
      innerType = [innerType];

      if (typeof param.allowableValues === 'undefined') {
        // can't show as a list if no values to select from
        delete param.isList;
        delete param.allowMultiple;
      }
    }

    param.modelSignature = {type: innerType, definitions: this.models};
    param.signature = this.getModelSignature(innerType, this.models).toString();
    param.sampleJSON = this.getModelSampleJSON(innerType, this.models);
    param.responseClassSignature = param.signature;
  }

  var defaultResponseCode, response, responses = this.responses;

  if (responses['200']) {
    response = responses['200'];
    defaultResponseCode = '200';
  } else if (responses['201']) {
    response = responses['201'];
    defaultResponseCode = '201';
  } else if (responses['202']) {
    response = responses['202'];
    defaultResponseCode = '202';
  } else if (responses['203']) {
    response = responses['203'];
    defaultResponseCode = '203';
  } else if (responses['204']) {
    response = responses['204'];
    defaultResponseCode = '204';
  } else if (responses['205']) {
    response = responses['205'];
    defaultResponseCode = '205';
  } else if (responses['206']) {
    response = responses['206'];
    defaultResponseCode = '206';
  } else if (responses['default']) {
    response = responses['default'];
    defaultResponseCode = 'default';
  }

  if (response && response.schema) {
    var resolvedModel = this.resolveModel(response.schema, definitions);
    var successResponse;

    delete responses[defaultResponseCode];

    if (resolvedModel) {
      this.successResponse = {};
      successResponse = this.successResponse[defaultResponseCode] = resolvedModel;
    } else if (!response.schema.type || response.schema.type === 'object' || response.schema.type === 'array') {
      // Inline model
      this.successResponse = {};
      successResponse = this.successResponse[defaultResponseCode] = new Model(undefined, response.schema || {}, this.models, parent.modelPropertyMacro);
    } else {
      // Primitive
      this.successResponse = {};
      successResponse = this.successResponse[defaultResponseCode] = response.schema;
    }

    if (successResponse) {
      // Attach response properties
      if (response.description) {
        successResponse.description = response.description;
      }

      if (response.examples) {
        successResponse.examples = response.examples;
      }

      if (response.headers) {
        successResponse.headers = response.headers;
      }
    }

    this.type = response;
  }

  if (errors.length > 0) {
    if (this.resource && this.resource.api && this.resource.api.fail) {
      this.resource.api.fail(errors);
    }
  }

  return this;
};

Operation.prototype.isDefaultArrayItemValue = function(value, param) {
  if (param.default && Array.isArray(param.default)) {
    return param.default.indexOf(value) !== -1;
  }
  return value === param.default;
};

Operation.prototype.getType = function (param) {
  var type = param.type;
  var format = param.format;
  var isArray = false;
  var str;

  if (type === 'integer' && format === 'int32') {
    str = 'integer';
  } else if (type === 'integer' && format === 'int64') {
    str = 'long';
  } else if (type === 'integer') {
    str = 'integer';
  } else if (type === 'string') {
    if (format === 'date-time') {
      str = 'date-time';
    } else if (format === 'date') {
      str = 'date';
    } else {
      str = 'string';
    }
  } else if (type === 'number' && format === 'float') {
    str = 'float';
  } else if (type === 'number' && format === 'double') {
    str = 'double';
  } else if (type === 'number') {
    str = 'double';
  } else if (type === 'boolean') {
    str = 'boolean';
  } else if (type === 'array') {
    isArray = true;

    if (param.items) {
      str = this.getType(param.items);
    }
  } else if (type === 'file') {
    str = 'file';
  }

  if (param.$ref) {
    str = helpers.simpleRef(param.$ref);
  }

  var schema = param.schema;

  if (schema) {
    var ref = schema.$ref;

    if (ref) {
      ref = helpers.simpleRef(ref);

      if (isArray) {
        return [ ref ];
      } else {
        return ref;
      }
    } else {
      // If inline schema, we add it our interal hash -> which gives us it's ID (int)
      if(schema.type === 'object') {
        return this.addInlineModel(schema);
      }
      return this.getType(schema);
    }
  }
  if (isArray) {
    return [ str ];
  } else {
    return str;
  }
};

/**
 * adds an inline schema (model) to a hash, where we can ref it later
 * @param {object} schema a schema
 * @return {number} the ID of the schema being added, or null
 **/
Operation.prototype.addInlineModel = function (schema) {
  var len = this.inlineModels.length;
  var model = this.resolveModel(schema, {});
  if(model) {
    this.inlineModels.push(model);
    return 'Inline Model '+len; // return string ref of the inline model (used with #getInlineModel)
  }
  return null; // report errors?
};

/**
 * gets the internal ref to an inline model
 * @param {string} inline_str a string reference to an inline model
 * @return {Model} the model being referenced. Or null
 **/
Operation.prototype.getInlineModel = function(inlineStr) {
  if(/^Inline Model \d+$/.test(inlineStr)) {
    var id = parseInt(inlineStr.substr('Inline Model'.length).trim(),10); //
    var model = this.inlineModels[id];
    return model;
  }
  // I'm returning null here, should I rather throw an error?
  return null;
};

Operation.prototype.resolveModel = function (schema, definitions) {
  if (typeof schema.$ref !== 'undefined') {
    var ref = schema.$ref;

    if (ref.indexOf('#/definitions/') === 0) {
      ref = ref.substring('#/definitions/'.length);
    }

    if (definitions[ref]) {
      return new Model(ref, definitions[ref], this.models, this.parent.modelPropertyMacro);
    }
  // schema must at least be an object to get resolved to an inline Model
  } else if (schema && typeof schema === 'object' &&
            (schema.type === 'object' || _.isUndefined(schema.type))) {
    return new Model(undefined, schema, this.models, this.parent.modelPropertyMacro);
  }

  return null;
};

Operation.prototype.help = function (dontPrint) {
  var out = this.nickname + ': ' + this.summary + '\n';

  for (var i = 0; i < this.parameters.length; i++) {
    var param = this.parameters[i];
    var typeInfo = param.signature;

    out += '\n  * ' + param.name + ' (' + typeInfo + '): ' + param.description;
  }

  if (typeof dontPrint === 'undefined') {
    helpers.log(out);
  }

  return out;
};

Operation.prototype.getModelSignature = function (type, definitions) {
  var isPrimitive, listType;

  if (type instanceof Array) {
    listType = true;
    type = type[0];
  }

  // Convert undefined to string of 'undefined'
  if (typeof type === 'undefined') {
    type = 'undefined';
    isPrimitive = true;

  } else if (definitions[type]){
    // a model def exists?
    type = definitions[type]; /* Model */
    isPrimitive = false;

  } else if (this.getInlineModel(type)) {
    type = this.getInlineModel(type); /* Model */
    isPrimitive = false;

  } else {
    // We default to primitive
    isPrimitive = true;
  }

  if (isPrimitive) {
    if (listType) {
      return 'Array[' + type + ']';
    } else {
      return type.toString();
    }
  } else {
    if (listType) {
      return 'Array[' + type.getMockSignature() + ']';
    } else {
      return type.getMockSignature();
    }
  }
};

Operation.prototype.supportHeaderParams = function () {
  return true;
};

Operation.prototype.supportedSubmitMethods = function () {
  return this.parent.supportedSubmitMethods;
};

Operation.prototype.getHeaderParams = function (args) {
  var headers = this.setContentTypes(args, {});

  for (var i = 0; i < this.parameters.length; i++) {
    var param = this.parameters[i];

    if (typeof args[param.name] !== 'undefined') {
      if (param.in === 'header') {
        var value = args[param.name];

        if (Array.isArray(value)) {
          value = value.toString();
        }

        headers[param.name] = value;
      }
    }
  }

  return headers;
};

Operation.prototype.urlify = function (args) {
  var formParams = {};
  var requestUrl = this.path.replace(/#.*/, ''); // remove URL fragment
  var querystring = ''; // grab params from the args, build the querystring along the way

  for (var i = 0; i < this.parameters.length; i++) {
    var param = this.parameters[i];

    if (typeof args[param.name] !== 'undefined') {
      if (param.in === 'path') {
        var reg = new RegExp('\{' + param.name + '\}', 'gi');
        var value = args[param.name];

        if (Array.isArray(value)) {
          value = this.encodePathCollection(param.collectionFormat, param.name, value);
        } else {
          value = this.encodePathParam(value);
        }

        requestUrl = requestUrl.replace(reg, value);
      } else if (param.in === 'query' && typeof args[param.name] !== 'undefined') {
        if (querystring === '' && requestUrl.indexOf('?') < 0) {
          querystring += '?';
        } else {
          querystring += '&';
        }

        if (typeof param.collectionFormat !== 'undefined') {
          var qp = args[param.name];

          if (Array.isArray(qp)) {
            querystring += this.encodeQueryCollection(param.collectionFormat, param.name, qp);
          } else {
            querystring += this.encodeQueryKey(param.name) + '=' + this.encodeQueryParam(args[param.name]);
          }
        } else {
          querystring += this.encodeQueryKey(param.name) + '=' + this.encodeQueryParam(args[param.name]);
        }
      } else if (param.in === 'formData') {
        formParams[param.name] = args[param.name];
      }
    }
  }
  var url = this.scheme + '://' + this.host;

  if (this.basePath !== '/') {
    url += this.basePath;
  }
  return url + requestUrl + querystring;
};

Operation.prototype.getMissingParams = function (args) {
  var missingParams = []; // check required params, track the ones that are missing
  var i;

  for (i = 0; i < this.parameters.length; i++) {
    var param = this.parameters[i];

    if (param.required === true) {
      if (typeof args[param.name] === 'undefined') {
        missingParams = param.name;
      }
    }
  }

  return missingParams;
};

Operation.prototype.getBody = function (headers, args, opts) {
  var formParams = {}, hasFormParams, body, key, value, hasBody = false;

  // look at each param and put form params in an object
  for (var i = 0; i < this.parameters.length; i++) {
    var param = this.parameters[i];
    if (typeof args[param.name] !== 'undefined') {
      if (param.in === 'body') {
        body = args[param.name];
      } else if (param.in === 'formData') {
        formParams[param.name] = {
          param: param,
          value: args[param.name]
        };
        hasFormParams = true;
      }
    }
    else {
      if(param.in === 'body') {
        hasBody = true;
      }
    }
  }

  // if body is null and hasBody is true, AND a JSON body is requested, send empty {}
  if(hasBody && typeof body === 'undefined') {
    var contentType = headers['Content-Type'];
    if(contentType && contentType.indexOf('application/json') === 0) {
      body = '{}';
    }
  }

  var isMultiPart = false;
  if(headers['Content-Type'] && headers['Content-Type'].indexOf('multipart/form-data') >= 0) {
    isMultiPart = true;
  }

  // handle form params
  if (hasFormParams && !isMultiPart) {
    var encoded = '';

    for (key in formParams) {
      var param = formParams[key].param;
      value = formParams[key].value;

      if (typeof value !== 'undefined') {
        if (Array.isArray(value)) {
          if (encoded !== '') {
            encoded += '&';
          }
          encoded += this.encodeQueryCollection(param.collectionFormat, key, value);
        }
        else {
          if (encoded !== '') {
            encoded += '&';
          }

          encoded += encodeURIComponent(key) + '=' + encodeURIComponent(value);
        }
      }
    }

    body = encoded;
  } else if (isMultiPart) {
    if (typeof FormData === 'function') {
      var bodyParam = new FormData();

      bodyParam.type = 'formData';

      for (key in formParams) {
        value = args[key];

        if (typeof value !== 'undefined') {
          if({}.toString.apply(value) === '[object File]') {
            bodyParam.append(key, value);
          }
          else if (value.type === 'file' && value.value) {
            bodyParam.append(key, value.value);
          } else {
            if (Array.isArray(value)) {
              bodyParam.append(key, this.encodeQueryCollection(param.collectionFormat, key, value));
            }
            else {
              bodyParam.append(key, value);
            }
          }
        }
      }
      body = bodyParam;
    }
    else {
      bodyParam = {};
      for (key in formParams) {
        value = args[key];
        if (Array.isArray(value)) {
          var delimeter;
          var format = param.collectionFormat || 'multi';
          if(format === 'ssv') {
            delimeter = ' ';
          }
          else if(format === 'pipes') {
            delimeter = '|';
          }
          else if(format === 'tsv') {
            delimeter = '\t';
          }
          else {
            delimeter = ',';
          }
          var data;
          value.forEach(function(v) {
            if(data) {
              data += delimeter;
            }
            else {
              data = '';
            }
            data += v;
          });
          bodyParam[key] = data;
        }
        else {
          bodyParam[key] = value;
        }
      }
      body = bodyParam;
    }
    headers['Content-Type'] = 'multipart/form-data';
  }

  return body;
};

/**
 * gets sample response for a single operation
 **/
Operation.prototype.getModelSampleJSON = function (type, models) {
  var listType, sampleJson, innerType;
  models = models || {};

  listType = (type instanceof Array);
  innerType = listType ? type[0] : type;

  if(models[innerType]) {
    sampleJson = models[innerType].createJSONSample();
  } else if (this.getInlineModel(innerType)){
    sampleJson = this.getInlineModel(innerType).createJSONSample(); // may return null, if type isn't correct
  }


  if (sampleJson) {
    sampleJson = listType ? [sampleJson] : sampleJson;

    if (typeof sampleJson === 'string') {
      return sampleJson;
    } else if (_.isObject(sampleJson)) {
      var t = sampleJson;

      if (sampleJson instanceof Array && sampleJson.length > 0) {
        t = sampleJson[0];
      }

      if (t.nodeName && typeof t === 'Node') {
        var xmlString = new XMLSerializer().serializeToString(t);

        return this.formatXml(xmlString);
      } else {
        return JSON.stringify(sampleJson, null, 2);
      }
    } else {
      return sampleJson;
    }
  }
};

/**
 * legacy binding
 **/
Operation.prototype.do = function (args, opts, callback, error, parent) {
  return this.execute(args, opts, callback, error, parent);
};

/**
 * executes an operation
 **/
Operation.prototype.execute = function (arg1, arg2, arg3, arg4, parent) {
  var args = arg1 || {};
  var opts = {}, success, error, deferred;

  if (_.isObject(arg2)) {
    opts = arg2;
    success = arg3;
    error = arg4;
  }

  if(this.client) {
    opts.client = this.client;
  }

  // add the request interceptor from parent, if none sent from client
  if(!opts.requestInterceptor && this.requestInterceptor ) {
    opts.requestInterceptor = this.requestInterceptor ;
  }

  if(!opts.responseInterceptor && this.responseInterceptor) {
    opts.responseInterceptor = this.responseInterceptor;
  }

  if (typeof arg2 === 'function') {
    success = arg2;
    error = arg3;
  }

  if (this.parent.usePromise) {
    deferred = Q.defer();
  } else {
    success = (success || this.parent.defaultSuccessCallback || helpers.log);
    error = (error || this.parent.defaultErrorCallback || helpers.log);
  }

  if (typeof opts.useJQuery === 'undefined') {
    opts.useJQuery = this.useJQuery;
  }

  if (typeof opts.jqueryAjaxCache === 'undefined') {
    opts.jqueryAjaxCache = this.jqueryAjaxCache;
  }

  if (typeof opts.enableCookies === 'undefined') {
    opts.enableCookies = this.enableCookies;
  }

  var missingParams = this.getMissingParams(args);

  if (missingParams.length > 0) {
    var message = 'missing required params: ' + missingParams;

    helpers.fail(message);

    if (this.parent.usePromise) {
      deferred.reject(message);
      return deferred.promise;
    } else {
      error(message, parent);
      return {};
    }
  }

  var allHeaders = this.getHeaderParams(args);
  var contentTypeHeaders = this.setContentTypes(args, opts);
  var headers = {}, attrname;

  for (attrname in allHeaders) { headers[attrname] = allHeaders[attrname]; }
  for (attrname in contentTypeHeaders) { headers[attrname] = contentTypeHeaders[attrname]; }

  var body = this.getBody(contentTypeHeaders, args, opts);
  var url = this.urlify(args);

  if(url.indexOf('.{format}') > 0) {
    if(headers) {
      var format = headers.Accept || headers.accept;
      if(format && format.indexOf('json') > 0) {
        url = url.replace('.{format}', '.json');
      }
      else if(format && format.indexOf('xml') > 0) {
        url = url.replace('.{format}', '.xml');
      }
    }
  }

  var obj = {
    url: url,
    method: this.method.toUpperCase(),
    body: body,
    enableCookies: opts.enableCookies,
    useJQuery: opts.useJQuery,
    jqueryAjaxCache: opts.jqueryAjaxCache,
    deferred: deferred,
    headers: headers,
    clientAuthorizations: opts.clientAuthorizations,
    on: {
      response: function (response) {
        if (deferred) {
          deferred.resolve(response);
          return deferred.promise;
        } else {
          return success(response, parent);
        }
      },
      error: function (response) {
        if (deferred) {
          deferred.reject(response);
          return deferred.promise;
        } else {
          return error(response, parent);
        }
      }
    }
  };

  this.clientAuthorizations.apply(obj, this.operation.security);
  if (opts.mock === true) {
    return obj;
  } else {
    return new SwaggerHttp().execute(obj, opts);
  }
};

function itemByPriority(col, itemPriority) {

  // No priorities? return first...
  if(_.isEmpty(itemPriority)) {
    return col[0];
  }

  for (var i = 0, len = itemPriority.length; i < len; i++) {
    if(col.indexOf(itemPriority[i]) > -1) {
      return itemPriority[i];
    }
  }

  // Otherwise return first
  return col[0];
}

Operation.prototype.setContentTypes = function (args, opts) {
  // default type
  var allDefinedParams = this.parameters;
  var body;
  var consumes = args.parameterContentType || itemByPriority(this.consumes, ['application/json', 'application/yaml']);
  var accepts = opts.responseContentType || itemByPriority(this.produces, ['application/json', 'application/yaml']);
  var definedFileParams = [];
  var definedFormParams = [];
  var headers = {};
  var i;

  // get params from the operation and set them in definedFileParams, definedFormParams, headers
  for (i = 0; i < allDefinedParams.length; i++) {
    var param = allDefinedParams[i];

    if (param.in === 'formData') {
      if (param.type === 'file') {
        definedFileParams.push(param);
      } else {
        definedFormParams.push(param);
      }
    } else if (param.in === 'header' && opts) {
      var key = param.name;
      var headerValue = opts[param.name];

      if (typeof opts[param.name] !== 'undefined') {
        headers[key] = headerValue;
      }
    } else if (param.in === 'body' && typeof args[param.name] !== 'undefined') {
      body = args[param.name];
    }
  }

  // if there's a body, need to set the consumes header via requestContentType
  var hasBody = body || definedFileParams.length || definedFormParams.length;
  if (this.method === 'post' || this.method === 'put' || this.method === 'patch' ||
      ((this.method === 'delete' || this.method === 'get') && hasBody)) {
    if (opts.requestContentType) {
      consumes = opts.requestContentType;
    }
    // if any form params, content type must be set
    if (definedFormParams.length > 0) {
      consumes = undefined;
      if (opts.requestContentType) {             // override if set
        consumes = opts.requestContentType;
      } else if (definedFileParams.length > 0) { // if a file, must be multipart/form-data
        consumes = 'multipart/form-data';
      } else {
        if (this.consumes && this.consumes.length > 0) {
          // use the consumes setting
          for(var c in this.consumes) {
            var chk = this.consumes[c];
            if(chk.indexOf('application/x-www-form-urlencoded') === 0 || chk.indexOf('multipart/form-data') === 0) {
              consumes = chk;
            }
          }
        }
      }
      if(typeof consumes === 'undefined') {
        // default to x-www-from-urlencoded
        consumes = 'application/x-www-form-urlencoded';
      }
    }
  }
  else {
    consumes = null;
  }

  if (consumes && this.consumes) {
    if (this.consumes.indexOf(consumes) === -1) {
      helpers.log('server doesn\'t consume ' + consumes + ', try ' + JSON.stringify(this.consumes));
    }
  }

  if (!this.matchesAccept(accepts)) {
    helpers.log('server can\'t produce ' + accepts);
  }

  if ((consumes && body !== '') || (consumes === 'application/x-www-form-urlencoded')) {
    headers['Content-Type'] = consumes;
  }
  else if(this.consumes && this.consumes.length > 0 && this.consumes[0] === 'application/x-www-form-urlencoded') {
    headers['Content-Type'] = this.consumes[0];
  }

  if (accepts) {
    headers.Accept = accepts;
  }

  return headers;
};

/**
 * Returns true if the request accepts header matches anything in this.produces.
 *  If this.produces contains * / *, ignore the accept header.
 * @param {string=} accepts The client request accept header.
 * @return {boolean}
 */
Operation.prototype.matchesAccept = function(accepts) {
  // no accepts or produces, no problem!
  if (!accepts || !this.produces) {
    return true;
  }
  return this.produces.indexOf(accepts) !== -1 || this.produces.indexOf('*/*') !== -1;
};

Operation.prototype.asCurl = function (args1, args2) {
  var opts = {mock: true};
  if (typeof args2 === 'object') {
    for (var argKey in args2) {
      opts[argKey] = args2[argKey];
    }
  }
  var obj = this.execute(args1, opts);

  this.clientAuthorizations.apply(obj, this.operation.security);

  var results = [];

  results.push('-X ' + this.method.toUpperCase());

  if (typeof obj.headers !== 'undefined') {
    var key;

    for (key in obj.headers) {
      var value = obj.headers[key];
      if(typeof value === 'string'){
        value = value.replace(/\'/g, '\\u0027');
      }
      results.push('--header \'' + key + ': ' + value + '\'');
    }
  }
  var isFormData = false;
  var isMultipart = false;

  var type = obj.headers['Content-Type'];
  if(type && type.indexOf('application/x-www-form-urlencoded') === 0) {
    isFormData = true;
  }
  else if (type && type.indexOf('multipart/form-data') === 0) {
    isFormData = true;
    isMultipart = true;
  }

  if (obj.body) {
    var body;
    if (_.isObject(obj.body)) {
      if(isMultipart) {
        isMultipart = true;
        // add the form data
        for(var i = 0; i < this.parameters.length; i++) {
          var parameter = this.parameters[i];
          if(parameter.in === 'formData') {
            if (!body) {
              body = '';
            }

            var paramValue;
            if(typeof FormData === 'function' && obj.body instanceof FormData) {
              paramValue = obj.body.get(parameter.name);
            }
            else {
              paramValue = obj.body[parameter.name];
            }
            if (paramValue) {
              if (parameter.type === 'file') {
                if(paramValue.name) {
                  body += '-F @' + paramValue.name + ' ';
                }
              }
              else {
                body += '-F ';
                if (Array.isArray(paramValue)) {
                  body += this.encodeQueryCollection(parameter.collectionFormat, parameter.name, paramValue);
                } else {
                  body += this.encodeQueryKey(parameter.name) + '=' + paramValue;
                }
                body += ' ';
              }
            }
          }

        }
      }
      if(!body) {
        body = JSON.stringify(obj.body);
      }
    } else {
      body = obj.body;
    }
    // escape @ => %40, ' => %27
    body = body.replace(/\'/g, '%27').replace(/\n/g, " \\ \n ");

    if(!isFormData) {
      // escape & => %26
      body = body.replace(/&/g, '%26');
    }
    if(isMultipart) {
      results.push(body);
    }
    else {
      results.push('-d \'' + body.replace(/@/g, '%40') + '\'');
    }
  }

  return 'curl ' + (results.join(' ')) + ' \'' + obj.url + '\'';
};

Operation.prototype.encodePathCollection = function (type, name, value) {
  var encoded = '';
  var i;
  var separator = '';

  if (type === 'ssv') {
    separator = '%20';
  } else if (type === 'tsv') {
    separator = '%09';
  } else if (type === 'pipes') {
    separator = '|';
  } else {
    separator = ',';
  }

  for (i = 0; i < value.length; i++) {
    if (i === 0) {
      encoded = this.encodeQueryParam(value[i]);
    } else {
      encoded += separator + this.encodeQueryParam(value[i]);
    }
  }

  return encoded;
};

Operation.prototype.encodeQueryCollection = function (type, name, value) {
  var encoded = '';
  var i;

  type = type || 'default';
  if (type === 'default' || type === 'multi') {
    for (i = 0; i < value.length; i++) {
      if (i > 0) {encoded += '&';}

      encoded += this.encodeQueryKey(name) + '=' + this.encodeQueryParam(value[i]);
    }
  } else {
    var separator = '';

    if (type === 'csv') {
      separator = ',';
    } else if (type === 'ssv') {
      separator = '%20';
    } else if (type === 'tsv') {
      separator = '%09';
    } else if (type === 'pipes') {
      separator = '|';
    } else if (type === 'brackets') {
      for (i = 0; i < value.length; i++) {
        if (i !== 0) {
          encoded += '&';
        }

        encoded += this.encodeQueryKey(name) + '[]=' + this.encodeQueryParam(value[i]);
      }
    }

    if (separator !== '') {
      for (i = 0; i < value.length; i++) {
        if (i === 0) {
          encoded = this.encodeQueryKey(name) + '=' + this.encodeQueryParam(value[i]);
        } else {
          encoded += separator + this.encodeQueryParam(value[i]);
        }
      }
    }
  }

  return encoded;
};

Operation.prototype.encodeQueryKey = function (arg) {
  return encodeURIComponent(arg)
      .replace('%5B','[').replace('%5D', ']').replace('%24', '$');
};

Operation.prototype.encodeQueryParam = function (arg) {
  return encodeURIComponent(arg);
};

/**
 * TODO revisit, might not want to leave '/'
 **/
Operation.prototype.encodePathParam = function (pathParam) {
  return encodeURIComponent(pathParam);
};

},{"../helpers":4,"../http":5,"./model":9,"lodash-compat/lang/cloneDeep":138,"lodash-compat/lang/isEmpty":141,"lodash-compat/lang/isObject":144,"lodash-compat/lang/isUndefined":148,"q":157}],11:[function(require,module,exports){
'use strict';

var OperationGroup = module.exports = function (tag, description, externalDocs, operation) {
  this.description = description;
  this.externalDocs = externalDocs;
  this.name = tag;
  this.operation = operation;
  this.operationsArray = [];
  this.path = tag;
  this.tag = tag;
};

OperationGroup.prototype.sort = function () {

};


},{}],12:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],13:[function(require,module,exports){
(function (Buffer){
(function () {
  "use strict";

  function btoa(str) {
    var buffer
      ;

    if (str instanceof Buffer) {
      buffer = str;
    } else {
      buffer = new Buffer(str.toString(), 'binary');
    }

    return buffer.toString('base64');
  }

  module.exports = btoa;
}());

}).call(this,require("buffer").Buffer)
},{"buffer":14}],14:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('is-array')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var rootParent = {}

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
 *     on objects.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = (function () {
  function Bar () {}
  try {
    var arr = new Uint8Array(1)
    arr.foo = function () { return 42 }
    arr.constructor = Bar
    return arr.foo() === 42 && // typed array instances can be augmented
        arr.constructor === Bar && // constructor can be set
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
})()

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (arg) {
  if (!(this instanceof Buffer)) {
    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
    if (arguments.length > 1) return new Buffer(arg, arguments[1])
    return new Buffer(arg)
  }

  this.length = 0
  this.parent = undefined

  // Common case.
  if (typeof arg === 'number') {
    return fromNumber(this, arg)
  }

  // Slightly less common case.
  if (typeof arg === 'string') {
    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
  }

  // Unusual.
  return fromObject(this, arg)
}

function fromNumber (that, length) {
  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < length; i++) {
      that[i] = 0
    }
  }
  return that
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

  // Assumption: byteLength() return value is always < kMaxLength.
  var length = byteLength(string, encoding) | 0
  that = allocate(that, length)

  that.write(string, encoding)
  return that
}

function fromObject (that, object) {
  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

  if (isArray(object)) return fromArray(that, object)

  if (object == null) {
    throw new TypeError('must start with number, buffer, array or string')
  }

  if (typeof ArrayBuffer !== 'undefined') {
    if (object.buffer instanceof ArrayBuffer) {
      return fromTypedArray(that, object)
    }
    if (object instanceof ArrayBuffer) {
      return fromArrayBuffer(that, object)
    }
  }

  if (object.length) return fromArrayLike(that, object)

  return fromJsonObject(that, object)
}

function fromBuffer (that, buffer) {
  var length = checked(buffer.length) | 0
  that = allocate(that, length)
  buffer.copy(that, 0, 0, length)
  return that
}

function fromArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Duplicate of fromArray() to keep fromArray() monomorphic.
function fromTypedArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  // Truncating the elements is probably not what people expect from typed
  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
  // of the old Buffer constructor.
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    array.byteLength
    that = Buffer._augment(new Uint8Array(array))
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromTypedArray(that, new Uint8Array(array))
  }
  return that
}

function fromArrayLike (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
// Returns a zero-length buffer for inputs that don't conform to the spec.
function fromJsonObject (that, object) {
  var array
  var length = 0

  if (object.type === 'Buffer' && isArray(object.data)) {
    array = object.data
    length = checked(array.length) | 0
  }
  that = allocate(that, length)

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function allocate (that, length) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return an object instance of the Buffer class
    that.length = length
    that._isBuffer = true
  }

  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
  if (fromPool) that.parent = rootParent

  return that
}

function checked (length) {
  // Note: cannot use `length < kMaxLength` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (subject, encoding) {
  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

  var buf = new Buffer(subject, encoding)
  delete buf.parent
  return buf
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  var i = 0
  var len = Math.min(x, y)
  while (i < len) {
    if (a[i] !== b[i]) break

    ++i
  }

  if (i !== len) {
    x = a[i]
    y = b[i]
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

  if (list.length === 0) {
    return new Buffer(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; i++) {
      length += list[i].length
    }
  }

  var buf = new Buffer(length)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

function byteLength (string, encoding) {
  if (typeof string !== 'string') string = '' + string

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'binary':
      // Deprecated
      case 'raw':
      case 'raws':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

// pre-set for values that may exist in the future
Buffer.prototype.length = undefined
Buffer.prototype.parent = undefined

function slowToString (encoding, start, end) {
  var loweredCase = false

  start = start | 0
  end = end === undefined || end === Infinity ? this.length : end | 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return 0
  return Buffer.compare(this, b)
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
  byteOffset >>= 0

  if (this.length === 0) return -1
  if (byteOffset >= this.length) return -1

  // Negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

  if (typeof val === 'string') {
    if (val.length === 0) return -1 // special case: looking for empty string always fails
    return String.prototype.indexOf.call(this, val, byteOffset)
  }
  if (Buffer.isBuffer(val)) {
    return arrayIndexOf(this, val, byteOffset)
  }
  if (typeof val === 'number') {
    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
    }
    return arrayIndexOf(this, [ val ], byteOffset)
  }

  function arrayIndexOf (arr, val, byteOffset) {
    var foundIndex = -1
    for (var i = 0; byteOffset + i < arr.length; i++) {
      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
      } else {
        foundIndex = -1
      }
    }
    return -1
  }

  throw new TypeError('val must be string, number or Buffer')
}

// `get` is deprecated
Buffer.prototype.get = function get (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` is deprecated
Buffer.prototype.set = function set (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) throw new Error('Invalid hex string')
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    var swap = encoding
    encoding = offset
    offset = length | 0
    length = swap
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'binary':
        return binaryWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function binarySlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
  }

  if (newBuf.length) newBuf.parent = this.parent || this

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = value
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = value
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = value
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
  if (offset < 0) throw new RangeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; i--) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), targetStart)
  }

  return len
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function fill (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new RangeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function _augment (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  // save reference to original Uint8Array set method before overwriting
  arr._set = arr.set

  // deprecated
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.indexOf = BP.indexOf
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUIntLE = BP.readUIntLE
  arr.readUIntBE = BP.readUIntBE
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readIntLE = BP.readIntLE
  arr.readIntBE = BP.readIntBE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUIntLE = BP.writeUIntLE
  arr.writeUIntBE = BP.writeUIntBE
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeIntLE = BP.writeIntLE
  arr.writeIntBE = BP.writeIntBE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; i++) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

},{"base64-js":15,"ieee754":16,"is-array":17}],15:[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],16:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],17:[function(require,module,exports){

/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};

},{}],18:[function(require,module,exports){
/* jshint node: true */
(function () {
    "use strict";

    function CookieAccessInfo(domain, path, secure, script) {
        if (this instanceof CookieAccessInfo) {
            this.domain = domain || undefined;
            this.path = path || "/";
            this.secure = !!secure;
            this.script = !!script;
            return this;
        }
        return new CookieAccessInfo(domain, path, secure, script);
    }
    exports.CookieAccessInfo = CookieAccessInfo;

    function Cookie(cookiestr, request_domain, request_path) {
        if (cookiestr instanceof Cookie) {
            return cookiestr;
        }
        if (this instanceof Cookie) {
            this.name = null;
            this.value = null;
            this.expiration_date = Infinity;
            this.path = String(request_path || "/");
            this.explicit_path = false;
            this.domain = request_domain || null;
            this.explicit_domain = false;
            this.secure = false; //how to define default?
            this.noscript = false; //httponly
            if (cookiestr) {
                this.parse(cookiestr, request_domain, request_path);
            }
            return this;
        }
        return new Cookie(cookiestr, request_domain, request_path);
    }
    exports.Cookie = Cookie;

    Cookie.prototype.toString = function toString() {
        var str = [this.name + "=" + this.value];
        if (this.expiration_date !== Infinity) {
            str.push("expires=" + (new Date(this.expiration_date)).toGMTString());
        }
        if (this.domain) {
            str.push("domain=" + this.domain);
        }
        if (this.path) {
            str.push("path=" + this.path);
        }
        if (this.secure) {
            str.push("secure");
        }
        if (this.noscript) {
            str.push("httponly");
        }
        return str.join("; ");
    };

    Cookie.prototype.toValueString = function toValueString() {
        return this.name + "=" + this.value;
    };

    var cookie_str_splitter = /[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;
    Cookie.prototype.parse = function parse(str, request_domain, request_path) {
        if (this instanceof Cookie) {
            var parts = str.split(";").filter(function (value) {
                    return !!value;
                }),
                pair = parts[0].match(/([^=]+)=([\s\S]*)/),
                key = pair[1],
                value = pair[2],
                i;
            this.name = key;
            this.value = value;

            for (i = 1; i < parts.length; i += 1) {
                pair = parts[i].match(/([^=]+)(?:=([\s\S]*))?/);
                key = pair[1].trim().toLowerCase();
                value = pair[2];
                switch (key) {
                case "httponly":
                    this.noscript = true;
                    break;
                case "expires":
                    this.expiration_date = value ?
                            Number(Date.parse(value)) :
                            Infinity;
                    break;
                case "path":
                    this.path = value ?
                            value.trim() :
                            "";
                    this.explicit_path = true;
                    break;
                case "domain":
                    this.domain = value ?
                            value.trim() :
                            "";
                    this.explicit_domain = !!this.domain;
                    break;
                case "secure":
                    this.secure = true;
                    break;
                }
            }

            if (!this.explicit_path) {
               this.path = request_path || "/";
            }
            if (!this.explicit_domain) {
               this.domain = request_domain;
            }

            return this;
        }
        return new Cookie().parse(str, request_domain, request_path);
    };

    Cookie.prototype.matches = function matches(access_info) {
        if (this.noscript && access_info.script ||
                this.secure && !access_info.secure ||
                !this.collidesWith(access_info)) {
            return false;
        }
        return true;
    };

    Cookie.prototype.collidesWith = function collidesWith(access_info) {
        if ((this.path && !access_info.path) || (this.domain && !access_info.domain)) {
            return false;
        }
        if (this.path && access_info.path.indexOf(this.path) !== 0) {
            return false;
        }
        if (this.explicit_path && access_info.path.indexOf( this.path ) !== 0) {
           return false;
        }
        var access_domain = access_info.domain && access_info.domain.replace(/^[\.]/,'');
        var cookie_domain = this.domain && this.domain.replace(/^[\.]/,'');
        if (cookie_domain === access_domain) {
            return true;
        }
        if (cookie_domain) {
            if (!this.explicit_domain) {
                return false; // we already checked if the domains were exactly the same
            }
            var wildcard = access_domain.indexOf(cookie_domain);
            if (wildcard === -1 || wildcard !== access_domain.length - cookie_domain.length) {
                return false;
            }
            return true;
        }
        return true;
    };

    function CookieJar() {
        var cookies, cookies_list, collidable_cookie;
        if (this instanceof CookieJar) {
            cookies = Object.create(null); //name: [Cookie]

            this.setCookie = function setCookie(cookie, request_domain, request_path) {
                var remove, i;
                cookie = new Cookie(cookie, request_domain, request_path);
                //Delete the cookie if the set is past the current time
                remove = cookie.expiration_date <= Date.now();
                if (cookies[cookie.name] !== undefined) {
                    cookies_list = cookies[cookie.name];
                    for (i = 0; i < cookies_list.length; i += 1) {
                        collidable_cookie = cookies_list[i];
                        if (collidable_cookie.collidesWith(cookie)) {
                            if (remove) {
                                cookies_list.splice(i, 1);
                                if (cookies_list.length === 0) {
                                    delete cookies[cookie.name];
                                }
                                return false;
                            }
                            cookies_list[i] = cookie;
                            return cookie;
                        }
                    }
                    if (remove) {
                        return false;
                    }
                    cookies_list.push(cookie);
                    return cookie;
                }
                if (remove) {
                    return false;
                }
                cookies[cookie.name] = [cookie];
                return cookies[cookie.name];
            };
            //returns a cookie
            this.getCookie = function getCookie(cookie_name, access_info) {
                var cookie, i;
                cookies_list = cookies[cookie_name];
                if (!cookies_list) {
                    return;
                }
                for (i = 0; i < cookies_list.length; i += 1) {
                    cookie = cookies_list[i];
                    if (cookie.expiration_date <= Date.now()) {
                        if (cookies_list.length === 0) {
                            delete cookies[cookie.name];
                        }
                        continue;
                    }

                    if (cookie.matches(access_info)) {
                        return cookie;
                    }
                }
            };
            //returns a list of cookies
            this.getCookies = function getCookies(access_info) {
                var matches = [], cookie_name, cookie;
                for (cookie_name in cookies) {
                    cookie = this.getCookie(cookie_name, access_info);
                    if (cookie) {
                        matches.push(cookie);
                    }
                }
                matches.toString = function toString() {
                    return matches.join(":");
                };
                matches.toValueString = function toValueString() {
                    return matches.map(function (c) {
                        return c.toValueString();
                    }).join(';');
                };
                return matches;
            };

            return this;
        }
        return new CookieJar();
    }
    exports.CookieJar = CookieJar;

    //returns list of cookies that were set correctly. Cookies that are expired and removed are not returned.
    CookieJar.prototype.setCookies = function setCookies(cookies, request_domain, request_path) {
        cookies = Array.isArray(cookies) ?
                cookies :
                cookies.split(cookie_str_splitter);
        var successful = [],
            i,
            cookie;
        cookies = cookies.map(function(item){
            return new Cookie(item, request_domain, request_path);
        });
        for (i = 0; i < cookies.length; i += 1) {
            cookie = cookies[i];
            if (this.setCookie(cookie, request_domain, request_path)) {
                successful.push(cookie);
            }
        }
        return successful;
    };
}());

},{}],19:[function(require,module,exports){
'use strict';


var yaml = require('./lib/js-yaml.js');


module.exports = yaml;

},{"./lib/js-yaml.js":20}],20:[function(require,module,exports){
'use strict';


var loader = require('./js-yaml/loader');
var dumper = require('./js-yaml/dumper');


function deprecated(name) {
  return function () {
    throw new Error('Function ' + name + ' is deprecated and cannot be used.');
  };
}


module.exports.Type                = require('./js-yaml/type');
module.exports.Schema              = require('./js-yaml/schema');
module.exports.FAILSAFE_SCHEMA     = require('./js-yaml/schema/failsafe');
module.exports.JSON_SCHEMA         = require('./js-yaml/schema/json');
module.exports.CORE_SCHEMA         = require('./js-yaml/schema/core');
module.exports.DEFAULT_SAFE_SCHEMA = require('./js-yaml/schema/default_safe');
module.exports.DEFAULT_FULL_SCHEMA = require('./js-yaml/schema/default_full');
module.exports.load                = loader.load;
module.exports.loadAll             = loader.loadAll;
module.exports.safeLoad            = loader.safeLoad;
module.exports.safeLoadAll         = loader.safeLoadAll;
module.exports.dump                = dumper.dump;
module.exports.safeDump            = dumper.safeDump;
module.exports.YAMLException       = require('./js-yaml/exception');

// Deprecated schema names from JS-YAML 2.0.x
module.exports.MINIMAL_SCHEMA = require('./js-yaml/schema/failsafe');
module.exports.SAFE_SCHEMA    = require('./js-yaml/schema/default_safe');
module.exports.DEFAULT_SCHEMA = require('./js-yaml/schema/default_full');

// Deprecated functions from JS-YAML 1.x.x
module.exports.scan           = deprecated('scan');
module.exports.parse          = deprecated('parse');
module.exports.compose        = deprecated('compose');
module.exports.addConstructor = deprecated('addConstructor');

},{"./js-yaml/dumper":22,"./js-yaml/exception":23,"./js-yaml/loader":24,"./js-yaml/schema":26,"./js-yaml/schema/core":27,"./js-yaml/schema/default_full":28,"./js-yaml/schema/default_safe":29,"./js-yaml/schema/failsafe":30,"./js-yaml/schema/json":31,"./js-yaml/type":32}],21:[function(require,module,exports){
'use strict';


function isNothing(subject) {
  return (typeof subject === 'undefined') || (subject === null);
}


function isObject(subject) {
  return (typeof subject === 'object') && (subject !== null);
}


function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];

  return [ sequence ];
}


function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}


function repeat(string, count) {
  var result = '', cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}


function isNegativeZero(number) {
  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
}


module.exports.isNothing      = isNothing;
module.exports.isObject       = isObject;
module.exports.toArray        = toArray;
module.exports.repeat         = repeat;
module.exports.isNegativeZero = isNegativeZero;
module.exports.extend         = extend;

},{}],22:[function(require,module,exports){
'use strict';

/*eslint-disable no-use-before-define*/

var common              = require('./common');
var YAMLException       = require('./exception');
var DEFAULT_FULL_SCHEMA = require('./schema/default_full');
var DEFAULT_SAFE_SCHEMA = require('./schema/default_safe');

var _toString       = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;

var CHAR_TAB                  = 0x09; /* Tab */
var CHAR_LINE_FEED            = 0x0A; /* LF */
var CHAR_SPACE                = 0x20; /* Space */
var CHAR_EXCLAMATION          = 0x21; /* ! */
var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
var CHAR_SHARP                = 0x23; /* # */
var CHAR_PERCENT              = 0x25; /* % */
var CHAR_AMPERSAND            = 0x26; /* & */
var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
var CHAR_ASTERISK             = 0x2A; /* * */
var CHAR_COMMA                = 0x2C; /* , */
var CHAR_MINUS                = 0x2D; /* - */
var CHAR_COLON                = 0x3A; /* : */
var CHAR_GREATER_THAN         = 0x3E; /* > */
var CHAR_QUESTION             = 0x3F; /* ? */
var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
var CHAR_VERTICAL_LINE        = 0x7C; /* | */
var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

var ESCAPE_SEQUENCES = {};

ESCAPE_SEQUENCES[0x00]   = '\\0';
ESCAPE_SEQUENCES[0x07]   = '\\a';
ESCAPE_SEQUENCES[0x08]   = '\\b';
ESCAPE_SEQUENCES[0x09]   = '\\t';
ESCAPE_SEQUENCES[0x0A]   = '\\n';
ESCAPE_SEQUENCES[0x0B]   = '\\v';
ESCAPE_SEQUENCES[0x0C]   = '\\f';
ESCAPE_SEQUENCES[0x0D]   = '\\r';
ESCAPE_SEQUENCES[0x1B]   = '\\e';
ESCAPE_SEQUENCES[0x22]   = '\\"';
ESCAPE_SEQUENCES[0x5C]   = '\\\\';
ESCAPE_SEQUENCES[0x85]   = '\\N';
ESCAPE_SEQUENCES[0xA0]   = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';

var DEPRECATED_BOOLEANS_SYNTAX = [
  'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
  'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
];

function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;

  if (map === null) return {};

  result = {};
  keys = Object.keys(map);

  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);

    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }

    type = schema.compiledTypeMap[tag];

    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }

    result[tag] = style;
  }

  return result;
}

function encodeHex(character) {
  var string, handle, length;

  string = character.toString(16).toUpperCase();

  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new YAMLException('code point within a string may not be greater than 0xFFFFFFFF');
  }

  return '\\' + handle + common.repeat('0', length - string.length) + string;
}

function State(options) {
  this.schema       = options['schema'] || DEFAULT_FULL_SCHEMA;
  this.indent       = Math.max(1, (options['indent'] || 2));
  this.skipInvalid  = options['skipInvalid'] || false;
  this.flowLevel    = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
  this.styleMap     = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys     = options['sortKeys'] || false;
  this.lineWidth    = options['lineWidth'] || 80;
  this.noRefs       = options['noRefs'] || false;
  this.noCompatMode = options['noCompatMode'] || false;

  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;

  this.tag = null;
  this.result = '';

  this.duplicates = [];
  this.usedDuplicates = null;
}

// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
      position = 0,
      next = -1,
      result = '',
      line,
      length = string.length;

  while (position < length) {
    next = string.indexOf('\n', position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }

    if (line.length && line !== '\n') result += ind;

    result += line;
  }

  return result;
}

function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
  var index, length, type;

  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];

    if (type.resolve(str)) {
      return true;
    }
  }

  return false;
}

// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
  return  (0x00020 <= c && c <= 0x00007E)
      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== 0xFEFF /* BOM */)
      ||  (0x10000 <= c && c <= 0x10FFFF);
}

// Simplified test for values allowed after the first character in plain style.
function isPlainSafe(c) {
  // Uses a subset of nb-char - c-flow-indicator - ":" - "#"
  // where nb-char ::= c-printable - b-char - c-byte-order-mark.
  return isPrintable(c) && c !== 0xFEFF
    // - c-flow-indicator
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // - ":" - "#"
    && c !== CHAR_COLON
    && c !== CHAR_SHARP;
}

// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
  // Uses a subset of ns-char - c-indicator
  // where ns-char = nb-char - s-white.
  return isPrintable(c) && c !== 0xFEFF
    && !isWhitespace(c) // - s-white
    // - (c-indicator ::=
    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
    && c !== CHAR_MINUS
    && c !== CHAR_QUESTION
    && c !== CHAR_COLON
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // | “#” | “&” | “*” | “!” | “|” | “>” | “'” | “"”
    && c !== CHAR_SHARP
    && c !== CHAR_AMPERSAND
    && c !== CHAR_ASTERISK
    && c !== CHAR_EXCLAMATION
    && c !== CHAR_VERTICAL_LINE
    && c !== CHAR_GREATER_THAN
    && c !== CHAR_SINGLE_QUOTE
    && c !== CHAR_DOUBLE_QUOTE
    // | “%” | “@” | “`”)
    && c !== CHAR_PERCENT
    && c !== CHAR_COMMERCIAL_AT
    && c !== CHAR_GRAVE_ACCENT;
}

var STYLE_PLAIN   = 1,
    STYLE_SINGLE  = 2,
    STYLE_LITERAL = 3,
    STYLE_FOLDED  = 4,
    STYLE_DOUBLE  = 5;

// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
  var i;
  var char;
  var hasLineBreak = false;
  var hasFoldableLine = false; // only checked if shouldTrackWidth
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1; // count the first line correctly
  var plain = isPlainSafeFirst(string.charCodeAt(0))
          && !isWhitespace(string.charCodeAt(string.length - 1));

  if (singleLineOnly) {
    // Case: no block styles.
    // Check for disallowed characters to rule out plain and single.
    for (i = 0; i < string.length; i++) {
      char = string.charCodeAt(i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char);
    }
  } else {
    // Case: block styles permitted.
    for (i = 0; i < string.length; i++) {
      char = string.charCodeAt(i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        // Check if any line can be folded.
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine ||
            // Foldable line = too long, and not more-indented.
            (i - previousLineBreak - 1 > lineWidth &&
             string[previousLineBreak + 1] !== ' ');
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char);
    }
    // in case the end is missing a \n
    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
      (i - previousLineBreak - 1 > lineWidth &&
       string[previousLineBreak + 1] !== ' '));
  }
  // Although every style can represent \n without escaping, prefer block styles
  // for multiline, since they're more readable and they don't add empty lines.
  // Also prefer folding a super-long line.
  if (!hasLineBreak && !hasFoldableLine) {
    // Strings interpretable as another type have to be quoted;
    // e.g. the string 'true' vs. the boolean true.
    return plain && !testAmbiguousType(string)
      ? STYLE_PLAIN : STYLE_SINGLE;
  }
  // Edge case: block indentation indicator can only have one digit.
  if (string[0] === ' ' && indentPerLevel > 9) {
    return STYLE_DOUBLE;
  }
  // At this point we know block styles are valid.
  // Prefer literal style unless we want to fold.
  return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
}

// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey) {
  state.dump = (function () {
    if (string.length === 0) {
      return "''";
    }
    if (!state.noCompatMode &&
        DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) {
      return "'" + string + "'";
    }

    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
    // As indentation gets deeper, let the width decrease monotonically
    // to the lower bound min(state.lineWidth, 40).
    // Note that this implies
    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
    // This behaves better than a constant minimum width which disallows narrower options,
    // or an indent threshold which causes the width to suddenly increase.
    var lineWidth = state.lineWidth === -1
      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    // Without knowing if keys are implicit/explicit, assume implicit for safety.
    var singleLineOnly = iskey
      // No block styles in flow mode.
      || (state.flowLevel > -1 && level >= state.flowLevel);
    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }

    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string, lineWidth) + '"';
      default:
        throw new YAMLException('impossible error: invalid scalar style');
    }
  }());
}

// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
  var indentIndicator = (string[0] === ' ') ? String(indentPerLevel) : '';

  // note the special case: the string '\n' counts as a "trailing" empty line.
  var clip =          string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : (clip ? '' : '-');

  return indentIndicator + chomp + '\n';
}

// (See the note for writeScalar.)
function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
  // unless they're before or after a more-indented line, or at the very
  // beginning or end, in which case $k$ maps to $k$.
  // Therefore, parse each chunk as newline(s) followed by a content line.
  var lineRe = /(\n+)([^\n]*)/g;

  // first line (possibly an empty line)
  var result = (function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }());
  // If we haven't reached the first content line yet, don't add an extra \n.
  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

  // rest of the lines
  var match;
  while ((match = lineRe.exec(string))) {
    var prefix = match[1], line = match[2];
    moreIndented = (line[0] === ' ');
    result += prefix
      + (!prevMoreIndented && !moreIndented && line !== ''
        ? '\n' : '')
      + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }

  return result;
}

// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  // Since a more-indented line adds a \n, breaks can't be followed by a space.
  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
  var match;
  // start is an inclusive index. end, curr, and next are exclusive.
  var start = 0, end, curr = 0, next = 0;
  var result = '';

  // Invariants: 0 <= start <= length-1.
  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
  // Inside the loop:
  //   A match implies length >= 2, so curr and next are <= length-2.
  while ((match = breakRe.exec(line))) {
    next = match.index;
    // maintain invariant: curr - start <= width
    if (next - start > width) {
      end = (curr > start) ? curr : next; // derive end <= length-2
      result += '\n' + line.slice(start, end);
      // skip the space that was output as \n
      start = end + 1;                    // derive start <= length-1
    }
    curr = next;
  }

  // By the invariants, start <= length-1, so there is something left over.
  // It is either the whole string or a part starting from non-whitespace.
  result += '\n';
  // Insert a break if the remainder is too long and there is a break available.
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1); // drop extra \n joiner
}

// Escapes a double-quoted string.
function escapeString(string) {
  var result = '';
  var char;
  var escapeSeq;

  for (var i = 0; i < string.length; i++) {
    char = string.charCodeAt(i);
    escapeSeq = ESCAPE_SEQUENCES[char];
    result += !escapeSeq && isPrintable(char)
      ? string[i]
      : escapeSeq || encodeHex(char);
  }

  return result;
}

function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag    = state.tag,
      index,
      length;

  for (index = 0, length = object.length; index < length; index += 1) {
    // Write only valid elements.
    if (writeNode(state, level, object[index], false, false)) {
      if (index !== 0) _result += ', ';
      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag    = state.tag,
      index,
      length;

  for (index = 0, length = object.length; index < length; index += 1) {
    // Write only valid elements.
    if (writeNode(state, level + 1, object[index], true, true)) {
      if (!compact || index !== 0) {
        _result += generateNextLine(state, level);
      }
      _result += '- ' + state.dump;
    }
  }

  state.tag = _tag;
  state.dump = _result || '[]'; // Empty sequence if no valid values.
}

function writeFlowMapping(state, level, object) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (index !== 0) pairBuffer += ', ';

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (!writeNode(state, level, objectKey, false, false)) {
      continue; // Skip this pair because of invalid key;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';

    pairBuffer += state.dump + ': ';

    if (!writeNode(state, level, objectValue, false, false)) {
      continue; // Skip this pair because of invalid value.
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer;

  // Allow sorting keys so that the output file is deterministic
  if (state.sortKeys === true) {
    // Default sorting
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    // Custom sort function
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    // Something is wrong
    throw new YAMLException('sortKeys must be a boolean or a function');
  }

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (!compact || index !== 0) {
      pairBuffer += generateNextLine(state, level);
    }

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue; // Skip this pair because of invalid key.
    }

    explicitPair = (state.tag !== null && state.tag !== '?') ||
                   (state.dump && state.dump.length > 1024);

    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }

    pairBuffer += state.dump;

    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }

    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue; // Skip this pair because of invalid value.
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;

  typeList = explicit ? state.explicitTypes : state.implicitTypes;

  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];

    if ((type.instanceOf  || type.predicate) &&
        (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
        (!type.predicate  || type.predicate(object))) {

      state.tag = explicit ? type.tag : '?';

      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;

        if (_toString.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new YAMLException('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }

        state.dump = _result;
      }

      return true;
    }
  }

  return false;
}

// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey) {
  state.tag = null;
  state.dump = object;

  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }

  var type = _toString.call(state.dump);

  if (block) {
    block = (state.flowLevel < 0 || state.flowLevel > level);
  }

  var objectOrArray = type === '[object Object]' || type === '[object Array]',
      duplicateIndex,
      duplicate;

  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }

  if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
    compact = false;
  }

  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type === '[object Object]') {
      if (block && (Object.keys(state.dump).length !== 0)) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      if (block && (state.dump.length !== 0)) {
        writeBlockSequence(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey);
      }
    } else {
      if (state.skipInvalid) return false;
      throw new YAMLException('unacceptable kind of an object to dump ' + type);
    }

    if (state.tag !== null && state.tag !== '?') {
      state.dump = '!<' + state.tag + '> ' + state.dump;
    }
  }

  return true;
}

function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;

  inspectNode(object, objects, duplicatesIndexes);

  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList,
      index,
      length;

  if (object !== null && typeof object === 'object') {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);

      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}

function dump(input, options) {
  options = options || {};

  var state = new State(options);

  if (!state.noRefs) getDuplicateReferences(input, state);

  if (writeNode(state, 0, input, true, true)) return state.dump + '\n';

  return '';
}

function safeDump(input, options) {
  return dump(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
}

module.exports.dump     = dump;
module.exports.safeDump = safeDump;

},{"./common":21,"./exception":23,"./schema/default_full":28,"./schema/default_safe":29}],23:[function(require,module,exports){
// YAML error class. http://stackoverflow.com/questions/8458984
//
'use strict';

function YAMLException(reason, mark) {
  // Super constructor
  Error.call(this);

  // Include stack trace in error object
  if (Error.captureStackTrace) {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = (new Error()).stack || '';
  }

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = (this.reason || '(unknown reason)') + (this.mark ? ' ' + this.mark.toString() : '');
}


// Inherit from Error
YAMLException.prototype = Object.create(Error.prototype);
YAMLException.prototype.constructor = YAMLException;


YAMLException.prototype.toString = function toString(compact) {
  var result = this.name + ': ';

  result += this.reason || '(unknown reason)';

  if (!compact && this.mark) {
    result += ' ' + this.mark.toString();
  }

  return result;
};


module.exports = YAMLException;

},{}],24:[function(require,module,exports){
'use strict';

/*eslint-disable max-len,no-use-before-define*/

var common              = require('./common');
var YAMLException       = require('./exception');
var Mark                = require('./mark');
var DEFAULT_SAFE_SCHEMA = require('./schema/default_safe');
var DEFAULT_FULL_SCHEMA = require('./schema/default_full');


var _hasOwnProperty = Object.prototype.hasOwnProperty;


var CONTEXT_FLOW_IN   = 1;
var CONTEXT_FLOW_OUT  = 2;
var CONTEXT_BLOCK_IN  = 3;
var CONTEXT_BLOCK_OUT = 4;


var CHOMPING_CLIP  = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP  = 3;


var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


function is_EOL(c) {
  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
}

function is_WHITE_SPACE(c) {
  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
}

function is_WS_OR_EOL(c) {
  return (c === 0x09/* Tab */) ||
         (c === 0x20/* Space */) ||
         (c === 0x0A/* LF */) ||
         (c === 0x0D/* CR */);
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C/* , */ ||
         c === 0x5B/* [ */ ||
         c === 0x5D/* ] */ ||
         c === 0x7B/* { */ ||
         c === 0x7D/* } */;
}

function fromHexCode(c) {
  var lc;

  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  /*eslint-disable no-bitwise*/
  lc = c | 0x20;

  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78/* x */) { return 2; }
  if (c === 0x75/* u */) { return 4; }
  if (c === 0x55/* U */) { return 8; }
  return 0;
}

function fromDecimalCode(c) {
  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  return (c === 0x30/* 0 */) ? '\x00' :
        (c === 0x61/* a */) ? '\x07' :
        (c === 0x62/* b */) ? '\x08' :
        (c === 0x74/* t */) ? '\x09' :
        (c === 0x09/* Tab */) ? '\x09' :
        (c === 0x6E/* n */) ? '\x0A' :
        (c === 0x76/* v */) ? '\x0B' :
        (c === 0x66/* f */) ? '\x0C' :
        (c === 0x72/* r */) ? '\x0D' :
        (c === 0x65/* e */) ? '\x1B' :
        (c === 0x20/* Space */) ? ' ' :
        (c === 0x22/* " */) ? '\x22' :
        (c === 0x2F/* / */) ? '/' :
        (c === 0x5C/* \ */) ? '\x5C' :
        (c === 0x4E/* N */) ? '\x85' :
        (c === 0x5F/* _ */) ? '\xA0' :
        (c === 0x4C/* L */) ? '\u2028' :
        (c === 0x50/* P */) ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
  return String.fromCharCode(((c - 0x010000) >> 10) + 0xD800,
                             ((c - 0x010000) & 0x03FF) + 0xDC00);
}

var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}


function State(input, options) {
  this.input = input;

  this.filename  = options['filename']  || null;
  this.schema    = options['schema']    || DEFAULT_FULL_SCHEMA;
  this.onWarning = options['onWarning'] || null;
  this.legacy    = options['legacy']    || false;
  this.json      = options['json']      || false;
  this.listener  = options['listener']  || null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap       = this.schema.compiledTypeMap;

  this.length     = input.length;
  this.position   = 0;
  this.line       = 0;
  this.lineStart  = 0;
  this.lineIndent = 0;

  this.documents = [];

  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/

}


function generateError(state, message) {
  return new YAMLException(
    message,
    new Mark(state.filename, state.input, state.position, state.line, (state.position - state.lineStart)));
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}


var directiveHandlers = {

  YAML: function handleYamlDirective(state, name, args) {

    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = (minor < 2);

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },

  TAG: function handleTagDirective(state, name, args) {

    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    state.tagMap[handle] = prefix;
  }
};


function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length;
           _position < _length;
           _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 ||
              (0x20 <= _character && _character <= 0x10FFFF))) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode) {
  var index, quantity;

  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json &&
        !_hasOwnProperty.call(overridableKeys, keyNode) &&
        _hasOwnProperty.call(_result, keyNode)) {
      throwError(state, 'duplicated mapping key');
    }
    _result[keyNode] = valueNode;
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A/* LF */) {
    state.position++;
  } else if (ch === 0x0D/* CR */) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23/* # */) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
    }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20/* Space */) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;

  ch = state.input.charCodeAt(_position);

  // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.
  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
      ch === state.input.charCodeAt(_position + 1) &&
      ch === state.input.charCodeAt(_position + 2)) {

    _position += 3;

    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}


function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch)      ||
      is_FLOW_INDICATOR(ch) ||
      ch === 0x23/* # */    ||
      ch === 0x26/* & */    ||
      ch === 0x2A/* * */    ||
      ch === 0x21/* ! */    ||
      ch === 0x7C/* | */    ||
      ch === 0x3E/* > */    ||
      ch === 0x27/* ' */    ||
      ch === 0x22/* " */    ||
      ch === 0x25/* % */    ||
      ch === 0x40/* @ */    ||
      ch === 0x60/* ` */) {
    return false;
  }

  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
    following = state.input.charCodeAt(state.position + 1);

    if (is_WS_OR_EOL(following) ||
        withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A/* : */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }

    } else if (ch === 0x23/* # */) {
      preceding = state.input.charCodeAt(state.position - 1);

      if (is_WS_OR_EOL(preceding)) {
        break;
      }

    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;

    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch,
      captureStart, captureEnd;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27/* ' */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27/* ' */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x27/* ' */) {
        captureStart = captureEnd = state.position;
        state.position++;
      } else {
        return true;
      }

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart,
      captureEnd,
      hexLength,
      hexResult,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22/* " */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22/* " */) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;

    } else if (ch === 0x5C/* \ */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

        // TODO: rework to inline fn with no type cast?
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;

      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;

        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);

          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;

          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }

        state.result += charFromCodepoint(hexResult);

        state.position++;

      } else {
        throwError(state, 'unknown escape sequence');
      }

      captureStart = captureEnd = state.position;

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _tag     = state.tag,
      _result,
      _anchor  = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = {},
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B/* [ */) {
    terminator = 0x5D;/* ] */
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B/* { */) {
    terminator = 0x7D;/* } */
    isMapping = true;
    _result = {};
  } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F/* ? */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C/* , */) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping       = CHOMPING_CLIP,
      didReadContent = false,
      detectedIndent = false,
      textIndent     = nodeIndent,
      emptyLines     = 0,
      atMoreIndented = false,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C/* | */) {
    folding = false;
  } else if (ch === 0x3E/* > */) {
    folding = true;
  } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }

    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }

    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (is_WHITE_SPACE(ch));

    if (ch === 0x23/* # */) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (!is_EOL(ch) && (ch !== 0));
    }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20/* Space */)) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    // End of the scalar.
    if (state.lineIndent < textIndent) {

      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) { // i.e. only if the scalar is not empty.
          state.result += '\n';
        }
      }

      // Break this `while` cycle and go to the funciton's epilogue.
      break;
    }

    // Folded style: use fancy rules to handle line breaks.
    if (folding) {

      // Lines starting with white space characters (more-indented lines) are not folded.
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        // except for the first content line (cf. Example 8.1)
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

      // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (didReadContent) { // i.e. only if we have already read some scalar content.
          state.result += ' ';
        }

      // Several line breaks - perceive as different lines.
      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    // Literal style: just add exact number of line breaks between content lines.
    } else {
      // Keep all line breaks except the header line break.
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }

    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && (ch !== 0)) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag      = state.tag,
      _anchor   = state.anchor,
      _result   = [],
      following,
      detected  = false,
      ch;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {

    if (ch !== 0x2D/* - */) {
      break;
    }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _tag          = state.tag,
      _anchor       = state.anchor,
      _result       = {},
      overridableKeys = {},
      keyTag        = null,
      keyNode       = null,
      valueNode     = null,
      atExplicitKey = false,
      detected      = false,
      ch;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    following = state.input.charCodeAt(state.position + 1);
    _line = state.line; // Save the current line.

    //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //
    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F/* ? */) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
          keyTag = keyNode = valueNode = null;
        }

        detected = true;
        atExplicitKey = true;
        allowCompact = true;

      } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false;
        allowCompact = true;

      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed');
      }

      state.position += 1;
      ch = following;

    //
    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
    //
    } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A/* : */) {
          ch = state.input.charCodeAt(++state.position);

          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }

          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;

        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');

        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }

      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; // Keep the result of `composeNode`.
      }

    } else {
      break; // Reading is done. Go to the epilogue.
    }

    //
    // Common reading code for both explicit and implicit notations.
    //
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if (state.lineIndent > nodeIndent && (ch !== 0)) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  //
  // Epilogue.
  //

  // Special case: last mapping's node contains only the key in explicit notation.
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
  }

  // Expose the resulting mapping.
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed    = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x21/* ! */) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C/* < */) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);

  } else if (ch === 0x21/* ! */) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);

  } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (ch !== 0 && ch !== 0x3E/* > */);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21/* ! */) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);

          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }

          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;

  } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;

  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;

  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;

  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x26/* & */) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x2A/* * */) return false;

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!state.anchorMap.hasOwnProperty(alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
      atNewLine  = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag    = null;
  state.anchor = null;
  state.kind   = null;
  state.result = null;

  allowBlockStyles = allowBlockScalars = allowBlockCollections =
    CONTEXT_BLOCK_OUT === nodeContext ||
    CONTEXT_BLOCK_IN  === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections &&
          (readBlockSequence(state, blockIndent) ||
           readBlockMapping(state, blockIndent, flowIndent)) ||
          readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
            readSingleQuotedScalar(state, flowIndent) ||
            readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;

        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }

        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag !== null && state.tag !== '!') {
    if (state.tag === '?') {
      for (typeIndex = 0, typeQuantity = state.implicitTypes.length;
           typeIndex < typeQuantity;
           typeIndex += 1) {
        type = state.implicitTypes[typeIndex];

        // Implicit resolving is not allowed for non-scalar types, and '?'
        // non-specific tag is only assigned to plain scalars. So, it isn't
        // needed to check for 'kind' conformity.

        if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
          state.result = type.construct(state.result);
          state.tag = type.tag;
          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }
          break;
        }
      }
    } else if (_hasOwnProperty.call(state.typeMap, state.tag)) {
      type = state.typeMap[state.tag];

      if (state.result !== null && type.kind !== state.kind) {
        throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
      }

      if (!type.resolve(state.result)) { // `state.result` updated in resolver if matched
        throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
      } else {
        state.result = type.construct(state.result);
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null ||  state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = {};
  state.anchorMap = {};

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
      break;
    }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && !is_EOL(ch));
        break;
      }

      if (is_EOL(ch)) break;

      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 &&
      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);

  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks &&
      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {

    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }

  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}


function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {

    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
      input += '\n';
    }

    // Strip BOM
    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State(input, options);

  // Use 0 as string terminator. That significantly simplifies bounds check.
  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < (state.length - 1)) {
    readDocument(state);
  }

  return state.documents;
}


function loadAll(input, iterator, options) {
  var documents = loadDocuments(input, options), index, length;

  for (index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}


function load(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    /*eslint-disable no-undefined*/
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new YAMLException('expected a single document in the stream, but found more');
}


function safeLoadAll(input, output, options) {
  loadAll(input, output, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
}


function safeLoad(input, options) {
  return load(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
}


module.exports.loadAll     = loadAll;
module.exports.load        = load;
module.exports.safeLoadAll = safeLoadAll;
module.exports.safeLoad    = safeLoad;

},{"./common":21,"./exception":23,"./mark":25,"./schema/default_full":28,"./schema/default_safe":29}],25:[function(require,module,exports){
'use strict';


var common = require('./common');


function Mark(name, buffer, position, line, column) {
  this.name     = name;
  this.buffer   = buffer;
  this.position = position;
  this.line     = line;
  this.column   = column;
}


Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
  var head, start, tail, end, snippet;

  if (!this.buffer) return null;

  indent = indent || 4;
  maxLength = maxLength || 75;

  head = '';
  start = this.position;

  while (start > 0 && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1)) === -1) {
    start -= 1;
    if (this.position - start > (maxLength / 2 - 1)) {
      head = ' ... ';
      start += 5;
      break;
    }
  }

  tail = '';
  end = this.position;

  while (end < this.buffer.length && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end)) === -1) {
    end += 1;
    if (end - this.position > (maxLength / 2 - 1)) {
      tail = ' ... ';
      end -= 5;
      break;
    }
  }

  snippet = this.buffer.slice(start, end);

  return common.repeat(' ', indent) + head + snippet + tail + '\n' +
         common.repeat(' ', indent + this.position - start + head.length) + '^';
};


Mark.prototype.toString = function toString(compact) {
  var snippet, where = '';

  if (this.name) {
    where += 'in "' + this.name + '" ';
  }

  where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1);

  if (!compact) {
    snippet = this.getSnippet();

    if (snippet) {
      where += ':\n' + snippet;
    }
  }

  return where;
};


module.exports = Mark;

},{"./common":21}],26:[function(require,module,exports){
'use strict';

/*eslint-disable max-len*/

var common        = require('./common');
var YAMLException = require('./exception');
var Type          = require('./type');


function compileList(schema, name, result) {
  var exclude = [];

  schema.include.forEach(function (includedSchema) {
    result = compileList(includedSchema, name, result);
  });

  schema[name].forEach(function (currentType) {
    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag) {
        exclude.push(previousIndex);
      }
    });

    result.push(currentType);
  });

  return result.filter(function (type, index) {
    return exclude.indexOf(index) === -1;
  });
}


function compileMap(/* lists... */) {
  var result = {}, index, length;

  function collectType(type) {
    result[type.tag] = type;
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }

  return result;
}


function Schema(definition) {
  this.include  = definition.include  || [];
  this.implicit = definition.implicit || [];
  this.explicit = definition.explicit || [];

  this.implicit.forEach(function (type) {
    if (type.loadKind && type.loadKind !== 'scalar') {
      throw new YAMLException('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }
  });

  this.compiledImplicit = compileList(this, 'implicit', []);
  this.compiledExplicit = compileList(this, 'explicit', []);
  this.compiledTypeMap  = compileMap(this.compiledImplicit, this.compiledExplicit);
}


Schema.DEFAULT = null;


Schema.create = function createSchema() {
  var schemas, types;

  switch (arguments.length) {
    case 1:
      schemas = Schema.DEFAULT;
      types = arguments[0];
      break;

    case 2:
      schemas = arguments[0];
      types = arguments[1];
      break;

    default:
      throw new YAMLException('Wrong number of arguments for Schema.create function');
  }

  schemas = common.toArray(schemas);
  types = common.toArray(types);

  if (!schemas.every(function (schema) { return schema instanceof Schema; })) {
    throw new YAMLException('Specified list of super schemas (or a single Schema object) contains a non-Schema object.');
  }

  if (!types.every(function (type) { return type instanceof Type; })) {
    throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');
  }

  return new Schema({
    include: schemas,
    explicit: types
  });
};


module.exports = Schema;

},{"./common":21,"./exception":23,"./type":32}],27:[function(require,module,exports){
// Standard YAML's Core schema.
// http://www.yaml.org/spec/1.2/spec.html#id2804923
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, Core schema has no distinctions from JSON schema is JS-YAML.


'use strict';


var Schema = require('../schema');


module.exports = new Schema({
  include: [
    require('./json')
  ]
});

},{"../schema":26,"./json":31}],28:[function(require,module,exports){
// JS-YAML's default schema for `load` function.
// It is not described in the YAML specification.
//
// This schema is based on JS-YAML's default safe schema and includes
// JavaScript-specific types: !!js/undefined, !!js/regexp and !!js/function.
//
// Also this schema is used as default base schema at `Schema.create` function.


'use strict';


var Schema = require('../schema');


module.exports = Schema.DEFAULT = new Schema({
  include: [
    require('./default_safe')
  ],
  explicit: [
    require('../type/js/undefined'),
    require('../type/js/regexp'),
    require('../type/js/function')
  ]
});

},{"../schema":26,"../type/js/function":37,"../type/js/regexp":38,"../type/js/undefined":39,"./default_safe":29}],29:[function(require,module,exports){
// JS-YAML's default schema for `safeLoad` function.
// It is not described in the YAML specification.
//
// This schema is based on standard YAML's Core schema and includes most of
// extra types described at YAML tag repository. (http://yaml.org/type/)


'use strict';


var Schema = require('../schema');


module.exports = new Schema({
  include: [
    require('./core')
  ],
  implicit: [
    require('../type/timestamp'),
    require('../type/merge')
  ],
  explicit: [
    require('../type/binary'),
    require('../type/omap'),
    require('../type/pairs'),
    require('../type/set')
  ]
});

},{"../schema":26,"../type/binary":33,"../type/merge":41,"../type/omap":43,"../type/pairs":44,"../type/set":46,"../type/timestamp":48,"./core":27}],30:[function(require,module,exports){
// Standard YAML's Failsafe schema.
// http://www.yaml.org/spec/1.2/spec.html#id2802346


'use strict';


var Schema = require('../schema');


module.exports = new Schema({
  explicit: [
    require('../type/str'),
    require('../type/seq'),
    require('../type/map')
  ]
});

},{"../schema":26,"../type/map":40,"../type/seq":45,"../type/str":47}],31:[function(require,module,exports){
// Standard YAML's JSON schema.
// http://www.yaml.org/spec/1.2/spec.html#id2803231
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, this schema is not such strict as defined in the YAML specification.
// It allows numbers in binary notaion, use `Null` and `NULL` as `null`, etc.


'use strict';


var Schema = require('../schema');


module.exports = new Schema({
  include: [
    require('./failsafe')
  ],
  implicit: [
    require('../type/null'),
    require('../type/bool'),
    require('../type/int'),
    require('../type/float')
  ]
});

},{"../schema":26,"../type/bool":34,"../type/float":35,"../type/int":36,"../type/null":42,"./failsafe":30}],32:[function(require,module,exports){
'use strict';

var YAMLException = require('./exception');

var TYPE_CONSTRUCTOR_OPTIONS = [
  'kind',
  'resolve',
  'construct',
  'instanceOf',
  'predicate',
  'represent',
  'defaultStyle',
  'styleAliases'
];

var YAML_NODE_KINDS = [
  'scalar',
  'sequence',
  'mapping'
];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type(tag, options) {
  options = options || {};

  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  // TODO: Add tag format check.
  this.tag          = tag;
  this.kind         = options['kind']         || null;
  this.resolve      = options['resolve']      || function () { return true; };
  this.construct    = options['construct']    || function (data) { return data; };
  this.instanceOf   = options['instanceOf']   || null;
  this.predicate    = options['predicate']    || null;
  this.represent    = options['represent']    || null;
  this.defaultStyle = options['defaultStyle'] || null;
  this.styleAliases = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

module.exports = Type;

},{"./exception":23}],33:[function(require,module,exports){
'use strict';

/*eslint-disable no-bitwise*/

var NodeBuffer;

try {
  // A trick for browserified version, to not include `Buffer` shim
  var _require = require;
  NodeBuffer = _require('buffer').Buffer;
} catch (__) {}

var Type       = require('../type');


// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


function resolveYamlBinary(data) {
  if (data === null) return false;

  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

  // Convert one by one.
  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    // Skip CR/LF
    if (code > 64) continue;

    // Fail on illegal characters
    if (code < 0) return false;

    bitlen += 6;
  }

  // If there are any bits left, source was corrupted
  return (bitlen % 8) === 0;
}

function constructYamlBinary(data) {
  var idx, tailbits,
      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];

  // Collect by 6*4 bits (3 bytes)

  for (idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = (bits << 6) | map.indexOf(input.charAt(idx));
  }

  // Dump tail

  tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    result.push((bits >> 16) & 0xFF);
    result.push((bits >> 8) & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push((bits >> 10) & 0xFF);
    result.push((bits >> 2) & 0xFF);
  } else if (tailbits === 12) {
    result.push((bits >> 4) & 0xFF);
  }

  // Wrap into Buffer for NodeJS and leave Array for browser
  if (NodeBuffer) return new NodeBuffer(result);

  return result;
}

function representYamlBinary(object /*, style*/) {
  var result = '', bits = 0, idx, tail,
      max = object.length,
      map = BASE64_MAP;

  // Convert every three bytes to 4 ASCII characters.

  for (idx = 0; idx < max; idx++) {
    if ((idx % 3 === 0) && idx) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }

  // Dump tail

  tail = max % 3;

  if (tail === 0) {
    result += map[(bits >> 18) & 0x3F];
    result += map[(bits >> 12) & 0x3F];
    result += map[(bits >> 6) & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[(bits >> 10) & 0x3F];
    result += map[(bits >> 4) & 0x3F];
    result += map[(bits << 2) & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[(bits >> 2) & 0x3F];
    result += map[(bits << 4) & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(object) {
  return NodeBuffer && NodeBuffer.isBuffer(object);
}

module.exports = new Type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});

},{"../type":32}],34:[function(require,module,exports){
'use strict';

var Type = require('../type');

function resolveYamlBoolean(data) {
  if (data === null) return false;

  var max = data.length;

  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
}

function constructYamlBoolean(data) {
  return data === 'true' ||
         data === 'True' ||
         data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

module.exports = new Type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function (object) { return object ? 'true' : 'false'; },
    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
    camelcase: function (object) { return object ? 'True' : 'False'; }
  },
  defaultStyle: 'lowercase'
});

},{"../type":32}],35:[function(require,module,exports){
'use strict';

var common = require('../common');
var Type   = require('../type');

var YAML_FLOAT_PATTERN = new RegExp(
  '^(?:[-+]?(?:[0-9][0-9_]*)\\.[0-9_]*(?:[eE][-+][0-9]+)?' +
  '|\\.[0-9_]+(?:[eE][-+][0-9]+)?' +
  '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' +
  '|[-+]?\\.(?:inf|Inf|INF)' +
  '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data)) return false;

  return true;
}

function constructYamlFloat(data) {
  var value, sign, base, digits;

  value  = data.replace(/_/g, '').toLowerCase();
  sign   = value[0] === '-' ? -1 : 1;
  digits = [];

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

  } else if (value === '.nan') {
    return NaN;

  } else if (value.indexOf(':') >= 0) {
    value.split(':').forEach(function (v) {
      digits.unshift(parseFloat(v, 10));
    });

    value = 0.0;
    base = 1;

    digits.forEach(function (d) {
      value += d * base;
      base *= 60;
    });

    return sign * value;

  }
  return sign * parseFloat(value, 10);
}


var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase': return '.nan';
      case 'uppercase': return '.NAN';
      case 'camelcase': return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '.inf';
      case 'uppercase': return '.INF';
      case 'camelcase': return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '-.inf';
      case 'uppercase': return '-.INF';
      case 'camelcase': return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10);

  // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object));
}

module.exports = new Type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});

},{"../common":21,"../type":32}],36:[function(require,module,exports){
'use strict';

var common = require('../common');
var Type   = require('../type');

function isHexCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
}

function isOctCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
}

function isDecCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  // sign
  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true;
    ch = data[++index];

    // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits;
    }


    if (ch === 'x') {
      // base 16
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits;
    }

    // base 8
    for (; index < max; index++) {
      ch = data[index];
      if (ch === '_') continue;
      if (!isOctCode(data.charCodeAt(index))) return false;
      hasDigits = true;
    }
    return hasDigits;
  }

  // base 10 (except 0) or base 60

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (ch === ':') break;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  if (!hasDigits) return false;

  // if !base60 - done;
  if (ch !== ':') return true;

  // base60 almost not used, no needs to optimize
  return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
}

function constructYamlInteger(data) {
  var value = data, sign = 1, ch, base, digits = [];

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value, 16);
    return sign * parseInt(value, 8);
  }

  if (value.indexOf(':') !== -1) {
    value.split(':').forEach(function (v) {
      digits.unshift(parseInt(v, 10));
    });

    value = 0;
    base = 1;

    digits.forEach(function (d) {
      value += (d * base);
      base *= 60;
    });

    return sign * value;

  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return (Object.prototype.toString.call(object)) === '[object Number]' &&
         (object % 1 === 0 && !common.isNegativeZero(object));
}

module.exports = new Type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary:      function (object) { return '0b' + object.toString(2); },
    octal:       function (object) { return '0'  + object.toString(8); },
    decimal:     function (object) { return        object.toString(10); },
    hexadecimal: function (object) { return '0x' + object.toString(16).toUpperCase(); }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary:      [ 2,  'bin' ],
    octal:       [ 8,  'oct' ],
    decimal:     [ 10, 'dec' ],
    hexadecimal: [ 16, 'hex' ]
  }
});

},{"../common":21,"../type":32}],37:[function(require,module,exports){
'use strict';

var esprima;

// Browserified version does not have esprima
//
// 1. For node.js just require module as deps
// 2. For browser try to require mudule via external AMD system.
//    If not found - try to fallback to window.esprima. If not
//    found too - then fail to parse.
//
try {
  // workaround to exclude package from browserify list.
  var _require = require;
  esprima = _require('esprima');
} catch (_) {
  /*global window */
  if (typeof window !== 'undefined') esprima = window.esprima;
}

var Type = require('../../type');

function resolveJavascriptFunction(data) {
  if (data === null) return false;

  try {
    var source = '(' + data + ')',
        ast    = esprima.parse(source, { range: true });

    if (ast.type                    !== 'Program'             ||
        ast.body.length             !== 1                     ||
        ast.body[0].type            !== 'ExpressionStatement' ||
        ast.body[0].expression.type !== 'FunctionExpression') {
      return false;
    }

    return true;
  } catch (err) {
    return false;
  }
}

function constructJavascriptFunction(data) {
  /*jslint evil:true*/

  var source = '(' + data + ')',
      ast    = esprima.parse(source, { range: true }),
      params = [],
      body;

  if (ast.type                    !== 'Program'             ||
      ast.body.length             !== 1                     ||
      ast.body[0].type            !== 'ExpressionStatement' ||
      ast.body[0].expression.type !== 'FunctionExpression') {
    throw new Error('Failed to resolve function');
  }

  ast.body[0].expression.params.forEach(function (param) {
    params.push(param.name);
  });

  body = ast.body[0].expression.body.range;

  // Esprima's ranges include the first '{' and the last '}' characters on
  // function expressions. So cut them out.
  /*eslint-disable no-new-func*/
  return new Function(params, source.slice(body[0] + 1, body[1] - 1));
}

function representJavascriptFunction(object /*, style*/) {
  return object.toString();
}

function isFunction(object) {
  return Object.prototype.toString.call(object) === '[object Function]';
}

module.exports = new Type('tag:yaml.org,2002:js/function', {
  kind: 'scalar',
  resolve: resolveJavascriptFunction,
  construct: constructJavascriptFunction,
  predicate: isFunction,
  represent: representJavascriptFunction
});

},{"../../type":32}],38:[function(require,module,exports){
'use strict';

var Type = require('../../type');

function resolveJavascriptRegExp(data) {
  if (data === null) return false;
  if (data.length === 0) return false;

  var regexp = data,
      tail   = /\/([gim]*)$/.exec(data),
      modifiers = '';

  // if regexp starts with '/' it can have modifiers and must be properly closed
  // `/foo/gim` - modifiers tail can be maximum 3 chars
  if (regexp[0] === '/') {
    if (tail) modifiers = tail[1];

    if (modifiers.length > 3) return false;
    // if expression starts with /, is should be properly terminated
    if (regexp[regexp.length - modifiers.length - 1] !== '/') return false;
  }

  return true;
}

function constructJavascriptRegExp(data) {
  var regexp = data,
      tail   = /\/([gim]*)$/.exec(data),
      modifiers = '';

  // `/foo/gim` - tail can be maximum 4 chars
  if (regexp[0] === '/') {
    if (tail) modifiers = tail[1];
    regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
  }

  return new RegExp(regexp, modifiers);
}

function representJavascriptRegExp(object /*, style*/) {
  var result = '/' + object.source + '/';

  if (object.global) result += 'g';
  if (object.multiline) result += 'm';
  if (object.ignoreCase) result += 'i';

  return result;
}

function isRegExp(object) {
  return Object.prototype.toString.call(object) === '[object RegExp]';
}

module.exports = new Type('tag:yaml.org,2002:js/regexp', {
  kind: 'scalar',
  resolve: resolveJavascriptRegExp,
  construct: constructJavascriptRegExp,
  predicate: isRegExp,
  represent: representJavascriptRegExp
});

},{"../../type":32}],39:[function(require,module,exports){
'use strict';

var Type = require('../../type');

function resolveJavascriptUndefined() {
  return true;
}

function constructJavascriptUndefined() {
  /*eslint-disable no-undefined*/
  return undefined;
}

function representJavascriptUndefined() {
  return '';
}

function isUndefined(object) {
  return typeof object === 'undefined';
}

module.exports = new Type('tag:yaml.org,2002:js/undefined', {
  kind: 'scalar',
  resolve: resolveJavascriptUndefined,
  construct: constructJavascriptUndefined,
  predicate: isUndefined,
  represent: representJavascriptUndefined
});

},{"../../type":32}],40:[function(require,module,exports){
'use strict';

var Type = require('../type');

module.exports = new Type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function (data) { return data !== null ? data : {}; }
});

},{"../type":32}],41:[function(require,module,exports){
'use strict';

var Type = require('../type');

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

module.exports = new Type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});

},{"../type":32}],42:[function(require,module,exports){
'use strict';

var Type = require('../type');

function resolveYamlNull(data) {
  if (data === null) return true;

  var max = data.length;

  return (max === 1 && data === '~') ||
         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

module.exports = new Type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function () { return '~';    },
    lowercase: function () { return 'null'; },
    uppercase: function () { return 'NULL'; },
    camelcase: function () { return 'Null'; }
  },
  defaultStyle: 'lowercase'
});

},{"../type":32}],43:[function(require,module,exports){
'use strict';

var Type = require('../type');

var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _toString       = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;

  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;

    if (_toString.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }

    if (!pairHasKey) return false;

    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

module.exports = new Type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});

},{"../type":32}],44:[function(require,module,exports){
'use strict';

var Type = require('../type');

var _toString = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    if (_toString.call(pair) !== '[object Object]') return false;

    keys = Object.keys(pair);

    if (keys.length !== 1) return false;

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    keys = Object.keys(pair);

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return result;
}

module.exports = new Type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});

},{"../type":32}],45:[function(require,module,exports){
'use strict';

var Type = require('../type');

module.exports = new Type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function (data) { return data !== null ? data : []; }
});

},{"../type":32}],46:[function(require,module,exports){
'use strict';

var Type = require('../type');

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;

  var key, object = data;

  for (key in object) {
    if (_hasOwnProperty.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

module.exports = new Type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});

},{"../type":32}],47:[function(require,module,exports){
'use strict';

var Type = require('../type');

module.exports = new Type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function (data) { return data !== null ? data : ''; }
});

},{"../type":32}],48:[function(require,module,exports){
'use strict';

var Type = require('../type');

var YAML_DATE_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9])'                    + // [2] month
  '-([0-9][0-9])$');                   // [3] day

var YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9]?)'                   + // [2] month
  '-([0-9][0-9]?)'                   + // [3] day
  '(?:[Tt]|[ \\t]+)'                 + // ...
  '([0-9][0-9]?)'                    + // [4] hour
  ':([0-9][0-9])'                    + // [5] minute
  ':([0-9][0-9])'                    + // [6] second
  '(?:\\.([0-9]*))?'                 + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
  '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}

function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0,
      delta = null, tz_hour, tz_minute, date;

  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

  if (match === null) throw new Error('Date resolve error');

  // match: [1] year [2] month [3] day

  year = +(match[1]);
  month = +(match[2]) - 1; // JS month starts with 0
  day = +(match[3]);

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day));
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { // milli-seconds
      fraction += '0';
    }
    fraction = +fraction;
  }

  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object /*, style*/) {
  return object.toISOString();
}

module.exports = new Type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});

},{"../type":32}],49:[function(require,module,exports){
var baseIndexOf = require('../internal/baseIndexOf'),
    binaryIndex = require('../internal/binaryIndex');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * for equality comparisons. If `fromIndex` is negative, it's used as the offset
 * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
 * performs a faster binary search.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to search.
 * @param {*} value The value to search for.
 * @param {boolean|number} [fromIndex=0] The index to search from or `true`
 *  to perform a binary search on a sorted array.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.indexOf([1, 2, 1, 2], 2);
 * // => 1
 *
 * // using `fromIndex`
 * _.indexOf([1, 2, 1, 2], 2, 2);
 * // => 3
 *
 * // performing a binary search
 * _.indexOf([1, 1, 2, 2], 2, true);
 * // => 2
 */
function indexOf(array, value, fromIndex) {
  var length = array ? array.length : 0;
  if (!length) {
    return -1;
  }
  if (typeof fromIndex == 'number') {
    fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
  } else if (fromIndex) {
    var index = binaryIndex(array, value);
    if (index < length &&
        (value === value ? (value === array[index]) : (array[index] !== array[index]))) {
      return index;
    }
    return -1;
  }
  return baseIndexOf(array, value, fromIndex || 0);
}

module.exports = indexOf;

},{"../internal/baseIndexOf":78,"../internal/binaryIndex":92}],50:[function(require,module,exports){
/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array ? array.length : 0;
  return length ? array[length - 1] : undefined;
}

module.exports = last;

},{}],51:[function(require,module,exports){
var LazyWrapper = require('../internal/LazyWrapper'),
    LodashWrapper = require('../internal/LodashWrapper'),
    baseLodash = require('../internal/baseLodash'),
    isArray = require('../lang/isArray'),
    isObjectLike = require('../internal/isObjectLike'),
    wrapperClone = require('../internal/wrapperClone');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit chaining.
 * Methods that operate on and return arrays, collections, and functions can
 * be chained together. Methods that retrieve a single value or may return a
 * primitive value will automatically end the chain returning the unwrapped
 * value. Explicit chaining may be enabled using `_.chain`. The execution of
 * chained methods is lazy, that is, execution is deferred until `_#value`
 * is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
 * fusion is an optimization strategy which merge iteratee calls; this can help
 * to avoid the creation of intermediate data structures and greatly reduce the
 * number of iteratee executions.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
 * `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
 * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
 * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
 * and `where`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
 * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
 * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
 * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
 * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
 * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
 * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
 * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
 * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
 * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
 * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
 * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
 * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
 * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
 * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
 * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
 * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
 * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
 * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
 * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
 * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
 * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
 * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
 * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
 * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
 * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
 * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
 * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
 * `unescape`, `uniqueId`, `value`, and `words`
 *
 * The wrapper method `sample` will return a wrapped value when `n` is provided,
 * otherwise an unwrapped value is returned.
 *
 * @name _
 * @constructor
 * @category Chain
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // returns an unwrapped value
 * wrapped.reduce(function(total, n) {
 *   return total + n;
 * });
 * // => 6
 *
 * // returns a wrapped value
 * var squares = wrapped.map(function(n) {
 *   return n * n;
 * });
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;

module.exports = lodash;

},{"../internal/LazyWrapper":60,"../internal/LodashWrapper":61,"../internal/baseLodash":82,"../internal/isObjectLike":126,"../internal/wrapperClone":137,"../lang/isArray":140}],52:[function(require,module,exports){
module.exports = require('./forEach');

},{"./forEach":54}],53:[function(require,module,exports){
var baseEach = require('../internal/baseEach'),
    createFind = require('../internal/createFind');

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is bound to `thisArg` and
 * invoked with three arguments: (value, index|key, collection).
 *
 * If a property name is provided for `predicate` the created `_.property`
 * style callback returns the property value of the given element.
 *
 * If a value is also provided for `thisArg` the created `_.matchesProperty`
 * style callback returns `true` for elements that have a matching property
 * value, else `false`.
 *
 * If an object is provided for `predicate` the created `_.matches` style
 * callback returns `true` for elements that have the properties of the given
 * object, else `false`.
 *
 * @static
 * @memberOf _
 * @alias detect
 * @category Collection
 * @param {Array|Object|string} collection The collection to search.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked
 *  per iteration.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.result(_.find(users, function(chr) {
 *   return chr.age < 40;
 * }), 'user');
 * // => 'barney'
 *
 * // using the `_.matches` callback shorthand
 * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
 * // => 'pebbles'
 *
 * // using the `_.matchesProperty` callback shorthand
 * _.result(_.find(users, 'active', false), 'user');
 * // => 'fred'
 *
 * // using the `_.property` callback shorthand
 * _.result(_.find(users, 'active'), 'user');
 * // => 'barney'
 */
var find = createFind(baseEach);

module.exports = find;

},{"../internal/baseEach":71,"../internal/createFind":102}],54:[function(require,module,exports){
var arrayEach = require('../internal/arrayEach'),
    baseEach = require('../internal/baseEach'),
    createForEach = require('../internal/createForEach');

/**
 * Iterates over elements of `collection` invoking `iteratee` for each element.
 * The `iteratee` is bound to `thisArg` and invoked with three arguments:
 * (value, index|key, collection). Iteratee functions may exit iteration early
 * by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length" property
 * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
 * may be used for object iteration.
 *
 * @static
 * @memberOf _
 * @alias each
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [thisArg] The `this` binding of `iteratee`.
 * @returns {Array|Object|string} Returns `collection`.
 * @example
 *
 * _([1, 2]).forEach(function(n) {
 *   console.log(n);
 * }).value();
 * // => logs each value from left to right and returns the array
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
 *   console.log(n, key);
 * });
 * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
 */
var forEach = createForEach(arrayEach, baseEach);

module.exports = forEach;

},{"../internal/arrayEach":63,"../internal/baseEach":71,"../internal/createForEach":103}],55:[function(require,module,exports){
var baseIndexOf = require('../internal/baseIndexOf'),
    getLength = require('../internal/getLength'),
    isArray = require('../lang/isArray'),
    isIterateeCall = require('../internal/isIterateeCall'),
    isLength = require('../internal/isLength'),
    isString = require('../lang/isString'),
    values = require('../object/values');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `target` is in `collection` using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * for equality comparisons. If `fromIndex` is negative, it's used as the offset
 * from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @alias contains, include
 * @category Collection
 * @param {Array|Object|string} collection The collection to search.
 * @param {*} target The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
 * @returns {boolean} Returns `true` if a matching element is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
 * // => true
 *
 * _.includes('pebbles', 'eb');
 * // => true
 */
function includes(collection, target, fromIndex, guard) {
  var length = collection ? getLength(collection) : 0;
  if (!isLength(length)) {
    collection = values(collection);
    length = collection.length;
  }
  if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
    fromIndex = 0;
  } else {
    fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
  }
  return (typeof collection == 'string' || !isArray(collection) && isString(collection))
    ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, target, fromIndex) > -1);
}

module.exports = includes;

},{"../internal/baseIndexOf":78,"../internal/getLength":112,"../internal/isIterateeCall":122,"../internal/isLength":125,"../lang/isArray":140,"../lang/isString":146,"../object/values":152}],56:[function(require,module,exports){
var arrayMap = require('../internal/arrayMap'),
    baseCallback = require('../internal/baseCallback'),
    baseMap = require('../internal/baseMap'),
    isArray = require('../lang/isArray');

/**
 * Creates an array of values by running each element in `collection` through
 * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
 * arguments: (value, index|key, collection).
 *
 * If a property name is provided for `iteratee` the created `_.property`
 * style callback returns the property value of the given element.
 *
 * If a value is also provided for `thisArg` the created `_.matchesProperty`
 * style callback returns `true` for elements that have a matching property
 * value, else `false`.
 *
 * If an object is provided for `iteratee` the created `_.matches` style
 * callback returns `true` for elements that have the properties of the given
 * object, else `false`.
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
 * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
 * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
 * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
 * `sum`, `uniq`, and `words`
 *
 * @static
 * @memberOf _
 * @alias collect
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function|Object|string} [iteratee=_.identity] The function invoked
 *  per iteration.
 * @param {*} [thisArg] The `this` binding of `iteratee`.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function timesThree(n) {
 *   return n * 3;
 * }
 *
 * _.map([1, 2], timesThree);
 * // => [3, 6]
 *
 * _.map({ 'a': 1, 'b': 2 }, timesThree);
 * // => [3, 6] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // using the `_.property` callback shorthand
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee, thisArg) {
  var func = isArray(collection) ? arrayMap : baseMap;
  iteratee = baseCallback(iteratee, thisArg, 3);
  return func(collection, iteratee);
}

module.exports = map;

},{"../internal/arrayMap":64,"../internal/baseCallback":67,"../internal/baseMap":83,"../lang/isArray":140}],57:[function(require,module,exports){
var getNative = require('../internal/getNative');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeNow = getNative(Date, 'now');

/**
 * Gets the number of milliseconds that have elapsed since the Unix epoch
 * (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @category Date
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => logs the number of milliseconds it took for the deferred function to be invoked
 */
var now = nativeNow || function() {
  return new Date().getTime();
};

module.exports = now;

},{"../internal/getNative":114}],58:[function(require,module,exports){
var createWrapper = require('../internal/createWrapper'),
    replaceHolders = require('../internal/replaceHolders'),
    restParam = require('./restParam');

/** Used to compose bitmasks for wrapper metadata. */
var BIND_FLAG = 1,
    PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and prepends any additional `_.bind` arguments to those provided to the
 * bound function.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind` this method does not set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * var greet = function(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * };
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // using placeholders
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = restParam(function(func, thisArg, partials) {
  var bitmask = BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, bind.placeholder);
    bitmask |= PARTIAL_FLAG;
  }
  return createWrapper(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;

},{"../internal/createWrapper":106,"../internal/replaceHolders":132,"./restParam":59}],59:[function(require,module,exports){
/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as an array.
 *
 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.restParam(function(what, names) {
 *   return what + ' ' + _.initial(names).join(', ') +
 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
 * });
 *
 * say('hello', 'fred', 'barney', 'pebbles');
 * // => 'hello fred, barney, & pebbles'
 */
function restParam(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        rest = Array(length);

    while (++index < length) {
      rest[index] = args[start + index];
    }
    switch (start) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, args[0], rest);
      case 2: return func.call(this, args[0], args[1], rest);
    }
    var otherArgs = Array(start + 1);
    index = -1;
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = rest;
    return func.apply(this, otherArgs);
  };
}

module.exports = restParam;

},{}],60:[function(require,module,exports){
var baseCreate = require('./baseCreate'),
    baseLodash = require('./baseLodash');

/** Used as references for `-Infinity` and `Infinity`. */
var POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = POSITIVE_INFINITY;
  this.__views__ = [];
}

LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;

},{"./baseCreate":70,"./baseLodash":82}],61:[function(require,module,exports){
var baseCreate = require('./baseCreate'),
    baseLodash = require('./baseLodash');

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
 * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
 */
function LodashWrapper(value, chainAll, actions) {
  this.__wrapped__ = value;
  this.__actions__ = actions || [];
  this.__chain__ = !!chainAll;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;

},{"./baseCreate":70,"./baseLodash":82}],62:[function(require,module,exports){
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function arrayCopy(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = arrayCopy;

},{}],63:[function(require,module,exports){
/**
 * A specialized version of `_.forEach` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;

},{}],64:[function(require,module,exports){
/**
 * A specialized version of `_.map` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

},{}],65:[function(require,module,exports){
/**
 * A specialized version of `_.some` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;

},{}],66:[function(require,module,exports){
var baseCopy = require('./baseCopy'),
    keys = require('../object/keys');

/**
 * The base implementation of `_.assign` without support for argument juggling,
 * multiple sources, and `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return source == null
    ? object
    : baseCopy(source, keys(source), object);
}

module.exports = baseAssign;

},{"../object/keys":149,"./baseCopy":69}],67:[function(require,module,exports){
var baseMatches = require('./baseMatches'),
    baseMatchesProperty = require('./baseMatchesProperty'),
    bindCallback = require('./bindCallback'),
    identity = require('../utility/identity'),
    property = require('../utility/property');

/**
 * The base implementation of `_.callback` which supports specifying the
 * number of arguments to provide to `func`.
 *
 * @private
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function baseCallback(func, thisArg, argCount) {
  var type = typeof func;
  if (type == 'function') {
    return thisArg === undefined
      ? func
      : bindCallback(func, thisArg, argCount);
  }
  if (func == null) {
    return identity;
  }
  if (type == 'object') {
    return baseMatches(func);
  }
  return thisArg === undefined
    ? property(func)
    : baseMatchesProperty(func, thisArg);
}

module.exports = baseCallback;

},{"../utility/identity":154,"../utility/property":156,"./baseMatches":84,"./baseMatchesProperty":85,"./bindCallback":94}],68:[function(require,module,exports){
var arrayCopy = require('./arrayCopy'),
    arrayEach = require('./arrayEach'),
    baseAssign = require('./baseAssign'),
    baseForOwn = require('./baseForOwn'),
    initCloneArray = require('./initCloneArray'),
    initCloneByTag = require('./initCloneByTag'),
    initCloneObject = require('./initCloneObject'),
    isArray = require('../lang/isArray'),
    isHostObject = require('./isHostObject'),
    isObject = require('../lang/isObject');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
cloneableTags[dateTag] = cloneableTags[float32Tag] =
cloneableTags[float64Tag] = cloneableTags[int8Tag] =
cloneableTags[int16Tag] = cloneableTags[int32Tag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[stringTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[mapTag] = cloneableTags[setTag] =
cloneableTags[weakMapTag] = false;

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * The base implementation of `_.clone` without support for argument juggling
 * and `this` binding `customizer` functions.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {Function} [customizer] The function to customize cloning values.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The object `value` belongs to.
 * @param {Array} [stackA=[]] Tracks traversed source objects.
 * @param {Array} [stackB=[]] Associates clones with source counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return arrayCopy(value, result);
    }
  } else {
    var tag = objToString.call(value),
        isFunc = tag == funcTag;

    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return baseAssign(result, value);
      }
    } else {
      return cloneableTags[tag]
        ? initCloneByTag(value, tag, isDeep)
        : (object ? value : {});
    }
  }
  // Check for circular references and return its corresponding clone.
  stackA || (stackA = []);
  stackB || (stackB = []);

  var length = stackA.length;
  while (length--) {
    if (stackA[length] == value) {
      return stackB[length];
    }
  }
  // Add the source value to the stack of traversed objects and associate it with its clone.
  stackA.push(value);
  stackB.push(result);

  // Recursively populate clone (susceptible to call stack limits).
  (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
    result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
  });
  return result;
}

module.exports = baseClone;

},{"../lang/isArray":140,"../lang/isObject":144,"./arrayCopy":62,"./arrayEach":63,"./baseAssign":66,"./baseForOwn":76,"./initCloneArray":116,"./initCloneByTag":117,"./initCloneObject":118,"./isHostObject":120}],69:[function(require,module,exports){
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property names to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @returns {Object} Returns `object`.
 */
function baseCopy(source, props, object) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    object[key] = source[key];
  }
  return object;
}

module.exports = baseCopy;

},{}],70:[function(require,module,exports){
var isObject = require('../lang/isObject');

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(prototype) {
    if (isObject(prototype)) {
      object.prototype = prototype;
      var result = new object;
      object.prototype = undefined;
    }
    return result || {};
  };
}());

module.exports = baseCreate;

},{"../lang/isObject":144}],71:[function(require,module,exports){
var baseForOwn = require('./baseForOwn'),
    createBaseEach = require('./createBaseEach');

/**
 * The base implementation of `_.forEach` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object|string} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;

},{"./baseForOwn":76,"./createBaseEach":98}],72:[function(require,module,exports){
/**
 * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
 * without support for callback shorthands and `this` binding, which iterates
 * over `collection` using the provided `eachFunc`.
 *
 * @private
 * @param {Array|Object|string} collection The collection to search.
 * @param {Function} predicate The function invoked per iteration.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @param {boolean} [retKey] Specify returning the key of the found element
 *  instead of the element itself.
 * @returns {*} Returns the found element or its key, else `undefined`.
 */
function baseFind(collection, predicate, eachFunc, retKey) {
  var result;
  eachFunc(collection, function(value, key, collection) {
    if (predicate(value, key, collection)) {
      result = retKey ? key : value;
      return false;
    }
  });
  return result;
}

module.exports = baseFind;

},{}],73:[function(require,module,exports){
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for callback shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {Function} predicate The function invoked per iteration.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromRight) {
  var length = array.length,
      index = fromRight ? length : -1;

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;

},{}],74:[function(require,module,exports){
var createBaseFor = require('./createBaseFor');

/**
 * The base implementation of `baseForIn` and `baseForOwn` which iterates
 * over `object` properties returned by `keysFunc` invoking `iteratee` for
 * each property. Iteratee functions may exit iteration early by explicitly
 * returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;

},{"./createBaseFor":99}],75:[function(require,module,exports){
var baseFor = require('./baseFor'),
    keysIn = require('../object/keysIn');

/**
 * The base implementation of `_.forIn` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForIn(object, iteratee) {
  return baseFor(object, iteratee, keysIn);
}

module.exports = baseForIn;

},{"../object/keysIn":150,"./baseFor":74}],76:[function(require,module,exports){
var baseFor = require('./baseFor'),
    keys = require('../object/keys');

/**
 * The base implementation of `_.forOwn` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;

},{"../object/keys":149,"./baseFor":74}],77:[function(require,module,exports){
var toObject = require('./toObject');

/**
 * The base implementation of `get` without support for string paths
 * and default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path of the property to get.
 * @param {string} [pathKey] The key representation of path.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path, pathKey) {
  if (object == null) {
    return;
  }
  object = toObject(object);
  if (pathKey !== undefined && pathKey in object) {
    path = [pathKey];
  }
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = toObject(object)[path[index++]];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;

},{"./toObject":135}],78:[function(require,module,exports){
var indexOfNaN = require('./indexOfNaN');

/**
 * The base implementation of `_.indexOf` without support for binary searches.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return indexOfNaN(array, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = baseIndexOf;

},{"./indexOfNaN":115}],79:[function(require,module,exports){
var baseIsEqualDeep = require('./baseIsEqualDeep'),
    isObject = require('../lang/isObject'),
    isObjectLike = require('./isObjectLike');

/**
 * The base implementation of `_.isEqual` without support for `this` binding
 * `customizer` functions.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparing values.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
}

module.exports = baseIsEqual;

},{"../lang/isObject":144,"./baseIsEqualDeep":80,"./isObjectLike":126}],80:[function(require,module,exports){
var equalArrays = require('./equalArrays'),
    equalByTag = require('./equalByTag'),
    equalObjects = require('./equalObjects'),
    isArray = require('../lang/isArray'),
    isHostObject = require('./isHostObject'),
    isTypedArray = require('../lang/isTypedArray');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing objects.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = objToString.call(object);
    if (objTag == argsTag) {
      objTag = objectTag;
    } else if (objTag != objectTag) {
      objIsArr = isTypedArray(object);
    }
  }
  if (!othIsArr) {
    othTag = objToString.call(other);
    if (othTag == argsTag) {
      othTag = objectTag;
    } else if (othTag != objectTag) {
      othIsArr = isTypedArray(other);
    }
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !(objIsArr || objIsObj)) {
    return equalByTag(object, other, objTag);
  }
  if (!isLoose) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
    }
  }
  if (!isSameTag) {
    return false;
  }
  // Assume cyclic values are equal.
  // For more information on detecting circular references see https://es5.github.io/#JO.
  stackA || (stackA = []);
  stackB || (stackB = []);

  var length = stackA.length;
  while (length--) {
    if (stackA[length] == object) {
      return stackB[length] == other;
    }
  }
  // Add `object` and `other` to the stack of traversed objects.
  stackA.push(object);
  stackB.push(other);

  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

  stackA.pop();
  stackB.pop();

  return result;
}

module.exports = baseIsEqualDeep;

},{"../lang/isArray":140,"../lang/isTypedArray":147,"./equalArrays":107,"./equalByTag":108,"./equalObjects":109,"./isHostObject":120}],81:[function(require,module,exports){
var baseIsEqual = require('./baseIsEqual'),
    toObject = require('./toObject');

/**
 * The base implementation of `_.isMatch` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Array} matchData The propery names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparing objects.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = toObject(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;

},{"./baseIsEqual":79,"./toObject":135}],82:[function(require,module,exports){
/**
 * The function whose prototype all chaining wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;

},{}],83:[function(require,module,exports){
var baseEach = require('./baseEach'),
    isArrayLike = require('./isArrayLike');

/**
 * The base implementation of `_.map` without support for callback shorthands
 * and `this` binding.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;

},{"./baseEach":71,"./isArrayLike":119}],84:[function(require,module,exports){
var baseIsMatch = require('./baseIsMatch'),
    getMatchData = require('./getMatchData'),
    toObject = require('./toObject');

/**
 * The base implementation of `_.matches` which does not clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    var key = matchData[0][0],
        value = matchData[0][1];

    return function(object) {
      if (object == null) {
        return false;
      }
      object = toObject(object);
      return object[key] === value && (value !== undefined || (key in object));
    };
  }
  return function(object) {
    return baseIsMatch(object, matchData);
  };
}

module.exports = baseMatches;

},{"./baseIsMatch":81,"./getMatchData":113,"./toObject":135}],85:[function(require,module,exports){
var baseGet = require('./baseGet'),
    baseIsEqual = require('./baseIsEqual'),
    baseSlice = require('./baseSlice'),
    isArray = require('../lang/isArray'),
    isKey = require('./isKey'),
    isStrictComparable = require('./isStrictComparable'),
    last = require('../array/last'),
    toObject = require('./toObject'),
    toPath = require('./toPath');

/**
 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to compare.
 * @returns {Function} Returns the new function.
 */
function baseMatchesProperty(path, srcValue) {
  var isArr = isArray(path),
      isCommon = isKey(path) && isStrictComparable(srcValue),
      pathKey = (path + '');

  path = toPath(path);
  return function(object) {
    if (object == null) {
      return false;
    }
    var key = pathKey;
    object = toObject(object);
    if ((isArr || !isCommon) && !(key in object)) {
      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
      if (object == null) {
        return false;
      }
      key = last(path);
      object = toObject(object);
    }
    return object[key] === srcValue
      ? (srcValue !== undefined || (key in object))
      : baseIsEqual(srcValue, object[key], undefined, true);
  };
}

module.exports = baseMatchesProperty;

},{"../array/last":50,"../lang/isArray":140,"./baseGet":77,"./baseIsEqual":79,"./baseSlice":89,"./isKey":123,"./isStrictComparable":127,"./toObject":135,"./toPath":136}],86:[function(require,module,exports){
var toObject = require('./toObject');

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : toObject(object)[key];
  };
}

module.exports = baseProperty;

},{"./toObject":135}],87:[function(require,module,exports){
var baseGet = require('./baseGet'),
    toPath = require('./toPath');

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new function.
 */
function basePropertyDeep(path) {
  var pathKey = (path + '');
  path = toPath(path);
  return function(object) {
    return baseGet(object, path, pathKey);
  };
}

module.exports = basePropertyDeep;

},{"./baseGet":77,"./toPath":136}],88:[function(require,module,exports){
var identity = require('../utility/identity'),
    metaMap = require('./metaMap');

/**
 * The base implementation of `setData` without support for hot loop detection.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};

module.exports = baseSetData;

},{"../utility/identity":154,"./metaMap":129}],89:[function(require,module,exports){
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  start = start == null ? 0 : (+start || 0);
  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = (end === undefined || end > length) ? length : (+end || 0);
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;

},{}],90:[function(require,module,exports){
/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` or `undefined` values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  return value == null ? '' : (value + '');
}

module.exports = baseToString;

},{}],91:[function(require,module,exports){
/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  var index = -1,
      length = props.length,
      result = Array(length);

  while (++index < length) {
    result[index] = object[props[index]];
  }
  return result;
}

module.exports = baseValues;

},{}],92:[function(require,module,exports){
var binaryIndexBy = require('./binaryIndexBy'),
    identity = require('../utility/identity');

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295,
    HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

/**
 * Performs a binary search of `array` to determine the index at which `value`
 * should be inserted into `array` in order to maintain its sort order.
 *
 * @private
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {boolean} [retHighest] Specify returning the highest qualified index.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 */
function binaryIndex(array, value, retHighest) {
  var low = 0,
      high = array ? array.length : low;

  if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
    while (low < high) {
      var mid = (low + high) >>> 1,
          computed = array[mid];

      if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return high;
  }
  return binaryIndexBy(array, value, identity, retHighest);
}

module.exports = binaryIndex;

},{"../utility/identity":154,"./binaryIndexBy":93}],93:[function(require,module,exports){
/* Native method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeMin = Math.min;

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295,
    MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1;

/**
 * This function is like `binaryIndex` except that it invokes `iteratee` for
 * `value` and each element of `array` to compute their sort ranking. The
 * iteratee is invoked with one argument; (value).
 *
 * @private
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {boolean} [retHighest] Specify returning the highest qualified index.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 */
function binaryIndexBy(array, value, iteratee, retHighest) {
  value = iteratee(value);

  var low = 0,
      high = array ? array.length : 0,
      valIsNaN = value !== value,
      valIsNull = value === null,
      valIsUndef = value === undefined;

  while (low < high) {
    var mid = nativeFloor((low + high) / 2),
        computed = iteratee(array[mid]),
        isDef = computed !== undefined,
        isReflexive = computed === computed;

    if (valIsNaN) {
      var setLow = isReflexive || retHighest;
    } else if (valIsNull) {
      setLow = isReflexive && isDef && (retHighest || computed != null);
    } else if (valIsUndef) {
      setLow = isReflexive && (retHighest || isDef);
    } else if (computed == null) {
      setLow = false;
    } else {
      setLow = retHighest ? (computed <= value) : (computed < value);
    }
    if (setLow) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return nativeMin(high, MAX_ARRAY_INDEX);
}

module.exports = binaryIndexBy;

},{}],94:[function(require,module,exports){
var identity = require('../utility/identity');

/**
 * A specialized version of `baseCallback` which only supports `this` binding
 * and specifying the number of arguments to provide to `func`.
 *
 * @private
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function bindCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  if (thisArg === undefined) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
    case 5: return function(value, other, key, object, source) {
      return func.call(thisArg, value, other, key, object, source);
    };
  }
  return function() {
    return func.apply(thisArg, arguments);
  };
}

module.exports = bindCallback;

},{"../utility/identity":154}],95:[function(require,module,exports){
(function (global){
/** Native method references. */
var ArrayBuffer = global.ArrayBuffer,
    Uint8Array = global.Uint8Array;

/**
 * Creates a clone of the given array buffer.
 *
 * @private
 * @param {ArrayBuffer} buffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function bufferClone(buffer) {
  var result = new ArrayBuffer(buffer.byteLength),
      view = new Uint8Array(result);

  view.set(new Uint8Array(buffer));
  return result;
}

module.exports = bufferClone;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],96:[function(require,module,exports){
/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array|Object} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders) {
  var holdersLength = holders.length,
      argsIndex = -1,
      argsLength = nativeMax(args.length - holdersLength, 0),
      leftIndex = -1,
      leftLength = partials.length,
      result = Array(leftLength + argsLength);

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    result[holders[argsIndex]] = args[argsIndex];
  }
  while (argsLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgs;

},{}],97:[function(require,module,exports){
/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array|Object} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders) {
  var holdersIndex = -1,
      holdersLength = holders.length,
      argsIndex = -1,
      argsLength = nativeMax(args.length - holdersLength, 0),
      rightIndex = -1,
      rightLength = partials.length,
      result = Array(argsLength + rightLength);

  while (++argsIndex < argsLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    result[offset + holders[holdersIndex]] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgsRight;

},{}],98:[function(require,module,exports){
var getLength = require('./getLength'),
    isLength = require('./isLength'),
    toObject = require('./toObject');

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    var length = collection ? getLength(collection) : 0;
    if (!isLength(length)) {
      return eachFunc(collection, iteratee);
    }
    var index = fromRight ? length : -1,
        iterable = toObject(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;

},{"./getLength":112,"./isLength":125,"./toObject":135}],99:[function(require,module,exports){
var toObject = require('./toObject');

/**
 * Creates a base function for `_.forIn` or `_.forInRight`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var iterable = toObject(object),
        props = keysFunc(object),
        length = props.length,
        index = fromRight ? length : -1;

    while ((fromRight ? index-- : ++index < length)) {
      var key = props[index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;

},{"./toObject":135}],100:[function(require,module,exports){
(function (global){
var createCtorWrapper = require('./createCtorWrapper');

/**
 * Creates a function that wraps `func` and invokes it with the `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to bind.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new bound function.
 */
function createBindWrapper(func, thisArg) {
  var Ctor = createCtorWrapper(func);

  function wrapper() {
    var fn = (this && this !== global && this instanceof wrapper) ? Ctor : func;
    return fn.apply(thisArg, arguments);
  }
  return wrapper;
}

module.exports = createBindWrapper;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./createCtorWrapper":101}],101:[function(require,module,exports){
var baseCreate = require('./baseCreate'),
    isObject = require('../lang/isObject');

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtorWrapper(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors.
    // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtorWrapper;

},{"../lang/isObject":144,"./baseCreate":70}],102:[function(require,module,exports){
var baseCallback = require('./baseCallback'),
    baseFind = require('./baseFind'),
    baseFindIndex = require('./baseFindIndex'),
    isArray = require('../lang/isArray');

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new find function.
 */
function createFind(eachFunc, fromRight) {
  return function(collection, predicate, thisArg) {
    predicate = baseCallback(predicate, thisArg, 3);
    if (isArray(collection)) {
      var index = baseFindIndex(collection, predicate, fromRight);
      return index > -1 ? collection[index] : undefined;
    }
    return baseFind(collection, predicate, eachFunc);
  };
}

module.exports = createFind;

},{"../lang/isArray":140,"./baseCallback":67,"./baseFind":72,"./baseFindIndex":73}],103:[function(require,module,exports){
var bindCallback = require('./bindCallback'),
    isArray = require('../lang/isArray');

/**
 * Creates a function for `_.forEach` or `_.forEachRight`.
 *
 * @private
 * @param {Function} arrayFunc The function to iterate over an array.
 * @param {Function} eachFunc The function to iterate over a collection.
 * @returns {Function} Returns the new each function.
 */
function createForEach(arrayFunc, eachFunc) {
  return function(collection, iteratee, thisArg) {
    return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
      ? arrayFunc(collection, iteratee)
      : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
  };
}

module.exports = createForEach;

},{"../lang/isArray":140,"./bindCallback":94}],104:[function(require,module,exports){
(function (global){
var arrayCopy = require('./arrayCopy'),
    composeArgs = require('./composeArgs'),
    composeArgsRight = require('./composeArgsRight'),
    createCtorWrapper = require('./createCtorWrapper'),
    isLaziable = require('./isLaziable'),
    reorder = require('./reorder'),
    replaceHolders = require('./replaceHolders'),
    setData = require('./setData');

/** Used to compose bitmasks for wrapper metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_BOUND_FLAG = 4,
    CURRY_FLAG = 8,
    CURRY_RIGHT_FLAG = 16,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64,
    ARY_FLAG = 128;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that wraps `func` and invokes it with optional `this`
 * binding of, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to reference.
 * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & ARY_FLAG,
      isBind = bitmask & BIND_FLAG,
      isBindKey = bitmask & BIND_KEY_FLAG,
      isCurry = bitmask & CURRY_FLAG,
      isCurryBound = bitmask & CURRY_BOUND_FLAG,
      isCurryRight = bitmask & CURRY_RIGHT_FLAG,
      Ctor = isBindKey ? undefined : createCtorWrapper(func);

  function wrapper() {
    // Avoid `arguments` object use disqualifying optimizations by
    // converting it to an array before providing it to other functions.
    var length = arguments.length,
        index = length,
        args = Array(length);

    while (index--) {
      args[index] = arguments[index];
    }
    if (partials) {
      args = composeArgs(args, partials, holders);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight);
    }
    if (isCurry || isCurryRight) {
      var placeholder = wrapper.placeholder,
          argsHolders = replaceHolders(args, placeholder);

      length -= argsHolders.length;
      if (length < arity) {
        var newArgPos = argPos ? arrayCopy(argPos) : undefined,
            newArity = nativeMax(arity - length, 0),
            newsHolders = isCurry ? argsHolders : undefined,
            newHoldersRight = isCurry ? undefined : argsHolders,
            newPartials = isCurry ? args : undefined,
            newPartialsRight = isCurry ? undefined : args;

        bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
        bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

        if (!isCurryBound) {
          bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
        }
        var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
            result = createHybridWrapper.apply(undefined, newData);

        if (isLaziable(func)) {
          setData(result, newData);
        }
        result.placeholder = placeholder;
        return result;
      }
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    if (argPos) {
      args = reorder(args, argPos);
    }
    if (isAry && ary < args.length) {
      args.length = ary;
    }
    if (this && this !== global && this instanceof wrapper) {
      fn = Ctor || createCtorWrapper(func);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

module.exports = createHybridWrapper;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./arrayCopy":62,"./composeArgs":96,"./composeArgsRight":97,"./createCtorWrapper":101,"./isLaziable":124,"./reorder":131,"./replaceHolders":132,"./setData":133}],105:[function(require,module,exports){
(function (global){
var createCtorWrapper = require('./createCtorWrapper');

/** Used to compose bitmasks for wrapper metadata. */
var BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` and invokes it with the optional `this`
 * binding of `thisArg` and the `partials` prepended to those provided to
 * the wrapper.
 *
 * @private
 * @param {Function} func The function to partially apply arguments to.
 * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to the new function.
 * @returns {Function} Returns the new bound function.
 */
function createPartialWrapper(func, bitmask, thisArg, partials) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtorWrapper(func);

  function wrapper() {
    // Avoid `arguments` object use disqualifying optimizations by
    // converting it to an array before providing it `func`.
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength);

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    var fn = (this && this !== global && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartialWrapper;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./createCtorWrapper":101}],106:[function(require,module,exports){
var baseSetData = require('./baseSetData'),
    createBindWrapper = require('./createBindWrapper'),
    createHybridWrapper = require('./createHybridWrapper'),
    createPartialWrapper = require('./createPartialWrapper'),
    getData = require('./getData'),
    mergeData = require('./mergeData'),
    setData = require('./setData');

/** Used to compose bitmasks for wrapper metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to reference.
 * @param {number} bitmask The bitmask of flags.
 *  The bitmask may be composed of the following flags:
 *     1 - `_.bind`
 *     2 - `_.bindKey`
 *     4 - `_.curry` or `_.curryRight` of a bound function
 *     8 - `_.curry`
 *    16 - `_.curryRight`
 *    32 - `_.partial`
 *    64 - `_.partialRight`
 *   128 - `_.rearg`
 *   256 - `_.ary`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  length -= (holders ? holders.length : 0);
  if (bitmask & PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func),
      newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

  if (data) {
    mergeData(newData, data);
    bitmask = newData[1];
    arity = newData[9];
  }
  newData[9] = arity == null
    ? (isBindKey ? 0 : func.length)
    : (nativeMax(arity - length, 0) || 0);

  if (bitmask == BIND_FLAG) {
    var result = createBindWrapper(newData[0], newData[2]);
  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
    result = createPartialWrapper.apply(undefined, newData);
  } else {
    result = createHybridWrapper.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setter(result, newData);
}

module.exports = createWrapper;

},{"./baseSetData":88,"./createBindWrapper":100,"./createHybridWrapper":104,"./createPartialWrapper":105,"./getData":110,"./mergeData":128,"./setData":133}],107:[function(require,module,exports){
var arraySome = require('./arraySome');

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing arrays.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var index = -1,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
    return false;
  }
  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index],
        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

    if (result !== undefined) {
      if (result) {
        continue;
      }
      return false;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (isLoose) {
      if (!arraySome(other, function(othValue) {
            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
          })) {
        return false;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
      return false;
    }
  }
  return true;
}

module.exports = equalArrays;

},{"./arraySome":65}],108:[function(require,module,exports){
/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    stringTag = '[object String]';

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag) {
  switch (tag) {
    case boolTag:
    case dateTag:
      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
      return +object == +other;

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case numberTag:
      // Treat `NaN` vs. `NaN` as equal.
      return (object != +object)
        ? other != +other
        : object == +other;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings primitives and string
      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
      return object == (other + '');
  }
  return false;
}

module.exports = equalByTag;

},{}],109:[function(require,module,exports){
var keys = require('../object/keys');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing values.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isLoose) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  var skipCtor = isLoose;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key],
        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

    // Recursively compare objects (susceptible to call stack limits).
    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
      return false;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (!skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      return false;
    }
  }
  return true;
}

module.exports = equalObjects;

},{"../object/keys":149}],110:[function(require,module,exports){
var metaMap = require('./metaMap'),
    noop = require('../utility/noop');

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;

},{"../utility/noop":155,"./metaMap":129}],111:[function(require,module,exports){
var realNames = require('./realNames');

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = array ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;

},{"./realNames":130}],112:[function(require,module,exports){
var baseProperty = require('./baseProperty');

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

module.exports = getLength;

},{"./baseProperty":86}],113:[function(require,module,exports){
var isStrictComparable = require('./isStrictComparable'),
    pairs = require('../object/pairs');

/**
 * Gets the propery names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = pairs(object),
      length = result.length;

  while (length--) {
    result[length][2] = isStrictComparable(result[length][1]);
  }
  return result;
}

module.exports = getMatchData;

},{"../object/pairs":151,"./isStrictComparable":127}],114:[function(require,module,exports){
var isNative = require('../lang/isNative');

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

module.exports = getNative;

},{"../lang/isNative":143}],115:[function(require,module,exports){
/**
 * Gets the index at which the first occurrence of `NaN` is found in `array`.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
 */
function indexOfNaN(array, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 0 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    var other = array[index];
    if (other !== other) {
      return index;
    }
  }
  return -1;
}

module.exports = indexOfNaN;

},{}],116:[function(require,module,exports){
/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add array properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;

},{}],117:[function(require,module,exports){
(function (global){
var bufferClone = require('./bufferClone');

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    stringTag = '[object String]';

var arrayBufferTag = '[object ArrayBuffer]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Native method references. */
var Uint8Array = global.Uint8Array;

/** Used to lookup a type array constructors by `toStringTag`. */
var ctorByTag = {};
ctorByTag[float32Tag] = global.Float32Array;
ctorByTag[float64Tag] = global.Float64Array;
ctorByTag[int8Tag] = global.Int8Array;
ctorByTag[int16Tag] = global.Int16Array;
ctorByTag[int32Tag] = global.Int32Array;
ctorByTag[uint8Tag] = Uint8Array;
ctorByTag[uint8ClampedTag] = global.Uint8ClampedArray;
ctorByTag[uint16Tag] = global.Uint16Array;
ctorByTag[uint32Tag] = global.Uint32Array;

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return bufferClone(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      // Safari 5 mobile incorrectly has `Object` as the constructor of typed arrays.
      if (Ctor instanceof Ctor) {
        Ctor = ctorByTag[tag];
      }
      var buffer = object.buffer;
      return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      var result = new Ctor(object.source, reFlags.exec(object));
      result.lastIndex = object.lastIndex;
  }
  return result;
}

module.exports = initCloneByTag;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./bufferClone":95}],118:[function(require,module,exports){
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  var Ctor = object.constructor;
  if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
    Ctor = Object;
  }
  return new Ctor;
}

module.exports = initCloneObject;

},{}],119:[function(require,module,exports){
var getLength = require('./getLength'),
    isLength = require('./isLength');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

module.exports = isArrayLike;

},{"./getLength":112,"./isLength":125}],120:[function(require,module,exports){
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
var isHostObject = (function() {
  try {
    Object({ 'toString': 0 } + '');
  } catch(e) {
    return function() { return false; };
  }
  return function(value) {
    // IE < 9 presents many host objects as `Object` objects that can coerce
    // to strings despite having improperly defined `toString` methods.
    return typeof value.toString != 'function' && typeof (value + '') == 'string';
  };
}());

module.exports = isHostObject;

},{}],121:[function(require,module,exports){
/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

},{}],122:[function(require,module,exports){
var isArrayLike = require('./isArrayLike'),
    isIndex = require('./isIndex'),
    isObject = require('../lang/isObject');

/**
 * Checks if the provided arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
      ? (isArrayLike(object) && isIndex(index, object.length))
      : (type == 'string' && index in object)) {
    var other = object[index];
    return value === value ? (value === other) : (other !== other);
  }
  return false;
}

module.exports = isIterateeCall;

},{"../lang/isObject":144,"./isArrayLike":119,"./isIndex":121}],123:[function(require,module,exports){
var isArray = require('../lang/isArray'),
    toObject = require('./toObject');

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  var type = typeof value;
  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
    return true;
  }
  if (isArray(value)) {
    return false;
  }
  var result = !reIsDeepProp.test(value);
  return result || (object != null && value in toObject(object));
}

module.exports = isKey;

},{"../lang/isArray":140,"./toObject":135}],124:[function(require,module,exports){
var LazyWrapper = require('./LazyWrapper'),
    getData = require('./getData'),
    getFuncName = require('./getFuncName'),
    lodash = require('../chain/lodash');

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;

},{"../chain/lodash":51,"./LazyWrapper":60,"./getData":110,"./getFuncName":111}],125:[function(require,module,exports){
/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

},{}],126:[function(require,module,exports){
/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],127:[function(require,module,exports){
var isObject = require('../lang/isObject');

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;

},{"../lang/isObject":144}],128:[function(require,module,exports){
var arrayCopy = require('./arrayCopy'),
    composeArgs = require('./composeArgs'),
    composeArgsRight = require('./composeArgsRight'),
    replaceHolders = require('./replaceHolders');

/** Used to compose bitmasks for wrapper metadata. */
var BIND_FLAG = 1,
    CURRY_BOUND_FLAG = 4,
    CURRY_FLAG = 8,
    ARY_FLAG = 128,
    REARG_FLAG = 256;

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers required to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
 * augment function arguments, making the order in which they are executed important,
 * preventing the merging of metadata. However, we make an exception for a safe
 * common case where curried functions have `_.ary` and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < ARY_FLAG;

  var isCombo =
    (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) ||
    (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) ||
    (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & BIND_FLAG) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = arrayCopy(value);
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

module.exports = mergeData;

},{"./arrayCopy":62,"./composeArgs":96,"./composeArgsRight":97,"./replaceHolders":132}],129:[function(require,module,exports){
(function (global){
var getNative = require('./getNative');

/** Native method references. */
var WeakMap = getNative(global, 'WeakMap');

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./getNative":114}],130:[function(require,module,exports){
/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;

},{}],131:[function(require,module,exports){
var arrayCopy = require('./arrayCopy'),
    isIndex = require('./isIndex');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = arrayCopy(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

module.exports = reorder;

},{"./arrayCopy":62,"./isIndex":121}],132:[function(require,module,exports){
/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = -1,
      result = [];

  while (++index < length) {
    if (array[index] === placeholder) {
      array[index] = PLACEHOLDER;
      result[++resIndex] = index;
    }
  }
  return result;
}

module.exports = replaceHolders;

},{}],133:[function(require,module,exports){
var baseSetData = require('./baseSetData'),
    now = require('../date/now');

/** Used to detect when a function becomes hot. */
var HOT_COUNT = 150,
    HOT_SPAN = 16;

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity function
 * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = (function() {
  var count = 0,
      lastCalled = 0;

  return function(key, value) {
    var stamp = now(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return key;
      }
    } else {
      count = 0;
    }
    return baseSetData(key, value);
  };
}());

module.exports = setData;

},{"../date/now":57,"./baseSetData":88}],134:[function(require,module,exports){
var isArguments = require('../lang/isArguments'),
    isArray = require('../lang/isArray'),
    isIndex = require('./isIndex'),
    isLength = require('./isLength'),
    isString = require('../lang/isString'),
    keysIn = require('../object/keysIn');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength && object.length;

  var allowIndexes = !!length && isLength(length) &&
    (isArray(object) || isArguments(object) || isString(object));

  var index = -1,
      result = [];

  while (++index < propsLength) {
    var key = props[index];
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = shimKeys;

},{"../lang/isArguments":139,"../lang/isArray":140,"../lang/isString":146,"../object/keysIn":150,"./isIndex":121,"./isLength":125}],135:[function(require,module,exports){
var isObject = require('../lang/isObject'),
    isString = require('../lang/isString'),
    support = require('../support');

/**
 * Converts `value` to an object if it's not one.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {Object} Returns the object.
 */
function toObject(value) {
  if (support.unindexedChars && isString(value)) {
    var index = -1,
        length = value.length,
        result = Object(value);

    while (++index < length) {
      result[index] = value.charAt(index);
    }
    return result;
  }
  return isObject(value) ? value : Object(value);
}

module.exports = toObject;

},{"../lang/isObject":144,"../lang/isString":146,"../support":153}],136:[function(require,module,exports){
var baseToString = require('./baseToString'),
    isArray = require('../lang/isArray');

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `value` to property path array if it's not one.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {Array} Returns the property path array.
 */
function toPath(value) {
  if (isArray(value)) {
    return value;
  }
  var result = [];
  baseToString(value).replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
}

module.exports = toPath;

},{"../lang/isArray":140,"./baseToString":90}],137:[function(require,module,exports){
var LazyWrapper = require('./LazyWrapper'),
    LodashWrapper = require('./LodashWrapper'),
    arrayCopy = require('./arrayCopy');

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  return wrapper instanceof LazyWrapper
    ? wrapper.clone()
    : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
}

module.exports = wrapperClone;

},{"./LazyWrapper":60,"./LodashWrapper":61,"./arrayCopy":62}],138:[function(require,module,exports){
var baseClone = require('../internal/baseClone'),
    bindCallback = require('../internal/bindCallback');

/**
 * Creates a deep clone of `value`. If `customizer` is provided it's invoked
 * to produce the cloned values. If `customizer` returns `undefined` cloning
 * is handled by the method instead. The `customizer` is bound to `thisArg`
 * and invoked with up to three argument; (value [, index|key, object]).
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
 * The enumerable properties of `arguments` objects and objects created by
 * constructors other than `Object` are cloned to plain `Object` objects. An
 * empty object is returned for uncloneable values such as functions, DOM nodes,
 * Maps, Sets, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to deep clone.
 * @param {Function} [customizer] The function to customize cloning values.
 * @param {*} [thisArg] The `this` binding of `customizer`.
 * @returns {*} Returns the deep cloned value.
 * @example
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * var deep = _.cloneDeep(users);
 * deep[0] === users[0];
 * // => false
 *
 * // using a customizer callback
 * var el = _.cloneDeep(document.body, function(value) {
 *   if (_.isElement(value)) {
 *     return value.cloneNode(true);
 *   }
 * });
 *
 * el === document.body
 * // => false
 * el.nodeName
 * // => BODY
 * el.childNodes.length;
 * // => 20
 */
function cloneDeep(value, customizer, thisArg) {
  return typeof customizer == 'function'
    ? baseClone(value, true, bindCallback(customizer, thisArg, 3))
    : baseClone(value, true);
}

module.exports = cloneDeep;

},{"../internal/baseClone":68,"../internal/bindCallback":94}],139:[function(require,module,exports){
var isArrayLike = require('../internal/isArrayLike'),
    isObjectLike = require('../internal/isObjectLike');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Native method references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is classified as an `arguments` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  return isObjectLike(value) && isArrayLike(value) &&
    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
}

module.exports = isArguments;

},{"../internal/isArrayLike":119,"../internal/isObjectLike":126}],140:[function(require,module,exports){
var getNative = require('../internal/getNative'),
    isLength = require('../internal/isLength'),
    isObjectLike = require('../internal/isObjectLike');

/** `Object#toString` result references. */
var arrayTag = '[object Array]';

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(function() { return arguments; }());
 * // => false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
};

module.exports = isArray;

},{"../internal/getNative":114,"../internal/isLength":125,"../internal/isObjectLike":126}],141:[function(require,module,exports){
var isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isArrayLike = require('../internal/isArrayLike'),
    isFunction = require('./isFunction'),
    isObjectLike = require('../internal/isObjectLike'),
    isString = require('./isString'),
    keys = require('../object/keys');

/**
 * Checks if `value` is empty. A value is considered empty unless it's an
 * `arguments` object, array, string, or jQuery-like collection with a length
 * greater than `0` or an object with own enumerable properties.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {Array|Object|string} value The value to inspect.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
      (isObjectLike(value) && isFunction(value.splice)))) {
    return !value.length;
  }
  return !keys(value).length;
}

module.exports = isEmpty;

},{"../internal/isArrayLike":119,"../internal/isObjectLike":126,"../object/keys":149,"./isArguments":139,"./isArray":140,"./isFunction":142,"./isString":146}],142:[function(require,module,exports){
var isObject = require('./isObject');

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 which returns 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

module.exports = isFunction;

},{"./isObject":144}],143:[function(require,module,exports){
var isFunction = require('./isFunction'),
    isHostObject = require('../internal/isHostObject'),
    isObjectLike = require('../internal/isObjectLike');

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
}

module.exports = isNative;

},{"../internal/isHostObject":120,"../internal/isObjectLike":126,"./isFunction":142}],144:[function(require,module,exports){
/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],145:[function(require,module,exports){
var baseForIn = require('../internal/baseForIn'),
    isArguments = require('./isArguments'),
    isHostObject = require('../internal/isHostObject'),
    isObjectLike = require('../internal/isObjectLike'),
    support = require('../support');

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * **Note:** This method assumes objects created by the `Object` constructor
 * have no inherited enumerable properties.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  var Ctor;

  // Exit early for non `Object` objects.
  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isHostObject(value) && !isArguments(value)) ||
      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
    return false;
  }
  // IE < 9 iterates inherited properties before own properties. If the first
  // iterated property is an object's own property then there are no inherited
  // enumerable properties.
  var result;
  if (support.ownLast) {
    baseForIn(value, function(subValue, key, object) {
      result = hasOwnProperty.call(object, key);
      return false;
    });
    return result !== false;
  }
  // In most environments an object's own properties are iterated before
  // its inherited properties. If the last iterated property is an object's
  // own property then there are no inherited enumerable properties.
  baseForIn(value, function(subValue, key) {
    result = key;
  });
  return result === undefined || hasOwnProperty.call(value, result);
}

module.exports = isPlainObject;

},{"../internal/baseForIn":75,"../internal/isHostObject":120,"../internal/isObjectLike":126,"../support":153,"./isArguments":139}],146:[function(require,module,exports){
var isObjectLike = require('../internal/isObjectLike');

/** `Object#toString` result references. */
var stringTag = '[object String]';

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
}

module.exports = isString;

},{"../internal/isObjectLike":126}],147:[function(require,module,exports){
var isLength = require('../internal/isLength'),
    isObjectLike = require('../internal/isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dateTag] = typedArrayTags[errorTag] =
typedArrayTags[funcTag] = typedArrayTags[mapTag] =
typedArrayTags[numberTag] = typedArrayTags[objectTag] =
typedArrayTags[regexpTag] = typedArrayTags[setTag] =
typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
function isTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
}

module.exports = isTypedArray;

},{"../internal/isLength":125,"../internal/isObjectLike":126}],148:[function(require,module,exports){
/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;

},{}],149:[function(require,module,exports){
var getNative = require('../internal/getNative'),
    isArrayLike = require('../internal/isArrayLike'),
    isObject = require('../lang/isObject'),
    shimKeys = require('../internal/shimKeys'),
    support = require('../support');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? undefined : object.constructor;
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
      (typeof object == 'function' ? support.enumPrototypes : isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

module.exports = keys;

},{"../internal/getNative":114,"../internal/isArrayLike":119,"../internal/shimKeys":134,"../lang/isObject":144,"../support":153}],150:[function(require,module,exports){
var arrayEach = require('../internal/arrayEach'),
    isArguments = require('../lang/isArguments'),
    isArray = require('../lang/isArray'),
    isFunction = require('../lang/isFunction'),
    isIndex = require('../internal/isIndex'),
    isLength = require('../internal/isLength'),
    isObject = require('../lang/isObject'),
    isString = require('../lang/isString'),
    support = require('../support');

/** `Object#toString` result references. */
var arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    stringTag = '[object String]';

/** Used to fix the JScript `[[DontEnum]]` bug. */
var shadowProps = [
  'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable',
  'toLocaleString', 'toString', 'valueOf'
];

/** Used for native method references. */
var errorProto = Error.prototype,
    objectProto = Object.prototype,
    stringProto = String.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to avoid iterating over non-enumerable properties in IE < 9. */
var nonEnumProps = {};
nonEnumProps[arrayTag] = nonEnumProps[dateTag] = nonEnumProps[numberTag] = { 'constructor': true, 'toLocaleString': true, 'toString': true, 'valueOf': true };
nonEnumProps[boolTag] = nonEnumProps[stringTag] = { 'constructor': true, 'toString': true, 'valueOf': true };
nonEnumProps[errorTag] = nonEnumProps[funcTag] = nonEnumProps[regexpTag] = { 'constructor': true, 'toString': true };
nonEnumProps[objectTag] = { 'constructor': true };

arrayEach(shadowProps, function(key) {
  for (var tag in nonEnumProps) {
    if (hasOwnProperty.call(nonEnumProps, tag)) {
      var props = nonEnumProps[tag];
      props[key] = hasOwnProperty.call(props, key);
    }
  }
});

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;

  length = (length && isLength(length) &&
    (isArray(object) || isArguments(object) || isString(object)) && length) || 0;

  var Ctor = object.constructor,
      index = -1,
      proto = (isFunction(Ctor) && Ctor.prototype) || objectProto,
      isProto = proto === object,
      result = Array(length),
      skipIndexes = length > 0,
      skipErrorProps = support.enumErrorProps && (object === errorProto || object instanceof Error),
      skipProto = support.enumPrototypes && isFunction(object);

  while (++index < length) {
    result[index] = (index + '');
  }
  // lodash skips the `constructor` property when it infers it's iterating
  // over a `prototype` object because IE < 9 can't set the `[[Enumerable]]`
  // attribute of an existing property and the `constructor` property of a
  // prototype defaults to non-enumerable.
  for (var key in object) {
    if (!(skipProto && key == 'prototype') &&
        !(skipErrorProps && (key == 'message' || key == 'name')) &&
        !(skipIndexes && isIndex(key, length)) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  if (support.nonEnumShadows && object !== objectProto) {
    var tag = object === stringProto ? stringTag : (object === errorProto ? errorTag : objToString.call(object)),
        nonEnums = nonEnumProps[tag] || nonEnumProps[objectTag];

    if (tag == objectTag) {
      proto = objectProto;
    }
    length = shadowProps.length;
    while (length--) {
      key = shadowProps[length];
      var nonEnum = nonEnums[key];
      if (!(isProto && nonEnum) &&
          (nonEnum ? hasOwnProperty.call(object, key) : object[key] !== proto[key])) {
        result.push(key);
      }
    }
  }
  return result;
}

module.exports = keysIn;

},{"../internal/arrayEach":63,"../internal/isIndex":121,"../internal/isLength":125,"../lang/isArguments":139,"../lang/isArray":140,"../lang/isFunction":142,"../lang/isObject":144,"../lang/isString":146,"../support":153}],151:[function(require,module,exports){
var keys = require('./keys'),
    toObject = require('../internal/toObject');

/**
 * Creates a two dimensional array of the key-value pairs for `object`,
 * e.g. `[[key1, value1], [key2, value2]]`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the new array of key-value pairs.
 * @example
 *
 * _.pairs({ 'barney': 36, 'fred': 40 });
 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
 */
function pairs(object) {
  object = toObject(object);

  var index = -1,
      props = keys(object),
      length = props.length,
      result = Array(length);

  while (++index < length) {
    var key = props[index];
    result[index] = [key, object[key]];
  }
  return result;
}

module.exports = pairs;

},{"../internal/toObject":135,"./keys":149}],152:[function(require,module,exports){
var baseValues = require('../internal/baseValues'),
    keys = require('./keys');

/**
 * Creates an array of the own enumerable property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return baseValues(object, keys(object));
}

module.exports = values;

},{"../internal/baseValues":91,"./keys":149}],153:[function(require,module,exports){
/** Used for native method references. */
var arrayProto = Array.prototype,
    errorProto = Error.prototype,
    objectProto = Object.prototype;

/** Native method references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/**
 * An object environment feature flags.
 *
 * @static
 * @memberOf _
 * @type Object
 */
var support = {};

(function(x) {
  var Ctor = function() { this.x = x; },
      object = { '0': x, 'length': x },
      props = [];

  Ctor.prototype = { 'valueOf': x, 'y': x };
  for (var key in new Ctor) { props.push(key); }

  /**
   * Detect if `name` or `message` properties of `Error.prototype` are
   * enumerable by default (IE < 9, Safari < 5.1).
   *
   * @memberOf _.support
   * @type boolean
   */
  support.enumErrorProps = propertyIsEnumerable.call(errorProto, 'message') ||
    propertyIsEnumerable.call(errorProto, 'name');

  /**
   * Detect if `prototype` properties are enumerable by default.
   *
   * Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
   * (if the prototype or a property on the prototype has been set)
   * incorrectly set the `[[Enumerable]]` value of a function's `prototype`
   * property to `true`.
   *
   * @memberOf _.support
   * @type boolean
   */
  support.enumPrototypes = propertyIsEnumerable.call(Ctor, 'prototype');

  /**
   * Detect if properties shadowing those on `Object.prototype` are non-enumerable.
   *
   * In IE < 9 an object's own properties, shadowing non-enumerable ones,
   * are made non-enumerable as well (a.k.a the JScript `[[DontEnum]]` bug).
   *
   * @memberOf _.support
   * @type boolean
   */
  support.nonEnumShadows = !/valueOf/.test(props);

  /**
   * Detect if own properties are iterated after inherited properties (IE < 9).
   *
   * @memberOf _.support
   * @type boolean
   */
  support.ownLast = props[0] != 'x';

  /**
   * Detect if `Array#shift` and `Array#splice` augment array-like objects
   * correctly.
   *
   * Firefox < 10, compatibility modes of IE 8, and IE < 9 have buggy Array
   * `shift()` and `splice()` functions that fail to remove the last element,
   * `value[0]`, of array-like objects even though the "length" property is
   * set to `0`. The `shift()` method is buggy in compatibility modes of IE 8,
   * while `splice()` is buggy regardless of mode in IE < 9.
   *
   * @memberOf _.support
   * @type boolean
   */
  support.spliceObjects = (splice.call(object, 0, 1), !object[0]);

  /**
   * Detect lack of support for accessing string characters by index.
   *
   * IE < 8 can't access characters by index. IE 8 can only access characters
   * by index on string literals, not string objects.
   *
   * @memberOf _.support
   * @type boolean
   */
  support.unindexedChars = ('x'[0] + Object('x')[0]) != 'xx';
}(1, 0));

module.exports = support;

},{}],154:[function(require,module,exports){
/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

},{}],155:[function(require,module,exports){
/**
 * A no-operation function that returns `undefined` regardless of the
 * arguments it receives.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.noop(object) === undefined;
 * // => true
 */
function noop() {
  // No operation performed.
}

module.exports = noop;

},{}],156:[function(require,module,exports){
var baseProperty = require('../internal/baseProperty'),
    basePropertyDeep = require('../internal/basePropertyDeep'),
    isKey = require('../internal/isKey');

/**
 * Creates a function that returns the property value at `path` on a
 * given object.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': { 'c': 2 } } },
 *   { 'a': { 'b': { 'c': 1 } } }
 * ];
 *
 * _.map(objects, _.property('a.b.c'));
 * // => [2, 1]
 *
 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
}

module.exports = property;

},{"../internal/baseProperty":86,"../internal/basePropertyDeep":87,"../internal/isKey":123}],157:[function(require,module,exports){
(function (process){
// vim:ts=4:sts=4:sw=4:
/*!
 *
 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

(function (definition) {
    "use strict";

    // This file will function properly as a <script> tag, or a module
    // using CommonJS and NodeJS or RequireJS module formats.  In
    // Common/Node/RequireJS, the module exports the Q API and when
    // executed as a simple <script>, it creates a Q global instead.

    // Montage Require
    if (typeof bootstrap === "function") {
        bootstrap("promise", definition);

    // CommonJS
    } else if (typeof exports === "object" && typeof module === "object") {
        module.exports = definition();

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define(definition);

    // SES (Secure EcmaScript)
    } else if (typeof ses !== "undefined") {
        if (!ses.ok()) {
            return;
        } else {
            ses.makeQ = definition;
        }

    // <script>
    } else if (typeof window !== "undefined" || typeof self !== "undefined") {
        // Prefer window over self for add-on scripts. Use self for
        // non-windowed contexts.
        var global = typeof window !== "undefined" ? window : self;

        // Get the `window` object, save the previous Q global
        // and initialize Q as a global.
        var previousQ = global.Q;
        global.Q = definition();

        // Add a noConflict function so Q can be removed from the
        // global namespace.
        global.Q.noConflict = function () {
            global.Q = previousQ;
            return this;
        };

    } else {
        throw new Error("This environment was not anticipated by Q. Please file a bug.");
    }

})(function () {
"use strict";

var hasStacks = false;
try {
    throw new Error();
} catch (e) {
    hasStacks = !!e.stack;
}

// All code after this point will be filtered from stack traces reported
// by Q.
var qStartingLine = captureLine();
var qFileName;

// shims

// used for fallback in "allResolved"
var noop = function () {};

// Use the fastest possible means to execute a task in a future turn
// of the event loop.
var nextTick =(function () {
    // linked list of tasks (single, with head node)
    var head = {task: void 0, next: null};
    var tail = head;
    var flushing = false;
    var requestTick = void 0;
    var isNodeJS = false;
    // queue for late tasks, used by unhandled rejection tracking
    var laterQueue = [];

    function flush() {
        /* jshint loopfunc: true */
        var task, domain;

        while (head.next) {
            head = head.next;
            task = head.task;
            head.task = void 0;
            domain = head.domain;

            if (domain) {
                head.domain = void 0;
                domain.enter();
            }
            runSingle(task, domain);

        }
        while (laterQueue.length) {
            task = laterQueue.pop();
            runSingle(task);
        }
        flushing = false;
    }
    // runs a single function in the async queue
    function runSingle(task, domain) {
        try {
            task();

        } catch (e) {
            if (isNodeJS) {
                // In node, uncaught exceptions are considered fatal errors.
                // Re-throw them synchronously to interrupt flushing!

                // Ensure continuation if the uncaught exception is suppressed
                // listening "uncaughtException" events (as domains does).
                // Continue in next event to avoid tick recursion.
                if (domain) {
                    domain.exit();
                }
                setTimeout(flush, 0);
                if (domain) {
                    domain.enter();
                }

                throw e;

            } else {
                // In browsers, uncaught exceptions are not fatal.
                // Re-throw them asynchronously to avoid slow-downs.
                setTimeout(function () {
                    throw e;
                }, 0);
            }
        }

        if (domain) {
            domain.exit();
        }
    }

    nextTick = function (task) {
        tail = tail.next = {
            task: task,
            domain: isNodeJS && process.domain,
            next: null
        };

        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };

    if (typeof process === "object" &&
        process.toString() === "[object process]" && process.nextTick) {
        // Ensure Q is in a real Node environment, with a `process.nextTick`.
        // To see through fake Node environments:
        // * Mocha test runner - exposes a `process` global without a `nextTick`
        // * Browserify - exposes a `process.nexTick` function that uses
        //   `setTimeout`. In this case `setImmediate` is preferred because
        //    it is faster. Browserify's `process.toString()` yields
        //   "[object Object]", while in a real Node environment
        //   `process.nextTick()` yields "[object process]".
        isNodeJS = true;

        requestTick = function () {
            process.nextTick(flush);
        };

    } else if (typeof setImmediate === "function") {
        // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
        if (typeof window !== "undefined") {
            requestTick = setImmediate.bind(window, flush);
        } else {
            requestTick = function () {
                setImmediate(flush);
            };
        }

    } else if (typeof MessageChannel !== "undefined") {
        // modern browsers
        // http://www.nonblocking.io/2011/06/windownexttick.html
        var channel = new MessageChannel();
        // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
        // working message ports the first time a page loads.
        channel.port1.onmessage = function () {
            requestTick = requestPortTick;
            channel.port1.onmessage = flush;
            flush();
        };
        var requestPortTick = function () {
            // Opera requires us to provide a message payload, regardless of
            // whether we use it.
            channel.port2.postMessage(0);
        };
        requestTick = function () {
            setTimeout(flush, 0);
            requestPortTick();
        };

    } else {
        // old browsers
        requestTick = function () {
            setTimeout(flush, 0);
        };
    }
    // runs a task after all other tasks have been run
    // this is useful for unhandled rejection tracking that needs to happen
    // after all `then`d tasks have been run.
    nextTick.runAfter = function (task) {
        laterQueue.push(task);
        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };
    return nextTick;
})();

// Attempt to make generics safe in the face of downstream
// modifications.
// There is no situation where this is necessary.
// If you need a security guarantee, these primordials need to be
// deeply frozen anyway, and if you don’t need a security guarantee,
// this is just plain paranoid.
// However, this **might** have the nice side-effect of reducing the size of
// the minified code by reducing x.call() to merely x()
// See Mark Miller’s explanation of what this does.
// http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
var call = Function.call;
function uncurryThis(f) {
    return function () {
        return call.apply(f, arguments);
    };
}
// This is equivalent, but slower:
// uncurryThis = Function_bind.bind(Function_bind.call);
// http://jsperf.com/uncurrythis

var array_slice = uncurryThis(Array.prototype.slice);

var array_reduce = uncurryThis(
    Array.prototype.reduce || function (callback, basis) {
        var index = 0,
            length = this.length;
        // concerning the initial value, if one is not provided
        if (arguments.length === 1) {
            // seek to the first value in the array, accounting
            // for the possibility that is is a sparse array
            do {
                if (index in this) {
                    basis = this[index++];
                    break;
                }
                if (++index >= length) {
                    throw new TypeError();
                }
            } while (1);
        }
        // reduce
        for (; index < length; index++) {
            // account for the possibility that the array is sparse
            if (index in this) {
                basis = callback(basis, this[index], index);
            }
        }
        return basis;
    }
);

var array_indexOf = uncurryThis(
    Array.prototype.indexOf || function (value) {
        // not a very good shim, but good enough for our one use of it
        for (var i = 0; i < this.length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    }
);

var array_map = uncurryThis(
    Array.prototype.map || function (callback, thisp) {
        var self = this;
        var collect = [];
        array_reduce(self, function (undefined, value, index) {
            collect.push(callback.call(thisp, value, index, self));
        }, void 0);
        return collect;
    }
);

var object_create = Object.create || function (prototype) {
    function Type() { }
    Type.prototype = prototype;
    return new Type();
};

var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

var object_keys = Object.keys || function (object) {
    var keys = [];
    for (var key in object) {
        if (object_hasOwnProperty(object, key)) {
            keys.push(key);
        }
    }
    return keys;
};

var object_toString = uncurryThis(Object.prototype.toString);

function isObject(value) {
    return value === Object(value);
}

// generator related shims

// FIXME: Remove this function once ES6 generators are in SpiderMonkey.
function isStopIteration(exception) {
    return (
        object_toString(exception) === "[object StopIteration]" ||
        exception instanceof QReturnValue
    );
}

// FIXME: Remove this helper and Q.return once ES6 generators are in
// SpiderMonkey.
var QReturnValue;
if (typeof ReturnValue !== "undefined") {
    QReturnValue = ReturnValue;
} else {
    QReturnValue = function (value) {
        this.value = value;
    };
}

// long stack traces

var STACK_JUMP_SEPARATOR = "From previous event:";

function makeStackTraceLong(error, promise) {
    // If possible, transform the error stack trace by removing Node and Q
    // cruft, then concatenating with the stack trace of `promise`. See #57.
    if (hasStacks &&
        promise.stack &&
        typeof error === "object" &&
        error !== null &&
        error.stack &&
        error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1
    ) {
        var stacks = [];
        for (var p = promise; !!p; p = p.source) {
            if (p.stack) {
                stacks.unshift(p.stack);
            }
        }
        stacks.unshift(error.stack);

        var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
        error.stack = filterStackString(concatedStacks);
    }
}

function filterStackString(stackString) {
    var lines = stackString.split("\n");
    var desiredLines = [];
    for (var i = 0; i < lines.length; ++i) {
        var line = lines[i];

        if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
            desiredLines.push(line);
        }
    }
    return desiredLines.join("\n");
}

function isNodeFrame(stackLine) {
    return stackLine.indexOf("(module.js:") !== -1 ||
           stackLine.indexOf("(node.js:") !== -1;
}

function getFileNameAndLineNumber(stackLine) {
    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
    // In IE10 function name can have spaces ("Anonymous function") O_o
    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
    if (attempt1) {
        return [attempt1[1], Number(attempt1[2])];
    }

    // Anonymous functions: "at filename:lineNumber:columnNumber"
    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
    if (attempt2) {
        return [attempt2[1], Number(attempt2[2])];
    }

    // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
    if (attempt3) {
        return [attempt3[1], Number(attempt3[2])];
    }
}

function isInternalFrame(stackLine) {
    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

    if (!fileNameAndLineNumber) {
        return false;
    }

    var fileName = fileNameAndLineNumber[0];
    var lineNumber = fileNameAndLineNumber[1];

    return fileName === qFileName &&
        lineNumber >= qStartingLine &&
        lineNumber <= qEndingLine;
}

// discover own file name and line number range for filtering stack
// traces
function captureLine() {
    if (!hasStacks) {
        return;
    }

    try {
        throw new Error();
    } catch (e) {
        var lines = e.stack.split("\n");
        var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
        var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
        if (!fileNameAndLineNumber) {
            return;
        }

        qFileName = fileNameAndLineNumber[0];
        return fileNameAndLineNumber[1];
    }
}

function deprecate(callback, name, alternative) {
    return function () {
        if (typeof console !== "undefined" &&
            typeof console.warn === "function") {
            console.warn(name + " is deprecated, use " + alternative +
                         " instead.", new Error("").stack);
        }
        return callback.apply(callback, arguments);
    };
}

// end of shims
// beginning of real work

/**
 * Constructs a promise for an immediate reference, passes promises through, or
 * coerces promises from different systems.
 * @param value immediate reference or promise
 */
function Q(value) {
    // If the object is already a Promise, return it directly.  This enables
    // the resolve function to both be used to created references from objects,
    // but to tolerably coerce non-promises to promises.
    if (value instanceof Promise) {
        return value;
    }

    // assimilate thenables
    if (isPromiseAlike(value)) {
        return coerce(value);
    } else {
        return fulfill(value);
    }
}
Q.resolve = Q;

/**
 * Performs a task in a future turn of the event loop.
 * @param {Function} task
 */
Q.nextTick = nextTick;

/**
 * Controls whether or not long stack traces will be on
 */
Q.longStackSupport = false;

// enable long stacks if Q_DEBUG is set
if (typeof process === "object" && process && process.env && process.env.Q_DEBUG) {
    Q.longStackSupport = true;
}

/**
 * Constructs a {promise, resolve, reject} object.
 *
 * `resolve` is a callback to invoke with a more resolved value for the
 * promise. To fulfill the promise, invoke `resolve` with any value that is
 * not a thenable. To reject the promise, invoke `resolve` with a rejected
 * thenable, or invoke `reject` with the reason directly. To resolve the
 * promise to another thenable, thus putting it in the same state, invoke
 * `resolve` with that other thenable.
 */
Q.defer = defer;
function defer() {
    // if "messages" is an "Array", that indicates that the promise has not yet
    // been resolved.  If it is "undefined", it has been resolved.  Each
    // element of the messages array is itself an array of complete arguments to
    // forward to the resolved promise.  We coerce the resolution value to a
    // promise using the `resolve` function because it handles both fully
    // non-thenable values and other thenables gracefully.
    var messages = [], progressListeners = [], resolvedPromise;

    var deferred = object_create(defer.prototype);
    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, operands) {
        var args = array_slice(arguments);
        if (messages) {
            messages.push(args);
            if (op === "when" && operands[1]) { // progress operand
                progressListeners.push(operands[1]);
            }
        } else {
            Q.nextTick(function () {
                resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
            });
        }
    };

    // XXX deprecated
    promise.valueOf = function () {
        if (messages) {
            return promise;
        }
        var nearerValue = nearer(resolvedPromise);
        if (isPromise(nearerValue)) {
            resolvedPromise = nearerValue; // shorten chain
        }
        return nearerValue;
    };

    promise.inspect = function () {
        if (!resolvedPromise) {
            return { state: "pending" };
        }
        return resolvedPromise.inspect();
    };

    if (Q.longStackSupport && hasStacks) {
        try {
            throw new Error();
        } catch (e) {
            // NOTE: don't try to use `Error.captureStackTrace` or transfer the
            // accessor around; that causes memory leaks as per GH-111. Just
            // reify the stack trace as a string ASAP.
            //
            // At the same time, cut off the first line; it's always just
            // "[object Promise]\n", as per the `toString`.
            promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
        }
    }

    // NOTE: we do the checks for `resolvedPromise` in each method, instead of
    // consolidating them into `become`, since otherwise we'd create new
    // promises with the lines `become(whatever(value))`. See e.g. GH-252.

    function become(newPromise) {
        resolvedPromise = newPromise;
        promise.source = newPromise;

        array_reduce(messages, function (undefined, message) {
            Q.nextTick(function () {
                newPromise.promiseDispatch.apply(newPromise, message);
            });
        }, void 0);

        messages = void 0;
        progressListeners = void 0;
    }

    deferred.promise = promise;
    deferred.resolve = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(Q(value));
    };

    deferred.fulfill = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(fulfill(value));
    };
    deferred.reject = function (reason) {
        if (resolvedPromise) {
            return;
        }

        become(reject(reason));
    };
    deferred.notify = function (progress) {
        if (resolvedPromise) {
            return;
        }

        array_reduce(progressListeners, function (undefined, progressListener) {
            Q.nextTick(function () {
                progressListener(progress);
            });
        }, void 0);
    };

    return deferred;
}

/**
 * Creates a Node-style callback that will resolve or reject the deferred
 * promise.
 * @returns a nodeback
 */
defer.prototype.makeNodeResolver = function () {
    var self = this;
    return function (error, value) {
        if (error) {
            self.reject(error);
        } else if (arguments.length > 2) {
            self.resolve(array_slice(arguments, 1));
        } else {
            self.resolve(value);
        }
    };
};

/**
 * @param resolver {Function} a function that returns nothing and accepts
 * the resolve, reject, and notify functions for a deferred.
 * @returns a promise that may be resolved with the given resolve and reject
 * functions, or rejected by a thrown exception in resolver
 */
Q.Promise = promise; // ES6
Q.promise = promise;
function promise(resolver) {
    if (typeof resolver !== "function") {
        throw new TypeError("resolver must be a function.");
    }
    var deferred = defer();
    try {
        resolver(deferred.resolve, deferred.reject, deferred.notify);
    } catch (reason) {
        deferred.reject(reason);
    }
    return deferred.promise;
}

promise.race = race; // ES6
promise.all = all; // ES6
promise.reject = reject; // ES6
promise.resolve = Q; // ES6

// XXX experimental.  This method is a way to denote that a local value is
// serializable and should be immediately dispatched to a remote upon request,
// instead of passing a reference.
Q.passByCopy = function (object) {
    //freeze(object);
    //passByCopies.set(object, true);
    return object;
};

Promise.prototype.passByCopy = function () {
    //freeze(object);
    //passByCopies.set(object, true);
    return this;
};

/**
 * If two promises eventually fulfill to the same value, promises that value,
 * but otherwise rejects.
 * @param x {Any*}
 * @param y {Any*}
 * @returns {Any*} a promise for x and y if they are the same, but a rejection
 * otherwise.
 *
 */
Q.join = function (x, y) {
    return Q(x).join(y);
};

Promise.prototype.join = function (that) {
    return Q([this, that]).spread(function (x, y) {
        if (x === y) {
            // TODO: "===" should be Object.is or equiv
            return x;
        } else {
            throw new Error("Can't join: not the same: " + x + " " + y);
        }
    });
};

/**
 * Returns a promise for the first of an array of promises to become settled.
 * @param answers {Array[Any*]} promises to race
 * @returns {Any*} the first promise to be settled
 */
Q.race = race;
function race(answerPs) {
    return promise(function (resolve, reject) {
        // Switch to this once we can assume at least ES5
        // answerPs.forEach(function (answerP) {
        //     Q(answerP).then(resolve, reject);
        // });
        // Use this in the meantime
        for (var i = 0, len = answerPs.length; i < len; i++) {
            Q(answerPs[i]).then(resolve, reject);
        }
    });
}

Promise.prototype.race = function () {
    return this.then(Q.race);
};

/**
 * Constructs a Promise with a promise descriptor object and optional fallback
 * function.  The descriptor contains methods like when(rejected), get(name),
 * set(name, value), post(name, args), and delete(name), which all
 * return either a value, a promise for a value, or a rejection.  The fallback
 * accepts the operation name, a resolver, and any further arguments that would
 * have been forwarded to the appropriate method above had a method been
 * provided with the proper name.  The API makes no guarantees about the nature
 * of the returned object, apart from that it is usable whereever promises are
 * bought and sold.
 */
Q.makePromise = Promise;
function Promise(descriptor, fallback, inspect) {
    if (fallback === void 0) {
        fallback = function (op) {
            return reject(new Error(
                "Promise does not support operation: " + op
            ));
        };
    }
    if (inspect === void 0) {
        inspect = function () {
            return {state: "unknown"};
        };
    }

    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, args) {
        var result;
        try {
            if (descriptor[op]) {
                result = descriptor[op].apply(promise, args);
            } else {
                result = fallback.call(promise, op, args);
            }
        } catch (exception) {
            result = reject(exception);
        }
        if (resolve) {
            resolve(result);
        }
    };

    promise.inspect = inspect;

    // XXX deprecated `valueOf` and `exception` support
    if (inspect) {
        var inspected = inspect();
        if (inspected.state === "rejected") {
            promise.exception = inspected.reason;
        }

        promise.valueOf = function () {
            var inspected = inspect();
            if (inspected.state === "pending" ||
                inspected.state === "rejected") {
                return promise;
            }
            return inspected.value;
        };
    }

    return promise;
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.then = function (fulfilled, rejected, progressed) {
    var self = this;
    var deferred = defer();
    var done = false;   // ensure the untrusted promise makes at most a
                        // single call to one of the callbacks

    function _fulfilled(value) {
        try {
            return typeof fulfilled === "function" ? fulfilled(value) : value;
        } catch (exception) {
            return reject(exception);
        }
    }

    function _rejected(exception) {
        if (typeof rejected === "function") {
            makeStackTraceLong(exception, self);
            try {
                return rejected(exception);
            } catch (newException) {
                return reject(newException);
            }
        }
        return reject(exception);
    }

    function _progressed(value) {
        return typeof progressed === "function" ? progressed(value) : value;
    }

    Q.nextTick(function () {
        self.promiseDispatch(function (value) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_fulfilled(value));
        }, "when", [function (exception) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_rejected(exception));
        }]);
    });

    // Progress propagator need to be attached in the current tick.
    self.promiseDispatch(void 0, "when", [void 0, function (value) {
        var newValue;
        var threw = false;
        try {
            newValue = _progressed(value);
        } catch (e) {
            threw = true;
            if (Q.onerror) {
                Q.onerror(e);
            } else {
                throw e;
            }
        }

        if (!threw) {
            deferred.notify(newValue);
        }
    }]);

    return deferred.promise;
};

Q.tap = function (promise, callback) {
    return Q(promise).tap(callback);
};

/**
 * Works almost like "finally", but not called for rejections.
 * Original resolution value is passed through callback unaffected.
 * Callback may return a promise that will be awaited for.
 * @param {Function} callback
 * @returns {Q.Promise}
 * @example
 * doSomething()
 *   .then(...)
 *   .tap(console.log)
 *   .then(...);
 */
Promise.prototype.tap = function (callback) {
    callback = Q(callback);

    return this.then(function (value) {
        return callback.fcall(value).thenResolve(value);
    });
};

/**
 * Registers an observer on a promise.
 *
 * Guarantees:
 *
 * 1. that fulfilled and rejected will be called only once.
 * 2. that either the fulfilled callback or the rejected callback will be
 *    called, but not both.
 * 3. that fulfilled and rejected will not be called in this turn.
 *
 * @param value      promise or immediate reference to observe
 * @param fulfilled  function to be called with the fulfilled value
 * @param rejected   function to be called with the rejection exception
 * @param progressed function to be called on any progress notifications
 * @return promise for the return value from the invoked callback
 */
Q.when = when;
function when(value, fulfilled, rejected, progressed) {
    return Q(value).then(fulfilled, rejected, progressed);
}

Promise.prototype.thenResolve = function (value) {
    return this.then(function () { return value; });
};

Q.thenResolve = function (promise, value) {
    return Q(promise).thenResolve(value);
};

Promise.prototype.thenReject = function (reason) {
    return this.then(function () { throw reason; });
};

Q.thenReject = function (promise, reason) {
    return Q(promise).thenReject(reason);
};

/**
 * If an object is not a promise, it is as "near" as possible.
 * If a promise is rejected, it is as "near" as possible too.
 * If it’s a fulfilled promise, the fulfillment value is nearer.
 * If it’s a deferred promise and the deferred has been resolved, the
 * resolution is "nearer".
 * @param object
 * @returns most resolved (nearest) form of the object
 */

// XXX should we re-do this?
Q.nearer = nearer;
function nearer(value) {
    if (isPromise(value)) {
        var inspected = value.inspect();
        if (inspected.state === "fulfilled") {
            return inspected.value;
        }
    }
    return value;
}

/**
 * @returns whether the given object is a promise.
 * Otherwise it is a fulfilled value.
 */
Q.isPromise = isPromise;
function isPromise(object) {
    return object instanceof Promise;
}

Q.isPromiseAlike = isPromiseAlike;
function isPromiseAlike(object) {
    return isObject(object) && typeof object.then === "function";
}

/**
 * @returns whether the given object is a pending promise, meaning not
 * fulfilled or rejected.
 */
Q.isPending = isPending;
function isPending(object) {
    return isPromise(object) && object.inspect().state === "pending";
}

Promise.prototype.isPending = function () {
    return this.inspect().state === "pending";
};

/**
 * @returns whether the given object is a value or fulfilled
 * promise.
 */
Q.isFulfilled = isFulfilled;
function isFulfilled(object) {
    return !isPromise(object) || object.inspect().state === "fulfilled";
}

Promise.prototype.isFulfilled = function () {
    return this.inspect().state === "fulfilled";
};

/**
 * @returns whether the given object is a rejected promise.
 */
Q.isRejected = isRejected;
function isRejected(object) {
    return isPromise(object) && object.inspect().state === "rejected";
}

Promise.prototype.isRejected = function () {
    return this.inspect().state === "rejected";
};

//// BEGIN UNHANDLED REJECTION TRACKING

// This promise library consumes exceptions thrown in handlers so they can be
// handled by a subsequent promise.  The exceptions get added to this array when
// they are created, and removed when they are handled.  Note that in ES6 or
// shimmed environments, this would naturally be a `Set`.
var unhandledReasons = [];
var unhandledRejections = [];
var reportedUnhandledRejections = [];
var trackUnhandledRejections = true;

function resetUnhandledRejections() {
    unhandledReasons.length = 0;
    unhandledRejections.length = 0;

    if (!trackUnhandledRejections) {
        trackUnhandledRejections = true;
    }
}

function trackRejection(promise, reason) {
    if (!trackUnhandledRejections) {
        return;
    }
    if (typeof process === "object" && typeof process.emit === "function") {
        Q.nextTick.runAfter(function () {
            if (array_indexOf(unhandledRejections, promise) !== -1) {
                process.emit("unhandledRejection", reason, promise);
                reportedUnhandledRejections.push(promise);
            }
        });
    }

    unhandledRejections.push(promise);
    if (reason && typeof reason.stack !== "undefined") {
        unhandledReasons.push(reason.stack);
    } else {
        unhandledReasons.push("(no stack) " + reason);
    }
}

function untrackRejection(promise) {
    if (!trackUnhandledRejections) {
        return;
    }

    var at = array_indexOf(unhandledRejections, promise);
    if (at !== -1) {
        if (typeof process === "object" && typeof process.emit === "function") {
            Q.nextTick.runAfter(function () {
                var atReport = array_indexOf(reportedUnhandledRejections, promise);
                if (atReport !== -1) {
                    process.emit("rejectionHandled", unhandledReasons[at], promise);
                    reportedUnhandledRejections.splice(atReport, 1);
                }
            });
        }
        unhandledRejections.splice(at, 1);
        unhandledReasons.splice(at, 1);
    }
}

Q.resetUnhandledRejections = resetUnhandledRejections;

Q.getUnhandledReasons = function () {
    // Make a copy so that consumers can't interfere with our internal state.
    return unhandledReasons.slice();
};

Q.stopUnhandledRejectionTracking = function () {
    resetUnhandledRejections();
    trackUnhandledRejections = false;
};

resetUnhandledRejections();

//// END UNHANDLED REJECTION TRACKING

/**
 * Constructs a rejected promise.
 * @param reason value describing the failure
 */
Q.reject = reject;
function reject(reason) {
    var rejection = Promise({
        "when": function (rejected) {
            // note that the error has been handled
            if (rejected) {
                untrackRejection(this);
            }
            return rejected ? rejected(reason) : this;
        }
    }, function fallback() {
        return this;
    }, function inspect() {
        return { state: "rejected", reason: reason };
    });

    // Note that the reason has not been handled.
    trackRejection(rejection, reason);

    return rejection;
}

/**
 * Constructs a fulfilled promise for an immediate reference.
 * @param value immediate reference
 */
Q.fulfill = fulfill;
function fulfill(value) {
    return Promise({
        "when": function () {
            return value;
        },
        "get": function (name) {
            return value[name];
        },
        "set": function (name, rhs) {
            value[name] = rhs;
        },
        "delete": function (name) {
            delete value[name];
        },
        "post": function (name, args) {
            // Mark Miller proposes that post with no name should apply a
            // promised function.
            if (name === null || name === void 0) {
                return value.apply(void 0, args);
            } else {
                return value[name].apply(value, args);
            }
        },
        "apply": function (thisp, args) {
            return value.apply(thisp, args);
        },
        "keys": function () {
            return object_keys(value);
        }
    }, void 0, function inspect() {
        return { state: "fulfilled", value: value };
    });
}

/**
 * Converts thenables to Q promises.
 * @param promise thenable promise
 * @returns a Q promise
 */
function coerce(promise) {
    var deferred = defer();
    Q.nextTick(function () {
        try {
            promise.then(deferred.resolve, deferred.reject, deferred.notify);
        } catch (exception) {
            deferred.reject(exception);
        }
    });
    return deferred.promise;
}

/**
 * Annotates an object such that it will never be
 * transferred away from this process over any promise
 * communication channel.
 * @param object
 * @returns promise a wrapping of that object that
 * additionally responds to the "isDef" message
 * without a rejection.
 */
Q.master = master;
function master(object) {
    return Promise({
        "isDef": function () {}
    }, function fallback(op, args) {
        return dispatch(object, op, args);
    }, function () {
        return Q(object).inspect();
    });
}

/**
 * Spreads the values of a promised array of arguments into the
 * fulfillment callback.
 * @param fulfilled callback that receives variadic arguments from the
 * promised array
 * @param rejected callback that receives the exception if the promise
 * is rejected.
 * @returns a promise for the return value or thrown exception of
 * either callback.
 */
Q.spread = spread;
function spread(value, fulfilled, rejected) {
    return Q(value).spread(fulfilled, rejected);
}

Promise.prototype.spread = function (fulfilled, rejected) {
    return this.all().then(function (array) {
        return fulfilled.apply(void 0, array);
    }, rejected);
};

/**
 * The async function is a decorator for generator functions, turning
 * them into asynchronous generators.  Although generators are only part
 * of the newest ECMAScript 6 drafts, this code does not cause syntax
 * errors in older engines.  This code should continue to work and will
 * in fact improve over time as the language improves.
 *
 * ES6 generators are currently part of V8 version 3.19 with the
 * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
 * for longer, but under an older Python-inspired form.  This function
 * works on both kinds of generators.
 *
 * Decorates a generator function such that:
 *  - it may yield promises
 *  - execution will continue when that promise is fulfilled
 *  - the value of the yield expression will be the fulfilled value
 *  - it returns a promise for the return value (when the generator
 *    stops iterating)
 *  - the decorated function returns a promise for the return value
 *    of the generator or the first rejected promise among those
 *    yielded.
 *  - if an error is thrown in the generator, it propagates through
 *    every following yield until it is caught, or until it escapes
 *    the generator function altogether, and is translated into a
 *    rejection for the promise returned by the decorated generator.
 */
Q.async = async;
function async(makeGenerator) {
    return function () {
        // when verb is "send", arg is a value
        // when verb is "throw", arg is an exception
        function continuer(verb, arg) {
            var result;

            // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
            // engine that has a deployed base of browsers that support generators.
            // However, SM's generators use the Python-inspired semantics of
            // outdated ES6 drafts.  We would like to support ES6, but we'd also
            // like to make it possible to use generators in deployed browsers, so
            // we also support Python-style generators.  At some point we can remove
            // this block.

            if (typeof StopIteration === "undefined") {
                // ES6 Generators
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    return reject(exception);
                }
                if (result.done) {
                    return Q(result.value);
                } else {
                    return when(result.value, callback, errback);
                }
            } else {
                // SpiderMonkey Generators
                // FIXME: Remove this case when SM does ES6 generators.
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    if (isStopIteration(exception)) {
                        return Q(exception.value);
                    } else {
                        return reject(exception);
                    }
                }
                return when(result, callback, errback);
            }
        }
        var generator = makeGenerator.apply(this, arguments);
        var callback = continuer.bind(continuer, "next");
        var errback = continuer.bind(continuer, "throw");
        return callback();
    };
}

/**
 * The spawn function is a small wrapper around async that immediately
 * calls the generator and also ends the promise chain, so that any
 * unhandled errors are thrown instead of forwarded to the error
 * handler. This is useful because it's extremely common to run
 * generators at the top-level to work with libraries.
 */
Q.spawn = spawn;
function spawn(makeGenerator) {
    Q.done(Q.async(makeGenerator)());
}

// FIXME: Remove this interface once ES6 generators are in SpiderMonkey.
/**
 * Throws a ReturnValue exception to stop an asynchronous generator.
 *
 * This interface is a stop-gap measure to support generator return
 * values in older Firefox/SpiderMonkey.  In browsers that support ES6
 * generators like Chromium 29, just use "return" in your generator
 * functions.
 *
 * @param value the return value for the surrounding generator
 * @throws ReturnValue exception with the value.
 * @example
 * // ES6 style
 * Q.async(function* () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      return foo + bar;
 * })
 * // Older SpiderMonkey style
 * Q.async(function () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      Q.return(foo + bar);
 * })
 */
Q["return"] = _return;
function _return(value) {
    throw new QReturnValue(value);
}

/**
 * The promised function decorator ensures that any promise arguments
 * are settled and passed as values (`this` is also settled and passed
 * as a value).  It will also ensure that the result of a function is
 * always a promise.
 *
 * @example
 * var add = Q.promised(function (a, b) {
 *     return a + b;
 * });
 * add(Q(a), Q(B));
 *
 * @param {function} callback The function to decorate
 * @returns {function} a function that has been decorated.
 */
Q.promised = promised;
function promised(callback) {
    return function () {
        return spread([this, all(arguments)], function (self, args) {
            return callback.apply(self, args);
        });
    };
}

/**
 * sends a message to a value in a future turn
 * @param object* the recipient
 * @param op the name of the message operation, e.g., "when",
 * @param args further arguments to be forwarded to the operation
 * @returns result {Promise} a promise for the result of the operation
 */
Q.dispatch = dispatch;
function dispatch(object, op, args) {
    return Q(object).dispatch(op, args);
}

Promise.prototype.dispatch = function (op, args) {
    var self = this;
    var deferred = defer();
    Q.nextTick(function () {
        self.promiseDispatch(deferred.resolve, op, args);
    });
    return deferred.promise;
};

/**
 * Gets the value of a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to get
 * @return promise for the property value
 */
Q.get = function (object, key) {
    return Q(object).dispatch("get", [key]);
};

Promise.prototype.get = function (key) {
    return this.dispatch("get", [key]);
};

/**
 * Sets the value of a property in a future turn.
 * @param object    promise or immediate reference for object object
 * @param name      name of property to set
 * @param value     new value of property
 * @return promise for the return value
 */
Q.set = function (object, key, value) {
    return Q(object).dispatch("set", [key, value]);
};

Promise.prototype.set = function (key, value) {
    return this.dispatch("set", [key, value]);
};

/**
 * Deletes a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to delete
 * @return promise for the return value
 */
Q.del = // XXX legacy
Q["delete"] = function (object, key) {
    return Q(object).dispatch("delete", [key]);
};

Promise.prototype.del = // XXX legacy
Promise.prototype["delete"] = function (key) {
    return this.dispatch("delete", [key]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param value     a value to post, typically an array of
 *                  invocation arguments for promises that
 *                  are ultimately backed with `resolve` values,
 *                  as opposed to those backed with URLs
 *                  wherein the posted value can be any
 *                  JSON serializable object.
 * @return promise for the return value
 */
// bound locally because it is used by other methods
Q.mapply = // XXX As proposed by "Redsandro"
Q.post = function (object, name, args) {
    return Q(object).dispatch("post", [name, args]);
};

Promise.prototype.mapply = // XXX As proposed by "Redsandro"
Promise.prototype.post = function (name, args) {
    return this.dispatch("post", [name, args]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param ...args   array of invocation arguments
 * @return promise for the return value
 */
Q.send = // XXX Mark Miller's proposed parlance
Q.mcall = // XXX As proposed by "Redsandro"
Q.invoke = function (object, name /*...args*/) {
    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
};

Promise.prototype.send = // XXX Mark Miller's proposed parlance
Promise.prototype.mcall = // XXX As proposed by "Redsandro"
Promise.prototype.invoke = function (name /*...args*/) {
    return this.dispatch("post", [name, array_slice(arguments, 1)]);
};

/**
 * Applies the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param args      array of application arguments
 */
Q.fapply = function (object, args) {
    return Q(object).dispatch("apply", [void 0, args]);
};

Promise.prototype.fapply = function (args) {
    return this.dispatch("apply", [void 0, args]);
};

/**
 * Calls the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q["try"] =
Q.fcall = function (object /* ...args*/) {
    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
};

Promise.prototype.fcall = function (/*...args*/) {
    return this.dispatch("apply", [void 0, array_slice(arguments)]);
};

/**
 * Binds the promised function, transforming return values into a fulfilled
 * promise and thrown errors into a rejected one.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q.fbind = function (object /*...args*/) {
    var promise = Q(object);
    var args = array_slice(arguments, 1);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};
Promise.prototype.fbind = function (/*...args*/) {
    var promise = this;
    var args = array_slice(arguments);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};

/**
 * Requests the names of the owned properties of a promised
 * object in a future turn.
 * @param object    promise or immediate reference for target object
 * @return promise for the keys of the eventually settled object
 */
Q.keys = function (object) {
    return Q(object).dispatch("keys", []);
};

Promise.prototype.keys = function () {
    return this.dispatch("keys", []);
};

/**
 * Turns an array of promises into a promise for an array.  If any of
 * the promises gets rejected, the whole array is rejected immediately.
 * @param {Array*} an array (or promise for an array) of values (or
 * promises for values)
 * @returns a promise for an array of the corresponding values
 */
// By Mark Miller
// http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
Q.all = all;
function all(promises) {
    return when(promises, function (promises) {
        var pendingCount = 0;
        var deferred = defer();
        array_reduce(promises, function (undefined, promise, index) {
            var snapshot;
            if (
                isPromise(promise) &&
                (snapshot = promise.inspect()).state === "fulfilled"
            ) {
                promises[index] = snapshot.value;
            } else {
                ++pendingCount;
                when(
                    promise,
                    function (value) {
                        promises[index] = value;
                        if (--pendingCount === 0) {
                            deferred.resolve(promises);
                        }
                    },
                    deferred.reject,
                    function (progress) {
                        deferred.notify({ index: index, value: progress });
                    }
                );
            }
        }, void 0);
        if (pendingCount === 0) {
            deferred.resolve(promises);
        }
        return deferred.promise;
    });
}

Promise.prototype.all = function () {
    return all(this);
};

/**
 * Returns the first resolved promise of an array. Prior rejected promises are
 * ignored.  Rejects only if all promises are rejected.
 * @param {Array*} an array containing values or promises for values
 * @returns a promise fulfilled with the value of the first resolved promise,
 * or a rejected promise if all promises are rejected.
 */
Q.any = any;

function any(promises) {
    if (promises.length === 0) {
        return Q.resolve();
    }

    var deferred = Q.defer();
    var pendingCount = 0;
    array_reduce(promises, function (prev, current, index) {
        var promise = promises[index];

        pendingCount++;

        when(promise, onFulfilled, onRejected, onProgress);
        function onFulfilled(result) {
            deferred.resolve(result);
        }
        function onRejected() {
            pendingCount--;
            if (pendingCount === 0) {
                deferred.reject(new Error(
                    "Can't get fulfillment value from any promise, all " +
                    "promises were rejected."
                ));
            }
        }
        function onProgress(progress) {
            deferred.notify({
                index: index,
                value: progress
            });
        }
    }, undefined);

    return deferred.promise;
}

Promise.prototype.any = function () {
    return any(this);
};

/**
 * Waits for all promises to be settled, either fulfilled or
 * rejected.  This is distinct from `all` since that would stop
 * waiting at the first rejection.  The promise returned by
 * `allResolved` will never be rejected.
 * @param promises a promise for an array (or an array) of promises
 * (or values)
 * @return a promise for an array of promises
 */
Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
function allResolved(promises) {
    return when(promises, function (promises) {
        promises = array_map(promises, Q);
        return when(all(array_map(promises, function (promise) {
            return when(promise, noop, noop);
        })), function () {
            return promises;
        });
    });
}

Promise.prototype.allResolved = function () {
    return allResolved(this);
};

/**
 * @see Promise#allSettled
 */
Q.allSettled = allSettled;
function allSettled(promises) {
    return Q(promises).allSettled();
}

/**
 * Turns an array of promises into a promise for an array of their states (as
 * returned by `inspect`) when they have all settled.
 * @param {Array[Any*]} values an array (or promise for an array) of values (or
 * promises for values)
 * @returns {Array[State]} an array of states for the respective values.
 */
Promise.prototype.allSettled = function () {
    return this.then(function (promises) {
        return all(array_map(promises, function (promise) {
            promise = Q(promise);
            function regardless() {
                return promise.inspect();
            }
            return promise.then(regardless, regardless);
        }));
    });
};

/**
 * Captures the failure of a promise, giving an oportunity to recover
 * with a callback.  If the given promise is fulfilled, the returned
 * promise is fulfilled.
 * @param {Any*} promise for something
 * @param {Function} callback to fulfill the returned promise if the
 * given promise is rejected
 * @returns a promise for the return value of the callback
 */
Q.fail = // XXX legacy
Q["catch"] = function (object, rejected) {
    return Q(object).then(void 0, rejected);
};

Promise.prototype.fail = // XXX legacy
Promise.prototype["catch"] = function (rejected) {
    return this.then(void 0, rejected);
};

/**
 * Attaches a listener that can respond to progress notifications from a
 * promise's originating deferred. This listener receives the exact arguments
 * passed to ``deferred.notify``.
 * @param {Any*} promise for something
 * @param {Function} callback to receive any progress notifications
 * @returns the given promise, unchanged
 */
Q.progress = progress;
function progress(object, progressed) {
    return Q(object).then(void 0, void 0, progressed);
}

Promise.prototype.progress = function (progressed) {
    return this.then(void 0, void 0, progressed);
};

/**
 * Provides an opportunity to observe the settling of a promise,
 * regardless of whether the promise is fulfilled or rejected.  Forwards
 * the resolution to the returned promise when the callback is done.
 * The callback can return a promise to defer completion.
 * @param {Any*} promise
 * @param {Function} callback to observe the resolution of the given
 * promise, takes no arguments.
 * @returns a promise for the resolution of the given promise when
 * ``fin`` is done.
 */
Q.fin = // XXX legacy
Q["finally"] = function (object, callback) {
    return Q(object)["finally"](callback);
};

Promise.prototype.fin = // XXX legacy
Promise.prototype["finally"] = function (callback) {
    callback = Q(callback);
    return this.then(function (value) {
        return callback.fcall().then(function () {
            return value;
        });
    }, function (reason) {
        // TODO attempt to recycle the rejection with "this".
        return callback.fcall().then(function () {
            throw reason;
        });
    });
};

/**
 * Terminates a chain of promises, forcing rejections to be
 * thrown as exceptions.
 * @param {Any*} promise at the end of a chain of promises
 * @returns nothing
 */
Q.done = function (object, fulfilled, rejected, progress) {
    return Q(object).done(fulfilled, rejected, progress);
};

Promise.prototype.done = function (fulfilled, rejected, progress) {
    var onUnhandledError = function (error) {
        // forward to a future turn so that ``when``
        // does not catch it and turn it into a rejection.
        Q.nextTick(function () {
            makeStackTraceLong(error, promise);
            if (Q.onerror) {
                Q.onerror(error);
            } else {
                throw error;
            }
        });
    };

    // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
    var promise = fulfilled || rejected || progress ?
        this.then(fulfilled, rejected, progress) :
        this;

    if (typeof process === "object" && process && process.domain) {
        onUnhandledError = process.domain.bind(onUnhandledError);
    }

    promise.then(void 0, onUnhandledError);
};

/**
 * Causes a promise to be rejected if it does not get fulfilled before
 * some milliseconds time out.
 * @param {Any*} promise
 * @param {Number} milliseconds timeout
 * @param {Any*} custom error message or Error object (optional)
 * @returns a promise for the resolution of the given promise if it is
 * fulfilled before the timeout, otherwise rejected.
 */
Q.timeout = function (object, ms, error) {
    return Q(object).timeout(ms, error);
};

Promise.prototype.timeout = function (ms, error) {
    var deferred = defer();
    var timeoutId = setTimeout(function () {
        if (!error || "string" === typeof error) {
            error = new Error(error || "Timed out after " + ms + " ms");
            error.code = "ETIMEDOUT";
        }
        deferred.reject(error);
    }, ms);

    this.then(function (value) {
        clearTimeout(timeoutId);
        deferred.resolve(value);
    }, function (exception) {
        clearTimeout(timeoutId);
        deferred.reject(exception);
    }, deferred.notify);

    return deferred.promise;
};

/**
 * Returns a promise for the given value (or promised value), some
 * milliseconds after it resolved. Passes rejections immediately.
 * @param {Any*} promise
 * @param {Number} milliseconds
 * @returns a promise for the resolution of the given promise after milliseconds
 * time has elapsed since the resolution of the given promise.
 * If the given promise rejects, that is passed immediately.
 */
Q.delay = function (object, timeout) {
    if (timeout === void 0) {
        timeout = object;
        object = void 0;
    }
    return Q(object).delay(timeout);
};

Promise.prototype.delay = function (timeout) {
    return this.then(function (value) {
        var deferred = defer();
        setTimeout(function () {
            deferred.resolve(value);
        }, timeout);
        return deferred.promise;
    });
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided as an array, and returns a promise.
 *
 *      Q.nfapply(FS.readFile, [__filename])
 *      .then(function (content) {
 *      })
 *
 */
Q.nfapply = function (callback, args) {
    return Q(callback).nfapply(args);
};

Promise.prototype.nfapply = function (args) {
    var deferred = defer();
    var nodeArgs = array_slice(args);
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided individually, and returns a promise.
 * @example
 * Q.nfcall(FS.readFile, __filename)
 * .then(function (content) {
 * })
 *
 */
Q.nfcall = function (callback /*...args*/) {
    var args = array_slice(arguments, 1);
    return Q(callback).nfapply(args);
};

Promise.prototype.nfcall = function (/*...args*/) {
    var nodeArgs = array_slice(arguments);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Wraps a NodeJS continuation passing function and returns an equivalent
 * version that returns a promise.
 * @example
 * Q.nfbind(FS.readFile, __filename)("utf-8")
 * .then(console.log)
 * .done()
 */
Q.nfbind =
Q.denodeify = function (callback /*...args*/) {
    var baseArgs = array_slice(arguments, 1);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        Q(callback).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nfbind =
Promise.prototype.denodeify = function (/*...args*/) {
    var args = array_slice(arguments);
    args.unshift(this);
    return Q.denodeify.apply(void 0, args);
};

Q.nbind = function (callback, thisp /*...args*/) {
    var baseArgs = array_slice(arguments, 2);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        function bound() {
            return callback.apply(thisp, arguments);
        }
        Q(bound).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nbind = function (/*thisp, ...args*/) {
    var args = array_slice(arguments, 0);
    args.unshift(this);
    return Q.nbind.apply(void 0, args);
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback with a given array of arguments, plus a provided callback.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param {Array} args arguments to pass to the method; the callback
 * will be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nmapply = // XXX As proposed by "Redsandro"
Q.npost = function (object, name, args) {
    return Q(object).npost(name, args);
};

Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
Promise.prototype.npost = function (name, args) {
    var nodeArgs = array_slice(args || []);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback, forwarding the given variadic arguments, plus a provided
 * callback argument.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param ...args arguments to pass to the method; the callback will
 * be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nsend = // XXX Based on Mark Miller's proposed "send"
Q.nmcall = // XXX Based on "Redsandro's" proposal
Q.ninvoke = function (object, name /*...args*/) {
    var nodeArgs = array_slice(arguments, 2);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
Promise.prototype.ninvoke = function (name /*...args*/) {
    var nodeArgs = array_slice(arguments, 1);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * If a function would like to support both Node continuation-passing-style and
 * promise-returning-style, it can end its internal promise chain with
 * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
 * elects to use a nodeback, the result will be sent there.  If they do not
 * pass a nodeback, they will receive the result promise.
 * @param object a result (or a promise for a result)
 * @param {Function} nodeback a Node.js-style callback
 * @returns either the promise or nothing
 */
Q.nodeify = nodeify;
function nodeify(object, nodeback) {
    return Q(object).nodeify(nodeback);
}

Promise.prototype.nodeify = function (nodeback) {
    if (nodeback) {
        this.then(function (value) {
            Q.nextTick(function () {
                nodeback(null, value);
            });
        }, function (error) {
            Q.nextTick(function () {
                nodeback(error);
            });
        });
    } else {
        return this;
    }
};

Q.noConflict = function() {
    throw new Error("Q.noConflict only works when Q is used as a global");
};

// All code before this point will be filtered from stack traces.
var qEndingLine = captureLine();

return Q;

});

}).call(this,require('_process'))
},{"_process":12}],158:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var reduce = require('reduce');
var requestBase = require('./request-base');
var isObject = require('./is-object');

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  root = this;
}

/**
 * Noop.
 */

function noop(){};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * TODO: future proof, move to compoent land
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isHost(obj) {
  var str = {}.toString.call(obj);

  switch (str) {
    case '[object File]':
    case '[object Blob]':
    case '[object FormData]':
      return true;
    default:
      return false;
  }
}

/**
 * Expose `request`.
 */

var request = module.exports = require('./request').bind(null, Request);

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  return false;
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    if (null != obj[key]) {
      pushEncodedKeyValuePair(pairs, key, obj[key]);
        }
      }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (Array.isArray(val)) {
    return val.forEach(function(v) {
      pushEncodedKeyValuePair(pairs, key, v);
    });
  }
  pairs.push(encodeURIComponent(key)
    + '=' + encodeURIComponent(val));
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var parts;
  var pair;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    parts = pair.split('=');
    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  return /[\/+]json\b/.test(mime);
}

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function type(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function params(str){
  return reduce(str.split(/ *; */), function(obj, str){
    var parts = str.split(/ *= */)
      , key = parts.shift()
      , val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req, options) {
  options = options || {};
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  this.setStatusProperties(this.xhr.status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this.setHeaderProperties(this.header);
  this.body = this.req.method != 'HEAD'
    ? this.parseBody(this.text ? this.text : this.xhr.response)
    : null;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

Response.prototype.get = function(field){
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

Response.prototype.setHeaderProperties = function(header){
  // content-type
  var ct = this.header['content-type'] || '';
  this.type = type(ct);

  // params
  var obj = params(ct);
  for (var key in obj) this[key] = obj[key];
};

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype.parseBody = function(str){
  var parse = request.parse[this.type];
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

Response.prototype.setStatusProperties = function(status){
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }

  var type = status / 100 | 0;

  // status / class
  this.status = this.statusCode = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = (4 == type || 5 == type)
    ? this.toError()
    : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.notFound = 404 == status;
  this.forbidden = 403 == status;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
      // issue #876: return the http status code if the response parsing fails
      err.statusCode = self.xhr && self.xhr.status ? self.xhr.status : null;
      return self.callback(err);
    }

    self.emit('response', res);

    if (err) {
      return self.callback(err, res);
    }

    if (res.status >= 200 && res.status < 300) {
      return self.callback(err, res);
    }

    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
    new_err.original = err;
    new_err.response = res;
    new_err.status = res.status;

    self.callback(new_err, res);
  });
}

/**
 * Mixin `Emitter` and `requestBase`.
 */

Emitter(Request.prototype);
for (var key in requestBase) {
  Request.prototype[key] = requestBase[key];
}

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */

Request.prototype.abort = function(){
  if (this.aborted) return;
  this.aborted = true;
  this.xhr.abort();
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set responseType to `val`. Presently valid responseTypes are 'blob' and 
 * 'arraybuffer'.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.responseType = function(val){
  this._responseType = val;
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} pass
 * @param {Object} options with 'type' property 'auto' or 'basic' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass, options){
  if (!options) {
    options = {
      type: 'basic'
    }
  }

  switch (options.type) {
    case 'basic':
      var str = btoa(user + ':' + pass);
      this.set('Authorization', 'Basic ' + str);
    break;

    case 'auto':
      this.username = user;
      this.password = pass;
    break;
  }
  return this;
};

/**
* Add query-string `val`.
*
* Examples:
*
*   request.get('/shoes')
*     .query('size=10')
*     .query({ color: 'blue' })
*
* @param {Object|String} val
* @return {Request} for chaining
* @api public
*/

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `filename`.
 *
 * ``` js
 * request.post('/upload')
 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String} filename
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, filename){
  this._getFormData().append(field, file, filename || file.name);
  return this;
};

Request.prototype._getFormData = function(){
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
  *      request.post('/user')
  *        .send('name=tobi')
  *        .send('species=ferret')
  *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.send = function(data){
  var obj = isObject(data);
  var type = this._header['content-type'];

  // merge
  if (obj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!obj || isHost(data)) return this;
  if (!type) this.type('json');
  return this;
};

/**
 * @deprecated
 */
Response.prototype.parse = function serialize(fn){
  if (root.console) {
    console.warn("Client-side parse() method has been renamed to serialize(). This method is not compatible with superagent v2.0");
  }
  this.serialize(fn);
  return this;
};

Response.prototype.serialize = function serialize(fn){
  this._parser = fn;
  return this;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  var fn = this._callback;
  this.clearTimeout();
  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

Request.prototype.timeoutError = function(){
  var timeout = this._timeout;
  var err = new Error('timeout of ' + timeout + 'ms exceeded');
  err.timeout = timeout;
  this.callback(err);
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

Request.prototype.withCredentials = function(){
  this._withCredentials = true;
  return this;
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var query = this._query.join('&');
  var timeout = this._timeout;
  var data = this._formData || this._data;

  // store callback
  this._callback = fn || noop;

  // state change
  xhr.onreadystatechange = function(){
    if (4 != xhr.readyState) return;

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (0 == status) {
      if (self.timedout) return self.timeoutError();
      if (self.aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(e){
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = 'download';
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    xhr.onprogress = handleProgress;
  }
  try {
    if (xhr.upload && this.hasListeners('progress')) {
      xhr.upload.onprogress = handleProgress;
    }
  } catch(e) {
    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
    // Reported here:
    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
  }

  // timeout
  if (timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self.timedout = true;
      self.abort();
    }, timeout);
  }

  // querystring
  if (query) {
    query = request.serializeObject(query);
    this.url += ~this.url.indexOf('?')
      ? '&' + query
      : '?' + query;
  }

  // initiate request
  if (this.username && this.password) {
    xhr.open(this.method, this.url, true, this.username, this.password);
  } else {
    xhr.open(this.method, this.url, true);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._parser || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;
    xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};


/**
 * Expose `Request`.
 */

request.Request = Request;

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

function del(url, fn){
  var req = request('DELETE', url);
  if (fn) req.end(fn);
  return req;
};

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

},{"./is-object":159,"./request":161,"./request-base":160,"emitter":162,"reduce":163}],159:[function(require,module,exports){
/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return null != obj && 'object' == typeof obj;
}

module.exports = isObject;

},{}],160:[function(require,module,exports){
/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = require('./is-object');

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

exports.clearTimeout = function _clearTimeout(){
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};

/**
 * Force given parser
 *
 * Sets the body parser no matter type.
 *
 * @param {Function}
 * @api public
 */

exports.parse = function parse(fn){
  this._parser = fn;
  return this;
};

/**
 * Set timeout to `ms`.
 *
 * @param {Number} ms
 * @return {Request} for chaining
 * @api public
 */

exports.timeout = function timeout(ms){
  this._timeout = ms;
  return this;
};

/**
 * Faux promise support
 *
 * @param {Function} fulfill
 * @param {Function} reject
 * @return {Request}
 */

exports.then = function then(fulfill, reject) {
  return this.end(function(err, res) {
    err ? reject(err) : fulfill(res);
  });
}

/**
 * Allow for extension
 */

exports.use = function use(fn) {
  fn(this);
  return this;
}


/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

exports.get = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

exports.getHeader = exports.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

exports.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
exports.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val` for "multipart/form-data"
 * request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 * ```
 *
 * @param {String} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
exports.field = function(name, val) {
  this._getFormData().append(name, val);
  return this;
};

},{"./is-object":159}],161:[function(require,module,exports){
// The node and browser modules expose versions of this with the
// appropriate constructor function bound as first argument
/**
 * Issue a request:
 *
 * Examples:
 *
 *    request('GET', '/users').end(callback)
 *    request('/users').end(callback)
 *    request('/users', callback)
 *
 * @param {String} method
 * @param {String|Function} url or callback
 * @return {Request}
 * @api public
 */

function request(RequestConstructor, method, url) {
  // callback
  if ('function' == typeof url) {
    return new RequestConstructor('GET', method).end(url);
  }

  // url first
  if (2 == arguments.length) {
    return new RequestConstructor('GET', method);
  }

  return new RequestConstructor(method, url);
}

module.exports = request;

},{}],162:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],163:[function(require,module,exports){

/**
 * Reduce `arr` with `fn`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Mixed} initial
 *
 * TODO: combatible error handling?
 */

module.exports = function(arr, fn, initial){  
  var idx = 0;
  var len = arr.length;
  var curr = arguments.length == 3
    ? initial
    : arr[idx++];

  while (idx < len) {
    curr = fn.call(null, curr, arr[idx], ++idx, arr);
  }
  
  return curr;
};
},{}]},{},[1])(1)
});
}).call(this);
