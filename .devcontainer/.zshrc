

#Prompt

function git_branch_name()
{
  branch=$(git symbolic-ref HEAD 2> /dev/null | awk 'BEGIN{FS="/"} {print 
$NF}')
  if [[ $branch == "" ]];
  then
    :
  else
    echo '('$branch') '
  fi
}

# Enable substitution in the prompt.
setopt prompt_subst


PROMPT='%B%(?.%F{green}%n .%F{red}%n )%f%b %B%F{27}%1~%f%b ' #%B%F{226}$(git_branch_name)%f%b%# '
RPROMPT="%T"

#Allow history
SAVEHIST=1000  # Save most-recent 1000 lines
HISTFILE=~/.zsh_history