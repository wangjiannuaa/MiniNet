//view history
git log --oneline origin/master
//view the commited file
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


//look out!
git remote add other-repo url
git fetch other-repo
git log other-repo/branch-name
git cherry-pick <commit-hash> --contitnue/--abort/--quit --edit --signoff --no-commit(为了合并) -m parent-number(指出目的节点)
（要按照时间顺序进行）

//所有commits无论位于何branch构成同一个网络，entries就是headers，
//headers有到remote headers的tracks 也就是.git/branches
git branch -vv //当前分支是否跟踪vtov远程分支
git branch -r --list //当前远程（-r）分支
git fetch origin//解决远程origin/main不存在的问题

//查看index，同义词cached，staged(git add)
git ls-files --stage
//