NOTE: Blatantly copied from https://raw.githubusercontent.com/emberjs/ember.js/master/CONTRIBUTING.md and modified as needed.

# Questions

We, the Code for Hampton Roads contributors, use this as the central source code repository for iArtNorfolk.  Code for Hampton Roads uses this site to collect and track bugs and discussions of new features.  If you have difficulties using iArtNorfolk or have a question about usage, please create an issue on the Issues tab on the right.

# Issues

Think you've found a bug or have a new feature to suggest? Let us know!

## Reporting a Bug
1. Update to the most recent master release if possible.  We may have already fixed your bug.

2. Search for similar issues.  Possibly, somebody has encountered this bug already.

3. Provide JSFiddle or JSBin demo that specifically shows the problem.  This demo should operate fully with the exception of the bug you want to demonstrate.  The more pared down, the better.  If you cannot produce a fiddle for any reason at all, please make sure you provide very specific steps to reproduce the error.  If we cannot reproduce it, we will close the ticket.

4. One of us will verify your issue.  We will test the provided example for correctness.  The iArtNorfolk team will work with you until we can verify your issue.

5. Keep up to date with feedback from the iArtNorfolk team on your ticket.  We may close your ticket if it becomes stale.

6. If possible, submit a Pull Request with a failing test.  Better yet, take a stab at fixing the bug yourself, if you can!

The more information you provide, the easier we can validate the bug and the faster we can take action.

## Requesting a Feature

1. Search Issues for similar feature requests.  Possibly, somebody has already asked for this feature or provided a pull request that we still discuss.

2. Provide a clear and detailed explanation of the feature you want and why you find it important to add.  Keep in mind that we want features that the majority of Norfolk citizens will find useful and not just a small subset.

3. If the feature has a high degree of complexity, consider writing some initial documentation for it.  If we do end up accepting the feature, it will require documentation and this will also help us to understand it better ourselves.

4. Attempt a Pull Request.  If you can at all, start writing some code.  We may not always have time to correct issues, as we mainly volunteer in our off time on these projects.  If you can write some code, then that will speed the process along.

# Pull Requests

We love pull requests.  Here's a quick guide:

1. Fork the repo.

2. Run the tests.  We only take pull requests with passing tests, and knowing that you have a clean slate always works out better: `bower install && cd test && bower install && cd .. && grunt test`.  (As of this writing, tests only run in the browser, so run `cd test && bower install && cd ..` and open `test/index.html` from your local repo.)

3. Add a test for your change.  Only refactoring and documentation changes require no new tests.  If you've added functionality or fixed a bug, we need a test!

4. Make the test pass.

5. Commit your changes.  If your pull request fixes an issue, specify it in the commit message. Some examples:

  ```
  #8 Changed tile URL.
  #9 Wrote PhoneGap configuration.
  ```

6. Document all classes, properties and methods using [YUIDoc] (https://yui.github.io/yuidoc/syntax/index.html).  Check your documentation with `yuidoc .` and open the created `index.html`.  We will not consider pull requests without API documentation.

7. Lint your changes using `grunt jshint`.  If you paste your code into [jslint] (http://jslint.com/) as well, awesome, thanks! :smiley: We will not consider pull requests which do not follow the style rules for this project.  Also, please follow the syntax rules below.

6. Push to your fork and submit a pull request.  Please provide us with some explanation of why you made the changes you made.  For new features make sure to explain a standard use case to us.

We try to respond quickly to tickets but sometimes we get a bit backlogged.  If you need a quicker response, try to find someone on IRC (#codeforva on Freenode) to give the ticket a review.

Syntax:

* Four spaces, no tabs.
* No trailing whitespace.  Blank lines should not have any space.
* a = b and not a=b.
* Any level of nesting gets an indent, especially in markup.
* Follow the conventions you see used in the source already.
* No line, regardless of comment or code, should exceed 80 characters.
* Try to keep functions at 20 lines or less of code.
* Ensure a single newline exists at the end of each file, no more, no less.

And in case we didn't emphasize it enough: we love tests! (As of this writing, though, we still have yet to get a standard method of running them.  If they all pass when you open [`test/index.html`] (https://github.com/c4hrva/norfolkart/blob/master/test/index.html), then that will work for now.)
