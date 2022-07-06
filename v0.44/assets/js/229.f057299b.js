(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{724:function(t,e,o){"use strict";o.r(e);var i=o(1),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"distribution"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#distribution"}},[t._v("#")]),t._v(" "),o("code",[t._v("distribution")])]),t._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),o("p",[t._v("This "),o("em",[t._v("simple")]),t._v(" distribution mechanism describes a functional way to passively\ndistribute rewards between validators and delegators. Note that this mechanism does\nnot distribute funds in as precisely as active reward distribution mechanisms and\nwill therefore be upgraded in the future.")]),t._v(" "),o("p",[t._v("The mechanism operates as follows. Collected rewards are pooled globally and\ndivided out passively to validators and delegators. Each validator has the\nopportunity to charge commission to the delegators on the rewards collected on\nbehalf of the delegators. Fees are collected directly into a global reward pool\nand validator proposer-reward pool. Due to the nature of passive accounting,\nwhenever changes to parameters which affect the rate of reward distribution\noccurs, withdrawal of rewards must also occur.")]),t._v(" "),o("ul",[o("li",[t._v("Whenever withdrawing, one must withdraw the maximum amount they are entitled\nto, leaving nothing in the pool.")]),t._v(" "),o("li",[t._v("Whenever bonding, unbonding, or re-delegating tokens to an existing account, a\nfull withdrawal of the rewards must occur (as the rules for lazy accounting\nchange).")]),t._v(" "),o("li",[t._v("Whenever a validator chooses to change the commission on rewards, all accumulated\ncommission rewards must be simultaneously withdrawn.")])]),t._v(" "),o("p",[t._v("The above scenarios are covered in "),o("code",[t._v("hooks.md")]),t._v(".")]),t._v(" "),o("p",[t._v("The distribution mechanism outlined herein is used to lazily distribute the\nfollowing rewards between validators and associated delegators:")]),t._v(" "),o("ul",[o("li",[t._v("multi-token fees to be socially distributed")]),t._v(" "),o("li",[t._v("proposer reward pool")]),t._v(" "),o("li",[t._v("inflated atom provisions")]),t._v(" "),o("li",[t._v("validator commission on all rewards earned by their delegators stake")])]),t._v(" "),o("p",[t._v("Fees are pooled within a global pool, as well as validator specific\nproposer-reward pools. The mechanisms used allow for validators and delegators\nto independently and lazily withdraw their rewards.")]),t._v(" "),o("h2",{attrs:{id:"shortcomings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#shortcomings"}},[t._v("#")]),t._v(" Shortcomings")]),t._v(" "),o("p",[t._v("As a part of the lazy computations, each delegator holds an accumulation term\nspecific to each validator which is used to estimate what their approximate\nfair portion of tokens held in the global fee pool is owed to them.")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZW50aXRsZW1lbnQgPSBkZWxlZ2F0b3ItYWNjdW11bGF0aW9uIC8gYWxsLWRlbGVnYXRvcnMtYWNjdW11bGF0aW9uCg=="}}),t._v(" "),o("p",[t._v("Under the circumstance that there was constant and equal flow of incoming\nreward tokens every block, this distribution mechanism would be equal to the\nactive distribution (distribute individually to all delegators each block).\nHowever, this is unrealistic so deviations from the active distribution will\noccur based on fluctuations of incoming reward tokens as well as timing of\nreward withdrawal by other delegators.")]),t._v(" "),o("p",[t._v("If you happen to know that incoming rewards are about to significantly increase,\nyou are incentivized to not withdraw until after this event, increasing the\nworth of your existing "),o("em",[t._v("accum")]),t._v(". See "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/2764",target:"_blank",rel:"noopener noreferrer"}},[t._v("#2764"),o("OutboundLink")],1),t._v("\nfor further details.")]),t._v(" "),o("h2",{attrs:{id:"effect-on-staking"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#effect-on-staking"}},[t._v("#")]),t._v(" Effect on Staking")]),t._v(" "),o("p",[t._v("Charging commission on Atom provisions while also allowing for Atom-provisions\nto be auto-bonded (distributed directly to the validators bonded stake) is\nproblematic within BPoS. Fundamentally, these two mechanisms are mutually\nexclusive. If both commission and auto-bonding mechanisms are simultaneously\napplied to the staking-token then the distribution of staking-tokens between\nany validator and its delegators will change with each block. This then\nnecessitates a calculation for each delegation records for each block -\nwhich is considered computationally expensive.")]),t._v(" "),o("p",[t._v("In conclusion, we can only have Atom commission and unbonded atoms\nprovisions or bonded atom provisions with no Atom commission, and we elect to\nimplement the former. Stakeholders wishing to rebond their provisions may elect\nto set up a script to periodically withdraw and rebond rewards.")]),t._v(" "),o("h2",{attrs:{id:"contents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),o("ol",[o("li",[o("strong",[o("RouterLink",{attrs:{to:"/modules/distribution/01_concepts.html"}},[t._v("Concepts")])],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/modules/distribution/01_concepts.html#reference-counting-in-f1-fee-distribution"}},[t._v("Reference Counting in F1 Fee Distribution")])],1)])]),t._v(" "),o("li",[o("strong",[o("RouterLink",{attrs:{to:"/modules/distribution/02_state.html"}},[t._v("State")])],1)]),t._v(" "),o("li",[o("strong",[o("RouterLink",{attrs:{to:"/modules/distribution/03_begin_block.html"}},[t._v("Begin Block")])],1)]),t._v(" "),o("li",[o("strong",[o("RouterLink",{attrs:{to:"/modules/distribution/04_messages.html"}},[t._v("Messages")])],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/modules/distribution/04_messages.html#msgsetwithdrawaddress"}},[t._v("MsgSetWithdrawAddress")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/distribution/04_messages.html#msgwithdrawdelegatorreward"}},[t._v("MsgWithdrawDelegatorReward")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/modules/distribution/04_messages.html#withdraw-validator-rewards-all"}},[t._v("Withdraw Validator Rewards All")])],1)])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/distribution/04_messages.html#common-calculations-"}},[t._v("Common calculations")])],1)])]),t._v(" "),o("li",[o("strong",[o("RouterLink",{attrs:{to:"/modules/distribution/05_hooks.html"}},[t._v("Hooks")])],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/modules/distribution/05_hooks.html#create-or-modify-delegation-distribution"}},[t._v("Create or modify delegation distribution")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/distribution/05_hooks.html#commission-rate-change"}},[t._v("Commission rate change")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/distribution/05_hooks.html#change-in-validator-state"}},[t._v("Change in Validator State")])],1)])]),t._v(" "),o("li",[o("strong",[o("RouterLink",{attrs:{to:"/modules/distribution/06_events.html"}},[t._v("Events")])],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/modules/distribution/06_events.html#beginblocker"}},[t._v("BeginBlocker")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/modules/distribution/06_events.html#handlers"}},[t._v("Handlers")])],1)])]),t._v(" "),o("li",[o("strong",[o("RouterLink",{attrs:{to:"/modules/distribution/07_params.html"}},[t._v("Parameters")])],1)])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);