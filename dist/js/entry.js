(()=>{function n(o){o.filter((function(n){return n.items&&n.items.length>0})).forEach((function(o){!function(n){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t="nova.navigation.".concat(n.key,".collapsed");localStorage.getItem(t)||localStorage.setItem(t,o)}(o),o.items.length>0&&n(o.items)}))}Nova.booting((function(){Nova.config("novaMenuCollapsed")&&n(Nova.config("mainMenu"))}))})();