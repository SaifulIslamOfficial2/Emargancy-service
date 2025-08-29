## ASSIGNMENT-005


### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
===================== answer =========================
**getElementById("idName")
 শুধু ID দিয়ে element খুঁজে আনে এবং একটা ইউনিক element কে নেয় ।

 **getElementsByClassName("className")
 একাধিক element-এর class name দিয়ে খুঁজে আনে, কারণ অনেক element-এ একই class থাকতে পারে।

 **querySelector("css-selector")
 যেকোনোভাবে ব্যবহার করা যায় → id, class, tag, attribute সব।

**querySelectorAll("css-selector")
 CSS selector দিয়ে সব element খুঁজে আনে,এটা NodeList (array-এর মতো) দেয়, তাই forEach ব্যবহার করা যায়।

2. How do you **create and insert a new element into the DOM**?
** let newDiv = document.createElement("div");

3. What is **Event Bubbling** and how does it work?
** Event Bubbling হলো এমন একটি প্রক্রিয়া যেখানে কোনো child element-এ event করলে অথবা  click করলে তার parent div থেকে  শুরু করে document পর্যন্ত চলে যায় । যেমন অমরা শেম্পুর পানি দিয়ে ফোটকা ফুটালে যমেন নীচ থেকে উপরে যায় । 

4. What is **Event Delegation** in JavaScript? Why is it useful?
** যেমন! তুমি প্রধান শিক্ষক তুমি যদি প্রতিটি ছাত্রকে আলাদা আলাদা করে ডাকতে চাও, তাহলে তোমাকে অনেকবার ডাকতে হবে।
কিন্তু যদি তুমি শিক্ষককে একবার বলো, "যে কেউ হাত তুললে তুমি আমার কাছে খবর দিও" তাহলে শুধু শিক্ষককে দেখলেই হলো।
5. What is the difference between **preventDefault() and stopPropagation()** methods?

