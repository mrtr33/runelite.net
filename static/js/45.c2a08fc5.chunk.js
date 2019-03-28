(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{270:function(e,n){e.exports={title:"1.4.8 Release",description:"Fairy Ring search, XP tracker pausing and RoW !kc support",author:"Adam",__content:'<p>You can now filter through the Fairy Ring travel log while having the <code>configure</code> interface open. (Contributed by <a href="https://github.com/Abextm">@Abextm</a>)</p>\n<p><img src="/img/blog/1.4.8-Release/fairy-ring-filter.png" alt="fairy-ring-filter"/></p>\n<p>The XP tracker now can be paused either on logout or after a configurable time period. (Contributed by <a href="https://github.com/LeviSchuck">@LeviSchuck</a>)</p>\n<p><img src="/img/blog/1.4.8-Release/xp-tracker-pause.png" alt="xp-tracker-pause"/></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Reading the Ring of Wealth boss log now updates the !kc command kill counts</li>\n<li>Theatre of Blood rewards are now automatically screenshotted</li>\n<li>Hunter level-ups are now properly screenshotted</li>\n<li>Screenshots taken in Deadman mode now reside in separate directory</li>\n<li>The King percival clue now also contains informations about nearest fairy ring</li>\n<li>Added Mounted Mythical Cape to the skill calculator</li>\n<li>Fix slayer plugin sometimes highlighting nonexistent NPCs</li>\n<li>Fix bug with ground items not always showing ground items</li>\n<li>Cacti in farming plugin now work correctly</li>\n<li>Untradeable versions of Sanguinesti Staff and Scythe now calculate GE value correctly</li>\n<li>Fix alignment of xpdrops when sprites are configured to be hidden</li>\n<li>Fix hiscore autocomplete when typing too quickly</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<pre><code>Adam (28):\n      Revert &quot;command manager: post events to immediate eventbus&quot;\n      Revert &quot;plugin manager: register plugins with immediate event bus&quot;\n      Revert &quot;runelite-client: add immediate event bus&quot;\n      Add chatbox input listener and use for chatbox input event\n      slayer plugin: fix parsing points and streaks with commas\n      chat commands: add test\n      chat commands: loosen regex for boss names\n      runelite-scripts: add bank search script\n      Add matches found to bank tag search dialog message\n      chat commands: count barrows chests too\n      screenshot plugin: move level up and quest screenshots to after widget load\n      screenshot plugin: rename &quot;raids&quot; to &quot;chambers of xeric&quot;\n      screenshot plugin: fix hunter level up screenshots\n      config invocation handler: don&#39;t set config values if already set\n      hiscore plugin: fix race with inserting next character with autocomplete\n      slayer plugin: clear highlighted targets on login\n      ground items: scan entire scene for items not just ones within range\n      Add item spawn events\n      grounditems: rewrite to use item spawn events\n      region tile manager: send item spawns at plugin start\n      agility plugin: use item events\n      mta plugin: use item events\n      Remove item layer changed event\n      Remove MAZE_GUARDIAN_MOVING npc id\n      prayer plugin: update zamorak robe itemids\n      xp drop plugin: fix alignment of xpdrops when hiding skill icons\n      xp drop plugin: add positions for config\n      Add item despawn events when ground items is nulled\n\nAquivers (1):\n      Add fairy ring information to King Percival clue #4344\n\nJHPinto (1):\n      Slayer overlay use query idEquals, use consts (#4322)\n\nJordan (1):\n      timers plugin: Use item and sprite IDs for timers\n\nJordan Atwood (5):\n      screenshot plugin: Use separate directory for DMM\n      text: Fix removeTags for isolated &lt; and &gt; chars\n      timers plugin: Reduce visibilities\n      Remove freeze timer on Vorkath Zombified spawn death\n      clue scroll plugin: Remove useless null check\n\nLevi Schuck (2):\n      Add dimming UI to progress bar\n      Add feature to pause skill timers on logout or after idle period\n\nMagic fTail (5):\n      Update dialog widget ids from game update\n      chat commands: add raids pattern\n      ScreenshotPlugin: fix naming of event\n      chat commands: update boss kc from boss log\n      screenshot plugin: capture ToB rewards\n\nMax Weber (8):\n      farmingtracker: Fix cactus implementation\n      cache: Relax label name constraints\n      Rename Region to Scene\n      runelite-api: Update autogenerated ID files to 171-7\n      runelite-client: Allow ChatboxInputManager to callback early\n      Add API to create new widgets\n      runelite-client: Add fairy ring search to fairy ring plugin\n      devtools: Show index on dynamic widgets in the tree\n\nQatell (1):\n      Fixed objects of variable width and length from being positioned incorrectly on the map.\n\nTomas Slusny (5):\n      Remove investigate menu entry swap\n      Add Sanguinesti Staff to ItemMapping\n      Add mapping for Scythe to ItemMappings\n      Remove unused import from RSTileMixin\n      Fix camels type in varrock museum quiz\n\nTyler Hardy (1):\n      runelite-api: Add/Correct fairy ring panel widgets\n\nforsco (1):\n      Add mythical cape and teak kitchen table to skill calc (#4341)\n</code></pre>'}}}]);
//# sourceMappingURL=45.c2a08fc5.chunk.js.map