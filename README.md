# Update Change Log

A GitHub Action designed to maintain change log entries in [ReadMe](https://readme.com).


## Example

```yml
name: Create Release

on:
  push:
    tags:
      - '*'

jobs:
  create-release:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Create changelog text
        id: changelog
        uses: loopwerk/tag-changelog@v1
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          exclude_types: other,doc,chore

      - name: Create changelog entry
        uses: henrytseng/readme-change.log
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          apikey: ${{ secrets.README_APIKEY }}
          title: Release ${{ github.ref }}
          body: ${{ steps.changelog.outputs.changes }}
          hidden: true
```


## Thanks

Many thanks to the people who made this possible.  Including but not limited to:

* [loopwerk/tag-changelog](https://github.com/loopwerk/tag-changelog)
* [nektos/act](https://github.com/nektos/act)
