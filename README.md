# coffee-with-dougie

## Summary

A website that simulates a conversation with Dougie Jones from *Twin Peaks: The Return*.

## Background

In *Twin Peaks: The Return*, a viewer expecting to see Kyle MacLachlan return as Agent Dale Cooper instead finds him in the form of Dougie Jones, an employee in a Las Vegas insurance company. What has gone wrong? Are we encountering the old Dale Cooper caught in a body not his own, caught in a land between full consciousness and dreamworld? Dougie Jones's behaviour has become erratic recently. His speech too shows signs of change. In answer to questions and other utterances, Dougie is now likely to repeat part of what they say back to them. And yet...there seems a strange wisdom in those repetitions.  

## Details

This website uses the distinctive speech-patterns of Dougie Jones in *Twin Peaks: The Return* as the basis for a small exercise in JS and DOM manipulation. It presents the visitor with a scenario, a space to write something and a button to click which submits that text.

On clicking "Speak to Dougie", two things happen: 

1. a random image from a small library of stills showing Dougie Jones is loaded, replacing the one at the top of the page.
2. An answer appears from Dougie Jones, which takes up to 3 words from the end of what you have said to him and presents them below as his answer

## Notes

* This works better with longer sentences
* It was designed with a browser in mind but, even there, the image and text may not fit on the screen at once. Some more work styling could make it more intuitive.
* It could be nice to have a record of your conversation grow as you say more things to Dougie. 

