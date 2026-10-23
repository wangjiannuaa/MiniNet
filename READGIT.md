//view the history file
git show HEAD:filename
//find the filename's blob
git rev-parse HEAD or
git ls-tree -r HEAD //-r recurse
git diff --no-index filea fileb//at least a file not tracked
//view the index content
git ls-files --stage
git diff bloba blobb
//restore from commit to workspace
git restore filename (--source master~2)
//restore from commit to both index and worktree
git checkout filename or git restore --source=HEAD --staged --worktree filename