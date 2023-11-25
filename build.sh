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