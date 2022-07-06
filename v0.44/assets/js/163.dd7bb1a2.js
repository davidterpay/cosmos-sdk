(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{826:function(e,t,n){"use strict";n.r(t);var i=n(1),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"governance-proposals"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#governance-proposals"}},[e._v("#")]),e._v(" Governance Proposals")]),e._v(" "),n("p",[e._v("In uncommon situations, a highly valued client may become frozen due to uncontrollable\ncircumstances. A highly valued client might have hundreds of channels being actively used.\nSome of those channels might have a significant amount of locked tokens used for ICS 20.")]),e._v(" "),n("p",[e._v("If the one third of the validator set of the chain the client represents decides to collude,\nthey can sign off on two valid but conflicting headers each signed by the other one third\nof the honest validator set. The light client can now be updated with two valid, but conflicting\nheaders at the same height. The light client cannot know which header is trustworthy and therefore\nevidence of such misbehaviour is likely to be submitted resulting in a frozen light client.")]),e._v(" "),n("p",[e._v('Frozen light clients cannot be updated under any circumstance except via a governance proposal.\nSince a quorum of validators can sign arbitrary state roots which may not be valid executions\nof the state machine, a governance proposal has been added to ease the complexity of unfreezing\nor updating clients which have become "stuck". Without this mechanism, validator sets would need\nto construct a state root to unfreeze the client. Unfreezing clients, re-enables all of the channels\nbuilt upon that client. This may result in recovery of otherwise lost funds.')]),e._v(" "),n("p",[e._v("Tendermint light clients may become expired if the trusting period has passed since their\nlast update. This may occur if relayers stop submitting headers to update the clients.")]),e._v(" "),n("p",[e._v("An unplanned upgrade by the counterparty chain may also result in expired clients. If the counterparty\nchain undergoes an unplanned upgrade, there may be no commitment to that upgrade signed by the validator\nset before the chain-id changes. In this situation, the validator set of the last valid update for the\nlight client is never expected to produce another valid header since the chain-id has changed, which will\nultimately lead the on-chain light client to become expired.")]),e._v(" "),n("p",[e._v('In the case that a highly valued light client is frozen, expired, or rendered non-updateable, a\ngovernance proposal may be submitted to update this client, known as the subject client. The\nproposal includes the client identifier for the subject, the client identifier for a substitute\nclient, and an initial height to reference the substitute client from. Light client implementations\nmay implement custom updating logic, but in most cases, the subject will be updated with information\nfrom the substitute client, if the proposal passes. The substitute client is used as a "stand in"\nwhile the subject is on trial. It is best practice to create a substitute client '),n("em",[e._v("after")]),e._v(" the subject\nhas become frozen to avoid the substitute from also becoming frozen. An active substitute client\nallows headers to be submitted during the voting period to prevent accidental expiry once the proposal\npasses.")])])}),[],!1,null,null,null);t.default=a.exports}}]);