all: update

update:
	git pull
	sudo systemctl restart node

merge:
	git fetch
	git merge origin/dev
	git push
	sudo systemctl restart node
