
sudo apt-get update 
sudo apt-get upgrade -y
sudo apt-get install zsh -y
sudo apt-get install tmux -y

current_dir="$(cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)"
mv current_dir ~/.dotfiles

cd ~/.dotfiles && git reset HEAD . && git checkout -- . && git submodule update --recursive && git pull --recurse-submodules && git submodule update --recursive --remote && git submodule update --init --recursive  

ln ~/.dotfiles/zprezto ~/.zprezto -s -b && ls ~/.zprezto -lsa
ln ~/.dotfiles/zshrc ~/.zprezto/runcoms/zshrc -s -b && ls ~/.zprezto/runcoms/zshrc -lsa
ln ~/.dotfiles/zshrc ~/.zshrc -s -b && ls ~/.zshrc -lsa
ln ~/.dotfiles/zsh ~/.zsh -s -b && ls ~/.zsh -lsa
ln ~/.dotfiles/bashrc ~/.bashrc -s -b && ls ~/.bashrc -lsa
ln ~/.dotfiles/gitconfig ~/.gitconfig -s -b && ls ~/.gitconfig -lsa
ln ~/.dotfiles/zpreztorc ~/.zpreztorc -s -b && ls ~/.zpreztorc -lsa
ln ~/.dotfiles/tmux.conf ~/.tmux.conf -s -b && ls ~/.tmux.conf -lsa
