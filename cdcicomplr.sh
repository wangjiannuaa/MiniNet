#!/bin/bash
# container scripts work on heavy bricks
# GUANGYI meaning of container are dev environment such as test eval
# though XIAYI meaning of it are ops environment such as exec jobs
nodeversion=`node --version`
exitcode=$?
echo "$exitcode"
npmversion=`npm --v`

mainnodeversion=`expr "$nodeversion" : "[vV]*\([0-9]*\)"`
#mainnodeversion=${nodeversion#[vV]}
echo "$mainnodeversion"

#mainnpmversion=`expr "$npmversion" : "[vV]*\([0-9]*\)"`
#mainnpmversion=${npmversion#[vV]}

if [ $mainnodeversion -eq 24 ] ||  [ $exitcode -ne 0 ] 
then
   WORKTREE=$PWD
   echo "worktree:$WORKTREE"

   sudo apt install curl
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
   [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
   
   \. "$HOME/.nvm/nvm.sh"
   nvm install 24
   npm install --save @angular/cli
fi









echo "1.1.1 pass"
