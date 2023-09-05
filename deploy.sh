git add .
git commit -m $1
git push origin master
# gh pr create --head master --base prod

npm run build
firebase deploy