# README

- [Tags](http://git-scm.com/book/en/Git-Basics-Tagging) should be signed using GNU Privacy Guard (GPG)

## Issues

To add Watson-style issues: `[<tag>] - <comment>` in a comment, preferrably right above the context.
Current tags supported (can be expanded in .watsonrc): todo, fix, review.

## Commands

* `grunt issues` -- Runs `watson -s dirty`, meaning that it shows files with issues
* `grunt issues:remote` -- Runs `ghi list`, which 
* `grunt issues:show<:issue>` -- If no issue is given, it tries to find an issue number based on the branchname. If an integer issue is given it uses that and runs `ghi show issue`
* `grunt issues:watson<:target>` -- Runs `watson`, with an optional target of `-s target`
* `grunt update` -- Saves the result to `watson.json`. If the branch is master it also runs `watson -u`, pushing the issues to github. The reason it doesn't always is because the contributor should be able to use Watson as a todo without it being exposed to the others.
