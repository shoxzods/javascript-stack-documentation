<!-- git commands: -->

git init - инициализация репрозиторий

git add . / -A ( all ) - для добавления файлов в активную директорию 

git commit -m "first commit" - добавить комменты посдле git add  -A

git clone - для установки проекта

git branch -M branchname - для изменения branchname , используется в начале создания проекта.

git remote add origin "remote url" - для добавления remote в reprository 

git push -u origin branchname - для началного пуша для github


git push - посел того как мы делали git push origin branchname.
git push --force - если не сработает push то мы можэм force.
git pull - если хочу обновить коды с другого компютера к примеру два компьютера в одном git один пушил а если второй хочет обновить то ему надо git pull

git status - увидеть статус git
git log --oneline - увидеть commits

git commit --amend -m 'new commit' - переименовать последний коммит.
git checkout <commit code> - времмено отправляет в тот клммит который мы указали ключ берем из git log --oneline.
get checkout main - вернет к предыдешей коммит.
git checkout <commit code> -- filename - возврашает file из заддного кода коммита из log --oneline.
git checkout branchname -- filename - можно взять файл из другого branch.
git merge branchname - берет весь файл из 

git checkout branchname - создает новый branch.
git switch branchname - переключает с одного branch на другое.

git stash — временно прячет изменения, чтобы можно было переключиться на другую ветку.
git stash pop    # вернуть изменения
git stash list   # список всех stash
git rm --cached filename - вывести файл из коммита. / git rm -r --cached . - чтобы вывести все файлы из комита.
git restore --staged filename - вывксти файл из после add. / git restore --staged . - вывести все файлы.

git remote -v - чтобы увидеть url remote
git remote remove origin - для удаления remote


<!-- commandline commands: -->
ls - увидеть список папки.
mkdir - для создания папки.
touch - для создания файла.
clear - для очистки консоли
rm file.txt - для удаления файла.
rm -rf folder/ - для удаления folder.
cd ./pathname - для перехода к конкретным файлам
code . - откроет vscode


<!-- git files -->
.gitignore - игнорирует файлы которые не нужны к продакшену
README.md - вся инфо про наши файл