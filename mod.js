D2RMM.copyFile(
  'global', // <mod folder>\global
  'global', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\global
  true // overwrite any conflicts
);
D2RMM.copyFile(
  'hd', // <mod folder>\hd
  'hd', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\hd
  true // overwrite any conflicts
);
// 'local' (ui.json) is intentionally not copied: it is a full copy of an older
// game version's strings and wipes out newer ones (e.g. SharedStashPage).
