(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{277:function(e,t,i){"use strict";i.r(t);var a=i(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("h1",[e._v("Craft 2")]),e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),i("p",[e._v("To download the latest version of Sprout Email:")]),i("div",{pre:!0},[i("ul",[i("li",[e._v("Log in to your "),i("a",{attrs:{href:"https://straightupcraft.com/members/login",target:"_blank",rel:"noopener noreferrer"}},[e._v("straightupcraft.com"),i("OutboundLink")],1),e._v(" account")]),e._m(7),i("li",[e._v("Download the plugin you want to update")])])]),e._m(8),e._m(9),e._m(10),i("p",[e._v("Sprout Email 3.0 adds many new features improving List and Mailer integrations. Due to the number of changes we had to make to make these features possible, we were unable to avoid a few extra steps during the upgrade process. If you are using Mailers for Campaign Emails or Recipient Lists you may be required to take these extra steps.")]),i("p",[e._v("Below is a guide of how to get upgraded from Sprout Email 2.x to Sprout Email 3.x.")]),e._m(11),e._m(12),e._m(13),i("p",[e._v("Sprout Email 3 updated a few columns that display on the Notification Email Element Index page.")]),e._m(14),e._m(15),i("p",[e._v("Several template variables were deprecated in this major release. You will need to update the variable used in your email templates like so:")]),e._m(16)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Craft 2.5 or a more recent version of Craft")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{pre:!0},[t("ul",[t("li",[this._v("Place the "),t("code",[this._v("sproutemail")]),this._v(" folder inside your "),t("code",[this._v("craft/plugins")]),this._v(" folder.")]),t("li",[this._v("Install the plugin via the Craft Dashboard. (Settings→Plugins)")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"updating"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{pre:!0},[i("ul",[i("li",[e._v("Place the "),i("code",[e._v("sproutemail")]),e._v(" folder inside your "),i("code",[e._v("craft/plugins")]),e._v(" folder and overwrite the existing copy of "),i("code",[e._v("sproutemail")]),e._v(".")]),i("li",[e._v("Point your browser to your Craft control panel. If you are prompted to proceed with a database update, click “Finish up” and let the database updates run.  If no database updates are needed, you will see your control panel load as normal and you are good to go.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"downloading-updates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#downloading-updates","aria-hidden":"true"}},[this._v("#")]),this._v(" Downloading Updates")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Select "),t("code",[this._v("My Content->Purchases")]),this._v(" from the dropdown in the top right")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("Trial users can grab the latest copy of Sprout Email by requesting a trial.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"updating-to-sprout-email-3-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating-to-sprout-email-3-x","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating to Sprout Email 3.x")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),t("p",[this._v("Please read all of the details below before upgrading from Sprout Email 2.x to Sprout Email 3.x. If you are installing the plugin for the first time, you can ignore these instructions and install the plugin as usual._")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"upgrading-sprout-email-with-mailers-lists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-sprout-email-with-mailers-lists","aria-hidden":"true"}},[this._v("#")]),this._v(" Upgrading Sprout Email with Mailers & Lists")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{pre:!0},[i("ol",{attrs:{start:"0"}},[i("li",[i("p",[i("strong",[e._v("Backup")]),e._v(" your Craft database.")])]),i("li",[i("p",[i("strong",[e._v("Disable")]),e._v(" any Sprout Email Mailer Plugins\n"),i("em",[e._v("This may include Mailchimp, Campaign Monitor, or any custom Mailer on your project")])])]),i("li",[i("p",[i("strong",[e._v("Disable")]),e._v(" Sprout Email 2.x\n"),i("em",[e._v("Don't uninstall your current version of Sprout Email or you will lose your data. Just disable Sprout Email 2.x. This step is necessary because adding the new Mailer plugins for Sprout Email 3 will create errors that make the CP inaccessible until everything is upgraded.")])])]),i("li",[i("p",[i("strong",[e._v("Install")]),e._v(" new Mailer plugins (if you are using one)")])]),i("li",[i("p",[i("strong",[e._v("Install")]),e._v(" Sprout Lists (if you were using Recipient Lists)\nRecipient Lists will be migrated to Sprout Lists when Sprout Email is upgraded "),i("em",[e._v("if")]),e._v(" Sprout Lists is installed. If you do not install Sprout Lists before the upgrade, you will lose your Recipient List data. The migration will also maintain the settings on your notification emails to continue sending them to any lists.")])]),i("li",[i("p",[e._v("Copy the new Sprout Email 3.x folder to your "),i("code",[e._v("craft/plugins")]),e._v(" folder and "),i("strong",[e._v("Re-Enable")]),e._v(" Sprout Email to begin the upgrade.")])]),i("li",[i("p",[e._v("Cheer!")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"updating-the-notifications-index-page"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-notifications-index-page","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating the Notifications Index Page")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{pre:!0},[i("p",[e._v("In particular, we removed the "),i("code",[e._v("HTML")]),e._v(" and "),i("code",[e._v("Text")]),e._v(" Table Columns in favor of a new "),i("code",[e._v("Preview")]),e._v(" column. If you were using the "),i("code",[e._v("HTML")]),e._v(" or "),i("code",[e._v("Text")]),e._v(" Table Columns you will need to edit your Notification Email Element Index Table settings and add the "),i("code",[e._v("Preview")]),e._v(" column.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"updating-your-templates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating-your-templates","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating your templates")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{pre:!0},[i("ul",[i("li",[e._v("Deprecated "),i("code",[e._v("entry")]),e._v(" variable in templates. Use "),i("code",[e._v("email")]),e._v(" instead.")]),i("li",[e._v("Deprecated "),i("code",[e._v("notification")]),e._v(" variable in templates. Use "),i("code",[e._v("email")]),e._v(" instead.")]),i("li",[e._v("Deprecated "),i("code",[e._v("campaign")]),e._v(" variable in templates. Use "),i("code",[e._v("campaignType")]),e._v(" instead.")])])])}],!1,null,null,null);t.default=r.exports}}]);