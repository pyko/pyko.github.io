---
layout: post
title:  "AndroidManifest.xml and publishing"
date:   2011-06-08
tags: android dev
---

A bit more than one week ago, I published my first app on the Android Market :) All in all it all went well, but as with all things it wasn’t without drama!

In this post, I’ll talk a bit about the parts of the AndroidManifest.xml file that I found relavant to publishing an app.

Here is my AndroidManifest.xml:

{% highlight xml linenos %}
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
         package="com.psychopyko.dx3.tpgmonitor"
         android:installLocation="auto"
         android:versionCode="6"
         android:versionName="0.8.5-beta">

   <uses-permission android:name="android.permission.INTERNET"/>
   <uses-sdk android:minSdkVersion="4"
             android:targetSdkVersion="6"/>

   <application android:label="TPG Monitor"
      android:icon="@drawable/ic_launcher_tpg"
      android:name="com.psychopyko.dx3.tpgmonitor.MyApplication">

      <!-- activity definitions here -->

   </application>
</manifest>
{% endhighlight %}

Let’s look at the **manifest** tag first, there are four elements of interest, starting with what I consider the ‘trickiest’.

### package="com.psychopyko.dx3.tpgmonitor" (line 3)
This element has two purposes. Firstly, all your code should live in this package, ie. your package names at the top of your .java files should be something like:

``package com.psychopyko.dx3.tpgmonitor;``

Secondly, and probably more importantly, when you publish on the Android Market, this name that determines how your application will be identified, and where it will be in the market (ie. what the URL will look like). Here is the URL to my TPG monitor on the Android Market:

``https://market.android.com/details?id=com.psychopyko.dx3.tpgmonitor``

The id is unique to every single app across in the Market. So, if I was to make another app, I may put something like: package="com.psychopyko.dx3.awesomegame" and you it will appear in the market as:

``https://market.android.com/details?id=com.psychopyko.dx3.awesomegame``

The important thing to note here is once you’ve uploaded an apk with package name you’re stuck with it. If you made a mistake, you can’t re-upload it to fix the package name. You will need to first unpublish the incorrect app (so people won’t be able to see it) and then create a "new" app with the correct package name (yep I stuffed up the first time, that’s how I know).

I haven’t tried, but I would guess that if later in the future you decide you do want to use package name, you’ll have to upload another apk over your initial "mistake" and publish it for the world to see.

### android:versionCode="6" (line 5)
This element is the way to determine if one version of your apk is newer or older than another. It has to be an integer, where the higher the number the newer the version. This number isn’t shown to users at all. Remember to bump this number every time you make an update!

### android:versionName="0.8.5-beta" (line 6)
This element is simply a pretty version name for your app, this is what your users will see. It appears in the "Current Version" info on the Market, when users download a new update and in "Application Info" on the phone. It’s really just a pretty name, but still a good idea to name it properly so users won’t get confused. (There isn’t a strict convention or rule for version names, but there are some guidelines regarding versioning)

### android:installLocation="auto" (line 4)
This element allows you to move your app to the SD card (Android 2.2+). There are three valid options:

1. internalOnly (default)
1. auto
1. preferExternal

As the names suggest, if you specify #2 or #3, your app will be able to be installed on the SD card. If you don’t specify this attribute, or specify "internalOnly" your app cannot be moved to the SD card. Unless there is a specific reason why your app must stay in the phone’s internal memory, I would suggest let users choose where they want their app to be stored (ie. specify "auto" or "preferExternal")

Ok, that’s pretty much about it for the **manifest** tag, now let’s have a look at the next three tags **uses-permission**, **uses-sdk** and **application**.

### \<uses-permission\> (line 8)
This here lets Android know what permissions your app needs in order to work. In my case, the TPG Monitor is a fairly simple app, so all I needed is the Internet, so that is all I have defined. In my opinion, it is best to have as few permissions as possible – that way your users won’t need to wonder why your app is asking for permissions x, y, z. There are of course, [many other permissions](http://developer.android.com/reference/android/Manifest.permission.html), and you might legitimately need them if your app does fancy cool stuff.

### \<uses-sdk\> (line 9-10)
This tag will allow you to define your "minSdkVersion", "maxSdkVersion" and "targetSdkVersion". The value you specify is an integer that corresponds to the API Level (eg. Froyo = Android 2.2 = 8). Firstly, I would suggest not to define "maxSdkVersion" – there is no reason why you would want to restrict your app from future releases of Android OS. The reason I defined "minSdkVersion=4" (Donut) is because of permissions. My app runs fine on Cupcake (Android 1.5, API Level 3), however, due to a [bug in Android 1.5](http://code.google.com/p/android/issues/detail?id=4101), even specifically only specifying the permission "INTERNET", Cupcake will [request for two additional permissions](http://stackoverflow.com/questions/1747178/android-permissions-phone-calls-read-phone-state-and-identity): "WRITE\_EXTERNAL\_STORAGE" and "READ\_PHONE\_STATE". So given the [small % of users](http://developer.android.com/resources/dashboard/platform-versions.html) on Cupcake and my dislike of my app asking for two additional permissions, I made the decision to not support Cupcake and have my app only ask for the one permission it needs.

### \<application\> android:label & android:icon (lines 13-14)
These two will simply define the name and icon that is displayed to the user. The name should really be in your strings.xml, so it can be internationalised (but I felt lazy) – it is what you want to call your app. For example, it is the label that appears under the icon on your phone. The icon should be a png (three separate png files actually) that lives in the "drawable-ldpi, drawable-mdpi, drawable-hdpi" directories under the "res" directory. The filename is the same as what is defined in the xml file (so my icons are all called: ic_launcher_tpg.png). If you’re wondering what’s the deal with ldpi/mdpi/hdpi it is to cater for the various screen types of Android phones – Android docs provides a fairly comprehensive [icon design guideline](http://developer.android.com/guide/practices/ui_guidelines/icon_design_launcher.html).

So there you have it, my not so short summary of things in AndroidManifest.xml related to publishing on the Market that I found important. There are of course a whole host of other elements and options that you can include in your manifest file, but so far I haven’t found the need to look into them – they seem to either have sensible defaults, or not be that important. If there is something I missed, please tell me :)

