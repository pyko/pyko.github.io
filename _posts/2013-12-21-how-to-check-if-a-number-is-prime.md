---
layout: post
title:  "How to check if a number is prime?"
date:   2013-12-21
tags: dev
---

For my first game, Mr Tiddles, I decided to add achievements via [Google Game Services](https://developers.google.com/games/services/). One of these achievements is "Finish game with a prime score".

[Prime numbers](http://en.wikipedia.org/wiki/Prime_number) are natural numbers greater than 1 that are only divisible by 1 and itself. The easiest most straight-forward way to check if ``n`` is prime:

{% highlight java %}
private boolean isPrime(int n) {
    if (n == 0 || n == 1) return false;
    double limit = Math.sqrt(n);
    for (int i=2; i <= limit; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
{% endhighlight %}

This will definitely work, but if ``n`` is a large prime, it would have to iterate through a lot of numbers before coming to a conclusion. Good news is, there is a better and more efficeint way!

A quick Google search reveals a Wikipedia page on [Primality tests](http://en.wikipedia.org/wiki/Primality_test). There are many methods/approches listed there, I gravitated towards one particular description under **Naive methods**.

> All primes (except 2 and 3) can be expressed as **6k&plusmn;1** for some integer **k**

This blew my mind away. I had never thought of prime numbers this way. Despite the explanation making sense, I still had to double check with a handful of prime numbers - of course the statement held true :)

Although this approach is not the most efficient, I chose it because I could actually understand it and felt it would be easy enough to implement. So, a more efficient way of determining a prime is as follows:

{% highlight java %}
private boolean isPrime(int n) {
    if (n == 0 || n == 1) return false;
    if (n % 2 == 0 || n % 3 == 0) return false;
    double limit = Math.sqrt(n);
    for (int k = 1; 6*k-1 <= limit; k++) {
        if (n % (6*k-1) == 0 || n % (6*k+1) == 0) return false;
    }
    return true;
}
{% endhighlight %}


