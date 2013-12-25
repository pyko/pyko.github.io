---
layout: post
title:  "Make libgdx ImageTextButton do what you want"
date:   2013-12-25
tags: android dev libgdx
---

Few months ago, I started working on the menus for Mr. Tiddles and very quickly found the amazing `ImageTextButton` that comes with libgdx. It is basically exactly what I needed: a button composed of an image and a label.

The default configuration is image on the left and text on the right which worked perfectly for the main menu. However, due to space/position, for the end game screen, I needed a button with the image on top and text below.

After quite some struggle, lots of hacking, and even a [pull-request](https://github.com/libgdx/libgdx/pull/1110) to the [libgdx repository](https://github.com/libgdx/libgdx), [Nathan Sweet](https://github.com/NathanSweet) showed me how it can easily be done.

Since I don't recall finding the solution documented, here it is below. Hopefully it will save you several hours when you are in need of a vertial image text button, or an image text button with some funky layout configuration.

{% highlight java %}
// Creates a button with image on top and label below
ImageTextButton shareButton = new ImageTextButton("share", shareButtonStyle);
shareButton.clearChildren();
shareButton.add(shareButton.getImage()).row();
shareButton.add(shareButton.getLabel());
{% endhighlight %}

As you can probably guess, the 'magic' is in `clearChildren()` as you are now able to re-add the elements of the button in whatever configuration you need. When you want to create a new row for the next elements, simply use `row()` and they will appear under the previous items.

Merry Christmas and happy button making :)