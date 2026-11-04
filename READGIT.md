git format-patch -3  --stdout  | git imap-send 以及.gitconfig配置imap
//故事特点：三个纸杯的魔术和若干观众的模仿,以及对parity的醍醐，比如主要分支开发商，从远端分支（祖）pull古董，作为开发基础；
其他运营商也就是若干观众，从远端分支（祖）fetch新产品，与本地特色分支运营产品融合merge后上传push改进新产品。
//对于运营重点，应该是git fetch origin main git switch main git merge --ff-only origin/main
//view history
git log --oneline origin/master
//view the commited file
git show HEAD:filename,以及或git show 远程库/branch:src/server.ts
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
git fetch other-repo或者git fetch other-repo branch
git log other-repo/branch-name
git cherry-pick <commit-hash> --contitnue/--abort/--quit --edit --signoff --no-commit(为了合并) -m parent-number(指出目的节点)
（要按照时间顺序进行）

//所有commits无论位于何branch构成同一个网络，entries就是headers，
//headers有到remote headers的tracks 也就是git config -l
git branch -vv //当前分支是否跟踪vtov远程分支
git branch -r --list //当前远程（-r）分支
git fetch origin//解决远程origin/main不存在的问题

//查看index，同义词cached，staged(git add)
git ls-files --stage
//为当前或者指定工作树建立和操纵观众虚拟工作树林
git worktree add -b new-feature ../new-feature/issue-123 [当前或者指定主管branch]
//按照叠放规则进行切换旁观执事员工branch
pushd ../new-feature/issue-123
# ... hack hack hack ... 
$ git commit -a -m "hack"
popd
git worktree remove ../new-feature/issue-123
//hard reset 操作执行后没有垃圾收集之前可以用reflog找出hash并分支融合恢复
git reset --hard HEAD@{n}
git reflog //找出hash
git reset --hard hash
或者更常用的
git reset --hard ORIG_HEAD
//head knowledge（穿越社交火线）沉湎私服游戏
git show HEAD=@ --oneline
或者git status
every time you explicitly checkout 
a commit using its hash, or 
if you checkout a tag, or rebase
HEAD will go into a detached state.
"Recovering" from a detached HEAD state 
is simple: switch back to an existing 
branch or create a new one 
from where you're currently at.