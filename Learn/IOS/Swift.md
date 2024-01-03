### SPM代理
设置代理
export all_proxy=http://127.0.0.1:7890
通过终端拉取依赖
xcodebuild -resolvePackageDependencies -scmProvider system
如果报错
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer/
