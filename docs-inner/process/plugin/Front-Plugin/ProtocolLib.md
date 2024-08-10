---
sidebar_position: 5
---

# ProtocolLib

:::info

`SpigotMC` https://www.spigotmc.org/resources/protocollib.1997/

`GitHub` https://github.com/dmulloy2/ProtocolLib

`PaperMC` https://hangar.papermc.io/dmulloy2/ProtocolLib

`Bukkit（太老了不要用）` https://dev.bukkit.org/projects/protocollib

`ci构建站` https://ci.dmulloy2.net/job/ProtocolLib/

:::

如果你是一个腐竹，那么你不需要知道这个插件具体怎么用，因为你**不需要配置**这个插件任何东西，这是给插件开发者用的，如果你用的某个插件需要ProtocolLib，装上即可

1.8-1.19.4 用 [5.0.0](https://github.com/dmulloy2/ProtocolLib/releases/tag/5.0.0)

更高版本用最新版即可

在 `plugins\ProtocolLib\config.yml` 中

```
global:
  # Settings for the automatic version updater
  auto updater:
    notify: true
    download: false
```

将 `notify: true` 改为 `notify: false` 来关闭更新提示
