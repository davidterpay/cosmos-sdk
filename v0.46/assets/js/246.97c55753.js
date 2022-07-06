(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{681:function(d,l,g){"use strict";g.r(l);var a=g(1),e=Object(a.a)({},(function(){var d=this,l=d.$createElement,g=d._self._c||l;return g("ContentSlotsDistributor",{attrs:{"slot-key":d.$parent.slotKey}},[g("h1",{attrs:{id:"beginblock"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#beginblock"}},[d._v("#")]),d._v(" BeginBlock")]),d._v(" "),g("h2",{attrs:{id:"liveness-tracking"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#liveness-tracking"}},[d._v("#")]),d._v(" Liveness Tracking")]),d._v(" "),g("p",[d._v("At the beginning of each block, we update the "),g("code",[d._v("ValidatorSigningInfo")]),d._v(" for each\nvalidator and check if they've crossed below the liveness threshold over a\nsliding window. This sliding window is defined by "),g("code",[d._v("SignedBlocksWindow")]),d._v(" and the\nindex in this window is determined by "),g("code",[d._v("IndexOffset")]),d._v(" found in the validator's\n"),g("code",[d._v("ValidatorSigningInfo")]),d._v(". For each block processed, the "),g("code",[d._v("IndexOffset")]),d._v(" is incremented\nregardless if the validator signed or not. Once the index is determined, the\n"),g("code",[d._v("MissedBlocksBitArray")]),d._v(" and "),g("code",[d._v("MissedBlocksCounter")]),d._v(" are updated accordingly.")]),d._v(" "),g("p",[d._v("Finally, in order to determine if a validator crosses below the liveness threshold,\nwe fetch the maximum number of blocks missed, "),g("code",[d._v("maxMissed")]),d._v(", which is\n"),g("code",[d._v("SignedBlocksWindow - (MinSignedPerWindow * SignedBlocksWindow)")]),d._v(" and the minimum\nheight at which we can determine liveness, "),g("code",[d._v("minHeight")]),d._v(". If the current block is\ngreater than "),g("code",[d._v("minHeight")]),d._v(" and the validator's "),g("code",[d._v("MissedBlocksCounter")]),d._v(" is greater than\n"),g("code",[d._v("maxMissed")]),d._v(", they will be slashed by "),g("code",[d._v("SlashFractionDowntime")]),d._v(", will be jailed\nfor "),g("code",[d._v("DowntimeJailDuration")]),d._v(", and have the following values reset:\n"),g("code",[d._v("MissedBlocksBitArray")]),d._v(", "),g("code",[d._v("MissedBlocksCounter")]),d._v(", and "),g("code",[d._v("IndexOffset")]),d._v(".")]),d._v(" "),g("p",[g("strong",[d._v("Note")]),d._v(": Liveness slashes do "),g("strong",[d._v("NOT")]),d._v(" lead to a tombstombing.")]),d._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aGVpZ2h0IDo9IGJsb2NrLkhlaWdodAoKZm9yIHZvdGUgaW4gYmxvY2suTGFzdENvbW1pdEluZm8uVm90ZXMgewogIHNpZ25JbmZvIDo9IEdldFZhbGlkYXRvclNpZ25pbmdJbmZvKHZvdGUuVmFsaWRhdG9yLkFkZHJlc3MpCgogIC8vIFRoaXMgaXMgYSByZWxhdGl2ZSBpbmRleCwgc28gd2UgY291bnRzIGJsb2NrcyB0aGUgdmFsaWRhdG9yIFNIT1VMRCBoYXZlCiAgLy8gc2lnbmVkLiBXZSB1c2UgdGhlIDAtdmFsdWUgZGVmYXVsdCBzaWduaW5nIGluZm8gaWYgbm90IHByZXNlbnQsIGV4Y2VwdCBmb3IKICAvLyBzdGFydCBoZWlnaHQuCiAgaW5kZXggOj0gc2lnbkluZm8uSW5kZXhPZmZzZXQgJSBTaWduZWRCbG9ja3NXaW5kb3coKQogIHNpZ25JbmZvLkluZGV4T2Zmc2V0KysKCiAgLy8gVXBkYXRlIE1pc3NlZEJsb2Nrc0JpdEFycmF5IGFuZCBNaXNzZWRCbG9ja3NDb3VudGVyLiBUaGUgTWlzc2VkQmxvY2tzQ291bnRlcgogIC8vIGp1c3QgdHJhY2tzIHRoZSBzdW0gb2YgTWlzc2VkQmxvY2tzQml0QXJyYXkuIFRoYXQgd2F5IHdlIGF2b2lkIG5lZWRpbmcgdG8KICAvLyByZWFkL3dyaXRlIHRoZSB3aG9sZSBhcnJheSBlYWNoIHRpbWUuCiAgbWlzc2VkUHJldmlvdXMgOj0gR2V0VmFsaWRhdG9yTWlzc2VkQmxvY2tCaXRBcnJheSh2b3RlLlZhbGlkYXRvci5BZGRyZXNzLCBpbmRleCkKICBtaXNzZWQgOj0gIXNpZ25lZAoKICBzd2l0Y2ggewogIGNhc2UgIW1pc3NlZFByZXZpb3VzICZhbXA7JmFtcDsgbWlzc2VkOgogICAgLy8gYXJyYXkgaW5kZXggaGFzIGNoYW5nZWQgZnJvbSBub3QgbWlzc2VkIHRvIG1pc3NlZCwgaW5jcmVtZW50IGNvdW50ZXIKICAgIFNldFZhbGlkYXRvck1pc3NlZEJsb2NrQml0QXJyYXkodm90ZS5WYWxpZGF0b3IuQWRkcmVzcywgaW5kZXgsIHRydWUpCiAgICBzaWduSW5mby5NaXNzZWRCbG9ja3NDb3VudGVyKysKCiAgY2FzZSBtaXNzZWRQcmV2aW91cyAmYW1wOyZhbXA7ICFtaXNzZWQ6CiAgICAvLyBhcnJheSBpbmRleCBoYXMgY2hhbmdlZCBmcm9tIG1pc3NlZCB0byBub3QgbWlzc2VkLCBkZWNyZW1lbnQgY291bnRlcgogICAgU2V0VmFsaWRhdG9yTWlzc2VkQmxvY2tCaXRBcnJheSh2b3RlLlZhbGlkYXRvci5BZGRyZXNzLCBpbmRleCwgZmFsc2UpCiAgICBzaWduSW5mby5NaXNzZWRCbG9ja3NDb3VudGVyLS0KCiAgZGVmYXVsdDoKICAgIC8vIGFycmF5IGluZGV4IGF0IHRoaXMgaW5kZXggaGFzIG5vdCBjaGFuZ2VkOyBubyBuZWVkIHRvIHVwZGF0ZSBjb3VudGVyCiAgfQoKICBpZiBtaXNzZWQgewogICAgLy8gZW1pdCBldmVudHMuLi4KICB9CgogIG1pbkhlaWdodCA6PSBzaWduSW5mby5TdGFydEhlaWdodCArIFNpZ25lZEJsb2Nrc1dpbmRvdygpCiAgbWF4TWlzc2VkIDo9IFNpZ25lZEJsb2Nrc1dpbmRvdygpIC0gTWluU2lnbmVkUGVyV2luZG93KCkKCiAgLy8gSWYgd2UgYXJlIHBhc3QgdGhlIG1pbmltdW0gaGVpZ2h0IGFuZCB0aGUgdmFsaWRhdG9yIGhhcyBtaXNzZWQgdG9vIG1hbnkKICAvLyBqYWlsIGFuZCBzbGFzaCB0aGVtLgogIGlmIGhlaWdodCAmZ3Q7IG1pbkhlaWdodCAmYW1wOyZhbXA7IHNpZ25JbmZvLk1pc3NlZEJsb2Nrc0NvdW50ZXIgJmd0OyBtYXhNaXNzZWQgewogICAgdmFsaWRhdG9yIDo9IFZhbGlkYXRvckJ5Q29uc0FkZHIodm90ZS5WYWxpZGF0b3IuQWRkcmVzcykKCiAgICAvLyBlbWl0IGV2ZW50cy4uLgoKICAgIC8vIFdlIG5lZWQgdG8gcmV0cmlldmUgdGhlIHN0YWtlIGRpc3RyaWJ1dGlvbiB3aGljaCBzaWduZWQgdGhlIGJsb2NrLCBzbyB3ZQogICAgLy8gc3VidHJhY3QgVmFsaWRhdG9yVXBkYXRlRGVsYXkgZnJvbSB0aGUgYmxvY2sgaGVpZ2h0LCBhbmQgc3VidHJhY3QgYW4KICAgIC8vIGFkZGl0aW9uYWwgMSBzaW5jZSB0aGlzIGlzIHRoZSBMYXN0Q29tbWl0LgogICAgLy8KICAgIC8vIE5vdGUsIHRoYXQgdGhpcyBDQU4gcmVzdWx0IGluIGEgbmVnYXRpdmUgJnF1b3Q7ZGlzdHJpYnV0aW9uSGVpZ2h0JnF1b3Q7IHVwIHRvCiAgICAvLyAtVmFsaWRhdG9yVXBkYXRlRGVsYXktMSwgaS5lLiBhdCB0aGUgZW5kIG9mIHRoZSBwcmUtZ2VuZXNpcyBibG9jayAobm9uZSkgPSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBnZW5lc2lzIGJsb2NrLgogICAgLy8gVGhhdCdzIGZpbmUgc2luY2UgdGhpcyBpcyBqdXN0IHVzZWQgdG8gZmlsdGVyIHVuYm9uZGluZyBkZWxlZ2F0aW9ucyAmYW1wOyByZWRlbGVnYXRpb25zLgogICAgZGlzdHJpYnV0aW9uSGVpZ2h0IDo9IGhlaWdodCAtIHNkay5WYWxpZGF0b3JVcGRhdGVEZWxheSAtIDEKCiAgICBTbGFzaCh2b3RlLlZhbGlkYXRvci5BZGRyZXNzLCBkaXN0cmlidXRpb25IZWlnaHQsIHZvdGUuVmFsaWRhdG9yLlBvd2VyLCBTbGFzaEZyYWN0aW9uRG93bnRpbWUoKSkKICAgIEphaWwodm90ZS5WYWxpZGF0b3IuQWRkcmVzcykKCiAgICBzaWduSW5mby5KYWlsZWRVbnRpbCA9IGJsb2NrLlRpbWUuQWRkKERvd250aW1lSmFpbER1cmF0aW9uKCkpCgogICAgLy8gV2UgbmVlZCB0byByZXNldCB0aGUgY291bnRlciAmYW1wOyBhcnJheSBzbyB0aGF0IHRoZSB2YWxpZGF0b3Igd29uJ3QgYmUKICAgIC8vIGltbWVkaWF0ZWx5IHNsYXNoZWQgZm9yIGRvd250aW1lIHVwb24gcmVib25kaW5nLgogICAgc2lnbkluZm8uTWlzc2VkQmxvY2tzQ291bnRlciA9IDAKICAgIHNpZ25JbmZvLkluZGV4T2Zmc2V0ID0gMAogICAgQ2xlYXJWYWxpZGF0b3JNaXNzZWRCbG9ja0JpdEFycmF5KHZvdGUuVmFsaWRhdG9yLkFkZHJlc3MpCiAgfQoKICBTZXRWYWxpZGF0b3JTaWduaW5nSW5mbyh2b3RlLlZhbGlkYXRvci5BZGRyZXNzLCBzaWduSW5mbykKfQo="}})],1)}),[],!1,null,null,null);l.default=e.exports}}]);