rm -rf build/
rm -rf textual-clock/

npm install
npm run build

cd modules/

git clone https://github.com/JeroendeJong/textual-clock
cd textual-clock
npm install
BASE="textual-clock/" npm run build
mv ./dist ../../build/textual-clock

cd ..
cd ..
rm -rf modules/textual-clock/

# cp -r ./build /tmp/website-build



git worktree add dist gh-pages --no-checkout

# save .git file from being deleted by the generator
cp -a ./build/. ./dist/ 

cd dist

git checkout origin/gh-pages -- CNAME 


git commit -m "PAGES: upload v1.8"
git push

cd .. 
git worktree remove dist
rm -rf /dist