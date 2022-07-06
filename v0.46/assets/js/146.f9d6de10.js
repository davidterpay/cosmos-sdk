(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{619:function(e,t,a){"use strict";a.r(t);var o=a(1),c=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),a("p",{attrs:{synopsis:""}},[a("code",[e._v("Transactions")]),e._v(" are objects created by end-users to trigger state changes in the application.")]),e._v(" "),a("h2",{attrs:{id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[e._v("Anatomy of a Cosmos SDK Application")])],1)]),e._v(" "),a("h2",{attrs:{id:"transactions-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactions-2"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),a("p",[e._v("Transactions are comprised of metadata held in "),a("RouterLink",{attrs:{to:"/core/context.html"}},[e._v("contexts")]),e._v(" and "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html"}},[a("code",[e._v("sdk.Msg")]),e._v("s")]),e._v(" that trigger state changes within a module through the module's Protobuf "),a("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[a("code",[e._v("Msg")]),e._v(" service")]),e._v(".")],1),e._v(" "),a("p",[e._v("When users want to interact with an application and make state changes (e.g. sending coins), they create transactions. Each of a transaction's "),a("code",[e._v("sdk.Msg")]),e._v(" must be signed using the private key associated with the appropriate account(s), before the transaction is broadcasted to the network. A transaction must then be included in a block, validated, and approved by the network through the consensus process. To read more about the lifecycle of a transaction, click "),a("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"type-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-definition"}},[e._v("#")]),e._v(" Type Definition")]),e._v(" "),a("p",[e._v("Transaction objects are Cosmos SDK types that implement the "),a("code",[e._v("Tx")]),e._v(" interface")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CS8vIFR4IGRlZmluZXMgdGhlIGludGVyZmFjZSBhIHRyYW5zYWN0aW9uIG11c3QgZnVsZmlsbC4KCVR4IGludGVyZmFjZSB7CgkJLy8gR2V0cyB0aGUgYWxsIHRoZSB0cmFuc2FjdGlvbidzIG1lc3NhZ2VzLgoJCUdldE1zZ3MoKSBbXU1zZwoKCQkvLyBWYWxpZGF0ZUJhc2ljIGRvZXMgYSBzaW1wbGUgYW5kIGxpZ2h0d2VpZ2h0IHZhbGlkYXRpb24gY2hlY2sgdGhhdCBkb2Vzbid0CgkJLy8gcmVxdWlyZSBhY2Nlc3MgdG8gYW55IG90aGVyIGluZm9ybWF0aW9uLgoJCVZhbGlkYXRlQmFzaWMoKSBlcnJvcgoJfQ=="}})],1),e._v(" "),a("p",[e._v("It contains the following methods:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("GetMsgs:")]),e._v(" unwraps the transaction and returns a list of contained "),a("code",[e._v("sdk.Msg")]),e._v("s - one transaction may have one or multiple messages, which are defined by module developers.")]),e._v(" "),a("li",[a("strong",[e._v("ValidateBasic:")]),e._v(" lightweight, "),a("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html#types-of-checks"}},[a("em",[e._v("stateless")])]),e._v(" checks used by ABCI messages "),a("RouterLink",{attrs:{to:"/core/baseapp.html#checktx"}},[a("code",[e._v("CheckTx")])]),e._v(" and "),a("RouterLink",{attrs:{to:"/core/baseapp.html#delivertx"}},[a("code",[e._v("DeliverTx")])]),e._v(" to make sure transactions are not invalid. For example, the "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/main/x/auth",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("auth")]),a("OutboundLink")],1),e._v(" module's "),a("code",[e._v("ValidateBasic")]),e._v(" function checks that its transactions are signed by the correct number of signers and that the fees do not exceed what the user's maximum. Note that this function is to be distinct from "),a("code",[e._v("sdk.Msg")]),e._v(" "),a("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html#ValidateBasic"}},[a("code",[e._v("ValidateBasic")])]),e._v(" methods, which perform basic validity checks on messages only. When "),a("RouterLink",{attrs:{to:"/core/baseapp.html#runtx"}},[a("code",[e._v("runTx")])]),e._v(" is checking a transaction created from the "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/main/x/auth/spec",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("auth")]),a("OutboundLink")],1),e._v(" module, it first runs "),a("code",[e._v("ValidateBasic")]),e._v(" on each message, then runs the "),a("code",[e._v("auth")]),e._v(" module AnteHandler which calls "),a("code",[e._v("ValidateBasic")]),e._v(" for the transaction itself.")],1)]),e._v(" "),a("p",[e._v("As a developer, you should rarely manipulate "),a("code",[e._v("Tx")]),e._v(" directly, as "),a("code",[e._v("Tx")]),e._v(" is really an intermediate type used for transaction generation. Instead, developers should prefer the "),a("code",[e._v("TxBuilder")]),e._v(" interface, which you can learn more about "),a("a",{attrs:{href:"#transaction-generation"}},[e._v("below")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"signing-transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signing-transactions"}},[e._v("#")]),e._v(" Signing Transactions")]),e._v(" "),a("p",[e._v("Every message in a transaction must be signed by the addresses specified by its "),a("code",[e._v("GetSigners")]),e._v(". The Cosmos SDK currently allows signing transactions in two different ways.")]),e._v(" "),a("h4",{attrs:{id:"sign-mode-direct-preferred"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-mode-direct-preferred"}},[e._v("#")]),e._v(" "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(" (preferred)")]),e._v(" "),a("p",[e._v("The most used implementation of the "),a("code",[e._v("Tx")]),e._v(" interface is the Protobuf "),a("code",[e._v("Tx")]),e._v(" message, which is used in "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(":")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gVHggaXMgdGhlIHN0YW5kYXJkIHR5cGUgdXNlZCBmb3IgYnJvYWRjYXN0aW5nIHRyYW5zYWN0aW9ucy4KbWVzc2FnZSBUeCB7CiAgLy8gYm9keSBpcyB0aGUgcHJvY2Vzc2FibGUgY29udGVudCBvZiB0aGUgdHJhbnNhY3Rpb24KICBUeEJvZHkgYm9keSA9IDE7CgogIC8vIGF1dGhfaW5mbyBpcyB0aGUgYXV0aG9yaXphdGlvbiByZWxhdGVkIGNvbnRlbnQgb2YgdGhlIHRyYW5zYWN0aW9uLAogIC8vIHNwZWNpZmljYWxseSBzaWduZXJzLCBzaWduZXIgbW9kZXMgYW5kIGZlZQogIEF1dGhJbmZvIGF1dGhfaW5mbyA9IDI7CgogIC8vIHNpZ25hdHVyZXMgaXMgYSBsaXN0IG9mIHNpZ25hdHVyZXMgdGhhdCBtYXRjaGVzIHRoZSBsZW5ndGggYW5kIG9yZGVyIG9mCiAgLy8gQXV0aEluZm8ncyBzaWduZXJfaW5mb3MgdG8gYWxsb3cgY29ubmVjdGluZyBzaWduYXR1cmUgbWV0YSBpbmZvcm1hdGlvbiBsaWtlCiAgLy8gcHVibGljIGtleSBhbmQgc2lnbmluZyBtb2RlIGJ5IHBvc2l0aW9uLgogIHJlcGVhdGVkIGJ5dGVzIHNpZ25hdHVyZXMgPSAzOwp9"}})],1),e._v(" "),a("p",[e._v("Because Protobuf serialization is not deterministic, the Cosmos SDK uses an additional "),a("code",[e._v("TxRaw")]),e._v(" type to denote the pinned bytes over which a transaction is signed. Any user can generate a valid "),a("code",[e._v("body")]),e._v(" and "),a("code",[e._v("auth_info")]),e._v(" for a transaction, and serialize these two messages using Protobuf. "),a("code",[e._v("TxRaw")]),e._v(" then pins the user's exact binary representation of "),a("code",[e._v("body")]),e._v(" and "),a("code",[e._v("auth_info")]),e._v(", called respectively "),a("code",[e._v("body_bytes")]),e._v(" and "),a("code",[e._v("auth_info_bytes")]),e._v(". The document that is signed by all signers of the transaction is "),a("code",[e._v("SignDoc")]),e._v(" (deterministically serialized using "),a("RouterLink",{attrs:{to:"/architecture/adr-027-deterministic-protobuf-serialization.html"}},[e._v("ADR-027")]),e._v("):")],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gU2lnbkRvYyBpcyB0aGUgdHlwZSB1c2VkIGZvciBnZW5lcmF0aW5nIHNpZ24gYnl0ZXMgZm9yIFNJR05fTU9ERV9ESVJFQ1QuCm1lc3NhZ2UgU2lnbkRvYyB7CiAgLy8gYm9keV9ieXRlcyBpcyBwcm90b2J1ZiBzZXJpYWxpemF0aW9uIG9mIGEgVHhCb2R5IHRoYXQgbWF0Y2hlcyB0aGUKICAvLyByZXByZXNlbnRhdGlvbiBpbiBUeFJhdy4KICBieXRlcyBib2R5X2J5dGVzID0gMTsKCiAgLy8gYXV0aF9pbmZvX2J5dGVzIGlzIGEgcHJvdG9idWYgc2VyaWFsaXphdGlvbiBvZiBhbiBBdXRoSW5mbyB0aGF0IG1hdGNoZXMgdGhlCiAgLy8gcmVwcmVzZW50YXRpb24gaW4gVHhSYXcuCiAgYnl0ZXMgYXV0aF9pbmZvX2J5dGVzID0gMjsKCiAgLy8gY2hhaW5faWQgaXMgdGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBjaGFpbiB0aGlzIHRyYW5zYWN0aW9uIHRhcmdldHMuCiAgLy8gSXQgcHJldmVudHMgc2lnbmVkIHRyYW5zYWN0aW9ucyBmcm9tIGJlaW5nIHVzZWQgb24gYW5vdGhlciBjaGFpbiBieSBhbgogIC8vIGF0dGFja2VyCiAgc3RyaW5nIGNoYWluX2lkID0gMzsKCiAgLy8gYWNjb3VudF9udW1iZXIgaXMgdGhlIGFjY291bnQgbnVtYmVyIG9mIHRoZSBhY2NvdW50IGluIHN0YXRlCiAgdWludDY0IGFjY291bnRfbnVtYmVyID0gNDsKfQ=="}})],1),e._v(" "),a("p",[e._v("Once signed by all signers, the "),a("code",[e._v("body_bytes")]),e._v(", "),a("code",[e._v("auth_info_bytes")]),e._v(" and "),a("code",[e._v("signatures")]),e._v(" are gathered into "),a("code",[e._v("TxRaw")]),e._v(", whose serialized bytes are broadcasted over the network.")]),e._v(" "),a("h4",{attrs:{id:"sign-mode-legacy-amino-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-mode-legacy-amino-json"}},[e._v("#")]),e._v(" "),a("code",[e._v("SIGN_MODE_LEGACY_AMINO_JSON")])]),e._v(" "),a("p",[e._v("The legacy implementation of the "),a("code",[e._v("Tx")]),e._v(" interface is the "),a("code",[e._v("StdTx")]),e._v(" struct from "),a("code",[e._v("x/auth")]),e._v(":")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RkVHggaXMgdGhlIGxlZ2FjeSB0cmFuc2FjdGlvbiBmb3JtYXQgZm9yIHdyYXBwaW5nIGEgTXNnIHdpdGggRmVlIGFuZCBTaWduYXR1cmVzLgovLyBJdCBvbmx5IHdvcmtzIHdpdGggQW1pbm8sIHBsZWFzZSBwcmVmZXIgdGhlIG5ldyBwcm90b2J1ZiBUeCBpbiB0eXBlcy90eC4KLy8gTk9URTogdGhlIGZpcnN0IHNpZ25hdHVyZSBpcyB0aGUgZmVlIHBheWVyIChTaWduYXR1cmVzIG11c3Qgbm90IGJlIG5pbCkuCi8vIERlcHJlY2F0ZWQKdHlwZSBTdGRUeCBzdHJ1Y3QgewoJTXNncyAgICAgICAgICBbXXNkay5Nc2cgICAgICBganNvbjomcXVvdDttc2cmcXVvdDsgeWFtbDomcXVvdDttc2cmcXVvdDtgCglGZWUgICAgICAgICAgIFN0ZEZlZSAgICAgICAgIGBqc29uOiZxdW90O2ZlZSZxdW90OyB5YW1sOiZxdW90O2ZlZSZxdW90O2AKCVNpZ25hdHVyZXMgICAgW11TdGRTaWduYXR1cmUgYGpzb246JnF1b3Q7c2lnbmF0dXJlcyZxdW90OyB5YW1sOiZxdW90O3NpZ25hdHVyZXMmcXVvdDtgCglNZW1vICAgICAgICAgIHN0cmluZyAgICAgICAgIGBqc29uOiZxdW90O21lbW8mcXVvdDsgeWFtbDomcXVvdDttZW1vJnF1b3Q7YAoJVGltZW91dEhlaWdodCB1aW50NjQgICAgICAgICBganNvbjomcXVvdDt0aW1lb3V0X2hlaWdodCZxdW90OyB5YW1sOiZxdW90O3RpbWVvdXRfaGVpZ2h0JnF1b3Q7YAp9"}})],1),e._v(" "),a("p",[e._v("The document signed by all signers is "),a("code",[e._v("StdSignDoc")]),e._v(":")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RkU2lnbkRvYyBpcyByZXBsYXktcHJldmVudGlvbiBzdHJ1Y3R1cmUuCi8vIEl0IGluY2x1ZGVzIHRoZSByZXN1bHQgb2YgbXNnLkdldFNpZ25CeXRlcygpLAovLyBhcyB3ZWxsIGFzIHRoZSBDaGFpbklEIChwcmV2ZW50IGNyb3NzIGNoYWluIHJlcGxheSkKLy8gYW5kIHRoZSBTZXF1ZW5jZSBudW1iZXJzIGZvciBlYWNoIHNpZ25hdHVyZSAocHJldmVudAovLyBpbmNoYWluIHJlcGxheSBhbmQgZW5mb3JjZSB0eCBvcmRlcmluZyBwZXIgYWNjb3VudCkuCnR5cGUgU3RkU2lnbkRvYyBzdHJ1Y3QgewoJQWNjb3VudE51bWJlciB1aW50NjQgICAgICAgICAgICBganNvbjomcXVvdDthY2NvdW50X251bWJlciZxdW90OyB5YW1sOiZxdW90O2FjY291bnRfbnVtYmVyJnF1b3Q7YAoJU2VxdWVuY2UgICAgICB1aW50NjQgICAgICAgICAgICBganNvbjomcXVvdDtzZXF1ZW5jZSZxdW90OyB5YW1sOiZxdW90O3NlcXVlbmNlJnF1b3Q7YAoJVGltZW91dEhlaWdodCB1aW50NjQgICAgICAgICAgICBganNvbjomcXVvdDt0aW1lb3V0X2hlaWdodCxvbWl0ZW1wdHkmcXVvdDsgeWFtbDomcXVvdDt0aW1lb3V0X2hlaWdodCZxdW90O2AKCUNoYWluSUQgICAgICAgc3RyaW5nICAgICAgICAgICAgYGpzb246JnF1b3Q7Y2hhaW5faWQmcXVvdDsgeWFtbDomcXVvdDtjaGFpbl9pZCZxdW90O2AKCU1lbW8gICAgICAgICAgc3RyaW5nICAgICAgICAgICAgYGpzb246JnF1b3Q7bWVtbyZxdW90OyB5YW1sOiZxdW90O21lbW8mcXVvdDtgCglGZWUgICAgICAgICAgIGpzb24uUmF3TWVzc2FnZSAgIGBqc29uOiZxdW90O2ZlZSZxdW90OyB5YW1sOiZxdW90O2ZlZSZxdW90O2AKCU1zZ3MgICAgICAgICAgW11qc29uLlJhd01lc3NhZ2UgYGpzb246JnF1b3Q7bXNncyZxdW90OyB5YW1sOiZxdW90O21zZ3MmcXVvdDtgCglUaXAgICAgICAgICAgICpTdGRUaXAgICAgICAgICAgIGBqc29uOiZxdW90O3RpcCxvbWl0ZW1wdHkmcXVvdDsgeWFtbDomcXVvdDt0aXAmcXVvdDtgCn0="}})],1),e._v(" "),a("p",[e._v("which is encoded into bytes using Amino JSON. Once all signatures are gathered into "),a("code",[e._v("StdTx")]),e._v(", "),a("code",[e._v("StdTx")]),e._v(" is serialized using Amino JSON, and these bytes are broadcasted over the network.")]),e._v(" "),a("h4",{attrs:{id:"other-sign-modes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-sign-modes"}},[e._v("#")]),e._v(" Other Sign Modes")]),e._v(" "),a("p",[e._v("The Cosmos SDK also provides a couple of other sign modes for particular use cases.")]),e._v(" "),a("h4",{attrs:{id:"sign-mode-direct-aux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-mode-direct-aux"}},[e._v("#")]),e._v(" "),a("code",[e._v("SIGN_MODE_DIRECT_AUX")])]),e._v(" "),a("p",[a("code",[e._v("SIGN_MODE_DIRECT_AUX")]),e._v(" is a sign mode released in the Cosmos SDK v0.46 which targets transactions with multiple signers. Whereas "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(" expects each signer to sign over both "),a("code",[e._v("TxBody")]),e._v(" and "),a("code",[e._v("AuthInfo")]),e._v(" (which includes all other signers' signer infos, i.e. their account sequence, public key and mode info), "),a("code",[e._v("SIGN_MODE_DIRECT_AUX")]),e._v(" allows N-1 signers to only sign over "),a("code",[e._v("TxBody")]),e._v(" and "),a("em",[e._v("their own")]),e._v(" signer info. Morever, each auxiliary signer (i.e. a signer using "),a("code",[e._v("SIGN_MODE_DIRECT_AUX")]),e._v(") doesn't\nneed to sign over the fees:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gU2lnbkRvY0RpcmVjdEF1eCBpcyB0aGUgdHlwZSB1c2VkIGZvciBnZW5lcmF0aW5nIHNpZ24gYnl0ZXMgZm9yCi8vIFNJR05fTU9ERV9ESVJFQ1RfQVVYLgovLwovLyBTaW5jZTogY29zbW9zLXNkayAwLjQ2Cm1lc3NhZ2UgU2lnbkRvY0RpcmVjdEF1eCB7CiAgLy8gYm9keV9ieXRlcyBpcyBwcm90b2J1ZiBzZXJpYWxpemF0aW9uIG9mIGEgVHhCb2R5IHRoYXQgbWF0Y2hlcyB0aGUKICAvLyByZXByZXNlbnRhdGlvbiBpbiBUeFJhdy4KICBieXRlcyBib2R5X2J5dGVzID0gMTsKCiAgLy8gcHVibGljX2tleSBpcyB0aGUgcHVibGljIGtleSBvZiB0aGUgc2lnbmluZyBhY2NvdW50LgogIGdvb2dsZS5wcm90b2J1Zi5BbnkgcHVibGljX2tleSA9IDI7CgogIC8vIGNoYWluX2lkIGlzIHRoZSBpZGVudGlmaWVyIG9mIHRoZSBjaGFpbiB0aGlzIHRyYW5zYWN0aW9uIHRhcmdldHMuCiAgLy8gSXQgcHJldmVudHMgc2lnbmVkIHRyYW5zYWN0aW9ucyBmcm9tIGJlaW5nIHVzZWQgb24gYW5vdGhlciBjaGFpbiBieSBhbgogIC8vIGF0dGFja2VyLgogIHN0cmluZyBjaGFpbl9pZCA9IDM7CgogIC8vIGFjY291bnRfbnVtYmVyIGlzIHRoZSBhY2NvdW50IG51bWJlciBvZiB0aGUgYWNjb3VudCBpbiBzdGF0ZS4KICB1aW50NjQgYWNjb3VudF9udW1iZXIgPSA0OwoKICAvLyBzZXF1ZW5jZSBpcyB0aGUgc2VxdWVuY2UgbnVtYmVyIG9mIHRoZSBzaWduaW5nIGFjY291bnQuCiAgdWludDY0IHNlcXVlbmNlID0gNTsKCiAgLy8gVGlwIGlzIHRoZSBvcHRpb25hbCB0aXAgdXNlZCBmb3IgbWV0YS10cmFuc2FjdGlvbnMuIEl0IHNob3VsZCBiZSBsZWZ0CiAgLy8gZW1wdHkgaWYgdGhlIHNpZ25lciBpcyBub3QgdGhlIHRpcHBlciBmb3IgdGhpcyB0cmFuc2FjdGlvbi4KICBUaXAgdGlwID0gNjsKfQ=="}})],1),e._v(" "),a("p",[e._v("The use case is a multi-signer transaction, where one of the signers is appointed to gather all signatures, broadcast the signature and pay for fees, and the others only care about the transaction body. This generally allows for a better multi-signing UX. If Alice, Bob and Charlie are part of a 3-signer transaction, then Alice and Bob can both use "),a("code",[e._v("SIGN_MODE_DIRECT_AUX")]),e._v(" to sign over the "),a("code",[e._v("TxBody")]),e._v(" and their own signer info (no need an additional step to gather other signers' ones, like in "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v("), without specifying a fee in their SignDoc. Charlie can then gather both signatures from Alice and Bob, and\ncreate the final transaction by appending a fee. Note that the fee payer of the transaction (in our case Charlie) must sign over the fees, so must use "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(" or "),a("code",[e._v("SIGN_MODE_LEGACY_AMINO_JSON")]),e._v(".")]),e._v(" "),a("p",[e._v("A concrete use case is implemented in "),a("RouterLink",{attrs:{to:"/core/tips.html"}},[e._v("transaction tips")]),e._v(": the tipper may use "),a("code",[e._v("SIGN_MODE_DIRECT_AUX")]),e._v(" to specify a tip in the transaction, without signing over the actual transaction fees. Then, the fee payer appends fees inside the tipper's desired "),a("code",[e._v("TxBody")]),e._v(", and as an exchange for paying the fees and broadcasting the transaction, receives the tipper's transaction tips as payment.")],1),e._v(" "),a("h4",{attrs:{id:"sign-mode-textual"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-mode-textual"}},[e._v("#")]),e._v(" "),a("code",[e._v("SIGN_MODE_TEXTUAL")])]),e._v(" "),a("p",[a("code",[e._v("SIGN_MODE_TEXTUAL")]),e._v(" is a new sign mode for delivering a better signing experience on hardware wallets, it is currently still under implementation. If you wish to learn more, please refer to "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/10701",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR-050"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"transaction-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-process"}},[e._v("#")]),e._v(" Transaction Process")]),e._v(" "),a("p",[e._v("The process of an end-user sending a transaction is:")]),e._v(" "),a("ul",[a("li",[e._v("decide on the messages to put into the transaction,")]),e._v(" "),a("li",[e._v("generate the transaction using the Cosmos SDK's "),a("code",[e._v("TxBuilder")]),e._v(",")]),e._v(" "),a("li",[e._v("broadcast the transaction using one of the available interfaces.")])]),e._v(" "),a("p",[e._v("The next paragraphs will describe each of these components, in this order.")]),e._v(" "),a("h3",{attrs:{id:"messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("Module "),a("code",[e._v("sdk.Msg")]),e._v("s are not to be confused with "),a("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/abci.html#messages",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABCI Messages"),a("OutboundLink")],1),e._v(" which define interactions between the Tendermint and application layers.")])]),e._v(" "),a("p",[a("strong",[e._v("Messages")]),e._v(" (or "),a("code",[e._v("sdk.Msg")]),e._v("s) are module-specific objects that trigger state transitions within the scope of the module they belong to. Module developers define the messages for their module by adding methods to the Protobuf "),a("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[a("code",[e._v("Msg")]),e._v(" service")]),e._v(", and also implement the corresponding "),a("code",[e._v("MsgServer")]),e._v(".")],1),e._v(" "),a("p",[e._v("Each "),a("code",[e._v("sdk.Msg")]),e._v("s is related to exactly one Protobuf "),a("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[a("code",[e._v("Msg")]),e._v(" service")]),e._v(" RPC, defined inside each module's "),a("code",[e._v("tx.proto")]),e._v(" file. A SDK app router automatically maps every "),a("code",[e._v("sdk.Msg")]),e._v(" to a corresponding RPC. Protobuf generates a "),a("code",[e._v("MsgServer")]),e._v(" interface for each module "),a("code",[e._v("Msg")]),e._v(" service, and the module developer needs to implement this interface.\nThis design puts more responsibility on module developers, allowing application developers to reuse common functionalities without having to implement state transition logic repetitively.")],1),e._v(" "),a("p",[e._v("To learn more about Protobuf "),a("code",[e._v("Msg")]),e._v(" services and how to implement "),a("code",[e._v("MsgServer")]),e._v(", click "),a("RouterLink",{attrs:{to:"/building-modules/msg-services.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("p",[e._v("While messages contain the information for state transition logic, a transaction's other metadata and relevant information are stored in the "),a("code",[e._v("TxBuilder")]),e._v(" and "),a("code",[e._v("Context")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"transaction-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-generation"}},[e._v("#")]),e._v(" Transaction Generation")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("TxBuilder")]),e._v(" interface contains data closely related with the generation of transactions, which an end-user can freely set to generate the desired transaction:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CS8vIFR4QnVpbGRlciBkZWZpbmVzIGFuIGludGVyZmFjZSB3aGljaCBhbiBhcHBsaWNhdGlvbi1kZWZpbmVkIGNvbmNyZXRlIHRyYW5zYWN0aW9uCgkvLyB0eXBlIG11c3QgaW1wbGVtZW50LiBOYW1lbHksIGl0IG11c3QgYmUgYWJsZSB0byBzZXQgbWVzc2FnZXMsIGdlbmVyYXRlCgkvLyBzaWduYXR1cmVzLCBhbmQgcHJvdmlkZSBjYW5vbmljYWwgYnl0ZXMgdG8gc2lnbiBvdmVyLiBUaGUgdHJhbnNhY3Rpb24gbXVzdAoJLy8gYWxzbyBrbm93IGhvdyB0byBlbmNvZGUgaXRzZWxmLgoJVHhCdWlsZGVyIGludGVyZmFjZSB7CgkJR2V0VHgoKSBzaWduaW5nLlR4CgoJCVNldE1zZ3MobXNncyAuLi5zZGsuTXNnKSBlcnJvcgoJCVNldFNpZ25hdHVyZXMoc2lnbmF0dXJlcyAuLi5zaWduaW5ndHlwZXMuU2lnbmF0dXJlVjIpIGVycm9yCgkJU2V0TWVtbyhtZW1vIHN0cmluZykKCQlTZXRGZWVBbW91bnQoYW1vdW50IHNkay5Db2lucykKCQlTZXRGZWVQYXllcihmZWVQYXllciBzZGsuQWNjQWRkcmVzcykKCQlTZXRHYXNMaW1pdChsaW1pdCB1aW50NjQpCgkJU2V0VGlwKHRpcCAqdHguVGlwKQoJCVNldFRpbWVvdXRIZWlnaHQoaGVpZ2h0IHVpbnQ2NCkKCQlTZXRGZWVHcmFudGVyKGZlZUdyYW50ZXIgc2RrLkFjY0FkZHJlc3MpCgkJQWRkQXV4U2lnbmVyRGF0YSh0eC5BdXhTaWduZXJEYXRhKSBlcnJvcgoJfQ=="}})],1),e._v(" "),a("ul",[a("li",[a("code",[e._v("Msg")]),e._v("s, the array of "),a("a",{attrs:{href:"#messages"}},[e._v("messages")]),e._v(" included in the transaction.")]),e._v(" "),a("li",[a("code",[e._v("GasLimit")]),e._v(", option chosen by the users for how to calculate how much gas they will need to pay.")]),e._v(" "),a("li",[a("code",[e._v("Memo")]),e._v(", a note or comment to send with the transaction.")]),e._v(" "),a("li",[a("code",[e._v("FeeAmount")]),e._v(", the maximum amount the user is willing to pay in fees.")]),e._v(" "),a("li",[a("code",[e._v("TimeoutHeight")]),e._v(", block height until which the transaction is valid.")]),e._v(" "),a("li",[a("code",[e._v("Signatures")]),e._v(", the array of signatures from all signers of the transaction.")])]),e._v(" "),a("p",[e._v("As there are currently two sign modes for signing transactions, there are also two implementations of "),a("code",[e._v("TxBuilder")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0-rc1/x/auth/tx/builder.go#L18-L34",target:"_blank",rel:"noopener noreferrer"}},[e._v("wrapper"),a("OutboundLink")],1),e._v(" for creating transactions for "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(",")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0-rc1/x/auth/migrations/legacytx/stdtx_builder.go#L15-L21",target:"_blank",rel:"noopener noreferrer"}},[e._v("StdTxBuilder"),a("OutboundLink")],1),e._v(" for "),a("code",[e._v("SIGN_MODE_LEGACY_AMINO_JSON")]),e._v(".")])]),e._v(" "),a("p",[e._v("However, the two implementation of "),a("code",[e._v("TxBuilder")]),e._v(" should be hidden away from end-users, as they should prefer using the overarching "),a("code",[e._v("TxConfig")]),e._v(" interface:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CS8vIFR4Q29uZmlnIGRlZmluZXMgYW4gaW50ZXJmYWNlIGEgY2xpZW50IGNhbiB1dGlsaXplIHRvIGdlbmVyYXRlIGFuCgkvLyBhcHBsaWNhdGlvbi1kZWZpbmVkIGNvbmNyZXRlIHRyYW5zYWN0aW9uIHR5cGUuIFRoZSB0eXBlIHJldHVybmVkIG11c3QKCS8vIGltcGxlbWVudCBUeEJ1aWxkZXIuCglUeENvbmZpZyBpbnRlcmZhY2UgewoJCVR4RW5jb2RpbmdDb25maWcKCgkJTmV3VHhCdWlsZGVyKCkgVHhCdWlsZGVyCgkJV3JhcFR4QnVpbGRlcihzZGsuVHgpIChUeEJ1aWxkZXIsIGVycm9yKQoJCVNpZ25Nb2RlSGFuZGxlcigpIHNpZ25pbmcuU2lnbk1vZGVIYW5kbGVyCgl9"}})],1),e._v(" "),a("p",[a("code",[e._v("TxConfig")]),e._v(" is an app-wide configuration for managing transactions. Most importantly, it holds the information about whether to sign each transaction with "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(" or "),a("code",[e._v("SIGN_MODE_LEGACY_AMINO_JSON")]),e._v(". By calling "),a("code",[e._v("txBuilder := txConfig.NewTxBuilder()")]),e._v(", a new "),a("code",[e._v("TxBuilder")]),e._v(" will be created with the appropriate sign mode.")]),e._v(" "),a("p",[e._v("Once "),a("code",[e._v("TxBuilder")]),e._v(" is correctly populated with the setters exposed above, "),a("code",[e._v("TxConfig")]),e._v(" will also take care of correctly encoding the bytes (again, either using "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(" or "),a("code",[e._v("SIGN_MODE_LEGACY_AMINO_JSON")]),e._v("). Here's a pseudo-code snippet of how to generate and encode a transaction, using the "),a("code",[e._v("TxEncoder()")]),e._v(" method:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHhCdWlsZGVyIDo9IHR4Q29uZmlnLk5ld1R4QnVpbGRlcigpCnR4QnVpbGRlci5TZXRNc2dzKC4uLikgLy8gYW5kIG90aGVyIHNldHRlcnMgb24gdHhCdWlsZGVyCgpieiwgZXJyIDo9IHR4Q29uZmlnLlR4RW5jb2RlcigpKHR4QnVpbGRlci5HZXRUeCgpKQovLyBieiBhcmUgYnl0ZXMgdG8gYmUgYnJvYWRjYXN0ZWQgb3ZlciB0aGUgbmV0d29yawo="}}),e._v(" "),a("h3",{attrs:{id:"broadcasting-the-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broadcasting-the-transaction"}},[e._v("#")]),e._v(" Broadcasting the Transaction")]),e._v(" "),a("p",[e._v("Once the transaction bytes are generated, there are currently three ways of broadcasting it.")]),e._v(" "),a("h4",{attrs:{id:"cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),a("p",[e._v("Application developers create entry points to the application by creating a "),a("RouterLink",{attrs:{to:"/core/cli.html"}},[e._v("command-line interface")]),e._v(", "),a("RouterLink",{attrs:{to:"/core/grpc_rest.html"}},[e._v("gRPC and/or REST interface")]),e._v(", typically found in the application's "),a("code",[e._v("./cmd")]),e._v(" folder. These interfaces allow users to interact with the application through command-line.")],1),e._v(" "),a("p",[e._v("For the "),a("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html#cli"}},[e._v("command-line interface")]),e._v(", module developers create subcommands to add as children to the application top-level transaction command "),a("code",[e._v("TxCmd")]),e._v(". CLI commands actually bundle all the steps of transaction processing into one simple command: creating messages, generating transactions and broadcasting. For concrete examples, see the "),a("RouterLink",{attrs:{to:"/run-node/interact-node.html"}},[e._v("Interacting with a Node")]),e._v(" section. An example transaction made using CLI looks like:")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCBzZW5kICRNWV9WQUxJREFUT1JfQUREUkVTUyAkUkVDSVBJRU5UIDEwMDBzdGFrZQo="}}),e._v(" "),a("h4",{attrs:{id:"grpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[e._v("#")]),e._v(" gRPC")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://grpc.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC"),a("OutboundLink")],1),e._v(" is the main component for the Cosmos SDK's RPC layer. Its principal usage is in the context of modules' "),a("a",{attrs:{href:"../building-modules"}},[a("code",[e._v("Query")]),e._v(" services")]),e._v(". However, the Cosmos SDK also exposes a few other module-agnostic gRPC services, one of them being the "),a("code",[e._v("Tx")]),e._v(" service:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"c3ludGF4ID0gJnF1b3Q7cHJvdG8zJnF1b3Q7OwpwYWNrYWdlIGNvc21vcy50eC52MWJldGExOwoKaW1wb3J0ICZxdW90O2dvb2dsZS9hcGkvYW5ub3RhdGlvbnMucHJvdG8mcXVvdDs7CmltcG9ydCAmcXVvdDtjb3Ntb3MvYmFzZS9hYmNpL3YxYmV0YTEvYWJjaS5wcm90byZxdW90OzsKaW1wb3J0ICZxdW90O2Nvc21vcy90eC92MWJldGExL3R4LnByb3RvJnF1b3Q7OwppbXBvcnQgJnF1b3Q7Y29zbW9zL2Jhc2UvcXVlcnkvdjFiZXRhMS9wYWdpbmF0aW9uLnByb3RvJnF1b3Q7OwppbXBvcnQgJnF1b3Q7dGVuZGVybWludC90eXBlcy9ibG9jay5wcm90byZxdW90OzsKaW1wb3J0ICZxdW90O3RlbmRlcm1pbnQvdHlwZXMvdHlwZXMucHJvdG8mcXVvdDs7CgpvcHRpb24gZ29fcGFja2FnZSAgICAgICAgICAgICAgICAgICAgICAgPSAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL3R4JnF1b3Q7OwoKLy8gU2VydmljZSBkZWZpbmVzIGEgZ1JQQyBzZXJ2aWNlIGZvciBpbnRlcmFjdGluZyB3aXRoIHRyYW5zYWN0aW9ucy4Kc2VydmljZSBTZXJ2aWNlIHsKICAvLyBTaW11bGF0ZSBzaW11bGF0ZXMgZXhlY3V0aW5nIGEgdHJhbnNhY3Rpb24gZm9yIGVzdGltYXRpbmcgZ2FzIHVzYWdlLgogIHJwYyBTaW11bGF0ZShTaW11bGF0ZVJlcXVlc3QpIHJldHVybnMgKFNpbXVsYXRlUmVzcG9uc2UpIHsKICAgIG9wdGlvbiAoZ29vZ2xlLmFwaS5odHRwKSA9IHsKICAgICAgcG9zdDogJnF1b3Q7L2Nvc21vcy90eC92MWJldGExL3NpbXVsYXRlJnF1b3Q7CiAgICAgIGJvZHk6ICZxdW90OyomcXVvdDsKICAgIH07CiAgfQogIC8vIEdldFR4IGZldGNoZXMgYSB0eCBieSBoYXNoLgogIHJwYyBHZXRUeChHZXRUeFJlcXVlc3QpIHJldHVybnMgKEdldFR4UmVzcG9uc2UpIHsKICAgIG9wdGlvbiAoZ29vZ2xlLmFwaS5odHRwKS5nZXQgPSAmcXVvdDsvY29zbW9zL3R4L3YxYmV0YTEvdHhzL3toYXNofSZxdW90OzsKICB9CiAgLy8gQnJvYWRjYXN0VHggYnJvYWRjYXN0IHRyYW5zYWN0aW9uLgogIHJwYyBCcm9hZGNhc3RUeChCcm9hZGNhc3RUeFJlcXVlc3QpIHJldHVybnMgKEJyb2FkY2FzdFR4UmVzcG9uc2UpIHsKICAgIG9wdGlvbiAoZ29vZ2xlLmFwaS5odHRwKSA9IHsKICAgICAgcG9zdDogJnF1b3Q7L2Nvc21vcy90eC92MWJldGExL3R4cyZxdW90OwogICAgICBib2R5OiAmcXVvdDsqJnF1b3Q7CiAgICB9OwogIH0KICAvLyBHZXRUeHNFdmVudCBmZXRjaGVzIHR4cyBieSBldmVudC4KICBycGMgR2V0VHhzRXZlbnQoR2V0VHhzRXZlbnRSZXF1ZXN0KSByZXR1cm5zIChHZXRUeHNFdmVudFJlc3BvbnNlKSB7CiAgICBvcHRpb24gKGdvb2dsZS5hcGkuaHR0cCkuZ2V0ID0gJnF1b3Q7L2Nvc21vcy90eC92MWJldGExL3R4cyZxdW90OzsKICB9CiAgLy8gR2V0QmxvY2tXaXRoVHhzIGZldGNoZXMgYSBibG9jayB3aXRoIGRlY29kZWQgdHhzLgogIC8vCiAgLy8gU2luY2U6IGNvc21vcy1zZGsgMC40NS4yCiAgcnBjIEdldEJsb2NrV2l0aFR4cyhHZXRCbG9ja1dpdGhUeHNSZXF1ZXN0KSByZXR1cm5zIChHZXRCbG9ja1dpdGhUeHNSZXNwb25zZSkgewogICAgb3B0aW9uIChnb29nbGUuYXBpLmh0dHApLmdldCA9ICZxdW90Oy9jb3Ntb3MvdHgvdjFiZXRhMS90eHMvYmxvY2sve2hlaWdodH0mcXVvdDs7CiAgfQp9CgovLyBHZXRUeHNFdmVudFJlcXVlc3QgaXMgdGhlIHJlcXVlc3QgdHlwZSBmb3IgdGhlIFNlcnZpY2UuVHhzQnlFdmVudHMKLy8gUlBDIG1ldGhvZC4KbWVzc2FnZSBHZXRUeHNFdmVudFJlcXVlc3QgewogIC8vIGV2ZW50cyBpcyB0aGUgbGlzdCBvZiB0cmFuc2FjdGlvbiBldmVudCB0eXBlLgogIHJlcGVhdGVkIHN0cmluZyBldmVudHMgPSAxOwogIC8vIHBhZ2luYXRpb24gZGVmaW5lcyBhIHBhZ2luYXRpb24gZm9yIHRoZSByZXF1ZXN0LgogIGNvc21vcy5iYXNlLnF1ZXJ5LnYxYmV0YTEuUGFnZVJlcXVlc3QgcGFnaW5hdGlvbiA9IDI7CiAgT3JkZXJCeSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcl9ieSAgID0gMzsKfQoKLy8gT3JkZXJCeSBkZWZpbmVzIHRoZSBzb3J0aW5nIG9yZGVyCmVudW0gT3JkZXJCeSB7CiAgLy8gT1JERVJfQllfVU5TUEVDSUZJRUQgc3BlY2lmaWVzIGFuIHVua25vd24gc29ydGluZyBvcmRlci4gT3JkZXJCeSBkZWZhdWx0cyB0byBBU0MgaW4gdGhpcyBjYXNlLgogIE9SREVSX0JZX1VOU1BFQ0lGSUVEID0gMDsKICAvLyBPUkRFUl9CWV9BU0MgZGVmaW5lcyBhc2NlbmRpbmcgb3JkZXIKICBPUkRFUl9CWV9BU0MgPSAxOwogIC8vIE9SREVSX0JZX0RFU0MgZGVmaW5lcyBkZXNjZW5kaW5nIG9yZGVyCiAgT1JERVJfQllfREVTQyA9IDI7Cn0KCi8vIEdldFR4c0V2ZW50UmVzcG9uc2UgaXMgdGhlIHJlc3BvbnNlIHR5cGUgZm9yIHRoZSBTZXJ2aWNlLlR4c0J5RXZlbnRzCi8vIFJQQyBtZXRob2QuCm1lc3NhZ2UgR2V0VHhzRXZlbnRSZXNwb25zZSB7CiAgLy8gdHhzIGlzIHRoZSBsaXN0IG9mIHF1ZXJpZWQgdHJhbnNhY3Rpb25zLgogIHJlcGVhdGVkIGNvc21vcy50eC52MWJldGExLlR4IHR4cyA9IDE7CiAgLy8gdHhfcmVzcG9uc2VzIGlzIHRoZSBsaXN0IG9mIHF1ZXJpZWQgVHhSZXNwb25zZXMuCiAgcmVwZWF0ZWQgY29zbW9zLmJhc2UuYWJjaS52MWJldGExLlR4UmVzcG9uc2UgdHhfcmVzcG9uc2VzID0gMjsKICAvLyBwYWdpbmF0aW9uIGRlZmluZXMgYSBwYWdpbmF0aW9uIGZvciB0aGUgcmVzcG9uc2UuCiAgY29zbW9zLmJhc2UucXVlcnkudjFiZXRhMS5QYWdlUmVzcG9uc2UgcGFnaW5hdGlvbiA9IDM7Cn0KCi8vIEJyb2FkY2FzdFR4UmVxdWVzdCBpcyB0aGUgcmVxdWVzdCB0eXBlIGZvciB0aGUgU2VydmljZS5Ccm9hZGNhc3RUeFJlcXVlc3QKLy8gUlBDIG1ldGhvZC4KbWVzc2FnZSBCcm9hZGNhc3RUeFJlcXVlc3QgewogIC8vIHR4X2J5dGVzIGlzIHRoZSByYXcgdHJhbnNhY3Rpb24uCiAgYnl0ZXMgICAgICAgICB0eF9ieXRlcyA9IDE7CiAgQnJvYWRjYXN0TW9kZSBtb2RlICAgICA9IDI7Cn0KCi8vIEJyb2FkY2FzdE1vZGUgc3BlY2lmaWVzIHRoZSBicm9hZGNhc3QgbW9kZSBmb3IgdGhlIFR4U2VydmljZS5Ccm9hZGNhc3QgUlBDIG1ldGhvZC4KZW51bSBCcm9hZGNhc3RNb2RlIHsKICAvLyB6ZXJvLXZhbHVlIGZvciBtb2RlIG9yZGVyaW5nCiAgQlJPQURDQVNUX01PREVfVU5TUEVDSUZJRUQgPSAwOwogIC8vIEJST0FEQ0FTVF9NT0RFX0JMT0NLIGRlZmluZXMgYSB0eCBicm9hZGNhc3RpbmcgbW9kZSB3aGVyZSB0aGUgY2xpZW50IHdhaXRzIGZvcgogIC8vIHRoZSB0eCB0byBiZSBjb21taXR0ZWQgaW4gYSBibG9jay4KICBCUk9BRENBU1RfTU9ERV9CTE9DSyA9IDE7CiAgLy8gQlJPQURDQVNUX01PREVfU1lOQyBkZWZpbmVzIGEgdHggYnJvYWRjYXN0aW5nIG1vZGUgd2hlcmUgdGhlIGNsaWVudCB3YWl0cyBmb3IKICAvLyBhIENoZWNrVHggZXhlY3V0aW9uIHJlc3BvbnNlIG9ubHkuCiAgQlJPQURDQVNUX01PREVfU1lOQyA9IDI7CiAgLy8gQlJPQURDQVNUX01PREVfQVNZTkMgZGVmaW5lcyBhIHR4IGJyb2FkY2FzdGluZyBtb2RlIHdoZXJlIHRoZSBjbGllbnQgcmV0dXJucwogIC8vIGltbWVkaWF0ZWx5LgogIEJST0FEQ0FTVF9NT0RFX0FTWU5DID0gMzsKfQoKLy8gQnJvYWRjYXN0VHhSZXNwb25zZSBpcyB0aGUgcmVzcG9uc2UgdHlwZSBmb3IgdGhlCi8vIFNlcnZpY2UuQnJvYWRjYXN0VHggbWV0aG9kLgptZXNzYWdlIEJyb2FkY2FzdFR4UmVzcG9uc2UgewogIC8vIHR4X3Jlc3BvbnNlIGlzIHRoZSBxdWVyaWVkIFR4UmVzcG9uc2VzLgogIGNvc21vcy5iYXNlLmFiY2kudjFiZXRhMS5UeFJlc3BvbnNlIHR4X3Jlc3BvbnNlID0gMTsKfQoKLy8gU2ltdWxhdGVSZXF1ZXN0IGlzIHRoZSByZXF1ZXN0IHR5cGUgZm9yIHRoZSBTZXJ2aWNlLlNpbXVsYXRlCi8vIFJQQyBtZXRob2QuCm1lc3NhZ2UgU2ltdWxhdGVSZXF1ZXN0IHsKICAvLyB0eCBpcyB0aGUgdHJhbnNhY3Rpb24gdG8gc2ltdWxhdGUuCiAgLy8gRGVwcmVjYXRlZC4gU2VuZCByYXcgdHggYnl0ZXMgaW5zdGVhZC4KICBjb3Ntb3MudHgudjFiZXRhMS5UeCB0eCA9IDEgW2RlcHJlY2F0ZWQgPSB0cnVlXTsKICAvLyB0eF9ieXRlcyBpcyB0aGUgcmF3IHRyYW5zYWN0aW9uLgogIC8vCiAgLy8gU2luY2U6IGNvc21vcy1zZGsgMC40MwogIGJ5dGVzIHR4X2J5dGVzID0gMjsKfQoKLy8gU2ltdWxhdGVSZXNwb25zZSBpcyB0aGUgcmVzcG9uc2UgdHlwZSBmb3IgdGhlCi8vIFNlcnZpY2UuU2ltdWxhdGVSUEMgbWV0aG9kLgptZXNzYWdlIFNpbXVsYXRlUmVzcG9uc2UgewogIC8vIGdhc19pbmZvIGlzIHRoZSBpbmZvcm1hdGlvbiBhYm91dCBnYXMgdXNlZCBpbiB0aGUgc2ltdWxhdGlvbi4KICBjb3Ntb3MuYmFzZS5hYmNpLnYxYmV0YTEuR2FzSW5mbyBnYXNfaW5mbyA9IDE7CiAgLy8gcmVzdWx0IGlzIHRoZSByZXN1bHQgb2YgdGhlIHNpbXVsYXRpb24uCiAgY29zbW9zLmJhc2UuYWJjaS52MWJldGExLlJlc3VsdCByZXN1bHQgPSAyOwp9CgovLyBHZXRUeFJlcXVlc3QgaXMgdGhlIHJlcXVlc3QgdHlwZSBmb3IgdGhlIFNlcnZpY2UuR2V0VHgKLy8gUlBDIG1ldGhvZC4KbWVzc2FnZSBHZXRUeFJlcXVlc3QgewogIC8vIGhhc2ggaXMgdGhlIHR4IGhhc2ggdG8gcXVlcnksIGVuY29kZWQgYXMgYSBoZXggc3RyaW5nLgogIHN0cmluZyBoYXNoID0gMTsKfQoKLy8gR2V0VHhSZXNwb25zZSBpcyB0aGUgcmVzcG9uc2UgdHlwZSBmb3IgdGhlIFNlcnZpY2UuR2V0VHggbWV0aG9kLgptZXNzYWdlIEdldFR4UmVzcG9uc2UgewogIC8vIHR4IGlzIHRoZSBxdWVyaWVkIHRyYW5zYWN0aW9uLgogIGNvc21vcy50eC52MWJldGExLlR4IHR4ID0gMTsKICAvLyB0eF9yZXNwb25zZSBpcyB0aGUgcXVlcmllZCBUeFJlc3BvbnNlcy4KICBjb3Ntb3MuYmFzZS5hYmNpLnYxYmV0YTEuVHhSZXNwb25zZSB0eF9yZXNwb25zZSA9IDI7Cn0KCi8vIEdldEJsb2NrV2l0aFR4c1JlcXVlc3QgaXMgdGhlIHJlcXVlc3QgdHlwZSBmb3IgdGhlIFNlcnZpY2UuR2V0QmxvY2tXaXRoVHhzCi8vIFJQQyBtZXRob2QuCi8vCi8vIFNpbmNlOiBjb3Ntb3Mtc2RrIDAuNDUuMgptZXNzYWdlIEdldEJsb2NrV2l0aFR4c1JlcXVlc3QgewogIC8vIGhlaWdodCBpcyB0aGUgaGVpZ2h0IG9mIHRoZSBibG9jayB0byBxdWVyeS4KICBpbnQ2NCBoZWlnaHQgPSAxOwogIC8vIHBhZ2luYXRpb24gZGVmaW5lcyBhIHBhZ2luYXRpb24gZm9yIHRoZSByZXF1ZXN0LgogIGNvc21vcy5iYXNlLnF1ZXJ5LnYxYmV0YTEuUGFnZVJlcXVlc3QgcGFnaW5hdGlvbiA9IDI7Cn0KCi8vIEdldEJsb2NrV2l0aFR4c1Jlc3BvbnNlIGlzIHRoZSByZXNwb25zZSB0eXBlIGZvciB0aGUgU2VydmljZS5HZXRCbG9ja1dpdGhUeHMgbWV0aG9kLgovLwovLyBTaW5jZTogY29zbW9zLXNkayAwLjQ1LjIKbWVzc2FnZSBHZXRCbG9ja1dpdGhUeHNSZXNwb25zZSB7CiAgLy8gdHhzIGFyZSB0aGUgdHJhbnNhY3Rpb25zIGluIHRoZSBibG9jay4KICByZXBlYXRlZCBjb3Ntb3MudHgudjFiZXRhMS5UeCB0eHMgPSAxOwogIC50ZW5kZXJtaW50LnR5cGVzLkJsb2NrSUQgYmxvY2tfaWQgPSAyOwogIC50ZW5kZXJtaW50LnR5cGVzLkJsb2NrICAgYmxvY2sgICAgPSAzOwogIC8vIHBhZ2luYXRpb24gZGVmaW5lcyBhIHBhZ2luYXRpb24gZm9yIHRoZSByZXNwb25zZS4KICBjb3Ntb3MuYmFzZS5xdWVyeS52MWJldGExLlBhZ2VSZXNwb25zZSBwYWdpbmF0aW9uID0gNDsKfQ=="}})],1),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Tx")]),e._v(" service exposes a handful of utility functions, such as simulating a transaction or querying a transaction, and also one method to broadcast transactions.")]),e._v(" "),a("p",[e._v("Examples of broadcasting and simulating a transaction are shown "),a("RouterLink",{attrs:{to:"/run-node/txs.html#programmatically-with-go"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("h4",{attrs:{id:"rest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rest"}},[e._v("#")]),e._v(" REST")]),e._v(" "),a("p",[e._v("Each gRPC method has its corresponding REST endpoint, generated using "),a("a",{attrs:{href:"https://github.com/grpc-ecosystem/grpc-gateway",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC-gateway"),a("OutboundLink")],1),e._v(". Therefore, instead of using gRPC, you can also use HTTP to broadcast the same transaction, on the "),a("code",[e._v("POST /cosmos/tx/v1beta1/txs")]),e._v(" endpoint.")]),e._v(" "),a("p",[e._v("An example can be seen "),a("RouterLink",{attrs:{to:"/run-node/txs.html#using-rest"}},[e._v("here")])],1),e._v(" "),a("h4",{attrs:{id:"tendermint-rpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-rpc"}},[e._v("#")]),e._v(" Tendermint RPC")]),e._v(" "),a("p",[e._v("The three methods presented above are actually higher abstractions over the Tendermint RPC "),a("code",[e._v("/broadcast_tx_{async,sync,commit}")]),e._v(" endpoints, documented "),a("a",{attrs:{href:"https://docs.tendermint.com/master/rpc/#/Tx",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". This means that you can use the Tendermint RPC endpoints directly to broadcast the transaction, if you wish so.")]),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",{attrs:{hide:""}},[e._v("Learn about the "),a("RouterLink",{attrs:{to:"/core/context.html"}},[e._v("context")])],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);