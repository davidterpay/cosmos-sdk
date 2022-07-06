(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{769:function(e,n,t){"use strict";t.r(n);var s=t(1),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"messages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),t("p",[e._v("In this section we describe the processing of the crisis messages and the\ncorresponding updates to the state.")]),e._v(" "),t("h2",{attrs:{id:"msgverifyinvariant"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#msgverifyinvariant"}},[e._v("#")]),e._v(" MsgVerifyInvariant")]),e._v(" "),t("p",[e._v("Blockchain invariants can be checked using the "),t("code",[e._v("MsgVerifyInvariant")]),e._v(" message.")]),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVmVyaWZ5SW52YXJpYW50IHJlcHJlc2VudHMgYSBtZXNzYWdlIHRvIHZlcmlmeSBhIHBhcnRpY3VsYXIgaW52YXJpYW5jZS4KbWVzc2FnZSBNc2dWZXJpZnlJbnZhcmlhbnQgewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpID0gJnF1b3Q7c2VuZGVyJnF1b3Q7OwoKICBvcHRpb24gKGdvZ29wcm90by5lcXVhbCkgICAgICAgICAgID0gZmFsc2U7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19nZXR0ZXJzKSA9IGZhbHNlOwoKICBzdHJpbmcgc2VuZGVyICAgICAgICAgICAgICAgID0gMSBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwogIHN0cmluZyBpbnZhcmlhbnRfbW9kdWxlX25hbWUgPSAyOwogIHN0cmluZyBpbnZhcmlhbnRfcm91dGUgICAgICAgPSAzOwp9"}})],1),e._v(" "),t("p",[e._v("This message is expected to fail if:")]),e._v(" "),t("ul",[t("li",[e._v("the sender does not have enough coins for the constant fee")]),e._v(" "),t("li",[e._v("the invariant route is not registered")])]),e._v(" "),t("p",[e._v("This message checks the invariant provided, and if the invariant is broken it\npanics, halting the blockchain. If the invariant is broken, the constant fee is\nnever deducted as the transaction is never committed to a block (equivalent to\nbeing refunded). However, if the invariant is not broken, the constant fee will\nnot be refunded.")])])}),[],!1,null,null,null);n.default=a.exports}}]);