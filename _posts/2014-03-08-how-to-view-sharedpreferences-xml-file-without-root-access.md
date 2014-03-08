---
layout: post
title:  "How to view SharedPreferences xml file without root access"
date:   2014-03-08
tags: android dev tips
---

Towards the last few months of development of Mr. Tiddles, I borrowed a few phones from friends to test and make sure Mr. Tiddles would run as expected on different phones.

One problem which was not anticipated, but surfaced very quickly was that without root access, you do not have access to the `/data` directory on the phone - thus no access to view the xml file where shared preferences are stored.

The good news is, there is a way around this without needing to root the phone, and it is really simple :) All you need to do is run an extra command:

```
adb shell
run-as <package-name>
```

After the `run-as` command, you will then be able to access the contents under the directory: `/data/data/<package-name>`.

One thing to note is that your apk will need to be a debug build (ie. signed by the debug key or have debug flag enabled). This really isn't too much of an issue, especially when you're debugging. In fact, I find it's nice to know that the data of properly signed/built apks are not *that* easily visible.

So there you have it, a simple, non-invasive command to help you with debugging your Android app on any phone :) 