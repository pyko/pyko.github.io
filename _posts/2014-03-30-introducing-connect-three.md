---
layout: post
title:  "Introducing: Connect Three"
date:   2014-03-30
tags: game javascript
---

Unless you've been living under a rock, chances are you've heard of [2048](gabrielecirulli.github.io/2048/), a simple game where you slide to merge tiles of the same number and aim to get the elusive 2048 tile.

Despite it's simplicity, 2048 a very addictive game, and on Friday night I suddenly had an idea for a twist:

* Same sliding mechanics
* Coloured tiles instead of numbers
* Remove tiles by having 3+ in a row

With this idea in mind, my weekend plans went out the window and most of it was spent prototyping the idea which would eventually be called [connect three](http://dx3.psychopyko.com/connect-three/).

![connect three]({{ site.url }}/images/2014/connect-three.png)

The easy path would've been to fork 2048 and make tweaks here and there, but that wouldn't be half as fun. So instead, decided to start from scratch!

Overall it wasn't as hard as I thought it would be - the CSS probably took nearly as much time as the logic/controls etc in JavaScript!

The game still needs quite a bit of polish. The first few things that came to mind (I'm sure there's more!)

* Some animations are really sudden
* Not completely satisfied with the colours
* Symbols of sorts so there is more than one way to tell the difference between tiles
* Score is currently linear - should give more reward for bigger combinations
* Clean up the code - most of it was written with 'just get something working'
* Styles off in Firefox (not tested in IE)
* Better name? Naming is hard!

Overall, quite happy with the result :)

Head over to [http://dx3.psychopyko.com/connect-three/](http://dx3.psychopyko.com/connect-three/) to give it a go!

---
***Edit:*** *Not long after this blog, I was pointed to [this blog post](http://asherv.com/threes/threemails/) by [Asher](http://ashervollmer.tumblr.com/home), one of the creators of [Threes](http://threesgame.com/).*

*The blog post is essentially about all the thought and hardwork they took to come up with the final product and the various clones/rip-offs of Threes (which includes 2048).*

*Making Connect Three was probably more a learning process than anything (like most of my games actually), though I purposefully avoided numbers and merging to try and be different.*

*Lastly, I have said it is a 2048 inspired game simply because I haven't actually played Threes. Purchased and installed on my phone, but the game fails to load... time for a new phone!*