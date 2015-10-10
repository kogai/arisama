mkdir build
cp -r ./lib ./build/lib
cp main.js ./build/main.js
cp package.json ./build/package.json
cd ./build
NODE_ENV=production npm install
cd ../

$(npm bin)/electron-packager ./build SlackStatus --platform=darwin --arch=x64 --version=0.33.1 --out ./release/ --overwrite --prune
zip -9 -r ./release/SlackStatus-darwin-x64.zip ./release/SlackStatus-darwin-x64/
ghr -u kogai $(git describe) release/SlackStatus-darwin-x64.zip
rm -r ./build
