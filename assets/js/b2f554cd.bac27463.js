"use strict";(self.webpackChunkkomga_website=self.webpackChunkkomga_website||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"ebook-support","metadata":{"permalink":"/blog/ebook-support","source":"@site/blog/2023-11-29-ebooks.md","title":"eBook support","description":"Version 1.8.0 is bringing a long awaited feature: proper eBook support!","date":"2023-11-29T00:00:00.000Z","formattedDate":"November 29, 2023","tags":[{"label":"upgrade","permalink":"/blog/tags/upgrade"},{"label":"komga","permalink":"/blog/tags/komga"}],"readingTime":1.37,"hasTruncateMarker":false,"authors":[{"name":"gotson","title":"Developer of Komga","url":"https://github.com/gotson","imageURL":"https://github.com/gotson.png","key":"gotson"}],"frontMatter":{"slug":"ebook-support","title":"eBook support","authors":"gotson","tags":["upgrade","komga"]},"nextItem":{"title":"Prepare for v1.0.0","permalink":"/blog/prepare-v1"}},"content":"Version [1.8.0](https://github.com/gotson/komga/releases/tag/1.8.0) is bringing a long awaited feature: **proper eBook support!**\\n\\nGithub issue [#221](https://github.com/gotson/komga/issues/221) has been opened for more than 3 years, and has finally been tackled.\\n\\n## What you need to know\\n\\n- eBooks behave like any other book in Komga, in regards to series or metadata. You can even mix comic books and ebooks in the same series.\\n- only EPUB format is supported. Other formats will not be supported in the future.\\n- existing EPUB files will be re-analyzed. If you had image-only EPUB, those may not be compatible anymore with third-party clients.\\n- the web EPUB reader is a very first version, and **does not support saving progress**. Read progress saving and restore will come in a future release.\\n- any book in Komga can be read with [WebPub](https://readium.org/webpub-manifest/) compatible clients.\\n- **There will be issues**. EPUB is a complex format, and many EPUB files are not properly built. Raise issues [on Github](https://github.com/gotson/komga/issues/new/choose) for support.\\n\\n## Other recent changes you may have missed\\n\\nIn case you haven\'t kept up with the release notes since version 1.0.0, here are the most significant changes:\\n- Komga is now available as a [desktop app](./docs/installation/desktop), and is available in the [Microsoft Store](./docs/installation/ms-store)\\n- Multiple settings are now configurable from the [Server Settings](./docs/guides/server-settings) screen. You may need to cleanup your configuration file and remove deprecated entries.\\n- Thumbnails size can now be configured in Server Settings.\\n- Background task management has been revamped, and now supports proper parallel executions (configurable in Server Settings).\\n- Komga now has support for [One-Shots](./docs/guides/oneshots).\\n- a [Command Line Interface](./docs/guides/cli) was added to update forgotten password for the admin account."},{"id":"prepare-v1","metadata":{"permalink":"/blog/prepare-v1","source":"@site/blog/2023-03-21-prepare-v1.md","title":"Prepare for v1.0.0","description":"The future v1.0.0 will bring some breaking changes, this guide will help you to prepare for the next major version.","date":"2023-03-21T00:00:00.000Z","formattedDate":"March 21, 2023","tags":[{"label":"breaking change","permalink":"/blog/tags/breaking-change"},{"label":"upgrade","permalink":"/blog/tags/upgrade"},{"label":"komga","permalink":"/blog/tags/komga"}],"readingTime":1.115,"hasTruncateMarker":false,"authors":[{"name":"gotson","title":"Developer of Komga","url":"https://github.com/gotson","imageURL":"https://github.com/gotson.png","key":"gotson"}],"frontMatter":{"slug":"prepare-v1","title":"Prepare for v1.0.0","authors":"gotson","tags":["breaking change","upgrade","komga"]},"prevItem":{"title":"eBook support","permalink":"/blog/ebook-support"}},"content":"The future v1.0.0 will bring some breaking changes, this guide will help you to prepare for the next major version.\\n\\n## Before upgrading\\n\\n- If you run Docker, it is advisable to use the `0.x` tag instead of `latest`. You will be able to decide when you want to upgrade, especially if you are updating containers automatically.\\n- Backup your `database.sqlite`. You can find it in the configuration directory, by default:\\n    - on Windows: `%USERPROFILE%/.komga/database.sqlite`\\n    - on Unix: `~/.komga/database.sqlite`\\n    - on Docker: in the directory you mounted as `/config`\\n\\n## Breaking changes\\n\\n- The minimum Java version required will be Java 17:\\n    - If you run Komga using the `jar`, you will need to make sure your Java version is sufficient by running `java -version`.\\n    - If you run Komga using Docker, you don\'t need to do anything.\\n- The hashing algorithm for files and pages will change. Previous hashes for files and pages will be deleted. On startup, if hashing is enabled, Komga will re-hash files and pages using the new algorithm.\\n- The default port will be changed from `8080` to `25600`:\\n    - If you use Docker, you will need to update your container or compose configuration to expose the new port.\\n    - You may need to adjust your reverse proxy settings.\\n    - You can still change the port [through configuration](/docs/installation/configuration#server_port--serverport-port)."}]}')}}]);