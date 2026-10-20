//view the history file
git show HEAD:filename
//find the filename's blob
git ls-tree -r HEAD //-r recurse
git diff --no-index filea fileb//at least a file not tracked
//view the index content
git ls-files --stage
git diff bloba blobb
