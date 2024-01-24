#
# Executes commands at the start of an interactive session.
#
# Authors:
#   Sorin Ionescu <sorin.ionescu@gmail.com>
#

# don't complete remotes for tab complete
__git_commit_tags() {}
__git_heads_remote() {}
zstyle :completion::complete:git-checkout:argument-rest:headrefs command "git for-each-ref --format='%(refname)' refs/heads 2>/dev/null"
zstyle :completion::complete:git-show:argument-rest:headrefs command "git for-each-ref --format='%(refname)' refs/heads 2>/dev/null"

# Source Prezto.
if [[ -s "${ZDOTDIR:-$HOME}/.zprezto/init.zsh" ]]; then
  source "${ZDOTDIR:-$HOME}/.zprezto/init.zsh"
fi

# Customize to your needs...

# non git aliases
alias goodnight="git checkout master && git pull && arc cascade && ./rops build all"
alias sai="EDITOR=nano ./tools/bonsai"
alias k="kubectl"
alias tf="terraform"

#----------------------------------------------------------
# COMPLETION SETTINGS
# add custom completion scripts
fpath=(~/.zsh/completion $fpath) 

# compsys initialization
autoload -U compinit
compinit

# show completion menu when number of options is at least 2
zstyle ':completion:*' menu select=2
#----------------------------------------------------------

export HISTSIZE=10000
export HISEFILESIZE=10000
export HISTFILE=/workspace/.zhistory

export PATH=/home/nkaviratna/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/home/nkaviratna/Programs/hadoop-2.8.1/bin:/home/nkaviratna/Programs/hadoop-2.8.1/bin:/home/nkaviratna/bin:$JAVA_HOME/bin

export PATH=/ide/bin:$PATH

export PYENV_ROOT="$HOME"/.pyenv
export PATH="$PYENV_ROOT"/bin:"$PATH"
if command -v pyenv 1>/dev/null 2>&1; then
  eval "$(pyenv init -)"
fi