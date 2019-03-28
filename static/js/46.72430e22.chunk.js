(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{271:function(e,n){e.exports={title:"1.4.9 Release",description:"Movable minimap and xptracker, achievement diary skill requirements, and bug fixes",author:"Adam",__content:'<p>The minimap and xp tracker can now be moved by holding alt:</p>\n<p><img src="/img/blog/1.4.9-Release/movable-widgets.gif" alt="movable-widgets"/></p>\n<p>An achievement diary plugin was added which shows skill requirements on each\ntask in the diaries:</p>\n<p><img src="/img/blog/1.4.9-Release/diary.png" alt="diary"/></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix minimap overlays drawing on the minimap when it was hidden</li>\n<li>Fix minimap plugin to be able to hide the minimap on &#39;bottom line&#39; side stones\narrangement</li>\n<li>Fix !kc not working in private messages</li>\n<li>Rewrite ge plugin alt+click search to work more reliably on more interfaces,\nsuch as the inventory when in the grand exchange.</li>\n<li>Add abyssal sire stun timer</li>\n<li>Fix opponent info plugin hiscore lookup on seasonal deadman worlds</li>\n<li>Fix menaphite emote clue requirements</li>\n<li>Fix XP tracker to no longer track skills while they are not being trained</li>\n<li>Fix XP tracker to track past virtual level 126, up to 200m</li>\n<li>Add &quot;show exact value&quot; option to bank value plugin</li>\n<li>Move banana plantation clue out of tree</li>\n<li>Fix height of ground items</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<pre><code>Adam (8):\n      runelite-api: add fixed minimap widgets\n      mixins: only update render parent of nested widget if widget would have been rendererd\n      mixins: optimize widget isHidden and getParent\n      perspective: account for minimap being hidden or moved in worldToMiniMap\n      Add private message input event and add !kc to chatcommands for private messages\n      Merge runelite-scripts into runelite-client\n      Add achievement diary plugin\n      cache: fix assembler to set correct switch table index\n\nBert De Geyter (1):\n      Render abyss rift portals as soon as visible (#3841)\n\nJeremy Plsek (1):\n      ge plugin: rewrite alt-click searching\n\nJohn Pettenger (1):\n      timers plugin: add abyssal sire stun timer\n\nJordan Atwood (2):\n      opponent info plugin: Fix SDMM hiscore lookup\n      clues: Fix menaphite emote requirements\n\nJoshua Filby (1):\n      fix: use the supplied actor to check against in isInteractingWith\n\nKamiel (1):\n      perspective: fix regression caused by 2599db2\n\nLevi (2):\n      Check for skill being trained while ticking change (#4469)\n      Fix level 126 next goal to be max XP (200,000,000) instead of -1 xp\n\nMagic fTail (1):\n      bank value plugin: add option to display exact value\n\nMax Weber (5):\n      runelite-client: Consume hotkeys in HotkeyListener\n      runelite-client: Handle releasing modifiers first correctly\n      cluescrolls: Move banana plantation clue out of tree\n      cluescrolls: Add description to map clues\n      mixins: Don&#39;t post mouse events that have already been posted\n\nTimo van Veenendaal (2):\n      Inventory viewer: make padding between items same as in inventory.\n      Inventory viewer: Fix vertical spacing of items to match inventory.\n\nTomas Slusny (20):\n      Add support for mod public chat to ChatCommands\n      Add JMod clan member rank\n      Add new WidgetIDs for minimap\n      Use correct widget when hiding minimap\n      Move private methods to bottom of minimap plugin\n      Hide only inside of minimap but not logout\n      Follow GitHub templates for bug report and issue (#4205)\n      Move rs-client related classes to own package\n      Allow RS loading classes to be used with Guice\n      Inject and load RS client and applet through Guice\n      Send launch properties around as bound constants\n      Remove recursive dependency on RuneLite\n      Properly load configuration when showing ClientUI\n      Move Discord and EventBus after ClientUI\n      Add support for resetting the detached overlays\n      Use Overlay#getBounds for getting correct bounds\n      Add experience tracker widget WidgetInfo\n      Add support for RS movable widgets\n      Update frame config when needed\n      Propagate height to ground items\n\naquivers (1):\n      Add more chat !kc abbreviations (#4372)\n</code></pre>'}}}]);
//# sourceMappingURL=46.72430e22.chunk.js.map